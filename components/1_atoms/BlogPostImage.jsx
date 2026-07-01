import React from 'react'
import { urlFor } from '../../lib/sanity'

export default function BlogPostImage({image, imageAlt, text}) {
  return (
    <div className="
      w-full 
      max-w-[min(800px,100%)] 
      mt-[calc(var(--unit)*9.375)] 
      mb-[calc(var(--unit)*8.125)]
    ">
      <img
        {...( imageAlt && { alt: imageAlt })}  
        src={urlFor(image).width(1000).quality(80).url()} 
        className="object-cover w-full" 
      />
      <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark mt-[calc(var(--unit)*2)]">
        {text}
      </p>
    </div>
  )
}