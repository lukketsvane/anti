import "../global.css";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import cvImage from '../public/cv.png';

const Fawaris = () => {
    return (
        <>
            <style jsx>{`
                .hide-scrollbar {
                    scrollbar-width: none; /* For Firefox */
                    -ms-overflow-style: none; /* For Internet Explorer and Edge */
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none; /* For Chrome, Safari, and Opera */
                }
            `}</style>

            <div className="flex flex-col md:flex-row items-start justify-center w-screen min-h-screen bg-gray-100">
                <Head>
                    <title>Iver Finne - CV</title>
                </Head>

                <Link href="/">
                    <motion.div
                        className="fixed top-4 left-4 z-50 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ArrowLeft size={24} color="black" />
                    </motion.div>
                </Link>

                <motion.div className="w-full md:w-1/4 lg:w-1/5 p-4" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <div className="sticky top-20 bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image src={cvImage} alt="CV" layout="responsive" />
                    </div>
                </motion.div>

                <motion.div className="w-full md:w-3/4 lg:w-4/5 mt-4 md:mt-0 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="bg-white shadow-lg rounded-lg p-6 overflow-y-auto max-h-screen hide-scrollbar">
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
