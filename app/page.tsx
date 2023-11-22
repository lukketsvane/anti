"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Moon, Sun, Grid } from "lucide-react";
import Constellation from "./components/constellation";
import { useTranslation } from 'react-i18next';
import i18n from 'i18n.config';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const [animatePageElements, setAnimatePageElements] = useState(false);

    const { t } = useTranslation('common');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('dark-mode');
            setDarkMode(savedMode === 'true');

            if (!sessionStorage.getItem('page-visited')) {
                setAnimateTitle(true);
                setAnimatePageElements(true);
                sessionStorage.setItem('page-visited', 'true');
            }
        }
    }, []);

    const toggleDarkMode = () => {
        localStorage.setItem('dark-mode', (!darkMode).toString());
        setDarkMode(!darkMode);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'no' : 'en';
        i18n.changeLanguage(newLang).then(() => {
            // Handle language change if needed
        });
    };

    const languageLabel = i18n.language ? i18n.language.toUpperCase() : 'EN';

    return (
        <div className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${darkMode ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black" : "bg-white"}`}>
            <nav className={`my-10 ${animatePageElements ? 'animate-fade-in' : ''}`}>
                <ul className="flex items-center justify-center gap-4">
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <Sun className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} /> : <Moon className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} />}
                    </button>
                    <button onClick={toggleLanguage} className={`text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                        {languageLabel}
                    </button>
                    <Link href="/projects">
                        <div className={`text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                            {t('projects')}
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className={`text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                            {t('contact')}
                        </div>
                    </Link>
                    <Link href="/gallery">
                        <div className={`flex items-center text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                            <Grid size={20} className="mr-2" />
                        </div>
                    </Link>
                </ul>
            </nav>


      <div className={`hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r ${darkMode ? "from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" : "from-gray-300/0 via-gray-700/50 to-gray-300/0"}`} />
      <Particles
        className={`absolute inset-0 -z-10 animate-fade-in ${darkMode ? "text-white" : "text-black"}`}
        quantity={100}
      />
      <h1 className={`z-10 text-4xl text-transparent duration-1000 cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${darkMode ? "bg-white" : "bg-black"} ${animateTitle ? 'animate-title' : ''}`}>
        {t('helloWorld')}
      </h1>
      <div className={`hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r ${darkMode ? "from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" : "from-gray-300/0 via-gray-700/50 to-gray-300/0"}`} />

      <div className={`my-16 text-center ${animatePageElements ? 'animate-fade-in' : ''}`}>
        <h2 className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
          {t('intro')}{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/iverfinne"
            className={`underline duration-500 ${darkMode ? "hover:text-zinc-300" : "hover:text-gray-700"}`}
          >
            {t('linkedin')}
          </Link>{" "}
          <br />
          {t('github')}{" "}
          <Link
            target="_blank"
            href="https://github.com/lukketsvane/"
            className={`underline duration-500 ${darkMode ? "hover:text-zinc-300" : "hover:text-gray-700"}`}
          >
            GitHub
          </Link>{" "}
          {t('atNight')}
        </h2>
      </div>
      {darkMode && <Constellation darkMode={darkMode} />}
    </div>
  );
}
