import React from 'react'
const FooterText = ({ children, className = '', ...props }) => {
  return (
    <p
      className={`
        font-mono text-lg text-text font-medium tracking-custom uppercase
        text-xs text-text mb-0 normal-case tracking-normal
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  )
}

FooterText.Dark = ({ children, className, ...props }) => {
  return (
    <FooterText className={`text-textDark ${className}`} {...props}>
      {children}
    </FooterText>
  )
}

export default FooterText