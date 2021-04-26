import React from 'react';

import { GetStaticProps } from 'next';

import { Footer, NavBar } from '@components';
import { GET_ABOUT } from '@graphql/queries/about';
import client from '@lib/apollo';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ABOUT,
  });

  console.log(data)

  if (!data || !data.about) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      content: data.about.content,
    },
    revalidate: 1,
  };
};

const newLineText = (text: string) => {
  return text.split('\n').map((str: string, i) => (
    <p key={i} className="text-xl font-light mt-4">
      {str}
    </p>
  ));
};

export const Contact: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <NavBar />
      <div className="py-24 pt-32 md:pt-44 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">ABOUT</h1>
          <div className="border border-b-4 border-gray-400 mx-auto w-16 my-6"></div>
          <div className="md:w-3/4 mx-auto">{newLineText(content)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
