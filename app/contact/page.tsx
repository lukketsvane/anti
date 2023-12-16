"use client";
import React, { useEffect, useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card } from '../components/card'; 
import { Navigation } from '../components/nav';

// Define a type for your socials objects
type Social = {
  icon: string;
  href: string;
  label: string;
  handle: string;
};

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

  // Define the socials data using the provided information
  const socials: Social[] = [
    {
      icon: "mail",
      href: "mailto:iverfinne@gmail.com",
      label: "Email",
      handle: "iverfinne@gmail.com",
    },
    {
      icon: "github",
      href: "https://github.com/lukketsvane",
      label: "Github",
      handle: "lukketsvane",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/iverfinne/",
      label: "LinkedIn",
      handle: "iverfinne",
    },
  ];

  return (
    <div className={`relative pt-16 min-h-screen ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>
            Contact
          </h1>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-zinc-400'}`}>
            Feel free to reach out to me through these platforms.
          </p>
        </div>
        <div className={`w-full h-px ${darkMode ? 'bg-gray-300' : 'bg-zinc-800'}`} />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link href={s.href} passHref>
                <article className="p-4 md:p-8 group cursor-pointer">
                  <div className={`flex items-center justify-center w-12 h-12 text-sm border rounded-full group-hover:text-white group-hover:bg-zinc-900 ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-600'}`}>
                    {s.icon === "mail" ? <Mail size={20} /> : s.icon === "github" ? <Github size={20} /> : <Linkedin size={20} />}
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className={`text-xl font-medium lg:text-3xl ${darkMode ? 'text-white' : 'text-black'} font-display`}>
                      {s.handle}
                    </h2>
                    <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {s.label}
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
