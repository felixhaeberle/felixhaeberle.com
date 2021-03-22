import Head from 'next/head'
import Link from 'next/link'
import { getSortedData } from '../lib/content'
import { getAllPostsForHome, getSanityContent } from '../lib/api' 
import Layout from '../components/4_templates/Layout'
import Text from '../components/1_atoms/Text'
import Card from '../components/2_molecules/Card'
import styled from 'styled-components'
import Button from '../components/1_atoms/Button'
import List from '../components/1_atoms/List'

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
            {workList.slice(0, 5).map(({ id, date, title, text }) => (
              <List.Item key={id}>
                <Card link={`/work/${id}`} 
                      year={date} 
                      title={title}
                      text={text} />
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
            {studiesList.slice(0, 3).map(({ _id, link, title, desc, image, image_alt }) => (
              <List.Item key={_id}>
                <Card link={link} 
                      title={title}
                      text={desc}
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
  const allWritingsData = getSortedData('content/writings');
  const allStudiesData = await getAllPostsForHome();
  const allWorkData = getSortedData('content/work');
  const allSettingsData = await getSanityContent({
    query: `
      query AllSettings {
        allSiteSettings {
          _id,
          title,
          site_title,
          frontpage_text,
          currently,
          legal_links {
            text,
            link
          },
          social_links {
            text,
            link
          }
        }
      }
    `,
  });
  
  const settingsData = allSettingsData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    frontpage_text: setting.frontpage_text,
    currently: setting.currently,
    legal_links: setting.legal_links,
    social_links: setting.social_links
  }))[0];

  return {
    props: {
      writingsList: allWritingsData,
      studiesList: allStudiesData,
      workList: allWorkData,
      settings: settingsData
    },
    revalidate: 1
  }
}
