import Filtering from '../../components/2_molecules/Filtering';
import Head from 'next/head'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import Text from '../../components/1_atoms/Text'
import { getSiteSettings } from '../../lib/query/settings'

export default function Writings({settings}) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>Writings</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Writings</Text.Large>
      </HeaderWrapper>
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