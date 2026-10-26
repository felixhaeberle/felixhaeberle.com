export default {
  name: 'a11yImage',
  title: 'Image',
  type: 'object',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'alternative',
      type: 'string',
      title: 'Alternative text',
      description: 'For accessibility and search engines',
    }
  ],
  validation: Rule => Rule.required()
}
