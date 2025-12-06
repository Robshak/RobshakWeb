import clsx from 'clsx';
import { motion } from 'motion/react';
import { type FC } from 'react';
import strokeOfPaint from 'shared/images/strokeOfPaint.png';
import type { TAnimatedStep } from 'widgets/Hero/model';

import s from './StrokeOfPaint.module.scss';

type TStrokeOfPaint = TAnimatedStep & {
  className?: string;
};

export const StrokeOfPaint: FC<TStrokeOfPaint> = (props) => {
  const { className, onComplete, isAnimate } = props;

  const duration = isAnimate ? 0.3 : 0;

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1.03, opacity: 0, rotate: -1 }}
      animate={{ clipPath: 'inset(0 0 0 0)', scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        duration: duration,
        ease: [0.12, 0.87, 0.19, 0.97],
      }}
      onAnimationComplete={onComplete}
      className={clsx(s.container, className)}
    >
      <img className={s.img} src={strokeOfPaint} alt="brush stroke" />
    </motion.div>
  );
};
