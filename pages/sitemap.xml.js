import {
  buildSitemapXml,
  getCoreSiteData,
  sendXmlResponse
} from '../lib/llm-content'

export default function SitemapRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await getCoreSiteData({ includeSubstack: false })
  sendXmlResponse(res, buildSitemapXml(data))

  return { props: {} }
}
