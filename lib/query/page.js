import { getSanityContent } from '../api';

export async function getPage(title) {
  let pageData = await getSanityContent({
    query: `
      query Page {
        allPage(where: {title: {eq: "${title}"}}) {
          title,
          contentRaw
        }
      }
    `,
  });

  return pageData.allPage.map((page) => ({
    title: page.title,
    contentRaw: page.contentRaw 
  }))[0];
}