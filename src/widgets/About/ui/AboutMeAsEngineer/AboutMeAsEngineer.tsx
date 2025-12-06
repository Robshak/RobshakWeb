import { type FC } from 'react';
import { useIsDesktop } from 'shared/hooks';

import { DesktopVersion } from './DesktopVersion';
import { MobileVersion } from './MobileVersion';

type TAboutMeAsEngineerProps = {
  className?: string;
};

export const AboutMeAsEngineer: FC<TAboutMeAsEngineerProps> = (props) => {
  const { className } = props;
  const isDesktop = useIsDesktop();

  return isDesktop ? (
    <DesktopVersion className={className} />
  ) : (
    <MobileVersion className={className} />
  );
};
