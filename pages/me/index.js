import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { getSortedData } from '../../lib/content'
import { socialLinks } from '../_app'
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

export default function Me() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>About</Text.Large>
      </HeaderWrapper>
      <div>
        <Listing>
          <r-grid columns="6" columns-s="2">
            <r-cell span="4" flow-cols="2" flow-cols-s="1">
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</Text.Intro>
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999. My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer.</Text.Intro>
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999. My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer.</Text.Intro>
              <Text.Intro>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</Text.Intro>
            </r-cell>
            <r-cell span="2" style={{justifySelf: 'end'}}>
              <ImageWrapper>
                <Image src="/images/profile.png" width="300px" height="300px" />
              </ImageWrapper>
              <Link href="/me">
                <a>
                  <Button title={"Let's talk"} symbol={'Voicemail24'}/>
                </a>
              </Link>
              <SocialLinkWrapper>
                {socialLinks.map(({url, title}, index) => (
                  <Link href={url} key={index} passHref>
                    <a>
                      <Text>{title}</Text>
                    </a>
                  </Link>
                ))}
              </SocialLinkWrapper>
            </r-cell>
            <r-cell span="2">
              <Principle />
            </r-cell>
            <r-cell span="2">
              <Principle />
            </r-cell>
            <r-cell span="2">
              <Principle />
            </r-cell>
            {cvListing.map((item) => (
              <CVSection content={item} />
            ))}
          </r-grid>
        </Listing>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let allStudiesData = getSortedData('content/studies');
  return {
    props: {
      studiesList: allStudiesData
    }
  }
}