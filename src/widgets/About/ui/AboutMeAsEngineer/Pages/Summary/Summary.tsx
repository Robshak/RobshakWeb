import type { FC } from 'react';
import ArrowRight from 'shared/icons/arrowRightLink.svg?react';
import { Link, Text } from 'shared/ui';

import s from './Summary.module.scss';

export const Summary: FC = () => {
  return (
    <Text view={'body'} weight={'light'}>
      Frontend Developer with 1 year of experience in production. Proficient in JavaScript,
      TypeScript, React.js, and Next.js. Experienced in optimizing deployment processes, enhancing
      UI development workflows, and building high-performance large-scale applications. Extensive
      experience in developing applications using the Feature-Sliced Design (FSD) methodology to
      simplify architecture and scale complex, extensible systems.
      <br />
      <br />
      <Text as={'span'} view={'body'} weight={'medium'}>
        You can explore my practical application of these skills and methodologies in the{' '}
        <Link href={'/projects'} className={s.link}>
          project section <ArrowRight className={s.icon} />
        </Link>
      </Text>
    </Text>
  );
};
