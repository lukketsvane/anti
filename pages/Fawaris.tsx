import "../global.css";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import cvImage from '../public/cv.png';
import { Navigation } from '@/app/components/nav'; 

const Fawaris = () => {
    const [darkMode, setDarkMode] = useState(false);

  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  

    useEffect(() => {
        const savedMode = localStorage.getItem('dark-mode');
        setDarkMode(savedMode === 'true');
    }, []);

    return (
        <>
            <Head>
                <title>Iver Finne - CV</title>
                <link rel="stylesheet" href="../global.css" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>

      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <div className={`pt-24 flex flex-col md:flex-row items-start justify-center w-screen min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>


                <motion.div 
                    className="w-full md:w-2/5 lg:w-1/3 p-4"
                    initial={{ x: -100 }} 
                    animate={{ x: 0 }} 
                    transition={{ duration: 1 }}
                >
                    <div className={`sticky top-28 shadow-lg rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <Image src={cvImage} alt="CV" layout="responsive" />
                    </div>
                </motion.div>

                <motion.div 
                    className="w-full md:w-3/5 lg:w-2/3 mt-4 md:mt-0 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className={`overflow-y-auto max-h-screen bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        <div className="text-lg">
                            <h1 className="text-2xl font-bold mb-4">Iver Finne</h1>
                        <p className="mb-2">Creative Director at Drømmebedriften</p>
                        <p className="mb-2">Talks about #design, #3dmodeling, #graphicdesign, #3dvisualization, and #architecturalvisualization</p>
                        <p className="mb-6">Bergen, Vestland, Norway</p>
                        <h2 className="text-xl font-bold mb-4">Experience</h2>
                        
                        <div className="mb-4">
                            <h3 className="font-bold">ABB - Technical Consultant</h3>
                            <p>Jun 2022 - Present</p>
                            <p>Full-time, On-site</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold">Springbrettet - Produksjonsansvarlig for Karrierestudio</h3>
                            <p>Jan 2021 - Present</p>
                            <p>Part-time</p>
                            <p>Bergen, Norway</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold">Korall Engineering AS - Chief Executive Officer & Co-Founder</h3>
                            <p>Nov 2019 - Jan 2021</p>
                            <p>Full-time</p>
                            <p>Bergen Area, Norway</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold">Ygdrasyl Project - Creative Director & Consultant</h3>
                            <p>Dec 2016 - Nov 2019</p>
                            <p>Part-time</p>
                            <p>Hordaland County, Norway</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold">Emberlight VR - Creative director and cofounder</h3>
                            <p>Feb 2016 - Oct 2018</p>
                            <p>Full-time</p>
                            <p>Hordaland County, Norway</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold">Dongjin Tableware (Yangxin) Co., Ltd - Executive Designer</h3>
                            <p>Sep 2016 - Dec 2016</p>
                            <p>Full-time</p>
                            <p>Yangxin, Shandong, China</p>
                        </div>
                        </div>
                        </div>
                </motion.div>
            </div>
        </>
    );
};

export default Fawaris;
