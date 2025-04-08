import { format, parseISO } from 'date-fns'
import React from 'react'

import Card from '../../components/2_molecules/Card.jsx'
import Date from '../../components/0_helpers/date.jsx'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
import Text from '../../components/1_atoms/Text.jsx'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWork } from '../../lib/query/work'

// Define the WorkItem components
const WorkItem = {
  Year: ({ children }) => (
    <Text.Mono.Dark className="py-[calc(var(--unit)*3)] mb-unit-2">{children}</Text.Mono.Dark>
  ),
  Wrapper: ({ children }) => (
    <div className="mt-[calc(var(--rowGap)*1.5)] pt-row-gap">{children}</div>
  )
};

export default function Work({ page, projects, settings }) {
  return (
    <Layout settings={settings} pageTitle={'Work'}>
      <Head>
        <title>Work</title>
      </Head>
      <div>
        <r-grid columns="6">
          <r-cell span="1-2" span-m="1-4" span-s="1-6">
            <Intro page={page} />
          </r-cell>
          <r-cell span="5-6" span-m="5-6" className="md:block hidden">
            <img className="heroImage" src="/images/lineart/phone.svg" alt="Phone illustration" />
          </r-cell>
        </r-grid>
        <WorkItem.Wrapper>
          <r-grid columns="6" columns-m="6" columns-s="2" className="work-grid">
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
      </div>
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