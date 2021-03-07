import styles from '../4_templates/layout.module.css'
import Text from '../1_atoms/Text'
import Navigation from './Navigation'
import HeaderWrapper from '../1_atoms/HeaderWrapper'


export default function Header({ home, settings }) {

  const homeText = 'Hi, I’m Felix, an interaction designer and frontend developer. I’m dedicated to Open Source and Accessibility.'

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

  return (
      <header className={styles.header}>
        <Navigation navigationItems={navigationItems} title={settings.title}/>
        <HeaderWrapper>
            { home ? (<Text.Large>{settings.frontpage_text}</Text.Large>) : ''}
        </HeaderWrapper>
      </header>
  )
}