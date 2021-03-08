import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLImageElement | HTMLDivElement>,
  callback: () => void,
  state: boolean
): void => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
      callback();
    }
  };

  useEffect(() => {
    state && document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [state]);
};

export default useOutsideClick;
