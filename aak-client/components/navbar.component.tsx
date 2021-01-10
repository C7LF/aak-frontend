import React from 'react';

import useWindowPosition from 'utils/useWindowPosition';

const NavBar: React.FC = () => {
  const position = useWindowPosition();

  const navItemClassName =
    'lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400';

  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden fixed w-full top-0 z-10 bg-gray-50 ${
        position > 50 ? 'mt-0' : '-mt-24'
      }`}
    >
      <div className="container mx-auto">
        <nav>
          <ul className="lg:flex items-center pt-4 lg:pt-0">
            <li>
              <a className={navItemClassName}>About</a>
            </li>
            <li>
              <a className={navItemClassName}>Projects</a>
            </li>
            <li>
              <a className={navItemClassName}>Blog</a>
            </li>
            <li>
              <a className={navItemClassName}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
