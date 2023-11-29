import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  i18n: {
    locales: ['en', 'no'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['example.com'],
  },
  env: {
    // Replace 'your-production-domain.com' with your actual domain for production
    // During development, 'metadataBase' will fall back to 'http://localhost:3000'
    metadataBase: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.iverfinne.no',
  }
};

export default withContentlayer(nextConfig);