import Filtering from '../../components/2_molecules/Filtering';
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getSiteSettings } from '../../lib/query/settings'

export default function Writings({settings}) {
  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <main>
        <Intro />
        <Filtering />
      </main>
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