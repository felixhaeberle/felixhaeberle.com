export const SITE_URL = 'https://felixhaeberle.com'
export const PERSON_NAME = 'Felix Häberle'
export const ASCII_PERSON_NAME = 'Felix Haeberle'
export const CONTACT_EMAIL = 'kontakt@felixhaeberle.de'
export const SITE_DESCRIPTION =
  'Portfolio and personal website for Felix Häberle, a design engineer building tasteful AI products and interfaces.'

export const DEFAULT_SAME_AS = [
  'https://github.com/felixhaeberle',
  'https://felixhaeberle.substack.com'
]

export const PAGE_CATALOG = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
    markdownPath: '/index.html.md',
    description: 'Overview, current focus, selected work, selected studies, writings, and stack.',
    schemaType: 'WebPage',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    key: 'work',
    title: 'Work',
    path: '/work',
    markdownPath: '/work/index.html.md',
    description: 'Project archive and shipped work.',
    schemaType: 'CollectionPage',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    key: 'studies',
    title: 'Studies',
    path: '/studies',
    markdownPath: '/studies/index.html.md',
    description: 'Case studies, design explorations, and project writeups.',
    schemaType: 'CollectionPage',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    key: 'writings',
    title: 'Writings',
    path: '/writings',
    markdownPath: '/writings/index.html.md',
    description: 'Articles from this site and Felix Häberle’s Substack feed.',
    schemaType: 'CollectionPage',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    key: 'about',
    title: 'About',
    path: '/me',
    markdownPath: '/me/index.html.md',
    description: 'Personal background, principles, CV, social links, and contact context.',
    schemaType: 'ProfilePage',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    key: 'legal',
    title: 'Site Notice / Impressum',
    path: '/legal/impressum',
    markdownPath: '/legal/impressum/index.html.md',
    description: 'Legal contact, publisher information, and privacy notice.',
    schemaType: 'WebPage',
    priority: '0.3',
    changefreq: 'yearly'
  }
]

export const MACHINE_RESOURCE_CATALOG = [
  {
    title: 'LLM site index',
    path: '/llms.txt',
    type: 'text/markdown',
    description: 'Concise llms.txt entry point for agents.'
  },
  {
    title: 'Full LLM context',
    path: '/llms-full.txt',
    type: 'text/markdown',
    description: 'Expanded text context, URL map, and fetch guidance.'
  },
  {
    title: 'AI site data',
    path: '/ai.json',
    type: 'application/json',
    description: 'Structured site, profile, page, work, study, writing, and CV data.'
  },
  {
    title: 'Schema.org graph',
    path: '/schema.jsonld',
    type: 'application/ld+json',
    description: 'Standalone JSON-LD graph for the site and its content collections.'
  },
  {
    title: 'Sitemap',
    path: '/sitemap.xml',
    type: 'application/xml',
    description: 'Crawler sitemap including canonical and machine-readable routes.'
  },
  {
    title: 'Robots policy',
    path: '/robots.txt',
    type: 'text/plain',
    description: 'Crawler access policy and sitemap pointer.'
  }
]

export function getSiteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  if (path === '/') {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function getPageByPath(path) {
  const normalizedPath = path || '/'
  return PAGE_CATALOG.find((page) => page.path === normalizedPath)
}

export function getPageByTitle(title) {
  return PAGE_CATALOG.find((page) => page.title === title)
}

export function getPageMetadata({
  home,
  pageTitle,
  canonicalPath,
  markdownPath,
  metaDescription,
  schemaType
} = {}) {
  const catalogPage = canonicalPath
    ? getPageByPath(canonicalPath)
    : home
      ? getPageByPath('/')
      : getPageByTitle(pageTitle)

  const title = pageTitle || catalogPage?.title || PERSON_NAME
  const path = canonicalPath || catalogPage?.path || '/'
  const description = metaDescription || catalogPage?.description || SITE_DESCRIPTION

  return {
    ...catalogPage,
    title,
    path,
    url: getSiteUrl(path),
    markdownPath: markdownPath || catalogPage?.markdownPath,
    markdownUrl: markdownPath || catalogPage?.markdownPath
      ? getSiteUrl(markdownPath || catalogPage.markdownPath)
      : undefined,
    description,
    schemaType: schemaType || catalogPage?.schemaType || 'WebPage'
  }
}

export function uniqueLinks(links = []) {
  return [...new Set(links.filter(Boolean))]
}

const getUrlId = (url, fragment) => `${url.replace(/\/$/, '')}#${fragment}`

export function buildSiteStructuredData({ page, sameAs = DEFAULT_SAME_AS, extraGraph = [] } = {}) {
  const pageMetadata = getPageMetadata(page)
  const pageUrl = pageMetadata.url
  const pageId = getUrlId(pageUrl, 'webpage')
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: getSiteUrl('/')
    }
  ]

  if (pageMetadata.path !== '/') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: pageMetadata.title,
      item: pageUrl
    })
  }

  const baseGraph = [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: PERSON_NAME,
      alternateName: ASCII_PERSON_NAME,
      url: SITE_URL,
      image: getSiteUrl('/images/profile.png'),
      jobTitle: 'Design Engineer',
      email: `mailto:${CONTACT_EMAIL}`,
      sameAs: uniqueLinks(sameAs),
      knowsAbout: [
        'Design engineering',
        'AI product design',
        'Interface design',
        'Frontend development',
        'Creative tooling',
        'Next.js',
        'Sanity CMS'
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Design Engineer',
        skills: 'AI product design, interface design, frontend development, prototyping, product craft'
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: PERSON_NAME,
      alternateName: ASCII_PERSON_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-US',
      publisher: {
        '@id': `${SITE_URL}/#person`
      },
      hasPart: PAGE_CATALOG.map((catalogPage) => ({
        '@type': catalogPage.schemaType,
        '@id': getUrlId(getSiteUrl(catalogPage.path), 'webpage'),
        url: getSiteUrl(catalogPage.path),
        name: catalogPage.title,
        description: catalogPage.description
      }))
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#site-index`,
      name: `${PERSON_NAME} site index`,
      itemListElement: PAGE_CATALOG.map((catalogPage, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: catalogPage.title,
        description: catalogPage.description,
        url: getSiteUrl(catalogPage.path)
      }))
    },
    {
      '@type': pageMetadata.schemaType,
      '@id': pageId,
      url: pageUrl,
      name: pageMetadata.title,
      description: pageMetadata.description,
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${SITE_URL}/#website`
      },
      about: {
        '@id': `${SITE_URL}/#person`
      },
      author: {
        '@id': `${SITE_URL}/#person`
      },
      publisher: {
        '@id': `${SITE_URL}/#person`
      },
      mainEntity: pageMetadata.key === 'about'
        ? { '@id': `${SITE_URL}/#person` }
        : undefined,
      breadcrumb: {
        '@id': getUrlId(pageUrl, 'breadcrumb')
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': getUrlId(pageUrl, 'breadcrumb'),
      itemListElement: breadcrumbItems
    }
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': [...baseGraph, ...extraGraph].filter(Boolean)
  }
}
