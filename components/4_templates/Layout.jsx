import React from 'react'
import Footer from '../2_molecules/Footer.jsx'
import Head from 'next/head'
import Header from '../2_molecules/Header.jsx'
import styles from './layout.module.css'

export default function Layout({ children, settings, home, pageTitle }) {
  // Default settings to handle missing data
  const defaultSettings = {
    title: 'Felix Häberle',
    site_title: 'Felix Häberle – Portfolio',
    frontpage_text: 'Personal Website',
    currently: '',
    social_links: [],
    legal_links: []
  };

  // Use settings if available, otherwise use defaults
  const siteSettings = settings || defaultSettings;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          property="og:image"
          content={`https://og-image.felixhaeberle.vercel.app/${pageTitle ? encodeURI(
            'Felix Häberle – ' + pageTitle + ''
          ) : 'Felix Häberle – Portfolio'}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Ffelixhaeberle.com%2F_next%2Fimage%3Furl%3D%252Fimages%252Fprofile-2.svg%26w%3D640%26q%3D75&widths=450&heights=450`}
        />
        <meta name="og:title" content={pageTitle ? pageTitle : 'Felix Häberle – Portfolio'} />
        <meta name="description" content={pageTitle ? ('Felix Häberle – '  + pageTitle) : 'Felix Häberle – Portfolio'} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header settings={siteSettings} />
      <main className="space-y-16 md:space-y-20 lg:space-y-24">{children}</main>
      <Footer settings={siteSettings}/>
    </div>
  )
}