import { getAllPostIds, getPostData } from '../../lib/content'
import { getSanityContent } from '../../lib/api'
import Post from '../../components/3_organisms/Posts'

const writingsDir = 'content/writings'

export default function PostPage ({ postData, settings }){
  return (
    <Post postData={postData} settings={settings} />
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds(writingsDir)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, writingsDir)
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

  debugger
  
  const settingsData = allSettingsData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    legal_links: setting.legal_links,
    social_links: setting.social_links
  }))[0];
  
  return {
    props: {
      postData: postData,
      settings: settingsData
    }
  }
}