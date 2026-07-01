import React from 'react'
import Footer from '../2_molecules/Footer.jsx'
import Head from 'next/head'
import Header from '../2_molecules/Header.jsx'
import styles from './layout.module.css'
import {
  DEFAULT_SAME_AS,
  buildSiteStructuredData,
  getPageMetadata,
  getSiteUrl,
  uniqueLinks
} from '../../lib/site-metadata'

export default function Layout({
  children,
  settings,
  home,
  pageTitle,
  canonicalPath,
  markdownPath,
  metaDescription,
  ogImage,
  ogType = 'website',
  schemaType,
  structuredDataItems = []
}) {
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
  const socialLinks = uniqueLinks([
    ...DEFAULT_SAME_AS,
    ...(siteSettings.social_links || []).map((link) => link?.link)
  ])
  const pageMetadata = getPageMetadata({
    home,
    pageTitle,
    canonicalPath,
    markdownPath,
    metaDescription,
    schemaType
  })
  const resolvedPageTitle = pageTitle ? `Felix Häberle – ${pageTitle}` : 'Felix Häberle – Portfolio'
  const resolvedDescription = pageMetadata.description
  const defaultOgImage = `https://og-image.felixhaeberle.vercel.app/${pageTitle ? encodeURI(
    'Felix Häberle – ' + pageTitle + ''
  ) : 'Felix Häberle – Portfolio'}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Ffelixhaeberle.com%2F_next%2Fimage%3Furl%3D%252Fimages%252Fprofile-2.svg%26w%3D640%26q%3D75&widths=450&heights=450`
  const structuredData = buildSiteStructuredData({
    page: {
      home,
      pageTitle,
      canonicalPath,
      markdownPath,
      metaDescription,
      schemaType
    },
    sameAs: socialLinks,
    extraGraph: structuredDataItems
  })

  return (
    <div className={styles.container}>
      <Head>
        <link rel="canonical" href={pageMetadata.url} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="alternate" type="text/markdown" href={getSiteUrl('/llms.txt')} title="LLM-readable site index" />
        <link rel="alternate" type="text/markdown" href={getSiteUrl('/llms-full.txt')} title="Full LLM-readable site context" />
        <link rel="alternate" type="application/json" href={getSiteUrl('/ai.json')} title="AI-readable site data" />
        <link rel="alternate" type="application/ld+json" href={getSiteUrl('/schema.jsonld')} title="Schema.org site graph" />
        {pageMetadata.markdownUrl ? (
          <link rel="alternate" type="text/markdown" href={pageMetadata.markdownUrl} title={`${pageMetadata.title} as Markdown`} />
        ) : null}
        <link rel="sitemap" type="application/xml" href={getSiteUrl('/sitemap.xml')} />
        {socialLinks.map((link) => (
          <link key={link} rel="me" href={link} />
        ))}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <meta name="author" content="Felix Häberle" />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={pageMetadata.url} />
        <meta property="og:site_name" content="Felix Häberle" />
        <meta property="og:image" content={ogImage || defaultOgImage} />
        <meta property="og:title" content={resolvedPageTitle} />
        <meta property="og:description" content={resolvedDescription} />
        <meta name="description" content={resolvedDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={resolvedPageTitle} />
        <meta name="twitter:description" content={resolvedDescription} />
        <meta name="twitter:image" content={ogImage || defaultOgImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Header settings={siteSettings} />
      <main className="space-y-16 md:space-y-20 lg:space-y-24">{children}</main>
      <Footer settings={siteSettings}/>
    </div>
  )
}
