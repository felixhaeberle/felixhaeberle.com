import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { getSiteSettings } from '../lib/query/settings'
import Layout from '../components/4_templates/Layout'
import Text from '../components/1_atoms/Text'

export default function Custom404({ settings }) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center mt-16">
        <Text.Large className="mb-8">404 - Page Not Found</Text.Large>
        <Text className="mb-4">Sorry, the page you are looking for does not exist.</Text>
        <Link href="/" className="text-text hover:underline">
          Return to home page
        </Link>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();

  return {
    props: {
      settings: siteSettings
    }
  }
}