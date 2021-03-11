import React from 'react'
import { format, parseISO } from 'date-fns'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      updatedAt: '_updatedAt'
    },
    prepare(selection) {
      const {title, updatedAt} = selection

      return {
        title: title,
        subtitle: format(parseISO(updatedAt), 'MMM, yyyy'),
        media: <span>📑</span>
      }
    }
  }
}