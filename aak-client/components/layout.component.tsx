import React from 'react';

import NavBar from './navbar.component';

interface LayoutProps {
  varient: 'full' | 'regular';
}

export const Layout: React.FC<LayoutProps> = ({ children, varient }) => {
  return (
    <>
      <NavBar />
      <div className={`${varient && 'container mx-auto'} mt-24`}>
        {children}
      </div>
    </>
  );
};
