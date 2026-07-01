import {
  buildWritingMarkdown,
  getWritingData,
  sendTextResponse
} from '../../lib/llm-content'

export default function MarkdownRoute() {
  return null
}

export async function getServerSideProps({ params, res }) {
  const data = await getWritingData(params.id)
  sendTextResponse(res, buildWritingMarkdown(data))

  return { props: {} }
}
