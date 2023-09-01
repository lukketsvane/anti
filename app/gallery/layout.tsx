// ./app/gallery/layout.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Grid } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { icon: <Grid size={20} />, href: '/gallery', name: '' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
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
    <div className={`relative min-h-screen ${darkMode ? 'bg-gradient-to-tl from-black via-zinc-600/20 to-black' : 'bg-white'}`}>
      <header>
        <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${darkMode ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500 border-zinc-800'}`}>
          <div className="container flex items-center justify-between p-6 mx-auto">
            <Link href="/">
              <Grid size={20} className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
            </Link>
            <div className={`flex justify-end gap-8 ${darkMode ? 'text-white' : 'text-black'}`}>
              <button onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className={`duration-200 hover:text-zinc-100 ${darkMode ? 'text-white' : 'text-black'}`}>
                    {item.icon || item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className={`px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 ${darkMode ? 'text-white' : 'text-black'}`}>
        {children}
      </div>
    </div>
  );
};

export default GalleryLayout;