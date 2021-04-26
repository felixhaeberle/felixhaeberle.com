import { getSanityContent } from '../api';

export async function getCategory() {
  let categoryData = await getSanityContent({
    query: `
      query category {
        allCategory {
          _id,
          title,
          handle,
          symbol
        }
      }
    `,
  });

  return categoryData.allCategory.map((category) => ({
    _id: category._id,
    title: category.title,
    handle: category.handle,
    symbol: category.symbol
  }));
}