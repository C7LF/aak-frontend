import { useState } from 'react';

import useLayoutEffect from './use-isomorphic-layout-effect';

const useWindowPosition = (): number => {
  const [scrollPosition, setPosition] = useState(0);

  // Detect DOM mutations
  useLayoutEffect(() => {
    const updatePosition = () => {
      setPosition(window.pageYOffset);
    };

    // Add event linstening to scroll event
    window.addEventListener('scroll', updatePosition);
    updatePosition();

    // clean up.
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useWindowPosition;
