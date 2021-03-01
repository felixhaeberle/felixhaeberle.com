import styled from 'styled-components'


// Text
const Text = styled.p`
  font-family: var(--fontSans);
  font-size: var(--fontSizeMedium);
  color: var(--colorText);
  font-weight: 500;
`

Text.Dark = styled(Text)`
  color: var(--colorTextDark);
`

// Text Large
Text.Large = styled.h1`
  font-family: var(--fontSans);
  font-size: var(--fontSizeExtraLarge);
  color: var(--colorTextLight);
  font-weight: 500;
`

Text.Large.Dark = styled(Text.Large)`
  color: var(--colorTextDark);
`

// Text Medium
Text.Medium = styled(Text)``
Text.Medium.Dark = styled(Text.Dark)``

// Text Small
Text.Small = styled.p`
  font-family: var(--fontSans);
  font-size: var(--fontSizeSmall);
  color: var(--colorText);
  line-height: var(--lineHeightSmallText);
  font-weight: 500;
`

Text.Small.Dark = styled(Text.Small)`
  color: var(--colorTextDark);
`

// Text Mono
Text.Mono = styled.p`
  font-family: var(--fontMono);
  font-size: var(--fontSizeLarge);
  color: var(--colorText);
  font-weight: 500;
  letter-spacing: var(--letterSpacing);
  text-transform: uppercase;
  margin-bottom: calc(var(--unit)* 4.5);
`

Text.Mono.Dark = styled(Text.Mono)`
  color: var(--colorTextDark);
`

export default Text;