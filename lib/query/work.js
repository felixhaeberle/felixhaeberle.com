import { getSanityContent } from '../api';

export async function getWork() {
  const allWorkData = await getSanityContent({
    query: `
      query AllWork {
        allProject {
          title,
          description,
          link,
          releasedAt
        }
      }
    `,
  });

  return allWorkData.allProject.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.link,
    releasedAt: project.releasedAt
  }));
} 