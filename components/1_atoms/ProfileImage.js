import Image from 'next/image'
import styled from 'styled-components'
import { useMediaQuery } from '../0_helpers/viewport';

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 1px solid rgba(var(--colorTextDarkRBG),0.2) !important;
  }
`

export default function ProfileImage() {
  const isMediumBreakpoint = useMediaQuery(1024)
  const isSmallBreakpoint = useMediaQuery(640)
  
  let imageSize = isMediumBreakpoint ? 200 : 275
  imageSize = isSmallBreakpoint ? 150 : imageSize;

  return (
    <ProfileImageWrapper>
      <Image
        style={{ border: '1px solid rgba(var(--colorTextDarkRGB), 0,2)' }} 
        src="/images/profile-nobackground.png" 
        width={imageSize ? imageSize : 275} 
        height={imageSize ? imageSize : 275}
        priority
        alt={'profile picture'} />
    </ProfileImageWrapper>
  )
}