import {
  buildSchemaJsonLd,
  getCoreSiteData,
  sendJsonLdResponse
} from '../lib/llm-content'

export default function JsonLdRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await getCoreSiteData()
  sendJsonLdResponse(res, buildSchemaJsonLd(data))

  return { props: {} }
}
