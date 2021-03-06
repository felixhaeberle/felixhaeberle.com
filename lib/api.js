import client from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const studyFields = `
  _id,
  title,
  'desc': description,
  'date': publishedAt,
  'link': externalLink,
  'slug': slug.current,
  'image': mainImage,
`

export async function getPreviewPostBySlug(slug) {
  const data = await client.fetch(
    `*[_type == "study" && slug.current == $slug] | order(publishedAt desc){
      ${studyFields}
      body
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "study"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome() {
  const results = await client.fetch(`*[_type == "study"] | order(publishedAt desc){ ${studyFields} }`)
  return getUniquePosts(results)
}

/*export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}*/