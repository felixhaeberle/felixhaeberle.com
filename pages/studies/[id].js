import { getAllPostIds, getPostData } from '../../lib/content'
import Post from '../../components/3_organisms/Posts'

const studiesDir = 'content/studies'

export default function PostPage ({ postData }){
  return (
    <Post postData={postData} />
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds(studiesDir)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, studiesDir)
  return {
    props: {
      postData
    }
  }
}
