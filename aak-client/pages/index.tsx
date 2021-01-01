import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => (
  <div className="">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="top h-screen flex">
        <div className="left rad-red transform -skew-x-6 h-full w-1/2 overflow-x-hidden -ml-20 flex justify-center z-1">
          <div className="transform skew-x-6 self-center max-w-md">
            <h1 className="sm:text-4xl font-bold text-gray-50 mb-2">
              ANDY&apos;S AMERICAN
              <br />
              KUSTOMS
            </h1>
            <p className="text-gray-300 font-light">
              This is my 1 man business to restore, repair or modify just about
              anything! Diagnostics using oscilloscopes, scan tools and test
              lights are skills that I continue to work on everyday. But my main
              passion is bringing old machinery back to life and perhaps
              injecting some new technology at the same time!! Have a look at my
              projects below and contact me if you think I can help.
            </p>
          </div>
        </div>
        <div className="right bg-hero-bg bg-no-repeat w-2/3 -ml-20 object-cover h-full bg-cover flex bg-right">
          <div className="absolute h-2/3 w-36 transform -skew-x-6 bg-secondary self-center"></div>
        </div>
      </div>

      {/* <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js! yay</a>
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className="grid container mx-auto">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
