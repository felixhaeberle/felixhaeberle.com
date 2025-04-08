import React from 'react'
import Text from '../1_atoms/Text.jsx'

export default function CVHeader({title, className}){
  return (
    <div className={`
      sticky top-10 
      border-t border-textDark 
      pt-[calc(var(--unit)*2.5)]
      ${className || ''}
    `}>
      <Text.Mono.Dark className="m-0">
        {title}
      </Text.Mono.Dark>
    </div>
  )
}