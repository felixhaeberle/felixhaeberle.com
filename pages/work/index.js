import { format, parseISO } from 'date-fns'

import Card from '../../components/2_molecules/Card'
import Date from '../../components/0_helpers/date'
import Head from 'next/head'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import React from 'react'
import Text from '../../components/1_atoms/Text'
import { getSanityContent } from '../../lib/api'
import { getSiteSettings } from '../../lib/query/settings'
import { getWork } from '../../lib/query/work'
import styled from 'styled-components'

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
                <React.Fragment key={index}>
                  {/* Year */}
                  {newYear ? <r-cell span="row"><WorkItem.Year><Date dateString={releasedAt} formatString={'yyyy'}/></WorkItem.Year></r-cell> : ''}
                  {/* Project */}
                  <r-cell span="2" span-s="1">
                    <Card link={link}
                      title={title}
                      text={description}
                      key={index} />
                  </r-cell>
                </React.Fragment>
              )
            })}
          </r-grid>
        </WorkItem.Wrapper>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();
  const work = await getWork();

  // sort newest work first
  const workSorted = work.sort((a, b) => (format(parseISO(a.releasedAt), 'yyyy') < format(parseISO(b.releasedAt), 'yyyy')) ? 1 : -1)

  return {
    props: {
      projects: workSorted,
      settings: siteSettings
    }
  }
} 