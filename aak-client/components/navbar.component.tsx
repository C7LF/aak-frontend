import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { Routes } from '@enums/routes.enum';
import useWindowPosition from '@utils/use-window-position';

import Logo from '../public/assets/logo.svg';

const NavBar: React.FC = () => {
  const position = useWindowPosition();
  const router = useRouter();

  const isHomePage = !!(router?.pathname === '/');

  const navItemClassName =
    'lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-red-700';

  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden bg-white fixed w-full top-0 z-10 py-5 ${
        position > 50 || !isHomePage ? 'mt-0' : '-mt-28'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex">
          <img
            src={Logo}
            alt="andy's american kustoms logo"
            className="mr-10"
          />
          <ul className="lg:flex items-center pt-4 lg:pt-0 uppercase font-medium">
            {Object.keys(Routes).map((key, i) => (
              <Link key={i} href={Routes[key]} passHref>
                <a className={navItemClassName}>{key}</a>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
