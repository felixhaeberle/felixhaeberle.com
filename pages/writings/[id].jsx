import { BlogPostList, BlogPostListItem } from '../../components/1_atoms/BlogPostLists.jsx'
import { getWriting, getWritingsPaths } from '../../lib/query/writings'

import BlockContent from '@sanity/block-content-to-react'
import BlogPostHeader from '../../components/2_molecules/BlogPostHeader.jsx'
import BlogPostImage from '../../components/1_atoms/BlogPostImage.jsx'
import BlogPostLayout from '../../components/3_organisms/BlogPostLayout.jsx'
import Head from 'next/head'
import Layout from '../../components/4_templates/Layout.jsx'
import Link from 'next/link'
import Syntax from '../../components/1_atoms/Syntax.jsx'
import TweetEmbed from 'react-tweet-embed'
import { getSiteSettings } from '../../lib/query/settings'
import { SITE_URL, getSiteUrl } from '../../lib/site-metadata'
import { urlFor } from '../../lib/sanity'

export default function WritingPage ({ writing, settings }){
  const writingPath = `/writings/${writing.slug}`
  const writingUrl = getSiteUrl(writingPath)
  const writingMarkdownUrl = getSiteUrl(`${writingPath}.md`)
  const writingDescription = writing.teaserSmall || writing.teaser || `Article by Felix Häberle.`
  const writingImageUrl = writing.image ? urlFor(writing.image).width(1200).quality(90).url() : undefined
  const articleStructuredData = {
    '@type': 'Article',
    '@id': `${writingUrl}#article`,
    headline: writing.title,
    description: writingDescription,
    datePublished: writing.publishedAt,
    dateModified: writing.publishedAt,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@id': `${writingUrl}#webpage`
    },
    author: {
      '@id': `${SITE_URL}/#person`
    },
    publisher: {
      '@id': `${SITE_URL}/#person`
    },
    image: writingImageUrl ? [writingImageUrl] : undefined,
    articleSection: writing.categories?.map((category) => category.title).filter(Boolean),
    encoding: {
      '@type': 'MediaObject',
      encodingFormat: 'text/markdown',
      contentUrl: writingMarkdownUrl
    }
  }

  const serializers = {
    types: {
      block: props => {
        switch (props.node.style) {
          case 'h1':
            return <h1 className="font-sans text-base text-text font-medium text-[calc(var(--unit)*3.5)] leading-[1.3] mb-[calc(var(--unit)*4)]">{props.children}</h1>
          case 'h2':
            return <h2 className="font-sans text-base text-text font-medium text-[calc(var(--unit)*2.75)] leading-[1.4] mb-[calc(var(--unit)*3)]">{props.children}</h2>
          default:
            return <p className="font-sans text-base text-text font-medium font-normal text-[calc(var(--unit)*2.25)] leading-[calc(var(--unit)*3.75)] mb-[calc(var(--unit)*4.75)]">{props.children}</p>
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
        <div className="w-full mx-auto select-none my-[calc(var(--unit)*6.75)]">
          <TweetEmbed
            id={props.node.id}
            placeholder={'loading'}
            options={{theme: 'dark', align: 'center'}} />
        </div>
      )
    },
    list: (props) => (<BlogPostList type={props.type}>{props.children}</BlogPostList>),
    listItem: (props) => (<BlogPostListItem tag="li">{props.children}</BlogPostListItem>),
    marks: {
      strong: (props) => <strong className="font-sans text-base text-text font-medium font-normal text-[calc(var(--unit)*2.25)] leading-[calc(var(--unit)*3.75)] mb-[calc(var(--unit)*4.75)] font-medium">{props.children}</strong>,
      em: (props) => <em className="font-sans text-base text-text font-medium font-normal text-[calc(var(--unit)*2.25)] leading-[calc(var(--unit)*3.75)] mb-[calc(var(--unit)*4.75)] font-mono font-medium tracking-[-0.75px] text-[0.95em] text-[#0f57d3]">{props.children}</em>,
      code: (props) => (
        <code className="inline relative -top-[1px] font-mono font-normal text-[0.9em] -m-[1px_-1px] p-[4.5px_8px] bg-buttonBg/75 rounded-[2px] box-decoration-clone">
          {props.children}
        </code>
      ),
      underline: (props) => <span className="font-sans text-base text-text font-medium font-normal text-[calc(var(--unit)*2.25)] leading-[calc(var(--unit)*3.75)] mb-[calc(var(--unit)*4.75)] underline decoration-textDark/70 underline-offset-[3px] decoration-[2px]">{props.children}</span>,
      link: (props) => {
        return (
          <Link 
            href={props.mark.href}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text underline hover:text-textDark"
          >
            {props.children}
          </Link>
        );
      },
    },
  }

  return (
    <Layout
      settings={settings}
      pageTitle={writing.title}
      canonicalPath={writingPath}
      markdownPath={`${writingPath}.md`}
      metaDescription={writingDescription}
      ogImage={writingImageUrl}
      ogType="article"
      structuredDataItems={[articleStructuredData]}
    >
      <Head>
        <title>{writing.title}</title>
        <meta name="citation_title" content={writing.title} />
        <meta name="citation_author" content="Felix Häberle" />
        <meta name="citation_publication_date" content={writing.publishedAt} />
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
