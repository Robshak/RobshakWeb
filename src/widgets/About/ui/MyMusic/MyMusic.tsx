import type { FC } from 'react';
import SpotifyLogo from 'shared/icons/SpotifyIcon.svg?react';
import { Link, Text } from 'shared/ui';

import { MusicObject } from './MusicObject';
import { MySocialTemplate } from '../MySocialTemplate';
import s from './MyMusic.module.scss';

export const MyMusic: FC = () => {
  return (
    <MySocialTemplate
      header={'My music'}
      bodyText={
        <Text view={'body'} weight={'light'} className={s.bodyText} inverse>
          Music is my way to capture emotions and moments I can’t describe otherwise.
          <br />
          <br />
          Every track is a little story — honest, raw, and alive.
        </Text>
      }
      object={<MusicObject />}
      link={
        <Text view={'body'} weight={'semibold'}>
          <Link
            href={'https://open.spotify.com/artist/0kUc9Ike5lrvP4XE9x9tbC'}
            className={s.link}
            toAnotherPage
          >
            <span className={s.linkText}>{'Go listen'}</span>
            <span className={s.linkIcon}>{<SpotifyLogo />}</span>
          </Link>
        </Text>
      }
      isReversed
      className={s.container}
    />
  );
};
