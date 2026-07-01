'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@carbon/icons-react'

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
      <span
        className="
          font-mono text-lg text-text font-medium tracking-custom uppercase
          text-textDark text-sm normal-case font-normal tracking-normal
          mb-0 mr-[calc(8px*1)]
          hover:cursor-pointer
        "
      >
        {title}
      </span>
      {React.createElement(ArrowRight, { className: 'external-link-icon' })}
    </Link>
  )
}

export default ExternalLink
