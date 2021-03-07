import styled from 'styled-components'
import { format, parseISO } from 'date-fns'
import { getSanityContent } from '../../lib/api'
import Layout from '../../components/4_templates/Layout'
import Head from 'next/head'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'
import Date from '../../components/date'
import Card from '../../components/2_molecules/Card'

const WorkItem = styled.div``;

WorkItem.Wrapper = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
  padding-top: calc(var(--rowGap));
  border-top: 1px solid var(--colorTextDark);
`

WorkItem.Year = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`

export default function Work({ projects, settings }) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>Work</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Work</Text.Large>
      </HeaderWrapper>
      <div>
        <Intro />
        <WorkItem.Wrapper>
          <r-grid columns="6" columns-s="2" columns-xs="1">
            {projects.map(({ title, description, link, releasedAt }, index, arr) => {
              // Is it a new year?
              let newYear = false;
              if(arr[index] && arr[index-1]){
                newYear = format(parseISO(arr[index].releasedAt), 'yyyy') !== format(parseISO(arr[index-1].releasedAt), 'yyyy') ? true : false;
              } else {
                newYear = true;
              }

              return(
                <>
                  {/* Year */}
                  {newYear ? <r-cell span="row"><WorkItem.Year><Date dateString={releasedAt} formatString={'yyyy'}/></WorkItem.Year></r-cell> : ''}
                  {/* Project */}
                  <r-cell span="2" span-s="1">
                    <Card link={link}
                      title={title}
                      text={description}
                      key={index} />
                  </r-cell>
                </>
              )
            })}
          </r-grid>
        </WorkItem.Wrapper>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allWorkData = await getSanityContent({
    query: `
      query AllWork {
        allSiteSettings {
          _id,
          title,
          site_title,
          legal_links {
            text,
            link
          },
          social_links {
            text,
            link
          }
        }
        allProject {
          title,
          description,
          link,
          releasedAt
        }
      }
    `,
  });
  
  const settingsData = allWorkData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    legal_links: setting.legal_links,
    social_links: setting.social_links
  }))[0];

  const workData = allWorkData.allProject.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.link,
    releasedAt: project.releasedAt
  }));

  // sort newest work first
  const workDataSorted = workData.sort((a, b) => (format(parseISO(a.releasedAt), 'yyyy') < format(parseISO(b.releasedAt), 'yyyy')) ? 1 : -1)

  return {
    props: {
      projects: workDataSorted,
      settings: settingsData
    }
  }
} 