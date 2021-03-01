import Head from 'next/head'
import styled from 'styled-components'
import { getSortedData } from '../../lib/content'
import Layout from '../../components/4_templates/Layout'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import HeaderText from '../../components/1_atoms/HeaderText'
import CardStudies from '../../components/2_molecules/CardStudies'

const Listing = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
`

export default function Studies({ studiesList }) {
  return (
    <Layout>
      <Head>
        <title>Studies</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Studies</Text.Large>
      </HeaderWrapper>
      <div>
        <HeaderText />
        <Listing>
          <r-grid columns="10">
          {studiesList.map(({ id, date, title, text }) => (
            <CardStudies link={`x`}
                  date={date} 
                  title={title}
                  text={text}
                  key={id} />
          ))}
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