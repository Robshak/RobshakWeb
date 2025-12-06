import clsx from 'clsx';
import type { FC } from 'react';
import TV from 'shared/icons/TV.svg?react';
import YoutubeLogo from 'shared/icons/YoutubeIcon.svg?react';
import { Link, Text } from 'shared/ui';
import { MySocialTemplate } from 'widgets/About/ui/MySocialTemplate';

import s from './MyYoutube.module.scss';

type TMyYoutubeProps = {
  className?: string;
};

export const MyYoutube: FC<TMyYoutubeProps> = (props) => {
  const { className } = props;

  return (
    <MySocialTemplate
      header={'My youtube'}
      bodyText={
        <Text view={'body'} weight={'light'} className={s.bodyText} inverse>
          My YouTube channel lives here.
          <br />
          <br />I haven’t started posting yet, but I absolutely will at some point. Stay tuned.
        </Text>
      }
      object={<TV className={s.scene} />}
      link={
        <Text view={'body'} weight={'semibold'}>
          <Link href={'https://www.youtube.com/@Robshakk'} className={s.link} toAnotherPage>
            <span className={s.linkText}>{'Go watch'}</span>
            <span className={s.linkIcon}>{<YoutubeLogo />}</span>
          </Link>
        </Text>
      }
      className={clsx(s.container, className)}
    />
  );
};
