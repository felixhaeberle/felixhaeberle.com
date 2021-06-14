import FooterText from '../1_atoms/FooterText'
import Link from 'next/link'
import styled from 'styled-components'

const FooterLinkAnchor = styled.a`
  &:hover {
    color: var(--colorText);
    text-decoration: underline;
    cursor: pointer;

    ${FooterText.Dark} {
      color: var(--colorText);
    }
  }
` 

export default function FooterLink({text, link, light}){
  return (
  <>
    { text && link ? 
      (<Link href={link} passHref>
        <FooterLinkAnchor>
          {light ? <FooterText>&nbsp;{text}&nbsp;</FooterText> : <FooterText.Dark>&nbsp;{text}&nbsp;</FooterText.Dark> } 
        </FooterLinkAnchor>
       </Link>) : ''
    }
  </>
  )
}