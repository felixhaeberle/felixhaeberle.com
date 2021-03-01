import Layout from '../../components/4_templates/Layout'
import Head from 'next/head'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import HeaderText from '../../components/1_atoms/HeaderText'

export default function Writings() {
  return (
    <Layout>
      <Head>
        <title>Writings</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Writings</Text.Large>
      </HeaderWrapper>
      <main>
        <HeaderText />
      </main>
    </Layout>
  )
}