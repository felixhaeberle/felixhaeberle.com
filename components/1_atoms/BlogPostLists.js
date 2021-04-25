import { BlogPostParagraph } from './BlogPostParagraph'
import styled from 'styled-components'

const BlogPostListItemWrapper = styled.div``

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