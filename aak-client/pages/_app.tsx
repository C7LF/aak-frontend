import '../styles/index.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const GlobalStyle = () => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
    </>
  );
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </>
  );
};

export default MyApp;
