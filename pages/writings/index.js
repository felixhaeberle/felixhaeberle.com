import Filtering from '../../components/2_molecules/Filtering'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getCategory } from '../../lib/query/categories'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWritings } from '../../lib/query/writings'
import media from '../../components/0_helpers/viewportValues'
import styled from 'styled-components'

const Listing = styled.div`
  padding-top: calc(var(--rowGap));
`

const Hero = styled.div`
  .hide-s {
    ${media.lessThan('medium')`
      display: none;
    `}
  }
`

export default function Writings({page, writings, categories, settings}) {

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <Hero>
        <r-grid columns="6">
          <r-cell span="1-2" span-m="1-4" span-s="1-6">
              <Intro page={page} />
            </r-cell>
            <r-cell span="5-6" span-m="5-6" class="hide-s">
              <img className="heroImage" src="/images/lineart/hand.svg" />
            </r-cell>
          </r-grid>
      </Hero>
      <Listing>
        <Filtering 
          categories={categories} 
          writings={writings} />
      </Listing>
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