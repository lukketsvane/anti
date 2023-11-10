// header.tsx
import { ArrowLeft, Eye, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
  views: number;
};

export const Header: React.FC<Props> = ({ project, views }) => {
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

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div className="container mx-auto relative isolate py-16 sm:py-20"> {/* Reduced padding for less height */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-display"> {/* Reduced font size for smaller headers */}
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-6 text-zinc-300"> {/* Adjusted margin and text size */}
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-none"> {/* Reduced margin */}
            <div className="grid grid-cols-1 gap-y-4 gap-x-8 text-sm font-semibold leading-6 text-white sm:grid-cols-2 md:flex lg:gap-x-10"> {/* Reduced text size */}
              {
                links.map((link) => (
                  <Link key={link.label} href={link.href} passHref>
                    <a target="_blank" className="hover:underline flex items-center justify-center"> {/* Added flexbox for better alignment */}
                      {link.label} <span aria-hidden="true" className="ml-2">&rarr;</span>
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
