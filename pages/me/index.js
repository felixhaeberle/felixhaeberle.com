import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { getSanityContent } from '../../lib/api'
import cv from '../../content/me/cv.json'
import Layout from '../../components/4_templates/Layout'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import Button from '../../components/1_atoms/Button'
import Principle from '../../components/2_molecules/Principle'
import CVSection from '../../components/2_molecules/CVSection'

const Listing = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
`

const ImageWrapper = styled.div`
  margin-bottom: calc(var(--unit)* 4.5);
`

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const cvListing = [
  {title: 'Professional Experience', data: cv.filter((item) => (item.type === "experience"))},
  {title: 'Education', data: cv.filter((item) => (item.type === "education"))},
  {title: 'Open Source', data: cv.filter((item) => (item.type === "open source"))}
]

export default function Me({settings}) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>About</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>About</Text.Large>
      </HeaderWrapper>
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
                    <a>
                      <Text>{text}</Text>
                    </a>
                  </Link>
                ))}
              </SocialLinkWrapper>
            </r-cell>
            <r-cell span="2" span-m="3" span-s="6">
              <Principle />
            </r-cell>
            <r-cell span="2" span-m="3" span-s="6">
              <Principle />
            </r-cell>
            <r-cell span="2" span-m="3" span-s="6">
              <Principle />
            </r-cell>
            {cvListing.map((item, index) => (
              <CVSection key={index} content={item} />
            ))}
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allSettingsData = await getSanityContent({
    query: `
      query AllSettings {
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
      }
    `,
  });
  
  const settingsData = allSettingsData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    legal_links: setting.legal_links,
    social_links: setting.social_links
  }))[0];

  return {
    props: {
      settings: settingsData
    }
  }
}