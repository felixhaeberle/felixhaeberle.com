import React from 'react'
import getFavicons from 'get-website-favicon'

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
  ],
  preview: {
    select: {
      title: 'title',
      link: 'link'
    },
    prepare(selection) {
      const {title, link} = selection

      return {
        title: title,
        subtitle: link,
        media: <span>🛠</span>
      }
    }
  }
}