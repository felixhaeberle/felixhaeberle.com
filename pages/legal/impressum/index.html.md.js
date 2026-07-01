import {
  buildLegalMarkdown,
  sendTextResponse
} from '../../../lib/llm-content'

export default function MarkdownRoute() {
  return null
}

export async function getServerSideProps({ res }) {
  sendTextResponse(res, buildLegalMarkdown())

  return { props: {} }
}
