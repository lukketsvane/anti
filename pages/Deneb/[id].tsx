import "../../global.css";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/nav';

const ProjectFeaturePage = () => {
  const router = useRouter();
  const { id: projectId } = router.query;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('dark-mode') || 'false');
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newSetting = !darkMode;
    setDarkMode(newSetting);
    localStorage.setItem('dark-mode', JSON.stringify(newSetting));
  };

  // Placeholder for project data fetching logic which needs to be implemented
  const projectData = {
    title: `Project Title ${projectId}`,
    headerImageUrl: '/path-to-your-header-image.jpg', // Replace with actual header image path
    content: 'This is a lot of text...', // Replace with actual text content
    floatingImages: [
      '/cover-art_2.png', // Replace with actual floating image paths
      '/cover-art_1.png',
    ],
  };

  return (
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className={`min-h-screen p-10 pt-28 ${darkMode ? 'bg-gray-900' : 'bg-white'} ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div
            className="lg:w-1/4 space-y-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold">{projectData.title}</h1>
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Project {projectId} Description</p>
            {projectData.floatingImages.map((src, index) => (
              <motion.div
                key={index}
                className={`mb-4 overflow-hidden rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Image src={src} alt={`Floating image ${index}`} width={300} height={200} layout="responsive" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="lg:w-3/4 space-y-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={projectData.headerImageUrl} alt="Header Image" width={800} height={450} layout="responsive" />
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{projectData.content}</p>
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{projectData.content.repeat(5)}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectFeaturePage;