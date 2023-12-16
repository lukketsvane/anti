"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Moon, Sun, Grid } from "lucide-react";
import Constellation from "./components/constellation";
import Timeline from './components/timeline';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const [animatePageElements, setAnimatePageElements] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (event) => {
                setDarkMode(event.matches);
            };

            darkModeListener.addEventListener('change', handleChange);

            const savedMode = localStorage.getItem('dark-mode');

            // Set dark mode based on user preference or system preference
            setDarkMode(savedMode === 'true' || darkModeListener.matches);

            if (!sessionStorage.getItem('page-visited')) {
                setAnimateTitle(true);
                setAnimatePageElements(true);
                sessionStorage.setItem('page-visited', 'true');
            }

            return () => {
                darkModeListener.removeEventListener('change', handleChange);
            };
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        localStorage.setItem('dark-mode', newDarkMode.toString());
        setDarkMode(newDarkMode);
    };

    return (
        <div className="w-screen h-screen overflow-hidden">
            {/* Fixed Background with Gradient and Particles */}
            <div className={`fixed inset-0 ${darkMode ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black" : "bg-white"} -z-10`}>
                <Particles
                    className={`absolute inset-0 animate-fade-in ${darkMode ? "text-white" : "text-black"}`}
                    quantity={100}
                />
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <nav className={`my-10 ${animatePageElements ? 'animate-fade-in' : ''}`}>
                    <ul className="flex items-center justify-center gap-4">
                        <button onClick={toggleDarkMode}>
                            {darkMode ? <Sun className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} /> : <Moon className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} />}
                        </button>
                        <Link href="/projects">
                            <div className={`text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                                Projects
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className={`text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                                Contact
                            </div>
                        </Link>
                        <Link href="/gallery">
                            <div className={`flex items-center text-sm duration-500 ${darkMode ? "text-white hover:text-zinc-300" : "text-black hover:text-gray-700"}`}>
                                <Grid size={20} className="mr-2" />
                            </div>
                        </Link>
                    </ul>
                </nav>

                <h1 className={`text-4xl text-transparent duration-1000 cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${darkMode ? "bg-white" : "bg-black"} ${animateTitle ? 'animate-title' : ''}`}>
                    Hello, World!
                </h1>

                <div className={`my-16 text-center ${animatePageElements ? 'animate-fade-in' : ''}`}>
                    <h2 className={`text-lg text-500 md:text-xl ${darkMode ? "text-white" : "text-black"}`}>
                        Reach me on{" "}
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/iverfinne"
                            className={`underline duration-500 ${darkMode ? "hover:text-zinc-300" : "hover:text-gray-700"}`}
                        >
                            LinkedIn
                        </a>{" "}
                        during the day,<br />
                        and{" "}
                        <a
                            target="_blank"
                            href="https://github.com/lukketsvane/"
                            className={`underline duration-500 ${darkMode ? "hover:text-zinc-300" : "hover:text-gray-700"}`}
                        >
                            GitHub
                        </a>{" "}
                        at night.
                    </h2>
                </div>
                {darkMode && <Constellation darkMode={darkMode} />}
            </div>
        </div>
    );
}
