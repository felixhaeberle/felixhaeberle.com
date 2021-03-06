import {
  groq,
  createClient,
  createImageUrlBuilder
} from 'next-sanity'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
}

export const urlFor = source => createImageUrlBuilder(config).image(source)
export const client = createClient(config)

export default client