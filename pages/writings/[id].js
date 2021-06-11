import { BlogPostList, BlogPostListItem } from '../../components/1_atoms/BlogPostLists'
import { getWriting, getWritingsPaths } from '../../lib/query/writings'

import BlockContent from '@sanity/block-content-to-react'
import BlogPostHeader from '../../components/2_molecules/BlogPostHeader'
import BlogPostImage from '../../components/1_atoms/BlogPostImage'
import BlogPostLayout from '../../components/3_organisms/BlogPostLayout'
import { BlogPostParagraph } from '../../components/1_atoms/BlogPostParagraph'
import Head from 'next/head'
import { Headline } from '../../components/1_atoms/Headline'
import Layout from '../../components/4_templates/Layout'
import Link from 'next/link'
import Syntax from '../../components/1_atoms/Syntax'
import TweetEmbed from 'react-tweet-embed'
import TweetWrapper from '../../components/1_atoms/TweetWrapper'
import { getSiteSettings } from '../../lib/query/settings'
import { urlFor } from '../../lib/sanity'

export default function WritingPage ({ writing, settings }){

  const serializers = {
    types: {
      block: props => {
        switch (props.node.style) {
          case 'h1':
            return <Headline.Large>{props.children}</Headline.Large>
          case 'h2':
            return <Headline.Medium>{props.children}</Headline.Medium>
          default:
            return <BlogPostParagraph>{props.children}</BlogPostParagraph>
        }
      },
      code: props => (
        <Syntax 
          langCode={String(props.node.language).toLowerCase()} 
          code={props.node.code} />
      ),
      a11yImage: props => (
        <BlogPostImage
          image={props.node.image.asset._ref}
          imageAlt={props.node.alternative}
          text={props.node.caption} />
      ),
      tweet: props => (
        <TweetWrapper>
          <TweetEmbed
            id={props.node.id}
            placeholder={'loading'}
            options={{theme: 'dark', align: 'center'}} />
        </TweetWrapper>
      )
    },
    list: (props) => (<BlogPostList type={props.type}>{props.children}</BlogPostList>),
    listItem: (props) => (<BlogPostListItem tag="li">{props.children}</BlogPostListItem>),
    marks: {
      strong: (props) => <BlogPostParagraph.Bold as="strong">{props.children}</BlogPostParagraph.Bold>,
      em: (props) => <BlogPostParagraph.Italic as="em">{props.children}</BlogPostParagraph.Italic>,
      code: (props) => <BlogPostParagraph.Code>{props.children}</BlogPostParagraph.Code>,
      underline: (props) => <BlogPostParagraph.Underline as="span">{props.children}</BlogPostParagraph.Underline>,
      link: (props) => {
        return (
          <Link href={props.mark.href} passHref>
            <BlogPostParagraph.Link as="a" target="_blank">{props.children}</BlogPostParagraph.Link>
          </Link>
        );
      },
    },
  }

  return (
    <Layout settings={settings}>
      <Head>
        <title>{writing.title}</title>
        <meta
          property="og:image"
          content={urlFor(writing.image.source).width(500).url()}
        />
        <meta name="og:title" content={writing.title} />
        <meta name="description" content="Felix Häberle – Portfolio" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,500&display=swap" rel="stylesheet" />
      </Head>
      <main className={'blog'}>        
        <BlogPostLayout>
            <BlogPostHeader 
              title={writing.title}
              date={writing.publishedAt}
              categories={writing.categories}
              />
            <BlockContent blocks={writing.contentRaw} serializers={serializers} />
          </BlogPostLayout>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getWritingsPaths();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const writingData = await getWriting(params.id)
  const siteSettings = await getSiteSettings();

  return {
    props: {
      writing: writingData,
      settings: siteSettings
    }
  }
}