"use client";
// header.tsx
import { ArrowLeft, Eye, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  darkMode: boolean; // Added darkMode prop
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
  views: number;
};

export const Header: React.FC<Props> = ({ darkMode, project, views }) => { // Now accepts darkMode prop
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Determine text color based on darkMode
  const textColor = darkMode ? 'text-white' : 'text-black';
  const descriptionColor = darkMode ? 'text-zinc-300' : 'text-zinc-700';

  return (
    <header ref={ref} className="relative isolate overflow-hidden">
      <div className="container mx-auto relative isolate overflow-hidden sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className={`text-4xl font-bold tracking-tight sm:text-6xl font-display ${textColor}`}>
              {project.title}
            </h1>
            <p className={`mt-6 text-lg leading-8 ${descriptionColor}`}>
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className={`grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-67 ${textColor}`}>
              {
                links.map((link) => (
                  <Link key={link.label} href={link.href} passHref>
                    <a target="_blank" className={`hover:underline ${textColor}`}>
                      {link.label} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
