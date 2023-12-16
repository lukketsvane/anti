"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from '../components/nav';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={`relative pt-12 min-h-screen ${darkMode ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black" : "bg-white"}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`${darkMode ? "text-white" : "text-black"}`}>
        {children}
      </div>
    </div>
  );
}
