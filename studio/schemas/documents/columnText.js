export default {
  title: 'Column Text',
  name: 'column_text',
  type: 'object',
  fields: [{
    title: 'Content',
    name: 'content',
    type: 'array',
    of: [{ type: 'block' }]
  }]
}