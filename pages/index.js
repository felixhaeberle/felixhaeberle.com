import { format, parseISO } from 'date-fns'

import Button from '../components/1_atoms/Button'
import Card from '../components/2_molecules/Card'
import Head from 'next/head'
import Layout from '../components/4_templates/Layout'
import Link from 'next/link'
import List from '../components/1_atoms/List'
import Text from '../components/1_atoms/Text'
import { getSiteSettings } from '../lib/query/settings'
import { getSortedData } from '../lib/content'
import { getStudies } from '../lib/query/studies'
import { getWork } from '../lib/query/work'
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
            {workList.slice(0, 5).map(({ link, title, releasedAt, description }, index) => (
              <List.Item key={index}>
                <Card link={link} 
                      year={releasedAt} 
                      title={title}
                      text={description} />
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
            {studiesList.slice(0, 3).map(({ _id, externalLink, title, description, image, image_alt }) => (
              <List.Item key={_id}>
                <Card link={externalLink} 
                      title={title}
                      text={description}
                      image={image}
                      imageAlt={image_alt} />
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
            {writingsList.slice(0, 4).map(({ id, date, title, text }) => (
              <List.Item key={id} responsiveColumnView>
                <Card link={`/writings/${id}`} 
                      date={date} 
                      title={title}
                      text={text} />
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
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();
  const work = await getWork();
  const studies = await getStudies();
  const allWritingsData = getSortedData('content/writings');

  // sort newest work first
  const workSorted = work.sort((a, b) => (format(parseISO(a.releasedAt), 'yyyy') < format(parseISO(b.releasedAt), 'yyyy')) ? 1 : -1)

  // sort newest work first
  const studiesSorted = studies.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1)

  return {
    props: {
      writingsList: allWritingsData,
      studiesList: studiesSorted,
      workList: workSorted,
      settings: siteSettings
    }
  }
}
