import CardStudies from '../../components/2_molecules/CardStudies.jsx'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getStudies } from '../../lib/query/studies'

export default function Studies({ page, studyList, settings }) {
  return (
    <Layout settings={settings} pageTitle={'Studies'}>
      <Head>
        <title>Studies</title>
      </Head>
      <div>
        <div>
          <r-grid columns="6">
            <r-cell span="1-2" span-m="1-4" span-s="1-6">
              <Intro page={page} />
            </r-cell>
            <r-cell span="5-6" span-m="5-6" className="md:block hidden">
              <img className="grayscale" src="/images/lineart/book.svg" alt="Book illustration" />
            </r-cell>
          </r-grid>
        </div>
        <div className="mt-[calc(var(--rowGap)*1.5)] pt-row-gap">
          <r-grid columns="10" columns-s="1" className="md:gap-y-[calc(var(--rowGap)/2)]">
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
        </div>
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