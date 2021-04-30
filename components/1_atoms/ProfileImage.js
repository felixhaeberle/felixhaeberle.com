import Image from 'next/image'
import styled from 'styled-components'

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ProfileImage() {
  return (
    <ProfileImageWrapper>
      <Image src="/images/profile-2.svg" width="275" height="275" />
    </ProfileImageWrapper>
  )
}