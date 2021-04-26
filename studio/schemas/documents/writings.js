import { writingCategories } from '../../../content/writings/categories'

export default {
  title: 'Writings',
  name: 'writings',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      title: 'Small Teaser',
      name: 'teaserSmall',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Teaser',
      name: 'teaser',
      type: 'text',
      validation: Rule => Rule.required()
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