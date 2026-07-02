import Head from 'next/head'
import Date from '../0_helpers/date'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../4_templates/Layout'

export default function Post({ postData, settings }) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="font-sans text-xl text-textLight font-medium">{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} formatString={'LLLL d, yyyy'} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}