// ./app/gallery/layout.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { name: 'GitHub', href: '/github' },
  { name: 'Instagram', href: '/instagram' },
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
      {/* Sidebar */}
      <div className={`sticky top-0 h-screen flex flex-col justify-between ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 w-1/4 max-w-xs`}>
        {/* Top section with dark mode toggle */}
        <div>
          <button onClick={toggleDarkMode} className="mb-4">
            {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
          </button>
          <p className="font-bold">Aperture</p>
          <p className="text-sm">A minimal template for your art or photography. Includes a grid layout, overlays, and effects. All of the content is easily editable via the CMS. Made by Benjamin.</p>
        </div>

        {/* Bottom navigation */}
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

      {/* Main content */}
      <main className={`flex-grow p-4 overflow-auto ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default GalleryLayout;
