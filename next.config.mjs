// next.config.mjs
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    // Add your image domains if needed
    domains: ['example.com'],
  },
  generateMetadata: (pages) => ({
    metadataBase: 'https://www.iverfinne.com',
    // Other metadata configurations if needed
  }),
};

export default withContentlayer(nextConfig);
