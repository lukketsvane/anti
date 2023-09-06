import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";

const Deneb = () => {



  return (
    <div className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden`}>

      <Head>
        <title>Deneb - T-Rex Runner Game</title>
      </Head>

      <Link href="/">
        <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50, cursor: 'pointer' }}>
          <ArrowLeft size={24} color="black" />
        </div>
      </Link>

      <iframe 
        src="/t-rex-runner/index.html" 
        style={{ width: '100%', height: '92vh' }} 
        frameBorder="0">
      </iframe>
    </div>
  );
};

export default Deneb;
