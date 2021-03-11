import React from 'react'

export default {
  title: 'Text Card',
  name: 'text_card',
  type: 'object',
  fields: [
    {
      title: 'Card Header Text',
      name: 'card_header_text',
      type: 'string'
    },
    {
      title: 'Card Text',
      name: 'card_text',
      type: 'string'
    },
    {
      title: 'Card Description',
      name: 'card_description',
      type: 'text'
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Card',
        media: <span>💳</span>
      }
    }
  }
}