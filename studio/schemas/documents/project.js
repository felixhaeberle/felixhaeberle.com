export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'Released at',
      name: 'releasedAt',
      type: 'datetime',
      validation: Rule => Rule.required()
    }
  ]
}