"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { useTranslation } from 'react-i18next';

const redis = Redis.fromEnv();

export default function ProjectsPage() {
    const { t } = useTranslation('common');
    const [views, setViews] = useState({});

    useEffect(() => {
        // Async function to fetch views
        const fetchViews = async () => {
            const viewsData = (
                await redis.mget<number[]>(
                    ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
                )
            ).reduce((acc, v, i) => {
                acc[allProjects[i].slug] = v ?? 0;
                return acc;
            }, {} as Record<string, number>);

            setViews(viewsData);
        };

        fetchViews();
    }, []);

    // Use t function to translate text
    return (
        <div className="relative pb-16">
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {t('projectsTitle')}
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        {t('projectsDescription')}
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    {/* Dynamically generate project cards */}
                    {allProjects.map((project) => (
                        <Card key={project.slug}>
                            <Link href={`/projects/${project.slug}`}>
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className={`text-xs ${views[project.slug] ? "text-zinc-100" : "text-zinc-400"}`}>
                                            {project.date ? (
                                                <time dateTime={new Date(project.date).toISOString()}>
                                                    {Intl.DateTimeFormat(undefined, {
                                                        dateStyle: "medium",
                                                    }).format(new Date(project.date))}
                                                </time>
                                            ) : (
                                                <span>SOON</span>
                                            )}
                                        </div>
                                        <span className={`flex items-center gap-1 text-xs ${views[project.slug] ? "text-zinc-500" : "text-zinc-400"}`}>
                                            <Eye className="w-4 h-4" />{" "}
                                            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                                                views[project.slug] ?? 0
                                            )}
                                        </span>
                                    </div>

                                    <h2 className={`mt-4 text-3xl font-bold sm:text-4xl font-display`}>
                                        {project.title}
                                    </h2>
                                    <p className={`mt-4 leading-8`}>
                                        {project.description}
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
