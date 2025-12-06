import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { useIsDesktop } from 'shared/hooks';
import { Text } from 'shared/ui';

import s from './MySocialTemplate.module.scss';

type TMySocialTemplateProps = {
  header: string;
  bodyText: ReactNode;
  object: ReactNode;
  link: ReactNode;
  isReversed?: boolean;
  className?: string;
};

export const MySocialTemplate: FC<TMySocialTemplateProps> = (props) => {
  const { className, isReversed = false, bodyText, object, header, link } = props;
  const isDesktop = useIsDesktop();

  let firstPart: ReactNode = (
    <div className={s.textPart}>
      <Text
        view={'header1'}
        withLines
        caps
        align={'center'}
        inverse
        className={s.header}
        weight={'regular'}
      >
        {header}
      </Text>
      <div className={s.content}>
        <span className={s.bodyText}>{bodyText}</span>
        <span className={s.link}>{link}</span>
      </div>
    </div>
  );

  let secondPart: ReactNode = <div className={s.objectPart}>{object}</div>;

  if (isReversed && isDesktop) {
    [firstPart, secondPart] = [secondPart, firstPart];
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      <div
        className={clsx(s.container, {
          [s.reversedContainer]: isReversed,
        })}
      >
        {firstPart}
        {secondPart}
      </div>
    </div>
  );
};
