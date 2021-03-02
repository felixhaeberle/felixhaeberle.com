import styled from 'styled-components'
import Link from 'next/link'
import Text from './Text'
import { ArrowRight16 } from '@carbon/icons-react'


const ExternalLinkAnchor = styled.a`
  display: flex;
  width: calc(var(--unit)*17.5);
`

const ExternalLinkItem = styled(Text.Mono.Dark)`
  font-size: var(--fontSizeSmall);
  letter-spacing: none;
  text-transform: none;
  font-weight: 400;
  margin-bottom: 0;
  margin-right: calc(var(--unit) * 1);
  
  &:hover {
    cursor: pointer;
  }
`

export default function ExternalLink ({link, title}) {
  return (
    <Link href={link} passHref>
      <ExternalLinkAnchor>
        <ExternalLinkItem>{title}</ExternalLinkItem><ArrowRight16 class="external-link-icon"/>
      </ExternalLinkAnchor>
    </Link>
  )
}