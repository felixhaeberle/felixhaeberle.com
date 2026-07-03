import dynamic from 'next/dynamic'

import Button from '../components/1_atoms/Button.jsx'
import Card from '../components/2_molecules/Card.jsx'
import Head from 'next/head'
import Layout from '../components/4_templates/Layout.jsx'
import Link from 'next/link'
import List from '../components/1_atoms/List.jsx'
import ProfileImage from '../components/1_atoms/ProfileImage.jsx'
import { getSiteSettings } from '../lib/query/settings'
import { getStudies } from '../lib/query/studies'
import { getWork } from '../lib/query/work'
import { getWritings } from '../lib/query/writings'

// Import Stack component with improved client-side support
// No need for ssr: false as the component now has 'use client' directive
const Stack = dynamic(() => import('../components/2_molecules/Stack.jsx'), {
  loading: () => <div className="py-20 text-center">Loading stack...</div>
})

const frontpageHeroText = 'Hi, I’m Felix — a design engineer building tasteful AI products and interfaces.'

export default function Home({ writingsList, studiesList, workList, settings }) {
  return (
    <Layout home settings={settings}>
      <Head>
        <title>{settings?.site_title || 'Felix Häberle'}</title>
      </Head>
      <section className="
        site-home-hero
        flex flex-col lg:flex-row lg:items-end lg:justify-between
        gap-y-6 md:gap-y-8
        gap-x-8 md:gap-x-12 lg:gap-x-16
      ">
        <h1 className="site-home-hero__title font-sans text-xl text-textLight font-medium max-w-[90%] lg:max-w-[60%]">
          {frontpageHeroText}
        </h1>
        <ProfileImage />
      </section>
      <div className="site-grid site-grid--three">
        <div>
          <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">Currently</p>
          <p className="font-sans text-base text-text font-medium mb-[calc(var(--unit)*4.5)]">{settings?.currently}</p>
          <Link href="mailto:kontakt@felixhaeberle.de?subject=%F0%9F%91%8B%20Hi%2C%20lets%20talk!">
            <Button title={"Let's talk"} symbol={'Voicemail'}/>
          </Link>
    
          <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">Work</p>
          <List>
            {workList?.slice(0, 5).map((work, index) => (
              <List.Item key={work._id || index}>
                <Card
                  link={work.link}
                  title={work.title}
                  text={work.description}
                  year={work.releasedAt}
                />
              </List.Item>
            ))}
          </List>
          <Link href="/work">
            <Button title={'Explore all ' + workList?.length + ' projects'} symbol={'ArrowRight24'}/>
          </Link>
        </div>
        <div>
          <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">Studies</p>
          <List>
            {studiesList?.slice(0, 3).map((study, index) => (
              <List.Item key={index}>
                <Card link={study.externalLink} 
                      title={study.title}
                      text={study.description}
                      image={study.image}
                      imageAlt={study.imageAlt}
                      isStudy
                      imageSpacing="mb-unit-3" />
              </List.Item>
            ))}
          </List>
          <Link href="/studies">
            <Button title={'Explore all ' + studiesList?.length + ' studies'} symbol={'ArrowRight24'}/>
          </Link>
        </div>
        <div className="site-grid__full-medium lg:col-auto">
          <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">Writings</p>
          <List>
            {writingsList?.slice(0, 5).map((writing, index) => (
              <List.Item key={index}>
                <Card link={writing.externalLink || `/writings/${writing.slug}`}
                      isExternal={Boolean(writing.externalLink)}
                      date={writing.publishedAt}
                      title={writing.title}
                      text={writing.teaser} />
              </List.Item>
            ))}
          </List>
          <Link href="/writings">
            <Button title={'Explore all ' + writingsList?.length + ' writings'} symbol={'ArrowRight24'}/>
          </Link>
        </div>
      </div>
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
  const workSorted = work?.sort((a, b) => (new Date(a.releasedAt) < new Date(b.releasedAt)) ? 1 : -1) || []

  // sort newest work first
  const studiesSorted = studies?.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1) || []

  // sort newest writings first
  const writingsSorted = writings?.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt)) ? 1 : -1) || []

  return {
    props: {
      writingsList: writingsSorted,
      studiesList: studiesSorted,
      workList: workSorted,
      settings: siteSettings || {}
    }
  }
}
