import clsx from 'clsx';
import type { FC } from 'react';
import { Text } from 'shared/ui';

import s from './About.module.scss';
import { AboutMeAsEngineer } from './AboutMeAsEngineer';
import { MyBlog } from './MyBlog';
import { MyMusic } from './MyMusic';
import { MyYoutube } from './MyYoutube';
import { Transition } from './Transition';

type TAboutProps = {
  className?: string;
};

export const About: FC<TAboutProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(s.container, className)}>
      <Text view={'display2'} className={clsx(s.title, s.withPadding)}>
        About me
      </Text>
      <AboutMeAsEngineer className={clsx(s.withPadding, s.withMargin)} />
      <Transition />
      <MyBlog />
      <MyMusic />
      <MyYoutube />
    </div>
  );
};
