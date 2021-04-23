import { getSanityContent } from '../api';

export async function getWriting({ id }) {
  const allStudiesData = await getSanityContent({
    query: `
      query writing {
        allWritings(where: {_id: {eq: ${id}}}) {
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

  return allStudiesData.allStudy.map((study) => ({
    _id: study._id,
    title: study.title,
    description: study.description,
    externalLink: study.externalLink,
    publishedAt: study.publishedAt,
    image: study.image.image.asset._id,
    imageAlt: study.image.alternative 
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

  return allWritingsPaths.allWritings.map(writing => {
    return {
      params: {
        id: writing.slug.current
      }
    }
  })
}