import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../0_helpers/date.jsx'
import { urlFor } from '../../lib/sanity'

export default function CardWritings({ title, text, date, link, isExternal, image, imageAlt }) {
  const linkTarget = isExternal ? "_blank" : undefined;
  const linkRel = isExternal ? "noopener noreferrer" : undefined;

  const getImageUrl = (image, options = {}) => {
    try {
      if (typeof image === 'string') {
        if (/^https?:\/\//i.test(image)) {
          return image;
        }
        return urlFor({_ref: image, _type: 'reference'})
          .width(options.width || 800)
          .height(options.height || 500)
          .quality(options.quality || 90)
          .url();
      }

      if (typeof image?.source === 'string') {
        if (/^https?:\/\//i.test(image.source)) {
          return image.source;
        }
        return urlFor({_ref: image.source, _type: 'reference'})
          .width(options.width || 800)
          .height(options.height || 500)
          .quality(options.quality || 90)
          .url();
      }

      return urlFor(image)
        .width(options.width || 800)
        .height(options.height || 500)
        .quality(options.quality || 90)
        .url();
    } catch (error) {
      console.error("Image URL error:", error);
      return "";
    }
  };

  return (
    <Link
      href={link}
      target={linkTarget}
      rel={linkRel}
      className="block"
    >
      <div className="flex flex-col gap-y-6 md:gap-y-8">
        {image ? (
          <div className="border border-textDark/20 aspect-[16/9] overflow-hidden">
            <Image
              {...(imageAlt && {alt: imageAlt})}
              src={getImageUrl(image, { width: 800, height: 500, quality: 90 })}
              width="800"
              height="500"
              sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <p className="font-sans text-base text-text font-medium md:max-w-[90%] sm:max-w-full leading-snug">{title}</p>
          <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark max-w-[90%] sm:max-w-full leading-relaxed">
            {text}
          </p>
          {date ? (
            <span className="font-mono text-xs text-textDarker tracking-normal leading-snug">
              <Date dateString={date} formatString={'dd. LLL yyyy'} />
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  )
}