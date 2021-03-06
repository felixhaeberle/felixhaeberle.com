import Head from 'next/head'
import { site } from './_app'
import Layout from '../components/4_templates/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedData } from '../lib/content'
import Text from '../components/1_atoms/Text'
import Card from '../components/2_molecules/Card'
import styled from 'styled-components'
import Button from '../components/1_atoms/Button'
import Link from 'next/link'
import { getAllPostsForHome } from '../lib/api' 

Text.Currently = styled(Text)`
  margin-bottom: calc(var(--unit)* 4.5);
`

const doing = 'I’m studying Interaction Design B.A. @ HfG Schwäbisch Gmünd combining my web tech background with design thinking.'

export default function Home({ writingsList, studiesList, workList }) {
  return (
    <Layout home>
      <Head>
        <title>{site.title}</title>
      </Head>
      <r-grid columns="6" columns-s="4" columns-xs="2">
        <r-cell span="2">
          <Text.Mono.Dark>Currently</Text.Mono.Dark>
          <Text.Currently>{doing}</Text.Currently>
          <Link href="/me">
            <a>
              <Button title={"Let's talk"} symbol={'Voicemail24'}/>
            </a>
          </Link>
    
          <Text.Mono.Dark>Work</Text.Mono.Dark>
          <ul className={utilStyles.list}>
            {workList.slice(0, 4).map(({ id, date, title, text }) => (
              <li className={utilStyles.listItem} key={id}>
                <Card link={`/work/${id}`} 
                      year={date} 
                      title={title}
                      text={text} />
              </li>
            ))}
          </ul>
          <Link href="/work">
            <a>
              <Button title={'Explore all ' + workList.length + ' projects'} symbol={'ArrowRight24'}/>
            </a>
          </Link>
        </r-cell >
        <r-cell order-s="-1" order-xs="-1" span="2">
          <Text.Mono.Dark>Studies</Text.Mono.Dark>
          <ul className={utilStyles.list}>
            {studiesList.slice(0, 3).map(({ _id, link, title, desc, image }) => (
              <li className={utilStyles.listItem} key={_id}>
                <Card link={link} 
                      title={title}
                      text={desc}
                      image={image} />
              </li>
            ))}
          </ul>
          <Link href="/studies">
            <a>
              <Button title={'Explore all ' + studiesList.length + ' studies'} symbol={'ArrowRight24'}/>
            </a>
          </Link>
        </r-cell>
        <r-cell span="2">
          <Text.Mono.Dark>Writings</Text.Mono.Dark>
          <ul className={utilStyles.list}>
            {writingsList.slice(0, 4).map(({ id, date, title, text }) => (
              <li className={utilStyles.listItem} key={id}>
                <Card link={`/writings/${id}`} 
                      date={date} 
                      title={title}
                      text={text} />
              </li>
            ))}
          </ul>
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
  let allWritingsData = getSortedData('content/writings');
  let allStudiesData = await getAllPostsForHome();
  let allWorkData = getSortedData('content/work');
  return {
    props: {
      writingsList: allWritingsData,
      studiesList: allStudiesData,
      workList: allWorkData,
    },
    revalidate: 1
  }
}
