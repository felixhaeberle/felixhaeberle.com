import { useEffect, useState } from 'react'

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
`


export default function Footer({ settings }){
  let currentYear = format(new Date(), "yyyy");
  const [loadTime, setLoadTime] = useState();
  const [showloadTime, setShowLoadTime] = useState(false);

  useEffect(() => {
    setLoadTime(window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart);
    setShowLoadTime(true); 
  })

  return (
    <FooterItem>
      {showloadTime ? (
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