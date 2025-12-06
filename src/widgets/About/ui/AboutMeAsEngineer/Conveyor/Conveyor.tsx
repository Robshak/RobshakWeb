import clsx from 'clsx';
import { motion } from 'motion/react';
import { type FC, type ReactNode, useState } from 'react';
import SmallArrowLeft from 'shared/icons/smallArrowLeft.svg?react';
import SmallArrowRight from 'shared/icons/smallArrowRight.svg?react';

import s from './Conveyor.module.scss';

type TConveyorProps = {
  items: ReactNode[];
  className?: string;
};

export const Conveyor: FC<TConveyorProps> = (props) => {
  const { items, className } = props;
  const [internalPage, setInternalPage] = useState(0);
  const [isInternalAnimating, setIsInternalAnimating] = useState(false);

  const onChangeInternalPage = (newInternalPage: number) => {
    if (isInternalAnimating) return;
    if (newInternalPage < 0 || newInternalPage >= items.length) return;

    setIsInternalAnimating(true);
    setInternalPage(newInternalPage);
  };

  return (
    <div className={clsx(s.multipleContentWrapper, className)}>
      <div className={s.conveyorViewport}>
        <motion.div
          className={s.conveyorTrack}
          animate={{ x: `calc(-${internalPage * 100}% - ${internalPage * 60}px)` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onAnimationComplete={() => setIsInternalAnimating(false)}
        >
          {items.map((content, index) => (
            <div key={index} className={s.conveyorItem}>
              {content}
            </div>
          ))}
        </motion.div>
      </div>
      <div className={s.internalPagination}>
        <SmallArrowLeft
          className={clsx(s.arrow, { [s.disabled]: internalPage === 0 })}
          onClick={() => onChangeInternalPage(internalPage - 1)}
        />
        <SmallArrowRight
          className={clsx(s.arrow, {
            [s.disabled]: internalPage === items.length - 1,
          })}
          onClick={() => onChangeInternalPage(internalPage + 1)}
        />
      </div>
    </div>
  );
};
