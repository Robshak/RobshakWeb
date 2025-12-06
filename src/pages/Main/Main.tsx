import { type FC, useEffect, useRef } from 'react';
import { useScrollStore } from 'shared/store';
import { About, Footer, Hero, Ratings } from 'widgets';

import s from './Main.module.scss';

export const Main: FC = () => {
  const setScrollPosition = useScrollStore((state) => state.setScrollPosition);
  const isRestoring = useRef(true);

  useEffect(() => {
    const savedPosition = useScrollStore.getState().scrollPosition;

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (savedPosition > 0) {
      window.scrollTo(0, savedPosition);
    }

    const timeout = setTimeout(() => {
      isRestoring.current = false;
    }, 100);

    const handleScroll = () => {
      if (!isRestoring.current) {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      setScrollPosition(window.scrollY);
    };
  }, [setScrollPosition]);

  return (
    <>
      <div className={s.container}>
        <Hero />
        <About />
        <Ratings />
        <Footer />
      </div>
    </>
  );
};
