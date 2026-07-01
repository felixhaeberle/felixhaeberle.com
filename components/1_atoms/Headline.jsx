import React from 'react'
export function Headline({ children, className, ...props }) {
  return (
    <p 
      className={`
        font-sans text-base text-text font-medium
        text-[calc(var(--unit)*3.5)] 
        leading-[1.3] 
        mb-[calc(var(--unit)*4)]
        ${className || ''}
      `} 
      {...props}
    >
      {children}
    </p>
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