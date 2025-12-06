import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import s from './ButtonWithIcon.tsx.module.scss';

type TButtonWithIconProps = {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const ButtonWithIcon: FC<TButtonWithIconProps> = (props) => {
  const { className, onClick, icon } = props;

  return (
    <button onClick={onClick} className={clsx(s.button, className)}>
      {icon}
    </button>
  );
};
