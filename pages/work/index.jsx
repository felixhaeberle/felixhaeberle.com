import { format, parseISO } from 'date-fns'
import React from 'react'

import Card from '../../components/2_molecules/Card.jsx'
import Date from '../../components/0_helpers/date.jsx'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import { getWork } from '../../lib/query/work'

// Define the WorkItem components
const WorkItem = {
  Year: ({ children }) => (
    <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark py-[calc(var(--unit)*1)] mb-[calc(var(--unit)*0.75)]">
      {children}
    </p>
  ),
  Wrapper: ({ children }) => (
    <div className="site-work-list">{children}</div>
  )
};

export default function Work({ page, projects, settings }) {
  return (
    <Layout settings={settings} pageTitle={'Work'}>
      <Head>
        <title>Work</title>
      </Head>
      <div>
        <div className="site-split site-split--hide-media-medium">
          <div className="space-y-6 md:space-y-8">
            <h1 className="site-page-title font-sans text-xl text-textLight font-medium mb-3 md:mb-4">Work</h1>
            <div className="lg:max-w-[75%]">
              <Intro page={page} />
            </div>
          </div>
          <div className="site-split__media">
            <img
              className="site-split__image heroImage"
              src="/images/lineart/phone.svg"
              alt="Phone illustration"
            />
          </div>
        </div>
        <WorkItem.Wrapper>
          <div className="site-grid site-grid--three site-grid--compact">
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
                  {newYear ? (
                    <div className="site-grid__full">
                      <WorkItem.Year>
                        <Date dateString={releasedAt} formatString={'yyyy'}/>
                      </WorkItem.Year>
                    </div>
                  ) : null}
                  {/* Project */}
                  <div>
                    <Card 
                      link={link}
                      title={title}
                      text={description}
                      key={index}
                      image={image}
                      imageAlt={imageAlt}
                      isWork />
                  </div>
                </React.Fragment>
              )
            })}
          </div>
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
