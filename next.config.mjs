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
  }
};

export default withContentlayer(nextConfig);
