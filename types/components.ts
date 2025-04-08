import { ReactNode, ElementType } from 'react';
import { Category, Writing, Study, Work, CVItem } from './index';

// Common prop types
export interface BaseProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  id?: string;
  [key: string]: unknown;
}

export interface AsProps extends BaseProps {
  as?: ElementType;
}

// Specific component prop types
export interface BadgeProps extends BaseProps {
  text: string;
}

export interface BlogPostImageProps {
  image: string;
  imageAlt?: string;
  text?: string;
}

export interface BlogPostListsProps extends BaseProps {
  type?: 'bullet' | 'number';
}

export interface BlogPostParagraphProps extends BaseProps {}

export interface ButtonProps extends BaseProps {
  title: string;
  symbol?: 'ArrowRight' | 'Email' | 'Voicemail';
  autoWidth?: boolean;
  onClick?: () => void;
}

export interface ExternalLinkProps extends BaseProps {
  href: string;
}

export interface FooterLinkProps extends BaseProps {
  title: string;
  href: string;
}

export interface FooterLinksProps extends BaseProps {
  links: { text: string; link: string }[];
}

export interface HeadlineProps extends BaseProps {
  title: string;
}

export interface IntroProps extends BaseProps {}

export interface ListProps extends BaseProps {
  items: string[];
}

export interface ProfileImageProps extends BaseProps {
  src?: string;
  alt?: string;
}

export interface SyntaxProps extends BaseProps {
  langCode?: string;
  code: string;
}

export interface TweetWrapperProps extends BaseProps {
  id: string;
}

// Molecule component prop types
export interface BlogPostHeaderProps {
  title: string;
  date: string;
  categories?: Category[];
}

export interface BlogPostHeaderImageProps {
  title: string;
  date: string;
  categories?: Category[];
  image: string;
  imageAlt?: string;
}

export interface CVHeaderProps {
  title: string;
}

export interface CVSectionProps {
  content: {
    title: string;
    data?: CVItem[];
  };
}

export interface CardProps extends BaseProps {
  title: string;
  text: string;
}

export interface CardStudiesProps {
  studies: Study[];
}

export interface CardWritingsProps {
  writings: Writing[];
  categories?: Category[];
}

export interface FilteringProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface FooterProps {
  currently?: string;
  legal_links?: { text: string; link: string }[];
  social_links?: { text: string; link: string }[];
}

export interface GalleryProps {
  items: Work[];
}

export interface HeaderProps {
  title?: string;
}

export interface NavigationProps extends BaseProps {}

export interface PrincipleProps extends BaseProps {
  title: string;
  text: string;
}

export interface StackProps extends BaseProps {}

// Organism component prop types
export interface BlogPostLayoutProps extends BaseProps {}

export interface PostsProps {
  writings: Writing[];
  categories: Category[];
}

// Template component prop types
export interface LayoutProps extends BaseProps {
  settings?: {
    title?: string;
    description?: string;
    site_title?: string;
    currently?: string;
    legal_links?: { text: string; link: string }[];
    social_links?: { text: string; link: string }[];
  };
}