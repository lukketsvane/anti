// File: ./app/projects/layout.tsx

"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Article } from "./article"; // Import the Article component

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" }, // Add the Gallery link to navigation
];

export default function ProjectsLayout({
  children,
}: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("dark-mode");
      setDarkMode(savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem("dark-mode", (!darkMode).toString());
    setDarkMode(!darkMode);
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black" : "bg-white"}`}>
      <header>
        <div
          className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
            darkMode
              ? "bg-zinc-900/0 border-transparent"
              : "bg-zinc-900/500 border-zinc-800"
          }`}
        >
          <div className="container flex items-center justify-between p-6 mx-auto">
            <Link href="/" className={`duration-200 ${darkMode ? "text-white" : "text-whiute"} hover:text-zinc-100`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <div className={`flex justify-end gap-8 ${darkMode ? "text-white" : "text-black"}`}>
              <button onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`duration-200 hover:text-zinc-100`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className={`${darkMode ? "text-white" : "text-black"}`}>{children}</div>
    </div>
  );
}
