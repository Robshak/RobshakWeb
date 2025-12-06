import type { FC } from 'react';
import ArrowRight from 'shared/icons/arrowRightLink.svg?react';
import { Link, Text } from 'shared/ui';

import s from './Ideas.module.scss';

export const Ideas: FC = () => {
  return (
    <Text view={'body'} weight={'light'}>
      I also experiment with ideas outside of production work — exploring tools, architectures, and
      side projects that help me grow as an engineer. You can read more about them in the
      <br />
      <br />
      <Text as={'span'} view={'body'} weight={'semibold'}>
        <Link href={'/projects'} className={s.link}>
          project section <ArrowRight className={s.icon} />
        </Link>
      </Text>
    </Text>
  );
};
