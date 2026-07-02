import React from 'react'
export function BlogPostParagraph({ children, className, ...props }) {
  return (
    <p 
      className={`
        font-sans text-base text-text font-medium
        font-normal 
        text-[calc(var(--unit)*2.25)] 
        leading-[calc(var(--unit)*3.75)] 
        mb-[calc(var(--unit)*4.75)]
        ${className || ''}
      `} 
      {...props}
    >
      {children}
    </p>
  )
}

BlogPostParagraph.Bold = ({ children, className, ...props }) => (
  <BlogPostParagraph className={`font-medium ${className || ''}`} {...props}>
    {children}
  </BlogPostParagraph>
)

BlogPostParagraph.Code = ({ children, className, ...props }) => (
  <code 
    className={`
      inline relative -top-[1px]
      font-mono font-normal text-[0.9em]
      -m-[1px_-1px] p-[4.5px_8px] 
      bg-buttonBg/75 
      rounded-[2px] 
      box-decoration-clone
      ${className || ''}
    `} 
    {...props}
  >
    {children}
  </code>
)

BlogPostParagraph.Underline = ({ children, className, ...props }) => (
  <BlogPostParagraph 
    className={`
      underline decoration-textDark/70 
      underline-offset-[3px] decoration-[2px]
      ${className || ''}
    `} 
    {...props}
  >
    {children}
  </BlogPostParagraph>
)

BlogPostParagraph.Italic = ({ children, className, ...props }) => (
  <BlogPostParagraph 
    className={`
      font-mono font-medium 
      tracking-[-0.75px] text-[0.95em] 
      text-[#0f57d3]
      ${className || ''}
    `} 
    {...props}
  >
    {children}
  </BlogPostParagraph>
)

BlogPostParagraph.Link = ({ children, className, ...props }) => (
  <BlogPostParagraph 
    className={`
      font-medium 
      underline decoration-textDark/70 
      underline-offset-[3px] decoration-[2px]
      transition-all duration-250 
      cursor-pointer 
      break-words
      hover:decoration-textDark
      ${className || ''}
    `} 
    {...props}
  >
    {children}
  </BlogPostParagraph>
)

export default BlogPostParagraph