import React from 'react'

export default function BlogPostLayout({ children, className }) {
  return (
    <div className={`max-w-[min(800px,100%)] mx-auto ${className || ''}`}>
      {children}
    </div>
  )
}