import { useEffect, useState } from 'react';

export const enum PlatformType {
  Desktop = 'Desktop',
  Tablet = 'Tablet',
  TabletSmall = 'TabletSmall',
}

const TABLET_WIDTH = 1024;
const TABLET_SM_WIDTH = 768;

const getPlatform = (width: number): PlatformType => {
  if (width <= TABLET_SM_WIDTH) return PlatformType.TabletSmall;
  if (width <= TABLET_WIDTH) return PlatformType.Tablet;
  return PlatformType.Desktop;
};

export const usePlatform = () => {
  const [platform, setPlatform] = useState<PlatformType>(getPlatform(window.innerWidth));

  useEffect(() => {
    const onResize = () => {
      setPlatform(getPlatform(window.innerWidth));
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return platform;
};

export const useIsDesktop = () => {
  return usePlatform() === PlatformType.Desktop;
};

export const useIsTablet = () => {
  return usePlatform() === PlatformType.Tablet;
};

export const useIsTabletSmall = () => {
  return usePlatform() === PlatformType.TabletSmall;
};
