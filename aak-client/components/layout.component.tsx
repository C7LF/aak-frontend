import React from 'react';

import { Footer } from './footer.component';
import NavBar from './navbar.component';

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
