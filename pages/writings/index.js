import CardWritings from '../../components/2_molecules/CardWritings'
import Filtering from '../../components/2_molecules/Filtering'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getCategory } from '../../lib/query/categories'
import { getSiteSettings } from '../../lib/query/settings'
import { getWritings } from '../../lib/query/writings'

export default function Writings({writings, categories, settings}) {

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <main>
        <Intro />
        <Filtering categories={categories}/>
        <r-grid columns="6" columns-s="2" columns-xs="1">
          {writings.map((writing, index) => (
            <CardWritings 
              title={writing.title}
              link={'/writings/' + writing.slug}
              shortText={writing.teaserSmall}
              longText={writing.teaser}
              date={writing.publishedAt}
              key={index}
            />
          ))}
        </r-grid>

      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const writings = await getWritings();
  const categories = await getCategory();
  const siteSettings = await getSiteSettings();

  return {
    props: {
      writings: writings,
      categories: categories,
      settings: siteSettings
    }
  }
}