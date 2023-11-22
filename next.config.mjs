import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  i18n: {
    locales: ['en', 'no'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['example.com'],
  },
  generateMetadata: (pages) => ({
    metadataBase: 'https://www.iverfinne.com',
    // Other metadata configurations if needed
  }),
};

export default withContentlayer(nextConfig);
