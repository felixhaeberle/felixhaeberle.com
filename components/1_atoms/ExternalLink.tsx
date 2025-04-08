'use client'

import React from 'react'
import Link from 'next/link'
import Text from './Text.jsx'
import dynamic from 'next/dynamic'

// Dynamically import Carbon icons to ensure they're only loaded on the client
const ArrowRight16 = dynamic(
  () => import('@carbon/icons-react').then((mod) => mod.ArrowRight16),
  { ssr: false, loading: () => <span className="w-4 h-4 inline-block" /> }
)

interface ExternalLinkProps {
  title: string
  link: string
  target?: string
  rel?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  title, 
  link,
  target = "_blank",
  rel = "noopener noreferrer"
}) => {
  return (
    <Link 
      href={link} 
      className="flex w-[calc(8px*17.5)]" 
      title={title}
      target={target}
      rel={rel}
    >
      <Text.Mono.Dark 
        className="
          text-sm normal-case font-normal 
          tracking-normal mb-0 mr-[calc(8px*1)]
          hover:cursor-pointer
        "
      >
        {title}
      </Text.Mono.Dark>
      <ArrowRight16 className="external-link-icon"/>
    </Link>
  )
}

export default ExternalLink