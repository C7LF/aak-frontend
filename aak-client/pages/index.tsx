import React from 'react';

import { GET_PROJECTS } from '@graphql/queries/projects';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Gallery } from '@components/gallery.component';
import NavBar from '@components/navbar.component';
import client from '@lib/apollo';
import { SingleProject } from '@models/project.model';

interface HomeProps {
  projects: SingleProject[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 1,
  };
};

const Home: React.FC<HomeProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
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
              <button className="px-6 py-2.5 text-gray-100 transition-colors duration-150 font-bold rounded-md bg-gray-700 border-2 border-gray-700 focus:shadow-outline hover:bg-gray-800 mr-3">
                View Projects
              </button>
              <button className="px-6 py-2.5 text-gray-300 transition-colors duration-150 font-bold rounded-md border-2 border-gray-300 focus:shadow-outline hover:border-gray-400 hover:text-gray-400">
                Contact
              </button>
            </div>
          </div>
          <div className="right bg-hero-bg bg-no-repeat sm:w-1/3 md:w-2/3 -ml-20 object-cover h-full bg-cover bg-right hidden sm:flex">
            <div className="absolute h-2/3 w-36 transform -skew-x-6 bg-secondary self-center"></div>
          </div>
        </div>
        <div className="epic-gray h-500">
          <div className="mx-auto container flex">
            <p className="text-2xl font-light pt-20 w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              maximus mi nec sem sodales, eget pellentesque neque pulvinar.
              Phasellus sollicitudin erat sit amet tempus gravida. Nam in ex
              molestie
            </p>
            <div className="pt-20 flex-1 text-center self-center">
              <Link href="/" passHref>
                <a>
                  <button className="text-grey-800 rounded-md border-2 border-gray-800 text-lg font-bold py-3 px-5 inline-flex items-center">
                    <span>All Projects</span>
                    {/* TODO: SVG needs moving out to a component */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="-mt-60">{projects && <Gallery items={projects} />}</div>
      </main>
    </>
  );
};

export default Home;
