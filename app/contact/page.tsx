// File: ./app/contact/page.tsx

"use client";
import React, { useEffect, useState } from "react";
import { Github, Mail, Twitter, Sun, Moon } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/anti.space_",
    label: "Twitter",
    handle: "@anti.space_",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@iverfinne.no",
    label: "Email",
    handle: "dev@iverfinne.no",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/anti.space",
    label: "Github",
    handle: "anti.space",
  },
];

export default function ContactPage() {
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
    <div className={`relative min-h-screen ${darkMode ? 'bg-gradient-to-tl from-black via-zinc-600/20 to-black' : 'bg-white'}`}>
      <header>
        <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${darkMode ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500 border-zinc-800'}`}>
          <div className="container flex items-center justify-between p-6 mx-auto">
            <Link href="/">
              Home
            </Link>
            <div className={`flex justify-end gap-8 ${darkMode ? 'text-white' : 'text-black'}`}>
              <button onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="container px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h2>
        <p className="mt-4 text-zinc-400">
          Feel free to reach out to me through these platforms.
        </p>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-10 mx-auto mt-8 sm:grid-cols-3 lg:grid-cols-3">
          {socials.map((s) => (
            <div key={s.href} className="p-14 relative flex flex-col items-center duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
              <Link href={s.href} target="_blank">
                <div className={`relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange`}>
                  {s.icon}
                </div>
              </Link>
              <div className="z-10 flex flex-col items-center">
                <span className={`text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display`}>
                  {s.handle}
                </span>
                <span className={`mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200`}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
