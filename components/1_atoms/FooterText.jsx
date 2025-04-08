import React from 'react'
import Text from './Text.jsx'

const FooterText = ({ children, className, ...props }) => {
  return (
    <Text.Mono.Dark 
      className={`
        text-xs text-text mb-0 
        normal-case tracking-normal
        ${className}
      `} 
      {...props}
    >
      {children}
    </Text.Mono.Dark>
  )
}

FooterText.Dark = ({ children, className, ...props }) => {
  return (
    <FooterText 
      className={`text-textDark ${className}`} 
      {...props}
    >
      {children}
    </FooterText>
  )
}

export default FooterText