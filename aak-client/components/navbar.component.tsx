import React, { useState } from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { Routes } from '@enums/routes.enum';
import useWindowPosition from '@utils/use-window-position';

import Logo from '../public/assets/logo.svg';

const NavBar: React.FC = () => {
  const position = useWindowPosition();
  const router = useRouter();
  
  const [menuOpen, setMenuOpen] = useState(false)

  const isHomePage = !!(router?.pathname === '/');

  const navItemClassName =
    'md:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-red-700';

  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden bg-white fixed w-full top-0 z-10 py-5 ${
        position > 50 || !isHomePage ? 'mt-0' : '-mt-28'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex flex-col md:flex-row">
          <div className="flex justify-between">
          <img
            src={Logo}
            alt="andy's american kustoms logo"
            className="mr-10 w-28"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 self-end md:hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          </div>
          <ul className="md:flex items-center pt-4 md:pt-0 uppercase font-medium">
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
