"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import i18n from 'i18n.config'; // Import i18n config
import { useTranslation } from 'react-i18next';

const navigation = [
  { name: 'GitHub', href: '/github' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Home', href: '/' },
];

type Props = {
  children: React.ReactNode;
};

const GalleryLayout: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation('common'); // Use the translation hook

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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'no' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex">
      <div className={`sticky top-0 h-screen flex flex-col justify-between ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 w-1/4 max-w-xs`}>
        <div>
          <div className="flex items-center mb-4">
            <button onClick={() => window.history.back()} className={`mr-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              <ArrowLeft size={20} />
            </button>
            <button onClick={toggleDarkMode} className={`mr-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLanguage} className={`${darkMode ? 'text-white' : 'text-black'}`}>
              {i18n.language === 'en' ? 'NO' : 'EN'}
            </button>
          </div>
          <p className="font-bold">{t('synthographyTitle')}</p>
          <p className="text-sm">{t('synthographyDescription')}</p>
        </div>

        <nav>
          {navigation.map((item, index) => (
            <div key={index} className="py-1">
              {index !== 0 && <hr className={`${darkMode ? 'border-gray-200' : 'border-gray-700'}`} />}
              <Link href={item.href}>
                <div className="hover:underline">{t(`nav${item.name}`)}</div>
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <main className={`flex-grow p-4 overflow-auto ${darkMode ? 'bg-black' : 'bg-white'}`}>
        {children}
      </main>
    </div>
  );
};

export default GalleryLayout;
