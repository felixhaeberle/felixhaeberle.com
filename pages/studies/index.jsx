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
          <div className="site-split site-split--hide-media-medium">
            <div className="space-y-6 md:space-y-8">
              <h1 className="site-page-title font-sans text-xl text-textLight font-medium mb-3 md:mb-4">Studies</h1>
              <Intro page={page} />
            </div>
            <div className="site-split__media">
              <img
                className="site-split__image"
                src="/images/lineart/book.svg"
                alt="Book illustration"
              />
            </div>
          </div>
        </div>
        <div className="site-study-list">
          <div className="flex flex-col gap-y-12 md:gap-y-16">
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
          </div>
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
