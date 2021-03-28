import FooterLink from '../1_atoms/FooterLink'
import FooterText from '../1_atoms/FooterText'
import styled from 'styled-components'

const FooterLinksItem = styled.ul`
display: flex;
list-style: none;
`

FooterLinksItem.Child = styled.li`
  display: flex;
`

export default function FooterLinks({links}) {
  return (
    <nav>
      <FooterLinksItem>
      { links ? 
        links.map(({text, link}, index) => {
          return ( 
            <FooterLinksItem.Child key={index}>
              &nbsp;
                <FooterLink {...{text, link}}/>
              &nbsp;
              {index !== links.length -1 ? <FooterText.Dark>/</FooterText.Dark> : ''}
            </FooterLinksItem.Child>
          )
        }) : ''
      }
      </FooterLinksItem>
    </nav>
  )
}