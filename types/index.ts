// Site settings types
export interface SiteSettings {
  _id: string;
  title?: string;
  description?: string;
  site_title?: string;
  currently?: string;
  social_links?: SocialLink[];
  legal_links?: Link[];
  cards?: Card[];
  cv?: CV;
}

export interface SocialLink {
  _key?: string;
  text: string;
  link: string;
}

export interface Link {
  _key?: string;
  text: string;
  link: string;
}

export interface Card {
  _key?: string;
  title: string;
  text: string;
}

export interface CV {
  professional_experience?: CVItem[];
  education?: CVItem[];
  open_source?: CVItem[];
}

export interface CVItem {
  _key?: string;
  title: string;
  place: string;
  placeLink?: string;
  location: string;
  text: string;
  startDate: string;
  endDate?: string;
  ongoing?: boolean;
}

// Page types
// Define a basic content block structure for Sanity content
export interface SanityBlock {
  _key: string;
  _type: string;
  children?: SanityBlock[];
  markDefs?: Array<{
    _key: string;
    _type: string;
    [key: string]: unknown;
  }>;
  style?: string;
  [key: string]: unknown;
}

export interface Page {
  _id: string;
  title?: string;
  description?: string;
  content?: SanityBlock[];
}

// Writing types
export interface Writing {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  teaser?: string;
  contentRaw?: SanityBlock[];
  categories?: Category[];
  image?: SanityImage;
}

// Study types
// Sanity image type
export interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export interface Study {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  externalLink?: string;
  image?: SanityImage;
  imageAlt?: string;
}

// Work types
export interface Work {
  _id: string;
  title: string;
  description: string;
  releasedAt: string;
  link?: string;
  image?: SanityImage;
  imageAlt?: string;
}

// Category types
export interface Category {
  _id: string;
  title: string;
}