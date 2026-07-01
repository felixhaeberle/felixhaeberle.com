import {
  buildAiJson,
  getCoreSiteData,
  sendJsonResponse
} from '../lib/llm-content'

export default function JsonRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await getCoreSiteData()
  sendJsonResponse(res, buildAiJson(data))

  return { props: {} }
}
