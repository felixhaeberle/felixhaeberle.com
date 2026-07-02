import { XMLParser } from 'fast-xml-parser'

export const SUBSTACK_FEED_URL = 'https://felixhaeberle.substack.com/feed'
export const SUBSTACK_BASE_URL = 'https://felixhaeberle.substack.com'

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

export const toPlainText = (value) => {
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
    imageAlt: title,
    source: 'Substack'
  }
}

export async function fetchSubstackWritings() {
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
