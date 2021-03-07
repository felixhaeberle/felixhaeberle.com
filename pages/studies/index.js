import Head from 'next/head'
import styled from 'styled-components'
import { format, parseISO } from 'date-fns' 
import { getSanityContent } from '../../lib/api'
import Layout from '../../components/4_templates/Layout'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'
import CardStudies from '../../components/2_molecules/CardStudies'

const Listing = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
`

export default function Studies({ studyList, settings }) {
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
          {studyList.map(({ title, description, image, publishedAt, externalLink }, index) => (
            <CardStudies  date={publishedAt} 
                          title={title}
                          text={description}
                          link={externalLink}
                          image={image}
                          key={index} />
          ))}
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allStudiesData = await getSanityContent({
    query: `
      query AllStudies {
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
        allStudy {
          title,
          description,
          externalLink,
          publishedAt,
          mainImage {
            asset {
              _id
            }
          }
        }
      }
    `,
  });
  
  const settingsData = allStudiesData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    legal_links: setting.legal_links,
    social_links: setting.social_links
  }))[0];

  const studyData = allStudiesData.allStudy.map((study) => ({
    title: study.title,
    description: study.description,
    externalLink: study.externalLink,
    publishedAt: study.publishedAt,
    image: study.mainImage.asset._id
  }));

  // sort newest work first
  const studyDataSorted = studyData.sort((a, b) => (format(parseISO(a.publishedAt), 'yyyy') < format(parseISO(b.publishedAt), 'yyyy')) ? 1 : -1)

  return {
    props: {
      studyList: studyDataSorted,
      settings: settingsData
    }
  }
}