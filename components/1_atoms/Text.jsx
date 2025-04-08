'use client'

import React from 'react'

// Text Component converted to use Tailwind CSS
const Text = ({ children, className = '', dark = false, as: Component = 'p', ...props }) => {
  const baseClasses = "font-sans text-base text-text font-medium"
  const darkClasses = dark ? "text-textDark" : ""
  return (
    <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
      {children}
    </Component>
  )
}

// Text.Dark
const TextDark = ({ children, className = '', ...props }) => {
  return (
    <Text className={`text-textDark ${className}`} {...props}>
      {children}
    </Text>
  )
}
Text.Dark = TextDark

// Text.Intro
const TextIntro = ({ children, className = '', ...props }) => {
  return (
    <Text className={`font-normal leading-normal mb-unit-1.5 ${className}`} {...props}>
      {children}
    </Text>
  )
}
Text.Intro = TextIntro

// Text.Large
const TextLarge = ({ children, className = '', dark = false, as: Component = 'h1', ...props }) => {
  const baseClasses = "font-sans text-xl text-textLight font-medium"
  const darkClasses = dark ? "text-textDark" : ""
  return (
    <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
      {children}
    </Component>
  )
}
Text.Large = TextLarge

// Text.Large.Dark
const TextLargeDark = ({ children, className = '', ...props }) => {
  return (
    <Text.Large className={`text-textDark ${className}`} {...props}>
      {children}
    </Text.Large>
  )
}
Text.Large.Dark = TextLargeDark

// Text.Medium
const TextMedium = ({ children, className = '', dark = false, ...props }) => {
  return (
    <Text className={className} dark={dark} {...props}>
      {children}
    </Text>
  )
}
Text.Medium = TextMedium

// Text.Medium.Dark
const TextMediumDark = ({ children, className = '', ...props }) => {
  return (
    <Text dark {...props} className={className}>
      {children}
    </Text>
  )
}
Text.Medium.Dark = TextMediumDark

// Text.Small
const TextSmall = ({ children, className = '', dark = false, as: Component = 'p', ...props }) => {
  const baseClasses = "font-sans text-sm text-text leading-small-text font-medium"
  const darkClasses = dark ? "text-textDark" : ""
  return (
    <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
      {children}
    </Component>
  )
}
Text.Small = TextSmall

// Text.Small.Dark
const TextSmallDark = ({ children, className = '', ...props }) => {
  return (
    <Text.Small className={`text-textDark ${className}`} {...props}>
      {children}
    </Text.Small>
  )
}
Text.Small.Dark = TextSmallDark

// Text.Mono
const TextMono = ({ children, className = '', dark = false, as: Component = 'p', ...props }) => {
  const baseClasses = "font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5"
  const darkClasses = dark ? "text-textDark" : ""
  return (
    <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
      {children}
    </Component>
  )
}
Text.Mono = TextMono

// Text.Mono.Dark
const TextMonoDark = ({ children, className = '', ...props }) => {
  return (
    <Text.Mono className={`text-textDark ${className}`} {...props}>
      {children}
    </Text.Mono>
  )
}
Text.Mono.Dark = TextMonoDark

export default Text;