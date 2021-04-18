import BlogPostHeader from '../../components/2_molecules/BlogPostHeader'
import BlogPostLayout from '../../components/3_organisms/BlogPostLayout'
import BlogPostParagraph from '../../components/1_atoms/BlogPostParagraph'
import BlogPostImage from '../../components/1_atoms/BlogPostImage'
import Syntax from '../../components/1_atoms/Syntax'
import CardWritings from '../../components/2_molecules/CardWritings'
import Filtering from '../../components/2_molecules/Filtering'
import Head from 'next/head'
import Intro from '../../components/1_atoms/Intro'
import Layout from '../../components/4_templates/Layout'
import { getSiteSettings } from '../../lib/query/settings'

export default function Writings({settings}) {

  const codeSnippet = 
`.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}`
  
  const writings = [{
    title: 'This is an interesting blog post',
    link: '/some-link',
    shortText: 'This is an short rext for this really interesting blog post lets talk',
    longText: 'I have something more to say about this really good blog post with more insights and more interesting information with extra value.',
    date: '2021-03-12'
  },{
    title: 'This is an interesting blog post',
    link: '/some-link',
    shortText: 'This is an short rext for this really interesting blog post lets talk',
    longText: 'I have something more to say about this really good blog post with more insights and more interesting information with extra value.',
    date: '2021-03-12'
  },{
    title: 'This is an interesting blog post',
    link: '/some-link',
    shortText: 'This is an short rext for this really interesting blog post lets talk',
    longText: 'I have something more to say about this really good blog post with more insights and more interesting information with extra value.',
    date: '2021-03-12'
  }]

  return (
    <Layout settings={settings} pageTitle={'Writings'}>
      <Head>
        <title>Writings</title>
      </Head>
      <main>
        <Intro />
        <Filtering />
        <r-grid columns="6" columns-s="2" columns-xs="1">
          {writings.map((writing, index) => (
            <CardWritings 
              title={writing.title}
              link={writing.link}
              shortText={writing.shortText}
              longText={writing.longText}
              date={writing.date}
              key={index}
            />
          ))}
        </r-grid>
        <BlogPostLayout>
          <BlogPostHeader 
            title={'This is a really interesting topic I want to explain in detail about it with this post.'}
            date={'2021-03-18'}
            categories={[{title: 'Accessibility'}, {title: 'The Web Of Tomorrow'}]}
            />
          <BlogPostParagraph>
            This is a really interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post.
          </BlogPostParagraph>
          <BlogPostParagraph>
            This is a really interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post.
          </BlogPostParagraph>
          <BlogPostImage 
            image={'image-fe932a4080646bb7e7bb90974fbb4db32cadb32c-5472x3648-jpg'}
            imageAlt={'This is an rellay interesting subtitle with a lot of information in it.'}
            text={'This is an rellay interesting subtitle with a lot of information in it.'} />
          <Syntax langCode={'css'} code={codeSnippet}/>
        </BlogPostLayout>
      </main>
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