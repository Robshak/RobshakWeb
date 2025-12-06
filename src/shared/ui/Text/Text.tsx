import clsx from 'clsx';
import { type JSX, type FC, type ElementType, type ReactNode } from 'react';

import s from './Text.module.scss';

export type TypographyView =
  | 'display1'
  | 'display2'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'body'
  | 'bodySmall'
  | 'overline'
  | 'tag';

export type TypographyAlign = 'left' | 'center' | 'right' | 'offset';

export interface TypographyProps {
  view: TypographyView;
  as?: keyof JSX.IntrinsicElements;
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  align?: TypographyAlign;
  caps?: boolean;
  withLines?: boolean;
  muted?: boolean;
  inverse?: boolean;
  handwritten?: boolean;
  italic?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const defaultTagByView: Record<TypographyView, ElementType> = {
  display1: 'h1',
  display2: 'h1',
  header1: 'h2',
  header2: 'h3',
  header3: 'h4',
  body: 'p',
  bodySmall: 'p',
  overline: 'span',
  tag: 'span',
};

export const Text: FC<TypographyProps> = (props) => {
  const {
    view,
    as,
    weight,
    align = 'left',
    caps,
    withLines,
    muted,
    inverse,
    handwritten,
    italic,
    className,
    children,
    onClick,
  } = props;

  const Component = (as || defaultTagByView[view]) as ElementType;

  const rootClassName = clsx(
    s.typography,
    s[`typography-${view}`],
    align && s[`typography-align-${align}`],
    weight && s[`typography-weight-${weight}`],
    {
      [s['typography-caps']]: caps,
      [s['typography-withLines']]: withLines,
      [s['typography-muted']]: muted,
      [s['typography-inverse']]: inverse,
      [s['typography-handwritten']]: handwritten,
      [s['typography-italic']]: italic,
    },
    className
  );

  return (
    <Component className={rootClassName} onClick={onClick}>
      {withLines ? <span className={s['typography-withLines-text']}>{children}</span> : children}
    </Component>
  );
};
