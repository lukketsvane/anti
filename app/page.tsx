"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Moon, Sun, Grid } from "lucide-react";
import Constellation from './components/Constellation';


const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { icon: <Grid size={20} />, href: '/gallery', name: '' },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('dark-mode');
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem('dark-mode', (!darkMode).toString());
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${darkMode ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black" : "bg-white"}`}>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} /> : <Moon className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} />}
          </button>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                {item.icon || item.name}
              </div>
            </Link>
          ))}
        </ul>
      </nav>

      <div className={`hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r ${darkMode ? "from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" : "from-gray-300/0 via-gray-700/50 to-gray-300/0"}`} />
      <Particles
        className={`absolute inset-0 -z-10 animate-fade-in ${darkMode ? "text-white" : "text-black"}`}
        quantity={100}
      />
      <h1 className={`z-10 text-4xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${darkMode ? "bg-white" : "bg-black"}`}>
      Hello, World!
      </h1>
      <div className={`hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r ${darkMode ? "from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" : "from-gray-300/0 via-gray-700/50 to-gray-300/0"}`} />
      <div className="my-16 text-center animate-fade-in">
        <h2 className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
          Hi, my name is Iver Finne, I'm a designer and software developer. Contact me at{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/iverfinne"
            className={`underline duration-500 ${darkMode ? "hover:text-zinc-300" : "hover:text-gray-700"}`}
          >
            LinkedIn
          </Link>{" "}
          <br />
          or contact me on{" "}
          <Link
            target="_blank"
            href="https://github.com/lukketsvane/"
            className={`underline duration-500 ${darkMode ? "hover:text-zinc-300" : "hover:text-gray-700"}`}
          >
            GitHub
          </Link>
          {" "}at night.
        </h2>
      </div>
      <Constellation />

    </div>
  );
}