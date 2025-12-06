import type { FC } from 'react';
import TelegramLogo from 'shared/icons/TelegramIcon.svg?react';
import { Link, Text } from 'shared/ui';

import { BlogObject } from './BlogObject';
import s from './MyBlog.module.scss';
import { MySocialTemplate } from '../MySocialTemplate';

export const MyBlog: FC = () => {
  return (
    <MySocialTemplate
      header={'my blog'}
      bodyText={
        <Text view={'body'} weight={'light'} className={s.bodyText} inverse>
          I run a blog on Telegram where I share my thoughts, emotions, and reflections on life and
          the world around me.
        </Text>
      }
      link={
        <Text view={'body'} weight={'semibold'}>
          <Link href={'https://t.me/RobShakDigitalYell'} className={s.link} toAnotherPage>
            <span className={s.linkText}>{'Go read'}</span>
            <span className={s.linkIcon}>{<TelegramLogo />}</span>
          </Link>
        </Text>
      }
      object={<BlogObject />}
      className={s.container}
    />
  );
};
