import React, { ReactNode, ComponentProps, ElementType } from 'react'

// TextProps with strict typing
interface TextProps extends ComponentProps<'p'> {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  as?: ElementType;
}

// Create a factory function to add variants to the primary Text component
function createTextComponent() {
  // Base Text component
  const TextComponent = ({ 
    children, 
    className = '', 
    dark = false, 
    as: Component = 'p', 
    ...props 
  }: TextProps) => {
    const baseClasses = "font-sans text-base text-text font-medium"
    const darkClasses = dark ? "text-textDark" : ""
    return (
      <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
        {children}
      </Component>
    )
  }

  // Text.Dark
  const TextDark = ({ children, className = '', ...props }: Omit<TextProps, 'dark'>) => {
    return (
      <TextComponent className={`text-textDark ${className}`} {...props}>
        {children}
      </TextComponent>
    )
  }

  // Text.Intro
  const TextIntro = ({ children, className = '', ...props }: Omit<TextProps, 'dark'>) => {
    return (
      <TextComponent className={`font-normal leading-normal mb-unit-1.5 ${className}`} {...props}>
        {children}
      </TextComponent>
    )
  }

  // Text.Large
  const TextLarge = ({ 
    children, 
    className = '', 
    dark = false, 
    as: Component = 'h1', 
    ...props 
  }: TextProps) => {
    const baseClasses = "font-sans text-xl text-textLight font-medium"
    const darkClasses = dark ? "text-textDark" : ""
    return (
      <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
        {children}
      </Component>
    )
  }

  // Text.Large.Dark
  const TextLargeDark = ({ children, className = '', ...props }: Omit<TextProps, 'dark'>) => {
    return (
      <TextLarge className={`text-textDark ${className}`} {...props}>
        {children}
      </TextLarge>
    )
  }

  // Text.Medium
  const TextMedium = ({ children, className = '', dark = false, ...props }: TextProps) => {
    return (
      <TextComponent className={className} dark={dark} {...props}>
        {children}
      </TextComponent>
    )
  }

  // Text.Medium.Dark
  const TextMediumDark = ({ children, className = '', ...props }: Omit<TextProps, 'dark'>) => {
    return (
      <TextComponent dark {...props} className={className}>
        {children}
      </TextComponent>
    )
  }

  // Text.Small
  const TextSmall = ({ 
    children, 
    className = '', 
    dark = false, 
    as: Component = 'p', 
    ...props 
  }: TextProps) => {
    const baseClasses = "font-sans text-sm text-text leading-small-text font-medium"
    const darkClasses = dark ? "text-textDark" : ""
    return (
      <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
        {children}
      </Component>
    )
  }

  // Text.Small.Dark
  const TextSmallDark = ({ children, className = '', ...props }: Omit<TextProps, 'dark'>) => {
    return (
      <TextSmall className={`text-textDark ${className}`} {...props}>
        {children}
      </TextSmall>
    )
  }

  // Text.Mono
  const TextMono = ({ 
    children, 
    className = '', 
    dark = false, 
    as: Component = 'p', 
    ...props 
  }: TextProps) => {
    const baseClasses = "font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5"
    const darkClasses = dark ? "text-textDark" : ""
    return (
      <Component className={`${baseClasses} ${darkClasses} ${className}`} {...props}>
        {children}
      </Component>
    )
  }

  // Text.Mono.Dark
  const TextMonoDark = ({ children, className = '', ...props }: Omit<TextProps, 'dark'>) => {
    return (
      <TextMono className={`text-textDark ${className}`} {...props}>
        {children}
      </TextMono>
    )
  }

  // Set up the component hierarchy
  const TextLargeWithDark = TextLarge as typeof TextLarge & { Dark: typeof TextLargeDark };
  TextLargeWithDark.Dark = TextLargeDark;

  const TextMediumWithDark = TextMedium as typeof TextMedium & { Dark: typeof TextMediumDark };
  TextMediumWithDark.Dark = TextMediumDark;

  const TextSmallWithDark = TextSmall as typeof TextSmall & { Dark: typeof TextSmallDark };
  TextSmallWithDark.Dark = TextSmallDark;

  const TextMonoWithDark = TextMono as typeof TextMono & { Dark: typeof TextMonoDark };
  TextMonoWithDark.Dark = TextMonoDark;

  // Add all variants to the TextComponent
  const Text = TextComponent as typeof TextComponent & {
    Dark: typeof TextDark;
    Intro: typeof TextIntro;
    Large: typeof TextLargeWithDark;
    Medium: typeof TextMediumWithDark;
    Small: typeof TextSmallWithDark;
    Mono: typeof TextMonoWithDark;
  };

  Text.Dark = TextDark;
  Text.Intro = TextIntro;
  Text.Large = TextLargeWithDark;
  Text.Medium = TextMediumWithDark;
  Text.Small = TextSmallWithDark;
  Text.Mono = TextMonoWithDark;

  return Text;
}

// Create and export the Text component with all its variants
const Text = createTextComponent();
export default Text;