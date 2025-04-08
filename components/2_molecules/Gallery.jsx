import React from 'react'
import Text from '../1_atoms/Text.jsx'
import { useMediaQuery } from '../0_helpers/viewport'

export default function Gallery({ title }) {
  const isSmallBreakpoint = useMediaQuery(640); // mediaSizes.small * 16 (base font size)

  return ( 
    <div className="
      p-[calc(var(--unit)*5.75)_var(--body-padding-y)]
      bg-buttonBg border border-textDark/20
      sm:p-[calc(var(--unit)*3.75)_var(--body-padding-y)]
      sm:mx-[calc(var(--body-padding-y)*-1)]
      sm:border-x-0
    ">
      <Text.Mono.Dark>{title}</Text.Mono.Dark>
      <r-grid columns="12" columns-s="4">
        <r-cell span="5" span-s="4" className="imageCell">
          <img 
            src="images/fun-facts/firefighter.jpg"
            className="mb-unit-3 border border-textDark/20"
          />
          <p className="font-sans text-sm text-textDark leading-small-text font-medium max-w-[calc(var(--unit)*50)] sm:max-w-full">
            I'm a firefighter! Since I am attending university, I am currently taking a break from it – but I'm soon at it again.
          </p>
        </r-cell>
        <r-cell span="6" span-s="4" className="videoCell sm:flex sm:flex-col-reverse">
          <p className="font-sans text-sm text-textDark leading-small-text font-medium max-w-[calc(var(--unit)*50)] sm:max-w-full">
            I've done flatland unicycling. During my active time (2008 - 2015) I participated at championships all over Europe. I'm very proud of this achievement.
          </p>
          <div className="relative mt-unit-3 sm:mt-0 sm:mb-unit-3">
            <div className="absolute bottom-unit-2 left-[calc(var(--unit)*2.5)] sm:hidden">
              <div className="
                inline-flex items-center justify-center
                bg-white/70 backdrop-blur-sm
                border border-textDark/20
                text-textDark text-xs font-mono
                py-[calc(var(--unit)*0.5)] px-[calc(var(--unit)*1.5)]
                rounded-full
              ">
                Hover
              </div>
            </div>
            <video 
              className="w-full h-auto border border-textDark/20"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              muted loop playsInline
              {...(isSmallBreakpoint ? {controls: true} : {})}
              preload="none" poster="images/fun-facts/poster.jpg">
              <source src="images/fun-facts/movie-small.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </r-cell>
      </r-grid>
    </div>
  )
}