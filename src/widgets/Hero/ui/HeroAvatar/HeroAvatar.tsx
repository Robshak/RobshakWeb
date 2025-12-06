import clsx from 'clsx';
import { type HTMLMotionProps, motion } from 'motion/react';
import { type FC } from 'react';
import faceLeftPart from 'shared/images/faceLeftPart.png';
import faceRightPart from 'shared/images/faceRightPart.png';

import s from './HeroFvatar.module.scss';
import type { TAnimatedStep } from '../../model';

export const HeroAvatar: FC<TAnimatedStep> = (props) => {
  const { className, onComplete, isAnimate, isLoading } = props;

  const faceAnimateProps: Omit<HTMLMotionProps<'img'>, 'ref'> = {
    transition: {
      duration: isAnimate ? 2 : 0,
      ease: [0.12, 0.76, 0, 0.98],
    },
  };

  const shouldPlay = !isLoading;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: shouldPlay ? 1 : 0,
      }}
      transition={{
        ...faceAnimateProps.transition,
        delay: 0.3,
      }}
      className={clsx(s.images, className)}
    >
      <motion.img
        initial={{
          x: '-200vw',
        }}
        animate={{
          x: shouldPlay ? '0px' : '-200vw',
        }}
        transition={faceAnimateProps.transition}
        src={faceLeftPart}
        alt={'faceLeftPart'}
        onAnimationComplete={onComplete}
      />
      <motion.img
        initial={{
          x: '+200vw',
        }}
        animate={{
          x: shouldPlay ? '0px' : '+200vw',
        }}
        transition={faceAnimateProps.transition}
        src={faceRightPart}
        alt={'faceRightPart'}
      />
    </motion.div>
  );
};

