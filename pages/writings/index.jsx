import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
import CardWritings from '../../components/2_molecules/CardWritings.jsx'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWritings } from '../../lib/query/writings'
import { fetchSubstackWritings } from '../../lib/substack'

export default function Writings({page, writings, settings}) {

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <div>
        <div className="site-split site-split--hide-media-medium mb-10 md:mb-12">
          <div className="space-y-6 md:space-y-8">
            <h1 className="font-sans text-xl text-textLight font-medium mb-3 md:mb-4">Writings</h1>
            <Intro page={page} />
          </div>
          <div className="site-split__media">
            <img
              className="site-split__image"
              src="/images/lineart/hand.svg"
              alt="Hand illustration"
            />
          </div>
        </div>
      </div>
      <div className="pt-12 md:pt-16">
        <div className="site-grid site-grid--three site-grid--compact">
          {writings.map((writing, index) => (
            <div
              key={index}
            >
              <CardWritings
                title={writing.title}
                text={writing.teaserSmall || writing.teaser}
                link={writing.externalLink || `/writings/${writing.slug}`}
                isExternal={Boolean(writing.externalLink)}
                date={writing.publishedAt}
                image={writing.image}
                imageAlt={writing.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getPage('Writings');
  const writings = await getWritings();
  const substackWritings = await fetchSubstackWritings();
  const siteSettings = await getSiteSettings();

  const mergedWritings = [...writings, ...substackWritings].filter(Boolean)
  mergedWritings.sort((a, b) => {
    const aTime = new Date(a.publishedAt || 0).getTime()
    const bTime = new Date(b.publishedAt || 0).getTime()
    return bTime - aTime
  })

  return {
    props: {
      page: page,
      writings: mergedWritings,
      settings: siteSettings
    },
    revalidate: 3600
  }
}
