import clsx from 'clsx';
import { forwardRef, type PropsWithChildren, type HTMLAttributes } from 'react';

import s from './Card.module.scss';

type TCardProps = PropsWithChildren<{
  className?: string;
  withShadow?: boolean;
}> &
  HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, TCardProps>((props, ref) => {
  const { className, withShadow, children, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(s.card, className, {
        [s.withShadow]: withShadow,
      })}
      {...rest}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
