import styled from 'styled-components'
import media from '../0_helpers/viewportValues'

const HeaderWrapper = styled.div`
  margin-top: calc(var(--unit) *31);
  margin-bottom: calc(var(--unit) *18.75);
  max-width: 60%;

  ${media.lessThan('medium')`
    max-width: 90%;
    margin-top: calc(var(--unit) *25);
    margin-bottom: calc(var(--unit) *12.75);
  `}
`

export default HeaderWrapper;