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

const siteSettingsFields = `
  _id,
  'title': title,
  'site_title': site_title,
  'frontpage_text': frontpage_text,
  'currently': currently,
  'social_links': social_links,
  'legal_links': legal_links
`

const studyFields = `
  _id,
  title,
  'desc': description,
  'date': publishedAt,
  'link': externalLink,
  'slug': slug.current,
  'image': mainImage
`

export async function getSiteSettings(){
  const data = await client.fetch(`*[_type == "siteSettings"]{ ${siteSettingsFields} }`);
  return getUniquePosts(data)
}

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

export async function getSanityContent({ query, variables = {} }) {
  const { data } = await fetch(
    'https://32kc4e2s.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  ).then((response) => response.json());

  return data;
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