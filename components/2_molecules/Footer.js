import { format } from 'date-fns'
import styled from 'styled-components'
import FooterText from '../1_atoms/FooterText'
import FooterLink from '../1_atoms/FooterLink'
import FooterLinks from '../1_atoms/FooterLinks'
import { site, socialLinks, legalLinks } from '../../pages/_app';

export const FooterItem = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid var(--colorTextDark);
  padding: calc(var(--unit)*3) 0;
  margin-top: calc(var(--unit)*16);
`

FooterItem.Cell = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export default function Footer(){
  let currentYear = format(new Date(), "yyyy");

  return (
    <FooterItem>
      <FooterItem.Cell>
        <FooterText.Dark>This is a text.</FooterText.Dark>
        &nbsp;
        <FooterLink url={'/'} title={'Details'} light/>
      </FooterItem.Cell>
      <FooterItem.Cell>
        <FooterLinks links={socialLinks.slice(0, 3)} />
      </FooterItem.Cell>
      <FooterItem.Cell>
        <FooterText.Dark>{currentYear} © {site.name}&nbsp;</FooterText.Dark>
        <FooterLinks links={legalLinks} />
      </FooterItem.Cell>
    </FooterItem>
  )
}