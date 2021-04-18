import React from 'react';

import { Footer, NavBar } from '@components';

interface LayoutProps {
  varient: 'full' | 'regular';
}

export const Layout: React.FC<LayoutProps> = ({ children, varient }) => {
  return (
    <>
      <NavBar />
      <div className={`${varient !== 'full' && 'container mx-auto'} mt-28`}>
        {children}
      </div>
      <Footer />
    </>
  );
};
