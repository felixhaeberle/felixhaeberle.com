import { format, parseISO } from 'date-fns'

import React from 'react'

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
      type: 'text'
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