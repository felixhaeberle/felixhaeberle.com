import {
  buildAboutMarkdown,
  getCoreSiteData,
  sendTextResponse
} from '../../lib/llm-content'

export default function MarkdownRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await getCoreSiteData({ includeSubstack: false })
  sendTextResponse(res, buildAboutMarkdown(data))

  return { props: {} }
}
