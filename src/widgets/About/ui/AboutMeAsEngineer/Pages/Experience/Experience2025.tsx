import { type FC } from 'react';
import { Text } from 'shared/ui';

import s from './Experience.module.scss';

export const Experience2025: FC = () => {
  return (
    <section>
      <header className={s.header}>
        <Text view="header2" weight="semibold">
          Yandex
        </Text>

        <div className={s.divider} />

        <Text view="bodySmall" muted>
          2025
        </Text>
      </header>

      <ul className={s.list}>
        <Text as="li" view="body" weight={'light'}>
          Developed and maintained internal services used daily by over{' '}
          <span className={s.highlight}>30,000 employees worldwide</span>, improving productivity
          and usability.
        </Text>

        <Text as="li" view="body" weight={'light'}>
          Created and optimized <span className={s.highlight}>independent UI components</span> to
          enhance system modularity and consistency.
        </Text>

        <Text as="li" view="body" weight={'light'}>
          Built and maintained <span className={s.highlight}>utility libraries</span> that
          streamlined developer workflows, including:
          <ul className={s.sublist}>
            <Text as="li" view="bodySmall">
              an <span className={s.highlight}>AI-powered i18n translation automation tool</span>{' '}
              for localization files,
            </Text>
            <Text as="li" view="bodySmall">
              and a <span className={s.highlight}>preview deployment system</span> that
              automatically built feature branches and published them to test environments for QA
              and review.
            </Text>
          </ul>
        </Text>

        <Text as="li" view="body" weight={'light'}>
          Supported <span className={s.highlight}>project dependency updates</span> and maintained{' '}
          <span className={s.highlight}>technical documentation</span> to ensure smooth version
          management and onboarding.
        </Text>
      </ul>
    </section>
  );
};
