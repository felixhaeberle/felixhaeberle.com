/** @type {import('next').NextConfig} */
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
  // Support both .js and .jsx page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Ensure Spotify API works properly
  serverExternalPackages: ['spotify-web-api-node'],
  // Set strict mode to help find potential issues
  reactStrictMode: true,
}

export default nextConfig;