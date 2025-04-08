import React from 'react'
import Text from './Text'
import { ArrowRight, Email, Voicemail } from '@carbon/icons-react'

interface ButtonItemTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const ButtonItemText: React.FC<ButtonItemTextProps> = ({ children, className = '', ...props }) => {
  return (
    <Text className={`text-textDark ${className}`} {...props}>
      {children}
    </Text>
  )
}

// Use a mapped object of icon names to components with any props
const IconComponents: Record<string, any> = {
  'ArrowRight': ArrowRight,
  'Email': Email,
  'Voicemail': Voicemail
}

type ButtonSymbol = 'ArrowRight' | 'Email' | 'Voicemail';

interface ButtonProps {
  title: string;
  symbol?: ButtonSymbol;
  className?: string;
  autoWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  symbol = 'ArrowRight', 
  className = '', 
  autoWidth = false, 
  onClick 
}) => {
  // Type assertion to allow dynamic component rendering
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
      { }
      {React.createElement(IconComponent, {
        className: `
          button-icon
          ${isActive ? 'fill-buttonBg' : ''}
          ${symbol === 'Voicemail' ? 'hover:animate-wiggle' : ''}
        `
      })}
    </div>
  )
}

export default React.memo(Button);