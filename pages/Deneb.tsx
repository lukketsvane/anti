"use client";


import Head from 'next/head';
import { useEffect } from 'react';

const Deneb = () => {
  useEffect(() => {
    // Game initialization logic here (if needed)
  }, []);

  return (
    <div>
      <Head>
        <title>Deneb - T-Rex Runner Game</title>
        <link rel="stylesheet" type="text/css" href="/t-rex-runner/index.css" />
        <script type="text/javascript" src="/t-rex-runner/index.js"></script>
      </Head>
      <main>
        <h1>Welcome to Deneb!</h1>
        <div id="game-container">
          {/* Game will load here */}
        </div>
      </main>
    </div>
  );
};

export default Deneb;
