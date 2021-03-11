import React from 'react'

export default {
  title: 'CV',
  name: 'cv',
  type: 'object',
  fields: [
    {
      title: 'Professional Experience',
      name: 'professional_experience',
      type: 'array',
      of: [{type: 'cv_item'}]
    },
    {
      title: 'Education',
      name: 'education',
      type: 'array',
      of: [{type: 'cv_item'}]
    },
    {
      title: 'Open Source',
      name: 'open_source',
      type: 'array',
      of: [{type: 'cv_item'}]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'CV',
        media: <span>🎓</span>
      }
    }
  }
}