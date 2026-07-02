import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '32kc4e2s',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03', // Use a current date to avoid deprecation warnings
}

// Initialize Sanity client
export const client = createClient(config)

// Initialize image URL builder
const builder = imageUrlBuilder(client)

// Function to generate image URLs
export const urlFor = (source) => {
  if (!source) return builder.image('');
  
  try {
    // Extract image asset ref from various formats
    let imageRef;
    
    // Handle direct string (asset ID)
    if (typeof source === 'string') {
      imageRef = source;
      return builder.image({_ref: imageRef, _type: 'reference'});
    }
    
    // Handle direct reference object
    if (source._ref) {
      return builder.image(source);
    }
    
    // Handle direct asset object
    if (source.asset && source.asset._ref) {
      return builder.image(source);
    }
    
    // Handle "source" wrapped objects (the case in our error)
    if (source.source) {
      if (typeof source.source === 'string') {
        return builder.image({_ref: source.source, _type: 'reference'});
      }
      if (source.source._ref) {
        return builder.image(source.source);
      }
      if (source.source.asset && source.source.asset._ref) {
        return builder.image(source.source);
      }
    }
    
    // Handle simple asset ID in a string
    if (typeof source === 'string' && source.startsWith('image-')) {
      return builder.image({_ref: source, _type: 'reference'});
    }
    
    // Last attempt to make it work with any source format
    return builder.image(source);
  } catch (error) {
    console.error("Error generating image URL:", error, "Source:", JSON.stringify(source));
    // Return empty builder to avoid breaking the chain
    return builder.image('');
  }
}

export default client