import styled from 'styled-components'
import Text from './Text'

const FooterText = styled(Text.Mono.Dark)`
  font-size: var(--fontSizeExtraSmall);
  color: var(--colorText);
  margin-bottom: unset;
  text-transform: unset;
  letter-spacing: unset;
`

FooterText.Dark = styled(FooterText)`
  color: var(--colorTextDark);
`

export default FooterText