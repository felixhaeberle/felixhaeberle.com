import FooterLink from '../1_atoms/FooterLink'
import FooterText from '../1_atoms/FooterText'
import styled from 'styled-components'

const FooterLinksItem = styled.ul`
display: flex;
list-style: none;
`

FooterLinksItem.Child = styled.li`
  display: flex;

  &:first-child {

  }
`

export default function FooterLinks({links}) {
  return (
    <nav>
      <FooterLinksItem>
      { links && 
        links.map(({text, link}, index) => ( 
            <FooterLinksItem.Child key={index}>
              <FooterLink {...{text, link}}/>
              {index !== links.length -1 && <FooterText.Dark>&nbsp;/&nbsp;</FooterText.Dark>}
            </FooterLinksItem.Child>
          ))
      }
      </FooterLinksItem>
    </nav>
  )
}