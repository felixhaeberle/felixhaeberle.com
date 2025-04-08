import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from '../0_helpers/viewport.jsx';

export default function ProfileImage() {
  const isMediumBreakpoint = useMediaQuery(1024)
  const isSmallBreakpoint = useMediaQuery(640)
  
  let imageSize = isMediumBreakpoint ? 200 : 275
  imageSize = isSmallBreakpoint ? 150 : imageSize;

  return (
    <div className="flex justify-center items-center">
      <Image
        className="border border-textDark/20"
        src="/images/profile-nobackground.png" 
        width={imageSize ? imageSize : 275} 
        height={imageSize ? imageSize : 275}
        priority
        alt={'profile picture'} 
      />
    </div>
  )
}