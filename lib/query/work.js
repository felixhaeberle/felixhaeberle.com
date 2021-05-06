import { getSanityContent } from '../api';

export async function getWork() {
  const allWorkData = await getSanityContent({
    query: `
      query AllWork {
        allProject {
          title,
          description,
          image {
            image {
              asset {
                _id
              }
            },
            alternative
          }
          link,
          releasedAt
        }
      }
    `,
  });

  return allWorkData.allProject.map((project) => ({
    title: project.title,
    description: project.description,
    image: project.image.image.asset._id,
    imageAlt: project.image.alternative,
    link: project.link,
    releasedAt: project.releasedAt
  }));
} 