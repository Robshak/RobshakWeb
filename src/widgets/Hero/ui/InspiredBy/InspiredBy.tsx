import { motion } from 'motion/react';
import { type FC } from 'react';
import { Link, Text } from 'shared/ui';
import type { TAnimatedStep } from 'widgets/Hero/model';

type TInspiredByProps = TAnimatedStep & {
  className?: string;
};

export const InspiredBy: FC<TInspiredByProps> = (props) => {
  const { className, onComplete, isAnimate } = props;

  const duration = isAnimate ? 1 : 0;

  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: duration,
      }}
      onAnimationComplete={onComplete}
      className={className}
    >
      <Text view={'header3'} handwritten>
        Inspired by{' '}
        <Link href="https://www.adhamdannaway.com/" toAnotherPage>
          Adham Dannaway
        </Link>
      </Text>
    </motion.span>
  );
};
