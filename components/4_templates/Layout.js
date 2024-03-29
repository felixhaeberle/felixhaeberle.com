import Footer from '../2_molecules/Footer'
import Head from 'next/head'
import Header from '../2_molecules/Header'
import styles from './layout.module.css'

export default function Layout({ children, settings, home, pageTitle }) {
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet" />
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
      <Header home={home} settings={settings} pageTitle={pageTitle}/>
      <main>{children}</main>
      <Footer settings={settings}/>
    </div>
  )
}