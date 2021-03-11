import React from 'react'

export default {
  title: 'Text Cards',
  name: 'text_cards',
  type: 'object',
  fields: [
    {
      title: 'Text Cards',
      name: 'text_cards',
      type: 'array',
      of: [{ type: 'text_card' }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Cards',
        media: <span>🗂</span>
      }
    }
  }
}