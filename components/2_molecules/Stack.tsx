'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import ExternalLink from '../1_atoms/ExternalLink.jsx'
import Image from 'next/image'

/**
 * Client-side only wrapper component
 */
interface ClientOnlyProps {
  children: ReactNode
}

function ClientOnly({ children }: ClientOnlyProps): React.ReactNode | null {
  const [mounted, setMounted] = useState<boolean>(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return children
}

/**
 * Hook to check if viewport matches a breakpoint
 */
function useBreakpoint(breakpoint: number): boolean {
  const [matches, setMatches] = useState<boolean>(false)
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return
    
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`)
    
    // Set initial value
    setMatches(media.matches)
    
    // Update matches on change
    const listener = (e: MediaQueryListEvent): void => setMatches(e.matches)
    media.addEventListener('change', listener)
    
    // Clean up
    return () => media.removeEventListener('change', listener)
  }, [breakpoint])
  
  return matches
}

const Stack: React.FC = () => {
  return (
    <ClientOnly>
      <StackContent />
    </ClientOnly>
  )
}

const StackContent: React.FC = () => {
  const isMediumBreakpoint = useBreakpoint(1024)
  const imageSize = isMediumBreakpoint ? 45 : 65

  return (
    <div className="
      flex flex-col lg:flex-row 
      gap-y-8 lg:gap-y-0 lg:gap-x-12
      my-16 md:my-20
      py-10 md:py-12 px-8 md:px-10
      bg-buttonBg border border-textDark/20
    ">
      <div className="lg:w-2/5 [&>p]:max-w-[calc(8px*43.75)] [&>p]:mb-6 md:[&>p]:mb-8">
        <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">The Stack</p>
        <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">This website is an evolving experiment. I decided to open-source it – helping people all around the world learning how to code. If you have any questions to the stack feel free to ask in an issue.</p>
        <ExternalLink title="github" link="https://github.com/felixhaeberle" />
      </div>
      <div className="
        flex flex-wrap justify-center items-center
        gap-x-8 md:gap-x-10 gap-y-6 md:gap-y-8
        lg:w-3/5 lg:justify-around lg:pl-8
        mt-10 md:mt-12 lg:mt-0
      ">
        <div className="flex flex-col items-center justify-center filter grayscale w-1/2 sm:w-1/4">
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
        <div className="flex flex-col items-center justify-center filter grayscale w-1/2 sm:w-1/4">
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
        <div className="flex flex-col items-center justify-center filter grayscale w-1/2 sm:w-1/4">
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
        <div className="flex flex-col items-center justify-center filter grayscale w-1/2 sm:w-1/4">
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

export default Stack