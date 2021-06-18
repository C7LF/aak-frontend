import React from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Footer, MarkdownContent, NavBar } from '@components';
import { GET_ABOUT } from '@graphql/queries/about';
import client from '@lib/apollo';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ABOUT,
  });

  if (!data || !data.about) {
    return {
      props: {
        content: '',
      },
    };
  }

  return {
    props: {
      content: data.about.content,
    },
    revalidate: 60,
  };
};

export const Contact: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <Head>
        <title>About | AAK</title>
      </Head>
      <NavBar />
      <div className="py-24 pt-32 md:pt-44 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">ABOUT</h1>
          <div className="border border-b-4 border-gray-400 mx-auto w-16 my-6"></div>
          <div className="md:w-3/4 mx-auto">
            <MarkdownContent content={content} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
