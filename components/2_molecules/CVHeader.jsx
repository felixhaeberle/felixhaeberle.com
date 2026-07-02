import React from 'react'

export default function CVHeader({title, className}){
  return (
    <div className={`
      sticky top-10 
      border-t border-textDark 
      pt-[calc(var(--unit)*2.5)]
      ${className || ''}
    `}>
      <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark m-0">
        {title}
      </p>
    </div>
  )
}