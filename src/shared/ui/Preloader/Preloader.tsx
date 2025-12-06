import { useEffect, useState } from 'react';
import { useLoaderStore } from 'shared/store';

import s from './Preloader.module.scss';

export const Preloader = () => {
  const setIsLoading = useLoaderStore((state) => state.setIsLoading);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsHidden(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [setIsLoading]);

  return (
    <div className={`${s.preloader} ${isHidden ? s.hidden : ''}`}>
      <div className={s.spinner} />
    </div>
  );
};
