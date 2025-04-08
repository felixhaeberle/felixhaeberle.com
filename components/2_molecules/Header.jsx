import React from 'react'
import Navigation from './Navigation.jsx'
import ProfileImage from '../1_atoms/ProfileImage.jsx'
import Text from '../1_atoms/Text.jsx'
import styles from '../4_templates/layout.module.css'

const navigationItems = [
  { url: '/work', title: 'Work' },
  { url: '/studies', title: 'Studies' },
  { url: '/writings', title: 'Writings' },
  { url: '/me', title: 'Thats me' },
]

export default function Header({ home, settings, pageTitle }) {
  return (
    <header className={styles.header}>
      <Navigation navigationItems={navigationItems} title={settings.title}/>
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
        {home ? (
          <>
            <Text.Large className="max-w-[90%] md:max-w-[60%] mt-8 md:mt-16 lg:mt-24 mb-8 md:mb-12">
              {settings.frontpage_text}
            </Text.Large>
            <ProfileImage />
          </>
        ) : (
          pageTitle ? (
            <Text.Large className="max-w-[90%] md:max-w-[60%] mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-6">
              {pageTitle}
            </Text.Large>
          ) : null
        )}
      </div>
    </header>
  )
}