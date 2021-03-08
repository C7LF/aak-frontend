import React from 'react';

import FacebookIcon from '../public/assets/facebook.svg';
import InstagramIcon from '../public/assets/instagram.svg';

export const Footer: React.FC = () => (
  <>
    <div className="container mx-auto mt-16">
      <div className="flex place-content-center py-20">
        <a href="https://www.facebook.com/andyskustoms/">
          <img
            src={FacebookIcon}
            alt="facebook icon"
            width={40}
            height={40}
            className="mx-1"
          />
        </a>
        <a href="https://www.instagram.com/andysamericankustoms/">
          <img
            src={InstagramIcon}
            alt="instagram icon"
            width={40}
            height={40}
            className="mx-1"
          />
        </a>
      </div>
    </div>
  </>
);
