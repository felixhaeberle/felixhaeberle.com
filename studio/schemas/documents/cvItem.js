export default {
  title: 'CV Item',
  name: 'cv_item',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Place',
      name: 'place',
      type: 'string',
      validation: Rule => Rule.required()    
    },
    {
      title: 'Place Link',
      name: 'placeLink',
      type: 'string',
      validation: Rule => Rule.required()    
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      validation: Rule => Rule.required()    
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      title: 'Ongoing',
      name: 'ongoing',
      type: 'boolean'
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{
        type: 'block'
      }]
    }
  ],
  initialValue: {
    ongoing: false
  },
}