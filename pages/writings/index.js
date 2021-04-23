import CardWritings from '../../components/2_molecules/CardWritings'
import Filtering from '../../components/2_molecules/Filtering'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getSiteSettings } from '../../lib/query/settings'

export default function Writings({settings}) {
  
  const writings = [{
    title: 'This is an interesting blog post',
    link: '/some-link',
    shortText: 'This is an short rext for this really interesting blog post lets talk',
    longText: 'I have something more to say about this really good blog post with more insights and more interesting information with extra value.',
    date: '2021-03-12'
  },{
    title: 'This is an interesting blog post',
    link: '/some-link',
    shortText: 'This is an short rext for this really interesting blog post lets talk',
    longText: 'I have something more to say about this really good blog post with more insights and more interesting information with extra value.',
    date: '2021-03-12'
  },{
    title: 'This is an interesting blog post',
    link: '/some-link',
    shortText: 'This is an short rext for this really interesting blog post lets talk',
    longText: 'I have something more to say about this really good blog post with more insights and more interesting information with extra value.',
    date: '2021-03-12'
  }]

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <main>
        <Intro />
        <Filtering />
        <r-grid columns="6" columns-s="2" columns-xs="1">
          {writings.map((writing, index) => (
            <CardWritings 
              title={writing.title}
              link={writing.link}
              shortText={writing.shortText}
              longText={writing.longText}
              date={writing.date}
              key={index}
            />
          ))}
        </r-grid>

      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();

  return {
    props: {
      settings: siteSettings
    }
  }
}