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
        <>
          &nbsp;
            <FooterLinkAnchor>
              {light ? <FooterText>{text}</FooterText> : <FooterText.Dark>{text}</FooterText.Dark> } 
            </FooterLinkAnchor>
          &nbsp;
        </>
       </Link>) : ''
    }
  </>
  )
}