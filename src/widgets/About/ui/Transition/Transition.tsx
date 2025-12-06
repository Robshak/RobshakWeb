import clsx from 'clsx';
import type { FC } from 'react';
import Avatar from 'shared/images/Avatar.png';
import { Text } from 'shared/ui';

import s from './Transition.module.scss';

type TTransitionProps = {
  className?: string;
};

export const Transition: FC<TTransitionProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(s.container, className)}>
      <div className={s.block}>
        <img src={Avatar} alt="Avatar" className={s.avatar} />
        <Text view={'body'}>
          Although I work as a software engineer, I have many hobbies — most of them creative. I
          play table tennis, write music, love movies, enjoy dancing, create videos, and dream of
          writing books. Each of these passions is a part of me. Below, you’ll find a glimpse into
          each of them.
        </Text>
      </div>
    </div>
  );
};
