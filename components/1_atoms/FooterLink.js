import styled from 'styled-components'
import FooterText from '../1_atoms/FooterText'
import Link from 'next/link'


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

export default function FooterLink({url, title, light}){
  return (
    <Link href={url} passHref>
      <FooterLinkAnchor>
        {light ? <FooterText>{title}</FooterText> : <FooterText.Dark>{title}</FooterText.Dark> } 
      </FooterLinkAnchor>
    </Link>
  )
}