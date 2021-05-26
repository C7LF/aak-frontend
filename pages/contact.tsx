import React from 'react';

import Head from 'next/head';

import { Footer, NavBar } from '@components';
import { EnvolopeIcon, LocationIcon, PhoneIcon } from '@icons';

export const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | AAK</title>
      </Head>
      <NavBar />
      <div className="py-24 pt-32 md:pt-44 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">CONTACT</h1>
          <div className="border border-b-4 border-gray-400 mx-auto w-16 my-6"></div>
          <p className="text-xl font-light md:w-1/2 mx-auto">
            If you can think I can help you in anyway, or even if you want to
            know more about my projects then please feel free to contact me
            using any of the details below.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 py-14">
        <div className="container mx-auto md:flex">
          <div className="md:w-1/3 mt-10 text-center">
            <PhoneIcon className="h-14 w-14 mx-auto mb-4" />
            <p className="font-light text-xl">07833 967239</p>
          </div>
          <div className="md:w-1/3 mt-10 text-center mb-4">
            <LocationIcon className="h-14 w-14 mx-auto mb-4" />
            <p className="font-light text-xl">
              Unit 4<br />
              Whttington Valley Road
              <br />
              Old Whittington
              <br />
              S41 9EY
            </p>
          </div>
          <div className="md:w-1/3 mt-10 text-center">
            <EnvolopeIcon className="h-14 w-14 mx-auto mb-4" />
            <a
              href="mailto:andyfanshawe@aol.com"
              className="font-light text-xl"
            >
              andyfanshawe@aol.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
