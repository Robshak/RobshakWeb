import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

import s from './Link.module.scss';

type TLinkProps = {
  href: string;
  className?: string;
  toAnotherPage?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Link: FC<PropsWithChildren<TLinkProps>> = (props) => {
  const { href, children, className, toAnotherPage, onClick } = props;

  return (
    <a
      className={clsx(s.link, className)}
      href={href}
      target={toAnotherPage ? '_blank' : '_self'}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
