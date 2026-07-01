import { getPage } from './query/page'
import { getSiteSettings } from './query/settings'
import { getStudies } from './query/studies'
import { getWork } from './query/work'
import { getWriting, getWritings } from './query/writings'
import { urlFor } from './sanity'
import { fetchSubstackWritings } from './substack'
import {
  ASCII_PERSON_NAME,
  CONTACT_EMAIL,
  DEFAULT_SAME_AS,
  MACHINE_RESOURCE_CATALOG,
  PAGE_CATALOG,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  buildSiteStructuredData,
  getSiteUrl,
  uniqueLinks
} from './site-metadata'

const CACHE_CONTROL = 'public, s-maxage=3600, stale-while-revalidate=86400'

const resolveOr = async (promise, fallback) => {
  try {
    const value = await promise
    return value ?? fallback
  } catch (error) {
    return fallback
  }
}

export function sendTextResponse(res, body, contentType = 'text/markdown; charset=utf-8') {
  res.setHeader('Content-Type', contentType)
  res.setHeader('Cache-Control', CACHE_CONTROL)
  res.write(body)
  res.end()
}

export function sendJsonResponse(res, body) {
  sendTextResponse(res, JSON.stringify(body, null, 2), 'application/json; charset=utf-8')
}

export function sendJsonLdResponse(res, body) {
  sendTextResponse(res, JSON.stringify(body, null, 2), 'application/ld+json; charset=utf-8')
}

export function sendXmlResponse(res, body) {
  sendTextResponse(res, body, 'application/xml; charset=utf-8')
}

export function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

const markdownEscape = (value) => normalizeText(value)
  .replace(/\\/g, '\\\\')
  .replace(/\[/g, '\\[')
  .replace(/\]/g, '\\]')

const markdownLink = (label, url, note) => {
  const safeLabel = markdownEscape(label)
  const safeUrl = String(url || '').trim()
  const safeNote = normalizeText(note)

  if (!safeUrl) {
    return safeNote ? `- ${safeLabel}: ${safeNote}` : `- ${safeLabel}`
  }

  return safeNote
    ? `- [${safeLabel}](${safeUrl}): ${safeNote}`
    : `- [${safeLabel}](${safeUrl})`
}

const toDateValue = (value) => {
  if (!value) {
    return ''
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toISOString().slice(0, 10)
}

const sortByDateDesc = (items, field) => [...(items || [])].sort((a, b) => {
  const aTime = new Date(a?.[field] || 0).getTime()
  const bTime = new Date(b?.[field] || 0).getTime()
  return bTime - aTime
})

const getSocialLinks = (settings) => uniqueLinks([
  ...DEFAULT_SAME_AS,
  ...(settings?.social_links || []).map((link) => link?.link)
])

export function getImageUrl(image, options = {}) {
  if (!image) {
    return ''
  }

  if (typeof image === 'string' && /^https?:\/\//i.test(image)) {
    return image
  }

  try {
    if (typeof image === 'string') {
      return urlFor({ _ref: image, _type: 'reference' })
        .width(options.width || 1200)
        .quality(options.quality || 90)
        .url()
    }

    if (typeof image?.source === 'string') {
      if (/^https?:\/\//i.test(image.source)) {
        return image.source
      }

      return urlFor({ _ref: image.source, _type: 'reference' })
        .width(options.width || 1200)
        .quality(options.quality || 90)
        .url()
    }

    return urlFor(image)
      .width(options.width || 1200)
      .quality(options.quality || 90)
      .url()
  } catch (error) {
    return ''
  }
}

const renderPortableSpan = (span, markDefs) => {
  let text = span?.text || ''

  for (const mark of span?.marks || []) {
    const linkDef = markDefs.find((definition) => definition?._key === mark && definition?.href)

    if (mark === 'code') {
      text = `\`${text}\``
    } else if (mark === 'strong') {
      text = `**${text}**`
    } else if (mark === 'em') {
      text = `*${text}*`
    } else if (linkDef) {
      text = `[${text}](${linkDef.href})`
    }
  }

  return text
}

export function portableTextToMarkdown(blocks) {
  if (!Array.isArray(blocks)) {
    return ''
  }

  const lines = blocks.map((block) => {
    if (!block) {
      return ''
    }

    if (block._type === 'code') {
      const language = normalizeText(block.language)
      return `\`\`\`${language}\n${block.code || ''}\n\`\`\``
    }

    if (block._type === 'a11yImage') {
      const alt = markdownEscape(block.alternative || 'Image')
      const caption = normalizeText(block.caption)
      const imageUrl = getImageUrl(block.image?.asset?._ref || block.image)
      return caption
        ? `![${alt}](${imageUrl})\n\n${caption}`
        : `![${alt}](${imageUrl})`
    }

    if (block._type === 'tweet' && block.id) {
      return `[Embedded tweet](https://twitter.com/i/web/status/${block.id})`
    }

    if (block._type !== 'block') {
      return ''
    }

    const markDefs = block.markDefs || []
    const text = (block.children || [])
      .map((child) => renderPortableSpan(child, markDefs))
      .join('')
      .trim()

    if (!text) {
      return ''
    }

    if (block.listItem) {
      const depth = Math.max((block.level || 1) - 1, 0)
      const prefix = block.listItem === 'number' ? '1.' : '-'
      return `${'  '.repeat(depth)}${prefix} ${text}`
    }

    switch (block.style) {
      case 'h1':
        return `# ${text}`
      case 'h2':
        return `## ${text}`
      case 'h3':
        return `### ${text}`
      case 'h4':
        return `#### ${text}`
      case 'blockquote':
        return `> ${text}`
      default:
        return text
    }
  }).filter(Boolean)

  return lines.join('\n\n')
}

export function portableTextToPlainText(blocks) {
  return portableTextToMarkdown(blocks)
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const createDocument = ({ title, summary, canonicalUrl, markdownUrl, sections = [] }) => {
  const header = [
    `# ${title}`,
    '',
    `> ${summary}`,
    '',
    `Canonical URL: ${canonicalUrl}`
  ]

  if (markdownUrl) {
    header.push(`Markdown URL: ${markdownUrl}`)
  }

  const sectionText = sections
    .filter((section) => normalizeText(section.body))
    .map((section) => `## ${section.heading}\n\n${section.body.trim()}`)
    .join('\n\n')

  return `${header.join('\n')}\n\n${sectionText}\n`
}

const pageLinksMarkdown = () => PAGE_CATALOG
  .map((page) => markdownLink(page.title, getSiteUrl(page.path), page.description))
  .join('\n')

const machineResourcesMarkdown = () => MACHINE_RESOURCE_CATALOG
  .map((resource) => markdownLink(resource.title, getSiteUrl(resource.path), resource.description))
  .join('\n')

const workMarkdown = (items = []) => items.map((item) => {
  const released = toDateValue(item.releasedAt)
  const note = [item.description, released ? `Released ${released}` : ''].filter(Boolean).join(' ')
  return markdownLink(item.title, item.link, note)
}).join('\n')

const studiesMarkdown = (items = []) => items.map((item) => {
  const published = toDateValue(item.publishedAt)
  const note = [item.description, published ? `Published ${published}` : ''].filter(Boolean).join(' ')
  return markdownLink(item.title, item.externalLink, note)
}).join('\n')

const writingsMarkdown = (items = []) => items.map((item) => {
  const published = toDateValue(item.publishedAt)
  const url = item.externalLink || getSiteUrl(`/writings/${item.slug}`)
  const note = [
    item.teaserSmall || item.teaser,
    item.source ? `Source: ${item.source}.` : 'Source: felixhaeberle.com.',
    published ? `Published ${published}` : ''
  ].filter(Boolean).join(' ')
  return markdownLink(item.title, url, note)
}).join('\n')

const cvMarkdown = (items = []) => items.map((item) => {
  const dates = [
    toDateValue(item.startDate),
    item.ongoing ? 'ongoing' : toDateValue(item.endDate)
  ].filter(Boolean).join(' to ')
  const place = item.placeLink ? `[${item.place}](${item.placeLink})` : item.place
  return `- ${markdownEscape(item.title)}, ${place}, ${markdownEscape(item.location)}${dates ? ` (${dates})` : ''}: ${normalizeText(item.text)}`
}).join('\n')

const normalizeLocalWriting = (writing) => ({
  ...writing,
  source: 'felixhaeberle.com',
  url: getSiteUrl(`/writings/${writing.slug}`),
  markdownUrl: getSiteUrl(`/writings/${writing.slug}.md`)
})

export async function getCoreSiteData({ includeSubstack = true } = {}) {
  const [settings, work, studies, writings, workPage, studiesPage, writingsPage, aboutPage] = await Promise.all([
    resolveOr(getSiteSettings(), {}),
    resolveOr(getWork(), []),
    resolveOr(getStudies(), []),
    resolveOr(getWritings(), []),
    resolveOr(getPage('Work'), null),
    resolveOr(getPage('Studies'), null),
    resolveOr(getPage('Writings'), null),
    resolveOr(getPage("That's me"), null)
  ])

  const substackWritings = includeSubstack
    ? await resolveOr(fetchSubstackWritings(), [])
    : []

  return {
    settings,
    pages: {
      work: workPage,
      studies: studiesPage,
      writings: writingsPage,
      about: aboutPage
    },
    work: sortByDateDesc(work, 'releasedAt'),
    studies: sortByDateDesc(studies, 'publishedAt'),
    writings: sortByDateDesc([
      ...writings.map(normalizeLocalWriting),
      ...substackWritings
    ], 'publishedAt')
  }
}

export async function getWritingData(slug) {
  const [writing, settings] = await Promise.all([
    resolveOr(getWriting(slug), null),
    resolveOr(getSiteSettings(), {})
  ])

  return {
    writing: writing ? normalizeLocalWriting(writing) : null,
    settings
  }
}

export function buildHomeMarkdown(data) {
  return createDocument({
    title: ASCII_PERSON_NAME,
    summary: SITE_DESCRIPTION,
    canonicalUrl: getSiteUrl('/'),
    markdownUrl: getSiteUrl('/index.html.md'),
    sections: [
      {
        heading: 'Identity',
        body: [
          `${PERSON_NAME} is a design engineer focused on tasteful AI products and interfaces.`,
          `Primary contact: ${CONTACT_EMAIL}`,
          `Canonical domain: ${SITE_URL}`
        ].join('\n')
      },
      {
        heading: 'Current Focus',
        body: normalizeText(data.settings?.currently) || 'No current focus text is configured.'
      },
      {
        heading: 'Recommended Pages',
        body: pageLinksMarkdown()
      },
      {
        heading: 'Selected Work',
        body: workMarkdown(data.work.slice(0, 8))
      },
      {
        heading: 'Selected Studies',
        body: studiesMarkdown(data.studies.slice(0, 5))
      },
      {
        heading: 'Selected Writings',
        body: writingsMarkdown(data.writings.slice(0, 10))
      },
      {
        heading: 'Machine-Readable Resources',
        body: machineResourcesMarkdown()
      }
    ]
  })
}

export function buildWorkMarkdown(data) {
  return createDocument({
    title: `${ASCII_PERSON_NAME} - Work`,
    summary: 'Project archive and shipped work by Felix Häberle.',
    canonicalUrl: getSiteUrl('/work'),
    markdownUrl: getSiteUrl('/work/index.html.md'),
    sections: [
      {
        heading: 'Page Intro',
        body: portableTextToMarkdown(data.pages.work?.contentRaw)
      },
      {
        heading: 'Projects',
        body: workMarkdown(data.work)
      }
    ]
  })
}

export function buildStudiesMarkdown(data) {
  return createDocument({
    title: `${ASCII_PERSON_NAME} - Studies`,
    summary: 'Case studies, design explorations, and project writeups by Felix Häberle.',
    canonicalUrl: getSiteUrl('/studies'),
    markdownUrl: getSiteUrl('/studies/index.html.md'),
    sections: [
      {
        heading: 'Page Intro',
        body: portableTextToMarkdown(data.pages.studies?.contentRaw)
      },
      {
        heading: 'Studies',
        body: studiesMarkdown(data.studies)
      }
    ]
  })
}

export function buildWritingsMarkdown(data) {
  return createDocument({
    title: `${ASCII_PERSON_NAME} - Writings`,
    summary: 'Articles from felixhaeberle.com and Felix Häberle’s Substack feed.',
    canonicalUrl: getSiteUrl('/writings'),
    markdownUrl: getSiteUrl('/writings/index.html.md'),
    sections: [
      {
        heading: 'Page Intro',
        body: portableTextToMarkdown(data.pages.writings?.contentRaw)
      },
      {
        heading: 'Writings',
        body: writingsMarkdown(data.writings)
      }
    ]
  })
}

export function buildAboutMarkdown(data) {
  const settings = data.settings || {}

  return createDocument({
    title: `${ASCII_PERSON_NAME} - About`,
    summary: 'Personal background, principles, CV, social links, and contact context for Felix Häberle.',
    canonicalUrl: getSiteUrl('/me'),
    markdownUrl: getSiteUrl('/me/index.html.md'),
    sections: [
      {
        heading: 'Profile',
        body: portableTextToMarkdown(data.pages.about?.contentRaw)
      },
      {
        heading: 'Principles',
        body: (settings.cards || [])
          .map((card) => `- ${markdownEscape(card.card_header_text)}: ${normalizeText(card.card_description || card.card_text)}`)
          .join('\n')
      },
      {
        heading: 'Professional Experience',
        body: cvMarkdown(settings.cv?.professional_experience)
      },
      {
        heading: 'Education',
        body: cvMarkdown(settings.cv?.education)
      },
      {
        heading: 'Open Source',
        body: cvMarkdown(settings.cv?.open_source)
      },
      {
        heading: 'Contact And Profiles',
        body: [
          markdownLink('Email', `mailto:${CONTACT_EMAIL}`),
          ...(settings.social_links || []).map((link) => markdownLink(link.text, link.link))
        ].join('\n')
      }
    ]
  })
}

export function buildLegalMarkdown() {
  return createDocument({
    title: `${ASCII_PERSON_NAME} - Site Notice / Impressum`,
    summary: 'Legal contact, publisher information, and privacy notice for felixhaeberle.com.',
    canonicalUrl: getSiteUrl('/legal/impressum'),
    markdownUrl: getSiteUrl('/legal/impressum/index.html.md'),
    sections: [
      {
        heading: 'Responsible Party',
        body: [
          'Felix Häberle',
          'Nepperbergstraße 8',
          '73525 Schwäbisch Gmünd',
          `Email: ${CONTACT_EMAIL}`
        ].join('\n')
      },
      {
        heading: 'Source Page',
        body: 'Use the canonical HTML page for the full legal and privacy notice text.'
      }
    ]
  })
}

export function buildWritingMarkdown({ writing }) {
  if (!writing) {
    return '# Writing not found\n'
  }

  const categories = (writing.categories || []).map((category) => category.title).filter(Boolean)
  const content = portableTextToMarkdown(writing.contentRaw)

  return createDocument({
    title: writing.title,
    summary: normalizeText(writing.teaserSmall || writing.teaser || `Article by ${PERSON_NAME}.`),
    canonicalUrl: writing.url,
    markdownUrl: writing.markdownUrl,
    sections: [
      {
        heading: 'Metadata',
        body: [
          `Author: ${PERSON_NAME}`,
          `Published: ${toDateValue(writing.publishedAt) || 'Unknown'}`,
          categories.length ? `Categories: ${categories.join(', ')}` : ''
        ].filter(Boolean).join('\n')
      },
      {
        heading: 'Article',
        body: content
      }
    ]
  })
}

export function buildAiJson(data) {
  const settings = data.settings || {}

  return {
    site: {
      name: PERSON_NAME,
      alternateName: ASCII_PERSON_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      language: 'en-US',
      llmsTxt: getSiteUrl('/llms.txt'),
      llmsFull: getSiteUrl('/llms-full.txt'),
      sitemap: getSiteUrl('/sitemap.xml'),
      schema: getSiteUrl('/schema.jsonld')
    },
    person: {
      name: PERSON_NAME,
      alternateName: ASCII_PERSON_NAME,
      jobTitle: 'Design Engineer',
      email: CONTACT_EMAIL,
      sameAs: getSocialLinks(settings),
      knowsAbout: [
        'Design engineering',
        'AI product design',
        'Interface design',
        'Frontend development',
        'Creative tooling'
      ]
    },
    pages: PAGE_CATALOG.map((page) => ({
      ...page,
      url: getSiteUrl(page.path),
      markdownUrl: getSiteUrl(page.markdownPath)
    })),
    currentFocus: normalizeText(settings.currently),
    work: data.work.map((item) => ({
      title: item.title,
      description: item.description,
      url: item.link,
      releasedAt: item.releasedAt,
      image: getImageUrl(item.image),
      imageAlt: item.imageAlt
    })),
    studies: data.studies.map((item) => ({
      title: item.title,
      description: item.description,
      url: item.externalLink,
      publishedAt: item.publishedAt,
      image: getImageUrl(item.image),
      imageAlt: item.imageAlt
    })),
    writings: data.writings.map((item) => ({
      title: item.title,
      teaser: item.teaserSmall || item.teaser,
      source: item.source || 'felixhaeberle.com',
      url: item.externalLink || item.url,
      markdownUrl: item.markdownUrl,
      publishedAt: item.publishedAt,
      categories: (item.categories || []).map((category) => category.title),
      image: getImageUrl(item.image),
      imageAlt: item.imageAlt
    })),
    cv: settings.cv || null,
    machineResources: MACHINE_RESOURCE_CATALOG.map((resource) => ({
      ...resource,
      url: getSiteUrl(resource.path)
    }))
  }
}

export function buildSchemaJsonLd(data) {
  const contentItemLists = [
    {
      '@type': 'ItemList',
      '@id': `${getSiteUrl('/work')}#items`,
      name: `${PERSON_NAME} work projects`,
      itemListElement: data.work.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: item.title,
          description: item.description,
          url: item.link,
          datePublished: toDateValue(item.releasedAt) || undefined,
          creator: {
            '@id': `${SITE_URL}/#person`
          }
        }
      }))
    },
    {
      '@type': 'ItemList',
      '@id': `${getSiteUrl('/studies')}#items`,
      name: `${PERSON_NAME} studies`,
      itemListElement: data.studies.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: item.title,
          description: item.description,
          url: item.externalLink,
          datePublished: toDateValue(item.publishedAt) || undefined,
          creator: {
            '@id': `${SITE_URL}/#person`
          }
        }
      }))
    },
    {
      '@type': 'ItemList',
      '@id': `${getSiteUrl('/writings')}#items`,
      name: `${PERSON_NAME} writings`,
      itemListElement: data.writings.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: item.title,
          description: item.teaserSmall || item.teaser,
          url: item.externalLink || item.url,
          datePublished: toDateValue(item.publishedAt) || undefined,
          author: {
            '@id': `${SITE_URL}/#person`
          }
        }
      }))
    }
  ]

  return buildSiteStructuredData({
    page: { home: true },
    sameAs: getSocialLinks(data.settings),
    extraGraph: contentItemLists
  })
}

const escapeXml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;')

const sitemapUrl = ({ loc, lastmod, changefreq, priority }) => [
  '  <url>',
  `    <loc>${escapeXml(loc)}</loc>`,
  lastmod ? `    <lastmod>${escapeXml(lastmod)}</lastmod>` : '',
  changefreq ? `    <changefreq>${escapeXml(changefreq)}</changefreq>` : '',
  priority ? `    <priority>${escapeXml(priority)}</priority>` : '',
  '  </url>'
].filter(Boolean).join('\n')

export function buildSitemapXml(data) {
  const today = new Date().toISOString().slice(0, 10)
  const baseUrls = PAGE_CATALOG.flatMap((page) => [
    {
      loc: getSiteUrl(page.path),
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority
    },
    {
      loc: getSiteUrl(page.markdownPath),
      lastmod: today,
      changefreq: page.changefreq,
      priority: '0.4'
    }
  ])

  const machineUrls = MACHINE_RESOURCE_CATALOG.map((resource) => ({
    loc: getSiteUrl(resource.path),
    lastmod: today,
    changefreq: 'weekly',
    priority: resource.path === '/robots.txt' ? '0.1' : '0.5'
  }))

  const writingUrls = data.writings
    .filter((writing) => writing.slug)
    .flatMap((writing) => [
      {
        loc: getSiteUrl(`/writings/${writing.slug}`),
        lastmod: toDateValue(writing.publishedAt) || today,
        changefreq: 'monthly',
        priority: '0.6'
      },
      {
        loc: getSiteUrl(`/writings/${writing.slug}.md`),
        lastmod: toDateValue(writing.publishedAt) || today,
        changefreq: 'monthly',
        priority: '0.4'
      }
    ])

  const urls = [...baseUrls, ...machineUrls, ...writingUrls]
  const uniqueUrls = [...new Map(urls.map((url) => [url.loc, url])).values()]

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    uniqueUrls.map(sitemapUrl).join('\n'),
    '</urlset>'
  ].join('\n')
}
