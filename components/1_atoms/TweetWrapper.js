import styled from 'styled-components'

const TweetWrapperItem = styled.div`
  width: 100%;
  margin: 0 auto;
  user-select: none;
  pointer-events: none;
  margin: calc(var(--unit)*6.75) 0;
`

export default function TweetWrapper({children}) {
  return (
    <TweetWrapperItem>
      {children}
    </TweetWrapperItem>
  )
}