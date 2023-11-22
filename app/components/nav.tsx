"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import i18n from 'i18n.config';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const { t } = useTranslation('common');
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleBackClick = () => window.history.back();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'no' : 'en';
    i18n.changeLanguage(newLang);
  };

  const languageLabel = i18n.language === 'en' ? 'NO' : 'EN';

  return (
    <header>
      <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 ${darkMode ? "bg-zinc-900/75 border-b border-white text-white" : "bg-white/75 border-b border-zinc-800 text-black"}`}>
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className={`flex justify-between gap-8 ${darkMode ? "text-white" : "text-black"}`}>
            <button onClick={toggleDarkMode} className={`duration-200 ${darkMode ? "text-white" : "text-black"} focus:outline-none`}>
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={toggleLanguage} className={`duration-200 ${darkMode ? "text-white" : "text-black"} hover:text-zinc-100`}>
              {languageLabel}
            </button>
            <Link href="/projects" className={`duration-200 hover:text-zinc-100 ${darkMode ? "text-white" : "text-black"}`}>
              {t('projects')}
            </Link>
            <Link href="/contact" className={`duration-200 hover:text-zinc-100 ${darkMode ? "text-white" : "text-black"}`}>
              {t('contact')}
            </Link>
            <Link href="/gallery" className={`duration-200 hover:text-zinc-100 ${darkMode ? "text-white" : "text-black"}`}>
              {t('gallery')}
            </Link>
          </div>
          <button onClick={handleBackClick} className={`duration-200 ${darkMode ? "text-white" : "text-black"} hover:text-zinc-100`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
