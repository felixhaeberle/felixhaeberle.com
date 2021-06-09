import React, { Component } from 'react';

import Button from '../../components/1_atoms/Button'
import CVSection from '../../components/2_molecules/CVSection'
import Gallery from '../../components/2_molecules/Gallery'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import Link from 'next/link'
import Principle from '../../components/2_molecules/Principle'
import Text from '../../components/1_atoms/Text'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import media from '../../components/0_helpers/viewportValues'
import styled from 'styled-components'

const Listing = styled.div``

const ImageWrapper = styled.div`
  margin-bottom: calc(var(--unit)* 4.5);
`

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
    a {
      margin-bottom: calc(var(--unit)*1);
    }
  `}

  ${media.lessThan("small")`
    flex-direction: row;
    a {
      margin-bottom: unset;
    }
  `}
`

export default function Me({ page, settings }) {
  const cvListing = [
    {title: 'Professional Experience', data: settings.cv.professional_experience},
    {title: 'Education', data: settings.cv.education},
    {title: 'Open Source', data: settings.cv.open_source}
  ]

  return (
    <Layout settings={settings} pageTitle={'About'}>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Listing>
          <r-grid columns="6">
            <r-cell span="4" flow-cols="2" span-m="4" flow-cols-m="1" span-s="6">
              <Intro page={page} />
            </r-cell>
            <r-cell span="2" span-m="2" span-s="6" class="cv-image">
              <ImageWrapper>
                <Image src="/images/profile.jpg" className="avatar" width="600px" height="686px" />
                <style jsx global>{`
                  .avatar {
                    filter: grayscale(10%)
                  }
                `}</style>
              </ImageWrapper>
              <Link href="/me">
                <a>
                  <Button title={"Let's talk"} symbol={'Voicemail24'} autoWidth/>
                </a>
              </Link>
              <SocialLinkWrapper>
                {settings.social_links.map(({link, text}, index) => (
                  <Link href={link} key={index} passHref>
                    <a target="_blank">
                      <Text>{text}</Text>
                    </a>
                  </Link>
                ))}
              </SocialLinkWrapper>
            </r-cell>
            {settings.cards.map((card, index) => (
              <r-cell key={index} span="2" span-m="3" span-s="6">
                <Principle card={card} index={index+1} />
              </r-cell>
            ))}
            {cvListing.map((item, index) => (
              <CVSection key={index} content={item} />
            ))}
            <r-cell span="6">
              <Gallery title={"Fun Facts"} />
            </r-cell>
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getPage("That's me");
  const siteSettings = await getSiteSettings();
  
  return {
    props: {
      page: page,
      settings: siteSettings
    }
  }
}