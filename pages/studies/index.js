import CardStudies from '../../components/2_molecules/CardStudies'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getStudies } from '../../lib/query/studies'
import media from 'styled-media-query'
import styled from 'styled-components'

const Listing = styled.div`
  margin-top: calc(var(--rowGap)*1.5);

  ${media.lessThan('medium')`
    r-grid {
      grid-row-gap: calc(var(--rowGap) / 2);

      r-cell:nth-child(2n+1) {
        margin-bottom: calc(var(--rowGap) / 2);
      }
    }
  `}
`

export default function Studies({ page, studyList, settings }) {
  return (
    <Layout settings={settings} pageTitle={'Studies'}>
      <Head>
        <title>Studies</title>
      </Head>
      <div>
        <r-grid columns="6">
          <r-cell span="2" span-m="4" span-s="6">
            <Intro page={page} />
          </r-cell>
        </r-grid>
        <Listing>
          <r-grid columns="10" columns-s="1">
          {studyList.map(({ title, description, image, imageAlt, publishedAt, externalLink }, index) => (
            <CardStudies  
              date={publishedAt} 
              title={title}
              text={description}
              link={externalLink}
              image={image}
              imageAlt={imageAlt} 
              key={index}
              index={index} />
          ))}
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getPage('Studies');
  const siteSettings = await getSiteSettings();
  const studies = await getStudies();

  // sort newest work first
  const studiesSorted = studies.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1)

  return {
    props: {
      page: page,
      studyList: studiesSorted,
      settings: siteSettings
    }
  }
}