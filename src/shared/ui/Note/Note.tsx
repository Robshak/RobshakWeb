import clsx from 'clsx';
import type { FC } from 'react';

import s from './Note.module.scss';

type NoteProps = {
  className?: string;
};

export const Note: FC<NoteProps> = ({ className }) => {
  return (
    <div className={clsx(s.note, className)}>
      <div className={s.lines}>
        <div className={s.line} />
        <div className={s.line} />
        <div className={s.line} />
      </div>
    </div>
  );
};
