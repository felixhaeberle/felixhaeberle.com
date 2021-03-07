import Head from 'next/head'
import { getSanityContent } from '../../lib/api'
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
  const allSettingsData = await getSanityContent({
    query: `
      query AllSettings {
        allSiteSettings {
          _id,
          title,
          site_title,
          legal_links {
            text,
            link
          },
          social_links {
            text,
            link
          }
        }
      }
    `,
  });
  
  const settingsData = allSettingsData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    legal_links: setting.legal_links,
    social_links: setting.social_links
  }))[0];

  return {
    props: {
      settings: settingsData
    }
  }
}