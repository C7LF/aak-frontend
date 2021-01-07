import React from 'react';

import { GET_GALLERY_PROJECTS } from '@graphql/queries/projects';
import { GetStaticProps } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

import { Gallery } from '@components/gallery.component';
import client from '@lib/apollo';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_GALLERY_PROJECTS,
  });

  return {
    props: {
      projects: data.projects,
    },
  };
};

const Home: React.FC<AppProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="top h-screen flex">
          <div className="left rad-red transform md:-skew-x-6 h-full w-full lg:w-3/4 xl:w-1/2 overflow-x-hidden md:-ml-20 flex justify-center md:justify-end lg:justify-center z-1 md:pr-10 lg:pr-0">
            <div className="transform md:skew-x-6 self-center max-w-md p-5">
              <h1 className="text-4xl font-bold text-gray-50">
                ANDY&apos;S AMERICAN
                <br />
                KUSTOMS
              </h1>
              <p className="text-gray-200 font-light my-5">
                This is my 1 man business to restore, repair or modify just
                about anything! Diagnostics using oscilloscopes, scan tools and
                test lights are skills that I continue to work on everyday. But
                my main passion is bringing old machinery back to life and
                perhaps injecting some new technology at the same time!! Have a
                look at my projects below and contact me if you think I can
                help.
              </p>
              <button className="px-6 py-2.5 text-gray-100 transition-colors duration-150 font-bold rounded-md bg-gray-700 border border-gray-700 focus:shadow-outline hover:bg-gray-800 mr-3">
                View Projects
              </button>
              <button className="px-6 py-2.5 text-gray-300 transition-colors duration-150 font-bold rounded-md border border-gray-300 focus:shadow-outline hover:border-gray-400 hover:text-gray-400">
                Contact
              </button>
            </div>
          </div>
          <div className="right bg-hero-bg bg-no-repeat sm:w-1/3 md:w-2/3 -ml-20 object-cover h-full bg-cover bg-right hidden sm:flex">
            <div className="absolute h-2/3 w-36 transform -skew-x-6 bg-secondary self-center"></div>
          </div>
        </div>
        <div className="mx-auto text-center my-20">
          <h2 className="uppercase text-3xl font-black text-gray-800">About</h2>
        </div>
      </main>
      {projects && <Gallery items={projects} />}
    </>
  );
};

export default Home;
