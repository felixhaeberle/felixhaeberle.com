import Head from 'next/head'
import Date from '../0_helpers/date'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../4_templates/Layout'
import Text from '../1_atoms/Text'
import HeaderWrapper from '../1_atoms/HeaderWrapper'

export default function Post({ postData, settings }) {
  return (
    <Layout settings={settings}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <HeaderWrapper>
            <Text.Large>{postData.title}</Text.Large>
        </HeaderWrapper>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} formatString={'LLLL d, yyyy'} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}