import {
  buildWritingMarkdown,
  getWritingData,
  sendTextResponse
} from '../../../../lib/llm-content'

export default async function handler(req, res) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id
  const data = await getWritingData(id)

  if (!data.writing) {
    res.statusCode = 404
  }

  sendTextResponse(res, buildWritingMarkdown(data))
}
