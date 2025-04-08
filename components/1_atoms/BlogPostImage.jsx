import React from 'react'
import Text from './Text.jsx'
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
      <Text.Small.Dark className="mt-[calc(var(--unit)*2)]">
        {text}
      </Text.Small.Dark>
    </div>
  )
}