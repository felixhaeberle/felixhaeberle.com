import React from 'react'
import Date from '../0_helpers/date.jsx'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'

export default function Card({image, imageAlt, title, link, text, year, date, isWork, isStudy, isExternal, compactTitle, imageSpacing, titleSpacing}) {
  // Handle fallback for image urls
  const getImageUrl = (image, options = {}) => {
    try {
      // If image is already a string (happens when image is just the ID)
      if (typeof image === 'string') {
        if (/^https?:\/\//i.test(image)) {
          return image;
        }
        // Format it properly for Sanity
        return urlFor({_ref: image, _type: 'reference'})
          .width(options.width || 350)
          .height(options.height || 175)
          .quality(options.quality || 80)
          .url();
      }

      if (typeof image?.source === 'string') {
        if (/^https?:\/\//i.test(image.source)) {
          return image.source;
        }
        return urlFor({_ref: image.source, _type: 'reference'})
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
  const linkTarget = isWork || isStudy || isExternal ? "_blank" : undefined;
  const linkRel = linkTarget ? "noopener noreferrer" : undefined;
  const resolvedImageAlt = imageAlt || image?.alt;

  const previewMarginClass = imageSpacing || 'mb-[calc(var(--unit)*1.25)]';
  const titleMarginClass = titleSpacing || (
    compactTitle
      ? 'mb-0'
      : (year ? 'mb-unit-2' : 'mb-[calc(8px*1.25)]')
  );

  return (
    <Link 
      href={link} 
      target={linkTarget}
      rel={linkRel}
      className="block"
    >
      <div className={`
        flex flex-col 
        ${isWork ? 'mb-0' : 'mb-unit-4.5'}
      `}>
        {image ? (
          isWork ? (
            <div className={`
              ${previewMarginClass} relative h-[min(11vw,160px)] max-w-[90%] bg-buttonBg
              md:h-[min(20vw,190px)] md:max-w-full
              sm:h-[min(36vw,220px)] sm:max-w-full
              hover:before:opacity-85
              screenshot
              before:content-[''] before:h-full before:w-full before:absolute before:inset-0 
              before:z-[1001] before:opacity-100 
              before:bg-gradient-to-b before:from-buttonBg/10 before:from-50% before:to-buttonBg 
              before:transition-opacity before:duration-150 before:ease-in
            `}>
              <img 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-[10%_20%_0_20%] w-full h-auto"
                {...(resolvedImageAlt && {alt: resolvedImageAlt})}
                src={getImageUrl(image, { width: 390, height: 216 })} 
                width="260" 
                height="144" 
              />
            </div>
          ) : (
            <div className={`
              ${previewMarginClass} preview
              [&_img]:border [&_img]:border-textDark/20 [&_img]:transition-opacity 
              [&_img]:duration-220 [&_img]:ease-in [&_img]:will-change-opacity
              [&_img:hover]:opacity-90
            `}>
              <Image
                {...(resolvedImageAlt && {alt: resolvedImageAlt})}
                src={getImageUrl(image, { width: 350, height: 175, quality: 100 })}
                width="350" 
                height="175" 
              />
            </div>
          )
        ) : ''}
        {year ? (
          <div className={`flex flex-row justify-start items-baseline w-full ${titleMarginClass}`}>
            <p className="font-sans text-base text-text font-medium max-w-[90%] sm:max-w-full">{title}</p>
            <span className="font-mono text-base text-textDark font-medium tracking-custom uppercase ml-[calc(var(--unit)*2.5)] mb-0">
              <Date dateString={year} formatString={'yyyy'} />
            </span>
          </div>
        ) : (
          <div className={`flex flex-row flex-wrap items-baseline gap-x-3 w-full ${titleMarginClass}`}>
            <p className="font-sans text-base text-text font-medium md:max-w-[90%] sm:max-w-full">{title}</p>
          </div>
        )}
        {date ? (
          <div className="max-w-[90%] sm:max-w-full">
            <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark inline">{text} </span>
            <span className="font-sans text-sm text-text leading-small-text font-medium inline-block text-textDarker">
              <Date dateString={date} formatString={'LLL, yyyy'}/>
            </span>
          </div>
        ) : (
          <div className="max-w-[90%] sm:max-w-full">
            <p className={`
              font-sans text-sm text-text leading-small-text font-medium text-textDark
              ${isStudy ? 
                'line-clamp-3 overflow-hidden' 
                : ''
              }
            `}>
              {text}
            </p>
          </div>
        )}
      </div>
    </Link>
  )
}
