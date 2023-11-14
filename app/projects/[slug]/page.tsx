import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
    project: Project;
    views?: number; // Made optional with '?'
    darkMode?: boolean; // Made optional with '?'
};
const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}
	const views = /* logic to determine views */;
	const darkMode = /* logic to determine if dark mode is active */;
	
	return (
		<div className="min-h-screen">
			<Header project={project} views={views} darkMode={darkMode} />
			<ReportView slug={project.slug} />
			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}