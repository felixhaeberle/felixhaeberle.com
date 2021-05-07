import Navigation from './Navigation'
import ProfileImage from '../1_atoms/ProfileImage'
import Text from '../1_atoms/Text'
import media from 'styled-media-query'
import styled from 'styled-components'
import styles from '../4_templates/layout.module.css'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`

const HeaderText = styled(Text.Large)`
  margin-top: calc(var(--unit) *31);
  margin-bottom: ${props => (props.isHome ? "calc(var(--unit) *12.75)" : "calc(var(--unit) *8.75)")};
  max-width: 60%;

  ${media.lessThan('medium')`
    max-width: 90%;
    margin-top: ${props => (props.isHome ? "calc(var(--unit) *10)" : "calc(var(--unit) *15)")};
    margin-bottom: ${props => (props.isHome ? "calc(var(--unit) *12.75)" : "calc(var(--unit) *5.75)")};
  `} 

  ${media.lessThan('small')`
    max-width: 90%;
    margin-top: ${props => (props.isHome ? "calc(var(--unit) *5)" : "calc(var(--unit) *11)")};
    margin-bottom: ${props => (props.isHome ? "calc(var(--unit) *8.75)" : "calc(var(--unit) *4.75)")};
  `} 
`

const navigationItems = [
  {
    url: '/work',
    title: 'Work' 
  },
  {
    url: '/studies',
    title: 'Studies' 
  },
  {
    url: '/writings',
    title: 'Writings' 
  },
  {
    url: '/me',
    title: 'Thats me' 
  },
]

export default function Header({ home, settings, pageTitle }) {
  return (
      <header className={styles.header}>
        <Navigation navigationItems={navigationItems} title={settings.title}/>
        <HeaderWrapper>
            { home ? 
            (<>
              <HeaderText isHome={home}>{settings.frontpage_text}</HeaderText>
              <ProfileImage />
            </>) : 
            (pageTitle ? (
              <HeaderText isHome={home}>{pageTitle}</HeaderText>
            ) : null)}
        </HeaderWrapper>
      </header>
  )
}