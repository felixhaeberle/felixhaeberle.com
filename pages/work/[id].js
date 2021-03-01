import { getAllPostIds, getPostData } from '../../lib/content'
import Post from '../../components/3_organisms/Posts'

const workDir = 'content/work'

export default function PostPage ({ postData }){
  return (
    <Post postData={postData} />
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds(workDir)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, workDir)
  return {
    props: {
      postData
    }
  }
}

