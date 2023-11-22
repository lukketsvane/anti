"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';

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
    <div className="flex">
      <div className={`sticky top-0 h-screen flex flex-col justify-between ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 w-1/4 max-w-xs`}>
        <div>
          <div className="flex items-center mb-4">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 mr-4 ${darkMode ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke={darkMode ? 'white' : 'black'}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
            </button>
          </div>
          <p className="font-bold">Synthography</p>
          <p className="text-sm">Explore the vibrant world of Synthography, showcasing 40 unique digital creations. Each piece blends abstract forms with rich colors, designed for contemporary tastes. Enjoy this visually engaging collection, effortlessly presented for your viewing pleasure.</p>
        </div>

        <nav className={`${darkMode ? 'border-gray-200' : 'border-gray-700'}`}>
          {navigation.map((item, index) => (
            <div key={index} className="py-1">
              {index !== 0 && <hr className={`${darkMode ? 'border-gray-200' : 'border-gray-700'}`} />}
              <Link href={item.href}>
                <div className="hover:underline">{item.name}</div>
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <main className={`flex-grow p-4 overflow-auto ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default GalleryLayout;
