import React from 'react'
import BlogPostParagraph from './BlogPostParagraph.jsx'

export const BlogPostList = (props) => {
  const htmlTag = (props.type === 'bullet') ? 'ul' : 'ol';
  const Tag = htmlTag;
  
  return (
    <Tag className={`md:ml-0 md:mb-[calc(var(--unit)*6.375)] ml-[calc(var(--unit)*4)] ${props.className || ''}`}>
      {props.children}
    </Tag>
  )
}

export const BlogPostListItem = (props) => {
  const Tag = props.tag || 'li';
  
  return (
    <Tag className={props.className}>
      <BlogPostParagraph>
        {props.children}
      </BlogPostParagraph>
    </Tag>
  )
}