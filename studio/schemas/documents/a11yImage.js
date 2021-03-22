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
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alternative',
      type: 'string',
      title: 'Alternative text',
      description: 'For accessibility and search engines',
      options: {
        isHighlighted: true
      }
    }
  ],
  validation: Rule => Rule.required()
}