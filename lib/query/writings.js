import { getSanityContent } from '../api';

export async function getWriting(id) {
  let writingData = await getSanityContent({
    query: `
      query writing {
        allWritings(where: {slug: {current: {eq: "${id}"}}}) {
          _id,
          title,
          teaser,
          image {
            image {
              asset {
                _id
              }
            },
            alternative
          }
        }
      }
    `,
  });

  return writingData.allWritings.map((writing) => ({
    _id: writing._id,
    title: writing.title,
    teaser: writing.teaser,
    image: writing.image.image.asset._id,
    imageAlt: writing.image.alternative 
  }));
}

export async function getWritingsPaths() {
  const allWritingsPaths = await getSanityContent({
    query: `
      query AllWritingPaths {
        allWritings {
          _id,
          title,
          slug {
            current
          }
        }
      }
    `
  })

  let paths = allWritingsPaths.allWritings.map(writing => {
    return {
      params: {
        id: writing.slug.current
      }
    }
  })

  return paths;
}