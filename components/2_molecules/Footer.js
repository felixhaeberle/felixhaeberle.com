import FooterLink from '../1_atoms/FooterLink'
import FooterLinks from '../1_atoms/FooterLinks'
import FooterText from '../1_atoms/FooterText'
import { format } from 'date-fns'
import media from '../0_helpers/viewportValues';
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
`

let loadTime;
if (typeof window !== 'undefined') {
  loadTime = Date.now() - window.performance.timing.navigationStart; 
}

export default function Footer({settings}){
  let currentYear = format(new Date(), "yyyy");

  return (
    <FooterItem>
      {loadTime ? (
        <FooterItem.Cell>
          <FooterText.Dark>This page loaded in {loadTime}ms. </FooterText.Dark>
          &nbsp;
          <FooterLink link={'/'} text={'Details'} light/>
        </FooterItem.Cell>
      ) : null}
      <FooterItem.Cell>
        <FooterLinks links={settings.social_links.slice(0, 3)} />
      </FooterItem.Cell>
      <FooterItem.Cell>
        <FooterText.Dark>{currentYear} © {settings.title}&nbsp;</FooterText.Dark>
        <FooterLinks links={settings.legal_links} />
      </FooterItem.Cell>
    </FooterItem>
  )
}