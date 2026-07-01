import Head from 'next/head'
import { XMLParser } from 'fast-xml-parser'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
import CardWritings from '../../components/2_molecules/CardWritings.jsx'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWritings } from '../../lib/query/writings'

const SUBSTACK_FEED_URL = 'https://felixhaeberle.substack.com/feed'
const SUBSTACK_BASE_URL = 'https://felixhaeberle.substack.com'
const SUBSTACK_EXCERPT_LENGTH = 220

const decodeBasicEntities = (value) => {
  if (!value) {
    return ''
  }

  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

const stripHtml = (value) => value.replace(/<[^>]*>/g, ' ')

const toPlainText = (value) => {
  const decoded = decodeBasicEntities(value)
  return stripHtml(decoded).replace(/\s+/g, ' ').trim()
}

const toAbsoluteUrl = (value) => {
  if (!value) {
    return null
  }

  try {
    return new URL(value, SUBSTACK_BASE_URL).toString()
  } catch (error) {
    return null
  }
}

const toIsoDate = (value) => {
  if (!value) {
    return null
  }

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return null
  }

  return parsed.toISOString()
}

const buildExcerpt = (value) => {
  const plainText = toPlainText(value)
  if (!plainText) {
    return ''
  }

  if (plainText.length <= SUBSTACK_EXCERPT_LENGTH) {
    return plainText
  }

  return `${plainText.slice(0, SUBSTACK_EXCERPT_LENGTH - 3).trim()}...`
}

const normalizeSubstackItem = (item) => {
  if (!item) {
    return null
  }

  const title = typeof item.title === 'string' ? item.title.trim() : ''
  const externalLink = toAbsoluteUrl(item.link)
  const publishedAt = toIsoDate(item.pubDate || item['dc:date'] || item.published)
  const subtitle = item.description || item.summary || ''
  const teaser = buildExcerpt(subtitle)
  const imageUrl = typeof item.enclosure?.url === 'string' ? item.enclosure.url : null

  if (!title || title.toLowerCase() === 'coming soon' || !externalLink) {
    return null
  }

  return {
    _id: `substack-${externalLink}`,
    title,
    publishedAt,
    teaser,
    teaserSmall: teaser,
    externalLink,
    image: imageUrl,
    imageAlt: title
  }
}

const fetchSubstackWritings = async () => {
  try {
    const response = await fetch(SUBSTACK_FEED_URL)
    if (!response.ok) {
      return []
    }

    const xml = await response.text()
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
      trimValues: true
    })
    const parsed = parser.parse(xml)
    const items = parsed?.rss?.channel?.item
    const itemList = Array.isArray(items) ? items : items ? [items] : []

    return itemList.map(normalizeSubstackItem).filter(Boolean)
  } catch (error) {
    return []
  }
}

export default function Writings({page, writings, settings}) {

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <div>
        <div className="site-split site-split--hide-media-medium mb-10 md:mb-12">
          <div className="space-y-6 md:space-y-8">
            <h1 className="font-sans text-xl text-textLight font-medium mb-3 md:mb-4">Writings</h1>
            <Intro page={page} />
          </div>
          <div className="site-split__media">
            <img
              className="site-split__image"
              src="/images/lineart/hand.svg"
              alt="Hand illustration"
            />
          </div>
        </div>
      </div>
      <div className="pt-12 md:pt-16">
        <div className="site-grid site-grid--three site-grid--compact">
          {writings.map((writing, index) => (
            <div
              key={index}
            >
              <CardWritings
                title={writing.title}
                text={writing.teaserSmall || writing.teaser}
                link={writing.externalLink || `/writings/${writing.slug}`}
                isExternal={Boolean(writing.externalLink)}
                date={writing.publishedAt}
                image={writing.image}
                imageAlt={writing.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getPage('Writings');
  const writings = await getWritings();
  const substackWritings = await fetchSubstackWritings();
  const siteSettings = await getSiteSettings();

  const mergedWritings = [...writings, ...substackWritings].filter(Boolean)
  mergedWritings.sort((a, b) => {
    const aTime = new Date(a.publishedAt || 0).getTime()
    const bTime = new Date(b.publishedAt || 0).getTime()
    return bTime - aTime
  })

  return {
    props: {
      page: page,
      writings: mergedWritings,
      settings: siteSettings
    },
    revalidate: 3600
  }
}
