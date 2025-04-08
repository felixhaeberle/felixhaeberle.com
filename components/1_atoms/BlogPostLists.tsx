import React from 'react'
import BlogPostParagraph from './BlogPostParagraph'
import { BaseProps } from '../../types/components'

interface BlogPostListsProps extends BaseProps {
  type?: 'bullet' | 'number';
}

interface BlogPostListItemProps extends BaseProps {
  tag?: string;
}

export const BlogPostList: React.FC<BlogPostListsProps> = (props) => {
  const htmlTag = (props.type === 'bullet') ? 'ul' : 'ol';
  
  return React.createElement(
    htmlTag,
    { 
      className: `md:ml-0 md:mb-[calc(var(--unit)*6.375)] ml-[calc(var(--unit)*4)] ${props.className || ''}`
    },
    props.children
  );
}

export const BlogPostListItem: React.FC<BlogPostListItemProps> = (props) => {
  const Tag = props.tag || 'li';
  
  // Handle dynamic tag rendering with proper typing
  return React.createElement(
    Tag, 
    { className: props.className },
    <BlogPostParagraph>
      {props.children}
    </BlogPostParagraph>
  );
}