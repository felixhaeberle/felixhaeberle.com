import { BlogPostParagraph } from './BlogPostParagraph'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'

const BlogPostListItemWrapper = styled.div`
  ${media.lessThan('medium')`
    margin: 0 0 calc(var(--unit)*6.375) calc(var(--unit)*4)
  `}
`

const BlogPostListItemChild = styled(BlogPostParagraph)``

export const BlogPostList = (props) => {
  const htmlTag = (props.type === 'bullet') ? 'ul' : 'ol';

  return (
    <BlogPostListItemWrapper tag={props.type} as={htmlTag}>{props.children}</BlogPostListItemWrapper>
  )
}

export const BlogPostListItem = (props) => {
  return (
    <BlogPostListItemChild as={props.tag}>{props.children}</BlogPostListItemChild>
  )
}