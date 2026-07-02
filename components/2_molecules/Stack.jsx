'use client'

import React, { useState, useEffect } from 'react'
import ExternalLink from '../1_atoms/ExternalLink.jsx'
import Image from 'next/image'

/**
 * Client-side only wrapper component
 */
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return children
}

/**
 * Hook to check if viewport matches a breakpoint
 */
function useBreakpoint(breakpoint) {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return
    
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`)
    
    // Set initial value
    setMatches(media.matches)
    
    // Update matches on change
    const listener = (e) => setMatches(e.matches)
    media.addEventListener('change', listener)
    
    // Clean up
    return () => media.removeEventListener('change', listener)
  }, [breakpoint])
  
  return matches
}

export default function Stack() {
  return (
    <ClientOnly>
      <StackContent />
    </ClientOnly>
  )
}

function StackContent() {
  const isMediumBreakpoint = useBreakpoint(1024)
  const imageSize = isMediumBreakpoint ? 45 : 65

  return (
    <div className="
      site-stack
      my-16 md:my-20
      py-10 md:py-12 px-8 md:px-10
      bg-buttonBg border border-textDark/20
    ">
      {/* Text */}
      <div className="[&>p]:max-w-[calc(8px*43.75)] [&>p]:mb-6 md:[&>p]:mb-8">
        <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">The Stack</p>
        <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">This website is an evolving experiment. I decided to open-source it – helping people all around the world learning how to code. If you have any questions to the stack feel free to ask in an issue.</p>
        <ExternalLink title="github" link="https://github.com/felixhaeberle" />
      </div>
      {/* Logos */}
      <div className="site-stack__logos">
        <div className="site-stack__logo">
          <Image src="/images/stack/logos/carbon.svg" height={imageSize} width={imageSize} alt="Carbon" />
          <p className="
            font-sans text-sm text-text leading-small-text font-medium text-textDark
            mt-[calc(8px*2.625)]
            max-w-[calc(8px*12.5)]
            text-center
          ">
            Carbon
          </p>
        </div>
        <div className="site-stack__logo">
          <Image src="/images/stack/logos/sanity.svg" height={imageSize} width={imageSize} alt="Sanity" />
          <p className="
            font-sans text-sm text-text leading-small-text font-medium text-textDark
            mt-[calc(8px*2.625)]
            max-w-[calc(8px*12.5)]
            text-center
          ">
            Sanity
          </p>
        </div>
        <div className="site-stack__logo">
          <Image src="/images/stack/logos/next.svg" height={imageSize} width={imageSize} alt="Next" />
          <p className="
            font-sans text-sm text-text leading-small-text font-medium text-textDark
            mt-[calc(8px*2.625)]
            max-w-[calc(8px*12.5)]
            text-center
          ">
            Next.js
          </p>
        </div>
        <div className="site-stack__logo">
          <Image src="/images/stack/logos/styled-components.svg" height={imageSize} width={imageSize} alt="Styled" />
          <p className="
            font-sans text-sm text-text leading-small-text font-medium text-textDark
            mt-[calc(8px*2.625)]
            max-w-[calc(8px*12.5)]
            text-center
          ">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}
