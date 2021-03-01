import Layout from '../../components/4_templates/Layout'
import Head from 'next/head'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import HeaderText from '../../components/1_atoms/HeaderText'

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Work</Text.Large>
      </HeaderWrapper>
      <main>
        <HeaderText />
      </main>
    </Layout>
  )
}