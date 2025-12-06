import clsx from 'clsx';
import { type FC, type PropsWithChildren } from 'react';
import { Text } from 'shared/ui';

import s from './Tag.module.scss';

type TTagProps = {
  textColor: string;
  backgroundColor: string;
  className?: string;
};

export const Tag: FC<PropsWithChildren<TTagProps>> = (props) => {
  const { className, children, textColor, backgroundColor } = props;

  return (
    <div
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={clsx(className, s.container)}
    >
      <Text view={'tag'} weight={'regular'}>
        {children}
      </Text>
    </div>
  );
};
