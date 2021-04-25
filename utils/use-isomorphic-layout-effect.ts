import { useLayoutEffect, useEffect } from 'react';

// Fix for the error: useLayouteffect does nothing on the server
// if we are on the server, use 'useEffect' rather than 'useLayoutEffect'
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
