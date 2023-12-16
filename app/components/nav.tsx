import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Moon, Sun, Grid } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleBackClick = () => window.history.back();

  return (
    <header ref={ref}>
      <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 ${darkMode ? "bg-zinc-900/75 border-b border-white text-white" : "bg-white/75 border-b border-zinc-800 text-black"}`}>
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className={`flex items-center justify-between gap-8 ${darkMode ? "text-white" : "text-black"}`}>

            <Link href="/projects">
              <div className={`duration-200 hover:text-zinc-100 ${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </Link>
            <Link href="/contact">
              <div className={`duration-200 hover:text-zinc-100 ${darkMode ? "text-white" : "text-black"}`}>
                Contact
              </div>
            </Link>
            <Link href="/gallery">
              <div className={`flex items-center duration-200 hover:text-zinc-100 ${darkMode ? "text-white" : "text-black"}`}>
                <Grid size={20} className="mr-2" />
              </div>
            </Link>

            <button onClick={toggleDarkMode} className={`duration-200 ${darkMode ? "text-white" : "text-black"} focus:outline-none`}>
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

          </div>
            <button onClick={handleBackClick} className={`duration-200 ${darkMode ? "text-white" : "text-black"} hover:text-zinc-100`}>
              <ArrowLeft size={24} />
            </button>
        </div>
      </div>
    </header>
  );
};
