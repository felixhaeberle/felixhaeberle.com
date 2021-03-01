import styled from 'styled-components'
import FooterText from '../1_atoms/FooterText'
import FooterLink from '../1_atoms/FooterLink'

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
      {
        links.map(({title, url}, index) => {
          return ( 
            <FooterLinksItem.Child key={index}>
              &nbsp;
                <FooterLink {...{url, title}}/>
              &nbsp;
              {index !== links.length -1 ? <FooterText.Dark>/</FooterText.Dark> : ''}
            </FooterLinksItem.Child>
          )
        })
      }
      </FooterLinksItem>
    </nav>
  )
}