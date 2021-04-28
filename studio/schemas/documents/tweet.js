export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'object',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: Rule => Rule.required()
    }
  ]
}