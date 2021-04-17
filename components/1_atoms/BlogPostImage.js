import Image from 'next/image'
import Text from '../1_atoms/Text'
import styled from 'styled-components'
import { urlFor } from '../../lib/sanity'

const BlogPostImageItem = styled.div`
  max-width: min(800px, 100%);
  margin-top: calc(var(--unit)*9.375);
  margin-bottom: calc(var(--unit)*8.125);
`

BlogPostImageItem.Text = styled(Text.Small.Dark)`
  margin-top: calc(var(--unit)*2);
`

export default function BlogPostImage({image, imageAlt, text}) {
  return (
      <BlogPostImageItem>
        <Image
          {...( imageAlt && { alt: imageAlt })}  
          src={urlFor(image).width(800).height(420).url()} 
          width={'800px'} 
          height={'420px'} />
        <BlogPostImageItem.Text>{ text }</BlogPostImageItem.Text>
      </BlogPostImageItem>
  )
}