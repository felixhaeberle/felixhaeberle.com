import {
  buildHomeMarkdown,
  getCoreSiteData,
  sendTextResponse
} from '../lib/llm-content'

export default function MarkdownRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await getCoreSiteData()
  sendTextResponse(res, buildHomeMarkdown(data))

  return { props: {} }
}
