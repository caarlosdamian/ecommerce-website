import { useEffect } from 'react';

export const useScrollTop = <T>(deps?: T) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [deps]);
};
