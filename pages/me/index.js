import Head from 'next/head'
import styled from 'styled-components'
import { getSortedData } from '../../lib/content'
import Layout from '../../components/4_templates/Layout'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'
import CardStudies from '../../components/2_molecules/CardStudies'

const Listing = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
`

export default function Me() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>About</Text.Large>
      </HeaderWrapper>
      <div>
        <Intro />
        <Listing>
          <r-grid columns="6" columns-s="2">
            <r-cell span="4" flow-cols="2" flow-cols-s="1">
              My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999. My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.
            </r-cell>
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let allStudiesData = getSortedData('content/studies');
  return {
    props: {
      studiesList: allStudiesData
    }
  }
}