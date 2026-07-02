/** @type {import('next').NextConfig} */
const aiResourceHeaders = [
  {
    key: 'Access-Control-Allow-Origin',
    value: '*'
  },
  {
    key: 'X-Robots-Tag',
    value: 'index, follow'
  },
  {
    key: 'Cache-Control',
    value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
  }
]

const markdownHeaders = [
  {
    key: 'Content-Type',
    value: 'text/markdown; charset=utf-8'
  },
  ...aiResourceHeaders
]

const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'i.scdn.co', 'substackcdn.com'],
  },
  // Configure webpack for proper file resolution
  webpack: (config, { isServer }) => {
    // Handle both .js and .jsx extensions
    config.resolve.extensions = ['.js', '.jsx', '.json', '.ts', '.tsx']
    
    // Ensure proper module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    }
    
    return config
  },
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: markdownHeaders
      },
      {
        source: '/llms-full.txt',
        headers: markdownHeaders
      },
      {
        source: '/index.html.md',
        headers: markdownHeaders
      },
      {
        source: '/work/index.html.md',
        headers: markdownHeaders
      },
      {
        source: '/studies/index.html.md',
        headers: markdownHeaders
      },
      {
        source: '/writings/index.html.md',
        headers: markdownHeaders
      },
      {
        source: '/writings/:slug.md',
        headers: markdownHeaders
      },
      {
        source: '/me/index.html.md',
        headers: markdownHeaders
      },
      {
        source: '/legal/impressum/index.html.md',
        headers: markdownHeaders
      },
      {
        source: '/ai.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json; charset=utf-8'
          },
          ...aiResourceHeaders
        ]
      },
      {
        source: '/schema.jsonld',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/ld+json; charset=utf-8'
          },
          ...aiResourceHeaders
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8'
          },
          ...aiResourceHeaders
        ]
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/writings/:slug.md',
          destination: '/api/markdown/writings/:slug'
        }
      ]
    }
  },
  // Support both .js and .jsx page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Ensure Spotify API works properly
  serverExternalPackages: ['spotify-web-api-node'],
  // Set strict mode to help find potential issues
  reactStrictMode: true,
}

export default nextConfig;
