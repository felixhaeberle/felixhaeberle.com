import { getWriting, getWritingsPaths } from '../../lib/query/writings'

import BlogPostHeader from '../../components/2_molecules/BlogPostHeader'
import BlogPostImage from '../../components/1_atoms/BlogPostImage'
import BlogPostLayout from '../../components/3_organisms/BlogPostLayout'
import BlogPostParagraph from '../../components/1_atoms/BlogPostParagraph'
import Head from 'next/head'
import { Headline } from '../../components/1_atoms/Headline'
import Layout from '../../components/4_templates/Layout'
import Syntax from '../../components/1_atoms/Syntax'
import { getSiteSettings } from '../../lib/query/settings'

export default function PostPage ({ writing, settings }){
  
  const serializers = {
    types: {
      code: props => (
        <Syntax 
          langCode={String(props.node.language).toLowerCase()} 
          code={props.node.code} 
          highlightedRange={"1-10,15,20-22"} />
      ),
      a11yImage: props => (
        <BlogPostImage
          image={props.node.id}
          imageAlt={props.node.alt}
          text={props.node.text} />
      )
    }
  }

  return (
    <Layout settings={settings}>
      <Head>
        <title>{writing.title}</title>
      </Head>
      <main>
        <BlogPostLayout>
            <BlogPostHeader 
              title={writing.title}
              date={'2021-03-18'}
              categories={[{title: 'Accessibility'}, {title: 'The Web Of Tomorrow'}]}
              />
            {/* <BlockContent blocks={article.body} serializers={serializers} /> */}
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
      writing: writingData[0],
      settings: siteSettings
    }
  }
}



// <>
//   <BlogPostParagraph>
//   This is a really interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post.
//   </BlogPostParagraph>
//   <BlogPostParagraph>
//   This is a really interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post.
//   </BlogPostParagraph>
//   <BlogPostImage
//     image={'image-fe932a4080646bb7e7bb90974fbb4db32cadb32c-5472x3648-jpg'}
//     imageAlt={'This is an rellay interesting subtitle with a lot of information in it.'}
//     text={'This is an rellay interesting subtitle with a lot of information in it.'} />
//   <Syntax 
//     langCode={'jsx'} 
//     code={codeSnippet} />
//   <Headline.Large>
//   Tis is a really nice headline
//   </Headline.Large>
//   <BlogPostParagraph>
//   This is a really interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post.
//   </BlogPostParagraph>
//   <Headline.Medium>
//   Tis is a really nice headline
//   </Headline.Medium>
//   <BlogPostParagraph>
//   This is a really interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post. This is  a rellay interesting topic I want to explain in detail about it with this post.
//   </BlogPostParagraph>
// </>