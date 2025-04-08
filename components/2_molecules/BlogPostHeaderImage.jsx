import React from 'react'

export default function BlogPostHeaderImage({ children, className }){
  return (
    <div className={`mx-[calc(var(--unit)*-12)] ${className || ''}`}>
      {children}
    </div>
  )
}