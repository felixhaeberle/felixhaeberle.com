'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import ExternalLink from '../1_atoms/ExternalLink.jsx'
import Image from 'next/image'
import Text from '../1_atoms/Text.jsx'

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
      flex flex-row 
      my-[calc(8px*8.75)] 
      py-[calc(8px*3.75)] px-[calc(8px*3.375)]
      bg-buttonBg border border-textDark/20
      [&_r-grid]:w-full [&_r-grid]:grid-row-gap-[calc(var(--rowGap)*0.75)]
    ">
      {/* Using React.createElement to create custom elements for TypeScript */}
      {React.createElement('r-grid', { 
        columns: "6", 
        'columns-m': "6", 
        'columns-xs': "2"
      }, [
        React.createElement('r-cell', { 
          key: 'cell-1',
          span: "2", 
          'span-s': "6" 
        }, 
          <div key="text-section" className="[&>p]:max-w-[calc(8px*43.75)] [&>p]:mb-[calc(8px*3.75)] [&>p.mono]:mb-[calc(8px*3.5)]">
            <Text.Mono.Dark>The Stack</Text.Mono.Dark>
            <Text.Small.Dark>This website is an evolving experiment. I decided to open-source it – helping people all around the world learning how to code. If you have any questions to the stack feel free to ask in an issue.</Text.Small.Dark>
            <ExternalLink title="github" link="https://github.com/felixhaeberle" />
          </div>
        ),
        React.createElement('r-cell', { 
          key: 'cell-2',
          span: "4", 
          'span-s': "6" 
        }, 
          <div key="logos-section" className="
            flex flex-row justify-evenly items-center h-full
            sm:flex-wrap
          ">
            <div className="
              flex flex-col items-center justify-center 
              filter grayscale 
              sm:w-1/3 sm:mt-[calc(8px*2.5)]
            ">
              <Image src="/images/stack/logos/carbon.svg" height={imageSize} width={imageSize} alt="Carbon" />
              <Text.Small.Dark className="
                mt-[calc(8px*2.625)] 
                max-w-[calc(8px*12.5)]
                text-center
              ">
                Carbon
              </Text.Small.Dark>
            </div>
            <div className="
              flex flex-col items-center justify-center 
              filter grayscale 
              sm:w-1/3 sm:mt-[calc(8px*2.5)]
            ">
              <Image src="/images/stack/logos/sanity.svg" height={imageSize} width={imageSize} alt="Sanity" />
              <Text.Small.Dark className="
                mt-[calc(8px*2.625)] 
                max-w-[calc(8px*12.5)]
                text-center
              ">
                Sanity
              </Text.Small.Dark>
            </div>
            <div className="
              flex flex-col items-center justify-center 
              filter grayscale 
              sm:w-1/3 sm:mt-[calc(8px*2.5)]
            ">
              <Image src="/images/stack/logos/next.svg" height={imageSize} width={imageSize} alt="Next" />
              <Text.Small.Dark className="
                mt-[calc(8px*2.625)] 
                max-w-[calc(8px*12.5)]
                text-center
              ">
                Next.js
              </Text.Small.Dark>
            </div>
            <div className="
              flex flex-col items-center justify-center 
              filter grayscale 
              sm:w-1/3 sm:mt-[calc(8px*2.5)]
            ">
              <Image src="/images/stack/logos/styled-components.svg" height={imageSize} width={imageSize} alt="Styled" />
              <Text.Small.Dark className="
                mt-[calc(8px*2.625)] 
                max-w-[calc(8px*12.5)]
                text-center
              ">
                Tailwind CSS
              </Text.Small.Dark>
            </div>
            <div className="
              flex flex-col items-center justify-center 
              filter grayscale 
              sm:w-1/3 sm:mt-[calc(8px*2.5)]
            ">
              <Image src="/images/stack/logos/storybook.svg" height={imageSize} width={imageSize} alt="Storybook" />
              <Text.Small.Dark className="
                mt-[calc(8px*2.625)] 
                max-w-[calc(8px*12.5)]
                text-center
              ">
                Storybook
              </Text.Small.Dark>
            </div>
          </div>
        )
      ])}
    </div>
  )
}

export default Stack