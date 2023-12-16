import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['example.com', 'localhost', 'www.iverfinne.no'], // Add your production domain to the list
  },
  env: {
    // Use local development URL or production domain based on the NODE_ENV variable
    metadataBase: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'https://www.iverfinne.no',
  },
  // ...additional Next.js config
};

export default withContentlayer(nextConfig);
