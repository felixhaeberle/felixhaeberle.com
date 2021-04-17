import Text from './Text'
import styled from 'styled-components'

const BlogPostParagraphItem = styled(Text)`
  font-weight: 400;
  font-size: calc(var(--unit)*2.25);
  line-height: calc(var(--unit)*3.75);
  margin-bottom: calc(var(--unit)*4.75);
`

export default function BlogPostParagraph({ children }) {
  return (
    <BlogPostParagraphItem>{children}</BlogPostParagraphItem>
  )
}