import React from 'react';
import { useEffect } from 'react';
import { animate } from 'motion';

import Button from '../../components/1_atoms/Button.jsx'
import CVSection from '../../components/2_molecules/CVSection.jsx'
import Gallery from '../../components/2_molecules/Gallery.jsx'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../../components/1_atoms/Intro.jsx'
import Layout from '../../components/4_templates/Layout.jsx'
import Link from 'next/link'
import Principle from '../../components/2_molecules/Principle.jsx'
import { getPage } from '../../lib/query/page'
import { getSiteSettings } from '../../lib/query/settings'
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const storyImages = [
  {
    src: '/images/about-story-3.jpg',
    width: 3024,
    height: 4032,
    alt: 'Personal moment from Felix',
    caption: 'Berlin, Park am Nordbahnhof',
  },
  {
    src: '/images/about-story-1.jpg',
    width: 4284,
    height: 5712,
    alt: 'Outdoor moment from Felix',
    caption: 'Berliner Döner',
  },
  {
    src: '/images/about-story-2.jpg',
    width: 3024,
    height: 4032,
    alt: 'Personal visual note from Felix',
    caption: 'Twin Peaks, SF',
  },
]

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
        <div className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-24">
          <div className="site-split">
            <div className="lg:w-2/3 space-y-6 md:space-y-8">
              <h1 className="site-page-title font-sans text-xl text-textLight font-medium mb-3 md:mb-4">About</h1>
              <Intro page={page} />
            </div>
            <div>
              <div className="site-about-aside flex flex-col gap-y-6 md:gap-y-8">
                <div className="site-about-image">
                  <Image
                    src="/images/profile.png"
                    className="avatar border border-textDark/20 w-full h-auto"
                    width={1364}
                    height={1310}
                    alt="Profile picture"
                  />
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-5">
                  <Link href="mailto:kontakt@felixhaeberle.de?subject=%F0%9F%91%8B%20Hi%2C%20lets%20talk!" className="block w-full">
                    <Button title={"Let's talk"} symbol={'Email'} autoWidth/>
                  </Link>
                  <div className="site-social-links">
                    {settings.social_links.map(({link, text}, index) => (
                      <Link
                        href={link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <p className="font-sans text-base text-text font-medium">{text}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-grid site-grid--three">
            {settings.cards.map((card, index) => (
              <div key={index}>
                <Principle card={card} index={index+1} />
              </div>
            ))}
          </div>
          <section className="space-y-6 md:space-y-8">
            <p className="font-sans text-base text-text font-medium max-w-[36rem]">
              Happy places
            </p>
            <div className="site-grid site-grid--three site-grid--compact">
              {storyImages.map((image) => (
                <div key={image.src}>
                  <Image
                    src={image.src}
                    className="border border-textDark/20 w-full h-auto"
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                  />
                  <p className="font-mono text-xs text-textDark font-medium tracking-normal mt-3">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {cvListing.map((item, index) => (
            <CVSection key={index} content={item} />
          ))}
          <div>
            <Gallery title={"Fun Facts"} />
          </div>
        </div>
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
