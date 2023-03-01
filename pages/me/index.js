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
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { useEffect } from 'react';
import { animate } from 'motion';

const Listing = styled.div``

const ImageWrapper = styled.div`
  margin-bottom: calc(var(--unit)* 4.5);

  img {
    border: 1px solid rgba(var(--colorTextDarkRBG),0.2) !important;
  }
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
  // const nowPlaying = useSWR('/api/now-playing', fetcher);
  // const topTracks = useSWR('/api/top-tracks', fetcher);

  // const { data: nowPlayingData } = nowPlaying;
  // const { data: topTracksData } = topTracks;

  // useEffect(() => {
  //   console.log(nowPlayingData, topTracksData);
  // }, [nowPlaying, topTracksData]);

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
                <Image src="/images/profile-nobackground.png" className="avatar" width="600px" height="600px" />
                {/* <style jsx global>{`
                  .avatar {
                    filter: brightness(80%);
                    opacity: 0.85;
                  }
                `}</style> */}
              </ImageWrapper>
              <Link href="mailto:kontakt@felixhaeberle.de?subject=%F0%9F%91%8B%20Hi%2C%20lets%20talk!">
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
            {/* {nowPlayingData && (
              <r-cell span="2" span-m="2" flow-cols-m="2" span-s="6">
                <div>
                  <Text type="h3">Now Playing</Text>
                  <Image style={{ paddingTop: '30px' }} src={nowPlayingData.albumImageUrl} width="300px" height="300px" />
                  <div style={{ paddingTop: '15px' }}>
                    <Text type="h4">{nowPlayingData.title}</Text>
                    <Text.Small.Dark type="h4">{nowPlayingData.artist}</Text.Small.Dark>
                  </div>
                </div>
              </r-cell>
            )}
            {topTracksData && (
              <r-cell span="4" span-m="4" flow-cols="2" flow-cols-m="4" span-s="6" gap="20">
                  <Text type="h3">Top Tracks</Text>
                  <div style={{ paddingTop: '30px' }}>
                  {topTracksData.tracks.map((track, index) => (
                    // spotify svg
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                      <div style={{ height: '20px', width: '20px', marginRight: '20px' }}>
                        <svg fill="#1DB954" height="100%" id="Layer_1" width="100%" viewBox="0 0 2931 2931" xmlns="http://www.w3.org/2000/svg">
                          <path className="st0" d="M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z" />
                        </svg>
                      </div>
                      <div key={index} style={{  }}>
                        <Text type="h4">{track.title}</Text>
                        <Text.Small.Dark type="h4">{track.artist}</Text.Small.Dark>
                      </div>
                    </div>
                  ))}
                  </div>
              </r-cell>
            )} */}
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

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="w-auto flex items-end overflow-hidden">
      <span
        id="bar1"
        className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
      />
      <span
        id="bar2"
        className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
      />
      <span
        id="bar3"
        className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
      />
    </div>
  );
}