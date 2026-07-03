import React from 'react'
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
      <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">{title}</p>
      <div className="
        flex flex-col lg:flex-row
        gap-x-8 md:gap-x-12 lg:gap-x-16
        gap-y-8 md:gap-y-10 lg:gap-y-12
      ">
        <div className="lg:w-5/12">
          <img 
            src="images/fun-facts/firefighter.jpg"
            className="mb-unit-3 border border-textDark/20"
          />
          <p className="font-sans text-sm text-textDark leading-small-text font-medium max-w-[calc(var(--unit)*50)] sm:max-w-full">
            I'm a firefighter (not on duty rn).
          </p>
        </div>
        <div className="lg:w-7/12 flex flex-col sm:flex-col-reverse">
          <p className="font-sans text-sm text-textDark leading-small-text font-medium max-w-[calc(var(--unit)*50)] sm:max-w-full">
            I've done flatland unicycling. During my active time (2008 - 2015) I participated at championships all over Europe.
          </p>
          <div className="group relative mt-unit-3 sm:mt-0 sm:mb-unit-3">
            <div className="absolute bottom-unit-3 left-unit-3 pointer-events-none sm:hidden">
              <div className="
                inline-flex items-center justify-center
                bg-white/80 backdrop-blur-sm
                border border-textDark/20
                font-mono text-xs text-textDark font-medium uppercase tracking-custom
                py-[calc(var(--unit)*0.75)] px-unit-1.5
                rounded-full
              ">
                Hover to play
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
        </div>
      </div>
    </div>
  )
}