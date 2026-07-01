import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

export default function Intro({ page }){
  const serializers = {
    types: {
      block: props => {
        switch (props.node.style) {
          default:
            return (
              <p className="font-sans text-base text-text font-normal leading-normal mb-unit-1.5">
                {props.children}
              </p>
            )
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