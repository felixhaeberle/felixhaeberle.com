import { format, parseISO } from 'date-fns'

import Card from '../../components/2_molecules/Card'
import Date from '../../components/0_helpers/date'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import React from 'react'
import Text from '../../components/1_atoms/Text'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWork } from '../../lib/query/work'
import media from '../../components/0_helpers/viewportValues'
import styled from 'styled-components'

const WorkItem = styled.div``;

WorkItem.Wrapper = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
  padding-top: calc(var(--rowGap));
  border-top: 1px solid var(--colorTextDark);

  /* .work-grid {
    grid-row-gap: calc(var(--rowGap)/2);
  } */
`

WorkItem.Year = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`

const Wrapper = styled.div`
  .heroImage {
    max-height: 25rem;
    
    ${media.greaterThan('small')`
      position: relative;
      top: -8rem;
      margin-bottom: -8rem;
    `}
  }

  .hide-s {
    ${media.lessThan('medium')`
      display: none;
    `}
  }
`

export default function Work({ page, projects, settings }) {
  return (
    <Layout settings={settings} pageTitle={'Work'}>
      <Head>
        <title>Work</title>
      </Head>
      <Wrapper>
        <r-grid columns="6">
          <r-cell span="1-2" span-m="1-4" span-s="1-6">
            <Intro page={page} />
          </r-cell>
          <r-cell span="5-6" span-m="5-6" class="hide-s">
            <img className="heroImage" src="/images/lineart/phone.svg" />
          </r-cell>
        </r-grid>
        <WorkItem.Wrapper>
          <r-grid columns="6" columns-m="6" columns-s="2" class="work-grid">
            {projects.map(({ title, description, link, releasedAt, image, imageAlt }, index, arr) => {
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
                  <r-cell span="2" span-m="3" span-s="2">
                    <Card 
                      link={link}
                      title={title}
                      text={description}
                      key={index}
                      image={image}
                      imageAlt={imageAlt}
                      isWork />
                  </r-cell>
                </React.Fragment>
              )
            })}
          </r-grid>
        </WorkItem.Wrapper>
      </Wrapper>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getPage('Work');
  const siteSettings = await getSiteSettings();
  const work = await getWork();

  // sort newest work first
  const workSorted = work.sort((a, b) => (parseISO(a.releasedAt) < parseISO(b.releasedAt)) ? 1 : -1)

  return {
    props: {
      page: page,
      projects: workSorted,
      settings: siteSettings
    }
  }
} 