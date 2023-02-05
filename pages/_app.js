import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus - Enter the Metaverse</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta charset="UTF-8" />
      <meta name="theme-color" content="#1A232E" />
      <meta
        name="description"
        content="The Next Generation Metaverse App using React JS"
      />
      <meta name="author" content="Sanidhya Kr. Verma" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
