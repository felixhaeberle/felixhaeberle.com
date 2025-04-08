import Filtering from '../../components/2_molecules/Filtering.jsx'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
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
        <r-grid columns="6">
          <r-cell span="1-2" span-m="1-4" span-s="1-6">
            <Intro page={page} />
          </r-cell>
          <r-cell span="5-6" span-m="5-6" className="md:block hidden">
            <img className="grayscale" src="/images/lineart/hand.svg" alt="Hand illustration" />
          </r-cell>
        </r-grid>
      </div>
      <div className="pt-row-gap">
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