// /schemas/documents/siteSettings.js

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site settings',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  initialValue: {
    ongoing: false
  }, 
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Site title',
      name: 'site_title',
      type: 'string'
    },
    {
      title: 'Frontpage Text',
      name: 'frontpage_text',
      type: 'text'
    },
    {
      title: 'Currently',
      name: 'currently',
      type: 'text'
    },
    {
      title: 'Navigation',
      name: 'navigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}]  
        }
      ]

    },
    {
      title: 'Social links',
      name: 'social_links',
      type: 'array',
      of: [{type: 'link'}]
    },
    {
      title: 'Legal links',
      name: 'legal_links',
      type: 'array',
      of: [{type: 'link'}]
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [{type: 'text_cards'}]
    },
    {
      title: 'CV',
      name: 'cv',
      type: 'array',
      of: [{type: 'cv'}]
    }
  ]
} 