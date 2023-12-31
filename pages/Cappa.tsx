// File: ./pages/Cappa.tsx

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import Shapes from '../app/components/shapes'; // Import the Shapes component

const Cappa = () => {
  return (
    <div className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden`}>
      <Link href="/">
        <div className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden`}>
          <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50, cursor: 'pointer' }}>
            <ArrowLeft size={24} color="black" />
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center w-screen h-screen ml-10"> {/* Added padding */}
        <Shapes /> {/* Use the Shapes component */}
      </div>
    </div>
  );
};

export default Cappa;
