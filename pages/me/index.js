import Button from '../../components/1_atoms/Button'
import CVSection from '../../components/2_molecules/CVSection'
import Gallery from '../../components/2_molecules/Gallery'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/4_templates/Layout'
import Link from 'next/link'
import Principle from '../../components/2_molecules/Principle'
import Text from '../../components/1_atoms/Text'
import { getSiteSettings } from '../../lib/query/settings'
import styled from 'styled-components'

const Listing = styled.div``

const ImageWrapper = styled.div`
  margin-bottom: calc(var(--unit)* 4.5);
`

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Me({ settings }) {
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
            <r-cell span="4" flow-cols="2" span-m="3" flow-cols-m="1" span-s="6">
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</Text.Intro>
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999. My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer.</Text.Intro>
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999. My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer.</Text.Intro>
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</Text.Intro>
            </r-cell>
            <r-cell span="2" span-m="3" span-s="6" order-s="-1" class="cv-image">
              <ImageWrapper>
                <Image src="/images/profile.png" width="300px" height="300px" />
              </ImageWrapper>
              <Link href="/me">
                <a>
                  <Button title={"Let's talk"} symbol={'Voicemail24'}/>
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
  const siteSettings = await getSiteSettings();
  
  return {
    props: {
      settings: siteSettings
    }
  }
}