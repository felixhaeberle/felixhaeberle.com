import Footer from '../2_molecules/Footer'
import Head from 'next/head'
import Header from '../2_molecules/Header'
import styles from './layout.module.css'

export default function Layout({ children, settings, home, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="description" content={'Felix Häberle – '  + pageTitle} />
        <meta name="robots" content="noindex"></meta>
        <meta
          property="og:image"
          content={`https://og-image.felixhaeberle.vercel.app/${pageTitle ? + (encodeURI(
            'Felix Häberle – **' + pageTitle + '**'
          )) : 'Felix Häberle – Portfolio'}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Ffelixhaeberle.com%2F_next%2Fimage%3Furl%3D%252Fimages%252Fprofile-2.svg%26w%3D640%26q%3D75&widths=450&heights=450`}
        />
        <meta name="og:title" content={pageTitle ? pageTitle : 'Felix Häberle – Portfolio'} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header home={home} settings={settings} pageTitle={pageTitle}/>
      <main>{children}</main>
      <Footer settings={settings}/>
    </div>
  )
}