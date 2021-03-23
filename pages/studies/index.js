import Head from 'next/head'
import styled from 'styled-components'
import { format, parseISO } from 'date-fns' 
import { getSanityContent } from '../../lib/api'
import { getSiteSettings } from '../../lib/query/settings'
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
          {studyList.map(({ title, description, image, imageAlt, publishedAt, externalLink }, index) => (
            <CardStudies  date={publishedAt} 
                          title={title}
                          text={description}
                          link={externalLink}
                          image={image}
                          imageAlt={imageAlt} 
                          key={index} />
          ))}
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();
  const allStudiesData = await getSanityContent({
    query: `
      query AllStudies {
        allStudy {
          title,
          description,
          externalLink,
          publishedAt,
          image {
            image {
              asset {
                _id
              }
            },
            alternative
          }
        }
      }
    `,
  });

  const studyData = allStudiesData.allStudy.map((study) => ({
    title: study.title,
    description: study.description,
    externalLink: study.externalLink,
    publishedAt: study.publishedAt,
    image: study.image.image.asset._id,
    imageAlt: study.image.alternative 
  }));

  // sort newest work first
  const studyDataSorted = studyData.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1)

  return {
    props: {
      studyList: studyDataSorted,
      settings: siteSettings
    }
  }
}