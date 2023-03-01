import FooterLink from '../1_atoms/FooterLink'
import FooterLinks from '../1_atoms/FooterLinks'
import FooterText from '../1_atoms/FooterText'
import { format } from 'date-fns'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'

export const FooterItem = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid var(--colorTextDark);
  padding: calc(var(--unit)*3) 0;
  margin-top: calc(var(--unit)*16);

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

FooterItem.Cell = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin-bottom: calc(var(--unit)*0.5);
  `}
`

let loadTime = 0;
if (typeof window !== 'undefined'){
  loadTime = Date.now() - window.performance.timing.navigationStart
}

export default function Footer({ settings }) {
  let currentYear = format(new Date(), "yyyy");

  return (
    <FooterItem>
      {typeof window !== 'undefined' && 
        <FooterItem.Cell>
          <FooterText.Dark>{`This page loaded in ${loadTime}ms.`}</FooterText.Dark>
        </FooterItem.Cell>
      }
      <FooterItem.Cell>
        <FooterLinks links={settings.social_links.slice(0, 3)} />
      </FooterItem.Cell>
      <FooterItem.Cell>
        <FooterText.Dark>{`${currentYear} © ${settings.title}`}</FooterText.Dark>
      </FooterItem.Cell>
      <FooterItem.Cell>
        <FooterLinks links={settings.legal_links} />&nbsp;
      </FooterItem.Cell>
    </FooterItem>
  )
}