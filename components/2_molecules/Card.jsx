import React from 'react'
import Date from '../0_helpers/date.jsx'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../1_atoms/Text.jsx'
import { urlFor } from '../../lib/sanity'

export default function Card({image, imageAlt, title, link, text, year, date, isWork, isStudy}) {
  // Handle fallback for image urls
  const getImageUrl = (image, options = {}) => {
    try {
      // If image is already a string (happens when image is just the ID)
      if (typeof image === 'string') {
        // Format it properly for Sanity
        return urlFor({_ref: image, _type: 'reference'})
          .width(options.width || 350)
          .height(options.height || 175)
          .quality(options.quality || 80)
          .url();
      }
      
      // Handle regular image objects from Sanity
      return urlFor(image)
        .width(options.width || 350)
        .height(options.height || 175)
        .quality(options.quality || 80)
        .url();
    } catch (error) {
      console.error("Image URL error:", error);
      // Return a placeholder image or empty string
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='175' viewBox='0 0 350 175'%3E%3Crect width='350' height='175' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='14' fill='%23888'%3EImage not available%3C/text%3E%3C/svg%3E";
    }
  };
  return (
    <Link 
      href={link} 
      target={isWork || isStudy ? "_blank" : undefined}
      className="block"
    >
      <div className={`
        flex flex-col 
        ${isWork ? 'mb-0' : 'mb-unit-4.5'}
      `}>
        {image ? (
          isWork ? (
            <div className="
              mb-unit-2 relative h-[min(11vw,160px)] max-w-[90%] bg-buttonBg
              md:h-[min(20vw,190px)] md:max-w-full
              sm:h-[min(36vw,220px)] sm:max-w-full
              hover:before:opacity-85
              screenshot
              before:content-[''] before:h-full before:w-full before:absolute before:inset-0 
              before:z-[1001] before:opacity-100 
              before:bg-gradient-to-b before:from-buttonBg/10 before:from-50% before:to-buttonBg 
              before:transition-opacity before:duration-150 before:ease-in
            ">
              <img 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-[10%_20%_0_20%] w-full h-auto"
                {...(imageAlt && {alt: imageAlt})} 
                src={getImageUrl(image, { width: 390, height: 216 })} 
                width="260" 
                height="144" 
              />
            </div>
          ) : (
            <div className="
              mb-unit-2 preview
              [&_img]:border [&_img]:border-textDark/20 [&_img]:transition-opacity 
              [&_img]:duration-220 [&_img]:ease-in [&_img]:will-change-opacity
              [&_img:hover]:opacity-90
            ">
              <Image
                {...(imageAlt && {alt: imageAlt})}
                src={getImageUrl(image, { width: 350, height: 175, quality: 100 })}
                width="350" 
                height="175" 
              />
            </div>
          )
        ) : ''}
        <div className="flex flex-row justify-start w-full mb-[calc(8px*1.25)]">
          <Text className="md:max-w-[90%] sm:max-w-full">{title}</Text>
          {year ? 
            <Text.Mono.Dark className="text-base ml-[calc(8px*2.5)] mb-0">
              <Date dateString={year} formatString={'yyyy'}/>
            </Text.Mono.Dark> 
          : ''}     
        </div>
        {date ? (
          <div className="max-w-[90%] sm:max-w-full">
            <Text.Small.Dark className="inline">{text} </Text.Small.Dark> 
            <Text.Small className="inline-block text-textDarker">
              <Date dateString={date} formatString={'LLL, yyyy'}/>
            </Text.Small>
          </div>
        ) : (
          <div className="max-w-[90%] sm:max-w-full">
            <Text.Small.Dark className={`
              ${isStudy ? 
                'line-clamp-3 overflow-hidden' 
                : ''
              }
            `}>
              {text}
            </Text.Small.Dark>
          </div>
        )}
      </div>
    </Link>
  )
}