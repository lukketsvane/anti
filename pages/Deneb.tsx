import "../global.css";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/nav';
import { Card } from '@/app/components/card';

const Deneb = () => {
  const [darkMode, setDarkMode] = useState(false);
  const today = new Date();
  const [activeDays, setActiveDays] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    setDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    const days = [];
    for (let day = 1; day <= 24; day++) {
      const date = new Date(2023, 11, day);
      if (date <= today) {
        days.push(day);
      }
    }
    setActiveDays(days);
  }, [today]);

  return (
    <>
      <Head>
        <title>Iver Finne - Portfolio</title>
        <link rel="stylesheet" href="../global.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={`font-inter ${darkMode ? 'dark' : ''}`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className={`flex flex-col items-center pt-16 justify-center w-screen min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-8">
            {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => (
              <Card key={day}>
                <motion.div
                  className={`border border-gray-300 dark:border-gray-600 p-10 rounded-xl cursor-pointer flex items-center justify-center text-2xl ${
                    activeDays.includes(day) ? 'bg-red-500' : 'bg-gray-700 dark:bg-gray-600'
                  } hover:ring-4 hover:ring-red-300 transition-all duration-150 ease-in-out`}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/Deneb/${day}`}>
                    <div className={`text-3xl ${darkMode ? 'text-white' : 'text-white'} block w-full h-full text-center`}>{day}</div>
                  </Link>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Deneb;