import Text from './Text'
import styled from 'styled-components'

export const Headline = styled(Text)`
  font-size: calc(var(--unit)*3.5);
  line-height: 1.3;
  margin-bottom: calc(var(--unit)*4);
`

Headline.Large = Headline;

Headline.Medium = styled(Headline.Large)`
  font-size: calc(var(--unit)*2.75);
  line-height: 1.4;
  margin-bottom: calc(var(--unit)*3);
`