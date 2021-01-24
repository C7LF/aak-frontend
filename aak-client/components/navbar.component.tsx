import React from 'react';

import { useRouter } from 'next/dist/client/router';

import { Routes } from '@enums/routes.enum';
import useWindowPosition from '@utils/useWindowPosition';

import Logo from '../public/assets/logo.svg';

const NavBar: React.FC = () => {
  const position = useWindowPosition();
  const router = useRouter();

  const isHomePage = !!(router.pathname === '/');

  const navItemClassName =
    'lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400';

  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden bg-gray-50 fixed w-full top-0 z-10 py-3 border-b border-red-700 ${
        position > 50 || !isHomePage ? 'mt-0' : '-mt-24'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex">
          <img
            src={Logo}
            alt="andy's american kustoms logo"
            className="mr-10"
          />
          <ul className="lg:flex items-center pt-4 lg:pt-0">
            {Object.keys(Routes).map((key, i) => (
              <a key={i} href={Routes[key]} className={navItemClassName}>
                {key}
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;