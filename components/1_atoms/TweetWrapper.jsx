import React from 'react'

export default function TweetWrapper({children, className}) {
  return (
    <div className={`
      w-full mx-auto 
      select-none 
      my-[calc(var(--unit)*6.75)]
      ${className || ''}
    `}>
      {children}
    </div>
  )
}