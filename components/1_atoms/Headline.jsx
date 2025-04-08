import React from 'react'
import Text from './Text.jsx'

export function Headline({ children, className, ...props }) {
  return (
    <Text 
      className={`
        text-[calc(var(--unit)*3.5)] 
        leading-[1.3] 
        mb-[calc(var(--unit)*4)]
        ${className || ''}
      `} 
      {...props}
    >
      {children}
    </Text>
  )
}

Headline.Large = Headline;

Headline.Medium = ({ children, className, ...props }) => (
  <Headline 
    className={`
      text-[calc(var(--unit)*2.75)] 
      leading-[1.4] 
      mb-[calc(var(--unit)*3)]
      ${className || ''}
    `} 
    {...props}
  >
    {children}
  </Headline>
)

Headline.Small = ({ children, className, ...props }) => (
  <Headline 
    className={`
      text-[calc(var(--unit)*2.25)] 
      leading-[1.3] 
      mb-[calc(var(--unit)*3)]
      ${className || ''}
    `} 
    {...props}
  >
    {children}
  </Headline>
)

export default Headline