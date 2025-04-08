import React from 'react'

export default function Badge({ text }) {
  return (
    <div className="
      inline-flex items-center justify-center
      bg-white/70 backdrop-blur-sm
      border border-textDark/20
      text-textDark text-xs font-mono
      py-[calc(var(--unit)*0.5)] px-[calc(var(--unit)*1.5)]
      rounded-full
    ">
      {text}
    </div>
  )
}