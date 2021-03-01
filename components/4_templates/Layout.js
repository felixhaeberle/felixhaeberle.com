import Head from 'next/head'
import styles from './layout.module.css'
import Header from '../2_molecules/Header'
import Footer from '../2_molecules/Footer'

export const site = {
  name: 'Felix Häberle',
  title: 'Felix Häberle – Portfolio'
}

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="description" content={site.title} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            site.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={site.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header home={home} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
