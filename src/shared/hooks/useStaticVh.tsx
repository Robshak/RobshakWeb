import { useEffect } from 'react';

export const useStaticVh = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh-static', `${vh}px`);
    };

    setVh();

    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);
};
