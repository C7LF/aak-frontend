import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/client';
import client from '@lib/apollo';
import '../styles/index.css';

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
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps}></Component>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
