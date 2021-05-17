import BlockContent from '@sanity/block-content-to-react'
import Text from './Text'

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
    <r-grid columns="6">
      <r-cell span="2" span-m="4" span-s="6">
        { page && <BlockContent blocks={page.contentRaw} serializers={serializers} /> }
      </r-cell>
    </r-grid>
  )
}