import { type FC } from 'react';
import { Text } from 'shared/ui';

import s from './Skills.module.scss';

export const Skills: FC = () => {
  return (
    <section className={s.root}>
      <div className={s.row}>
        <Text view="body" weight="semibold">
          Languages:
        </Text>
        <Text view="body" weight={'light'}>
          TypeScript, CSS, HTML, Go
        </Text>
      </div>

      <div className={s.row}>
        <Text view="body" weight="semibold">
          Frameworks/Libraries:
        </Text>
        <Text view="body" weight={'light'}>
          React, Next.js, SCSS, React Router, TanStack Router, React Hook Form, Redux Toolkit,
          Zustand, Framer Motion
        </Text>
      </div>

      <div className={s.row}>
        <Text view="body" weight="semibold">
          Tools:
        </Text>
        <Text view="body" weight={'light'}>
          Axios, Docker, GitHub Actions, Storybook, Webpack
        </Text>
      </div>

      <div className={s.row}>
        <Text view="body" weight="semibold">
          Concepts:
        </Text>
        <Text view="body" weight={'light'}>
          Feature-Sliced Design (FSD), Performance Optimization, State Management, API Integration,
          CI/CD
        </Text>
      </div>

      <div className={s.row}>
        <Text view="body" weight="semibold">
          Language Skills:
        </Text>
        <Text view="body" weight={'light'}>
          Russian native, English basic
        </Text>
      </div>
    </section>
  );
};
