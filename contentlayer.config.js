
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = {
	path: {
	  type: "string",
	  resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	slug: {
	  type: "string",
	  resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
  };
  
  export const Project = defineDocumentType(() => ({
	name: "Project",
	filePathPattern: "./projects/**/*.mdx",
	contentType: "mdx",
  
	fields: {
	  published: {
		type: "boolean",
	  },
	  title: {
		type: "string",
		required: true,
	  },
	  description: {
		type: "string",
		required: true,
	  },
	  date: {
		type: "date",
	  },
	  url: {
		type: "string",
	  },
	  repository: {
		type: "string",
	  },
	},
	computedFields,
  }));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
  },
  computedFields,
}));
export const GalleryProject = defineDocumentType(() => ({
	name: 'GalleryProject',
	filePathPattern: './gallery_projects/**/*.mdx',
	contentType: 'mdx',
	fields: {
	  title: { type: 'string', required: true },
	  image: { type: 'string', required: true },
	},
	computedFields,
  }));
  
  export const GalleryImage = defineDocumentType(() => ({
	name: 'GalleryImage',
	filePathPattern: './gallery/**/*.mdx',
	contentType: 'mdx',
	fields: {
	  title: { type: 'string', required: true },
	  description: { type: 'string' },
	  image: { type: 'string', required: true },
	},
	computedFields,
  }));
  
  export default makeSource({
	contentDirPath: './content',
	documentTypes: [Page, Project, GalleryImage, GalleryProject],
	mdx: {
	  remarkPlugins: [remarkGfm],
	  rehypePlugins: [
		rehypeSlug,
		[
		  rehypePrettyCode,
		  {
			theme: 'github-dark',
		  },
		],
		[
		  rehypeAutolinkHeadings,
		  {
			properties: {
			  className: ['subheading-anchor'],
			  ariaLabel: 'Link to section',
			},
		  },
		],
	  ],
	},
  });