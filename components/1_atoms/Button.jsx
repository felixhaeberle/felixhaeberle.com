import React from 'react'
import { ArrowRight, Email, Voicemail } from '@carbon/icons-react'

export const ButtonItemText = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`font-sans text-base text-text font-medium text-textDark ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

// Use a mapped object of icon names to components
const IconComponents = {
  'ArrowRight': ArrowRight,
  'Email': Email,
  'Voicemail': Voicemail
}

const Button = ({ 
  title, 
  symbol = 'ArrowRight', 
  className = '', 
  autoWidth = false, 
  onClick 
}) => {
  const IconComponent = IconComponents[symbol] || ArrowRight;
  
  const buttonBaseClasses = `
    flex flex-row justify-between items-center
    bg-buttonBg border border-textDark/20
    py-[calc(8px*2.25)] px-[calc(8px*2.5)]
    mb-unit-4.5
    ${autoWidth ? 'w-full' : 'w-[300px]'}
    hover:cursor-pointer
    ${className}
  `
  
  const isActive = className && className.includes('active')
  
  return (
    <div 
      onClick={onClick} 
      className={`${buttonBaseClasses} ${isActive ? 'bg-textDark' : ''}`}
    >
      <ButtonItemText className={isActive ? 'text-buttonBg' : ''}>
        {title}
      </ButtonItemText>
      <IconComponent 
        className={`
          button-icon
          ${isActive ? 'fill-buttonBg' : ''}
          ${symbol === 'Voicemail' ? 'hover:animate-wiggle' : ''}
        `}
      />
    </div>
  )
}

export default React.memo(Button);