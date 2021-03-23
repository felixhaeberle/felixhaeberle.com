import Head from 'next/head'
import { getSanityContent } from '../../lib/api'
import { getSiteSettings } from '../../lib/query/settings'
import Text from '../../components/1_atoms/Text'
import Layout from '../../components/4_templates/Layout'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'

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