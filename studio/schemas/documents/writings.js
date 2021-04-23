export default {
  title: 'Writings',
  name: 'writings',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      title: 'Teaser',
      name: 'teaser',
      type: 'text'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'a11yImage'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'a11yImage'},
        {type: 'code'}
      ]
    }
  ]
}