import clsx from 'clsx';
import { motion } from 'motion/react';
import { type FC, useEffect, useState } from 'react';
import DoubleDownArrow from 'shared/icons/doubleDownArrow.svg?react';
import { Text } from 'shared/ui';

import s from './ScrollHint.module.scss';

type TScrollHintProps = {
  className?: string;
  isVisible?: boolean;
};

const appearDuration = 2;
const disappearDuration = 0.8;

export const ScrollHint: FC<TScrollHintProps> = (props) => {
  const { className, isVisible = false } = props;
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShouldHide(true);
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isVisibleNow = isVisible && !shouldHide;
  const isHiding = shouldHide || !isVisible;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisibleNow ? 1 : 0 }}
      transition={{
        duration: isHiding ? disappearDuration : appearDuration,
        delay: isHiding ? 0 : 1,
        ease: 'easeInOut',
      }}
      style={{ pointerEvents: 'none' }}
      className={clsx(s.container, className)}
    >
      <div className={s.content}>
        <Text view="header2" className={s.text}>
          Scroll down
        </Text>

        <motion.div
          className={s.arrowWrapper}
          animate={isVisibleNow ? { y: [0, 12, 0] } : { y: 0 }}
          transition={{
            duration: 1.5,
            repeat: isVisibleNow ? Infinity : 0,
            ease: 'easeInOut',
          }}
        >
          <DoubleDownArrow className={s.arrow} />
        </motion.div>
      </div>
    </motion.div>
  );
};
