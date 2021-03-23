import { getSanityContent } from '../api';

export async function getStudies() {
  const allStudiesData = await getSanityContent({
    query: `
      query AllStudies {
        allStudy {
          title,
          description,
          externalLink,
          publishedAt,
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
    title: study.title,
    description: study.description,
    externalLink: study.externalLink,
    publishedAt: study.publishedAt,
    image: study.image.image.asset._id,
    imageAlt: study.image.alternative 
  }));
}