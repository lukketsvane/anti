import Head from 'next/head';

const Deneb = () => {
  return (
    <div>
      <Head>
        <title>Deneb - T-Rex Runner Game</title>
        {/* Remove the following lines because you're going to use an iframe */}
        {/* <link rel="stylesheet" type="text/css" href="/t-rex-runner/index.css" /> */}
        {/* <script type="text/javascript" src="/t-rex-runner/index.js"></script> */}
      </Head>
      <main>
        <iframe 
          src="/t-rex-runner/index.html" 
          style={{ width: '100%', height: '600px' }} 
          frameBorder="0">
        </iframe>
      </main>
    </div>
  );
};

export default Deneb;
