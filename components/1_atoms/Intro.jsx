import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Text from './Text.jsx'

export default function Intro({ page }){
  const serializers = {
    types: {
      block: props => {
        switch (props.node.style) {
          default:
            return <Text.Intro>{props.children}</Text.Intro>
        }
      }
    }
  }
  
  return (
    <>
      { page && <BlockContent blocks={page.contentRaw} serializers={serializers} /> }
    </>
  )
}