'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamically import Carbon icons to ensure they're only loaded on the client
const ArrowRight16 = dynamic(
  () => import('@carbon/icons-react').then((mod) => mod.ArrowRight16),
  { ssr: false, loading: () => <span className="w-4 h-4 inline-block" /> }
)

export default function ExternalLink(props) {
  return (
    <Link 
      href={props.link} 
      className="flex w-[calc(8px*17.5)]" 
      title={props.title}
      target={props.target || "_blank"}
      rel={props.rel || "noopener noreferrer"}
    >
      <span
        className="
          font-mono text-lg text-text font-medium tracking-custom uppercase
          text-textDark text-sm normal-case font-normal tracking-normal
          mb-0 mr-[calc(8px*1)]
          hover:cursor-pointer
        "
      >
        {props.title}
      </span>
      <ArrowRight16 className="external-link-icon"/>
    </Link>
  )
}