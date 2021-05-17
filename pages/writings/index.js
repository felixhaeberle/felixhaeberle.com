import Filtering from '../../components/2_molecules/Filtering'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getCategory } from '../../lib/query/categories'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWritings } from '../../lib/query/writings'

export default function Writings({page, writings, categories, settings}) {

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <div>
        <Intro page={page} />
        <Filtering 
          categories={categories} 
          writings={writings} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getPage('Writings');
  const writings = await getWritings();
  const categories = await getCategory();
  const siteSettings = await getSiteSettings();

  return {
    props: {
      page: page,
      writings: writings,
      categories: categories,
      settings: siteSettings
    }
  }
}