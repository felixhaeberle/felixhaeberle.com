import Image from 'next/image'
import styled from 'styled-components'
import { useMediaQuery } from '../0_helpers/viewport';

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ProfileImage() {
  const isMediumBreakpoint = useMediaQuery(1024)
  const isSmallBreakpoint = useMediaQuery(640)
  
  let imageSize = isMediumBreakpoint ? 200 : 275
  imageSize = isSmallBreakpoint ? 150 : imageSize;

  return (
    <ProfileImageWrapper>
      <Image 
        src="/images/profile-2.svg" 
        width={imageSize ? imageSize : 275} 
        height={imageSize ? imageSize : 275}
        priority
        alt={'profile picture'} />
    </ProfileImageWrapper>
  )
}