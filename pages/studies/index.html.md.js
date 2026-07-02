import {
  buildStudiesMarkdown,
  getCoreSiteData,
  sendTextResponse
} from '../../lib/llm-content'

export default function MarkdownRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await getCoreSiteData({ includeSubstack: false })
  sendTextResponse(res, buildStudiesMarkdown(data))

  return { props: {} }
}
