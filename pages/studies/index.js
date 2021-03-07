import Head from 'next/head'
import styled from 'styled-components'
import { getSortedData } from '../../lib/content'
import { getSanityContent } from '../../lib/api'
import Layout from '../../components/4_templates/Layout'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'
import CardStudies from '../../components/2_molecules/CardStudies'

const Listing = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
`

export default function Studies({ studiesList, settings }) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>Studies</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Studies</Text.Large>
      </HeaderWrapper>
      <div>
        <Intro />
        <Listing>
          <r-grid columns="10">
          {studiesList.map(({ id, date, title, text }) => (
            <CardStudies link={`x`}
                  date={date} 
                  title={title}
                  text={text}
                  key={id} />
          ))}
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let allStudiesData = getSortedData('content/studies');
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
      studiesList: allStudiesData,
      settings: settingsData
    }
  }
}