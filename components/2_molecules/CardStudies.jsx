import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../0_helpers/date.jsx'
import { urlFor } from '../../lib/sanity'

export default function CardStudies({ title, text, date, image, imageAlt, link }) {
  const getImageUrl = (image, options = {}) => {
    try {
      if (typeof image === 'string') {
        if (/^https?:\/\//i.test(image)) {
          return image;
        }
        return urlFor({_ref: image, _type: 'reference'})
          .width(options.width || 900)
          .height(options.height || 600)
          .quality(options.quality || 90)
          .url();
      }

      if (typeof image?.source === 'string') {
        if (/^https?:\/\//i.test(image.source)) {
          return image.source;
        }
        return urlFor({_ref: image.source, _type: 'reference'})
          .width(options.width || 900)
          .height(options.height || 600)
          .quality(options.quality || 90)
          .url();
      }

      return urlFor(image)
        .width(options.width || 900)
        .height(options.height || 600)
        .quality(options.quality || 90)
        .url();
    } catch (error) {
      console.error("Image URL error:", error);
      return "";
    }
  };

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="site-study-card">
        <div className="site-study-card__content">
          <div className="flex flex-col gap-y-3 md:gap-y-4">
            <p className="font-sans text-base text-text font-medium md:max-w-[90%] sm:max-w-full">{title}</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark line-clamp-3 max-w-[90%] sm:max-w-full">
              {text}
            </p>
            {date ? (
              <span className="font-mono text-base text-textDarker tracking-normal leading-none mt-unit-1">
                <Date dateString={date} formatString={'yyyy'} />
              </span>
            ) : null}
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDarker">View case study</p>
          </div>
        </div>
        <div className="site-study-card__media">
          {image ? (
            <div className="site-study-card__image">
              <Image
                {...(imageAlt && {alt: imageAlt})}
                src={getImageUrl(image, { width: 1200, height: 750, quality: 90 })}
                width="1200"
                height="750"
                sizes="(max-width: 64rem) 100vw, (max-width: 80rem) 50vw, 66vw"
                className="w-full h-auto"
              />
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  )
}
