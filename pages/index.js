import { format, parseISO } from 'date-fns'

import Button from '../components/1_atoms/Button'
import Card from '../components/2_molecules/Card'
import Head from 'next/head'
import Layout from '../components/4_templates/Layout'
import Link from 'next/link'
import List from '../components/1_atoms/List'
import Stack from '../components/2_molecules/Stack'
import Text from '../components/1_atoms/Text'
import { getSiteSettings } from '../lib/query/settings'
import { getStudies } from '../lib/query/studies'
import { getWork } from '../lib/query/work'
import { getWritings } from '../lib/query/writings'
import styled from 'styled-components'

Text.Currently = styled(Text)`
  margin-bottom: calc(var(--unit)* 4.5);
`

export default function Home({ writingsList, studiesList, workList, settings }) {
  return (
    <Layout home settings={settings}>
      <Head>
        <title>{settings.site_title}</title>
      </Head>
      <r-grid columns="6" columns-m="6" columns-xs="2">
        <r-cell span="2" span-m="3" span-s="6">
          <Text.Mono.Dark>Currently</Text.Mono.Dark>
          <Text.Currently>{settings.currently}</Text.Currently>
          <Link href="/me">
            <a>
              <Button title={"Let's talk"} symbol={'Voicemail24'}/>
            </a>
          </Link>
    
          <Text.Mono.Dark>Work</Text.Mono.Dark>
          <List>
            {workList.slice(0, 5).map((work, index) => (
              <List.Item key={index}>
                <Card link={work.link} 
                      year={work.releasedAt} 
                      title={work.title}
                      text={work.description} />
              </List.Item>
            ))}
          </List>
          <Link href="/work">
            <a>
              <Button title={'Explore all ' + workList.length + ' projects'} symbol={'ArrowRight24'}/>
            </a>
          </Link>
        </r-cell >
        <r-cell span="2" span-m="3" span-s="6">
          <Text.Mono.Dark>Studies</Text.Mono.Dark>
          <List>
            {studiesList.slice(0, 3).map((study, index) => (
              <List.Item key={index}>
                <Card link={study.externalLink} 
                      title={study.title}
                      text={study.description}
                      image={study.image}
                      imageAlt={study.image_alt} />
              </List.Item>
            ))}
          </List>
          <Link href="/studies">
            <a>
              <Button title={'Explore all ' + studiesList.length + ' studies'} symbol={'ArrowRight24'}/>
            </a>
          </Link>
        </r-cell>
        <r-cell span="2" span-m="6">
          <Text.Mono.Dark>Writings</Text.Mono.Dark>
          <List responsiveColumnView>
            {writingsList.slice(0, 4).map((writing, index) => (
              <List.Item key={index} responsiveColumnView>
                <Card link={`/writings/${writing.slug}`} 
                      date={writing.publishedAt} 
                      title={writing.title}
                      text={writing.teaser} />
              </List.Item>
            ))}
          </List>
          <Link href="/writings">
            <a>
              <Button title={'Explore all ' + writingsList.length + ' writings'} symbol={'ArrowRight24'}/>
            </a>
          </Link>
        </r-cell>
      </r-grid>
      <Stack />
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();
  const work = await getWork();
  const studies = await getStudies();
  const writings = await getWritings();

  // sort newest work first
  const workSorted = work.sort((a, b) => (new Date(a.releasedAt) < new Date(b.releasedAt)) ? 1 : -1)

  // sort newest work first
  const studiesSorted = studies.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1)

  // sort newest writings first
  const writingsSorted = writings.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1)

  return {
    props: {
      writingsList: writingsSorted,
      studiesList: studiesSorted,
      workList: workSorted,
      settings: siteSettings
    }
  }
}
