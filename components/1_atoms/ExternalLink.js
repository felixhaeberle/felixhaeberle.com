import { ArrowRight16 } from '@carbon/icons-react'
import Link from 'next/link'
import Text from './Text'
import styled from 'styled-components'

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

export default function ExternalLink (props) {
  return (
    <Link href={props.link} passHref>
      <ExternalLinkAnchor {...props} title={props.title}>
        <ExternalLinkItem>{props.title}</ExternalLinkItem><ArrowRight16 className="external-link-icon"/>
      </ExternalLinkAnchor>
    </Link>
  )
}