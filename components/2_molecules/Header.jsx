import React from 'react'
import Navigation from './Navigation.jsx'
import styles from '../4_templates/layout.module.css'

const navigationItems = [
  { url: '/work', title: 'Work' },
  { url: '/studies', title: 'Studies' },
  { url: '/writings', title: 'Writings' },
  { url: '/me', title: 'Thats me' },
]

export default function Header({ settings }) {
  return (
    <header className={`${styles.header} mb-12 sm:mb-0`}>
      <Navigation navigationItems={navigationItems} title={settings.title}/>
    </header>
  )
}
