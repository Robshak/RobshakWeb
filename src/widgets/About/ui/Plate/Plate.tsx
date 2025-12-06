import clsx from 'clsx';
import { motion, useMotionValue, useAnimationFrame, type MotionProps } from 'framer-motion';
import type { FC } from 'react';
import { Text } from 'shared/ui';

import s from './Plate.module.scss';

export type TPlateProps = MotionProps & {
  image: string;
  author: string;
  title: string;
  className?: string;
  isPlaying: boolean;
  isCurrent?: boolean;
  rotationDuration?: number;
};

export const Plate: FC<TPlateProps> = (props) => {
  const {
    image,
    author,
    title,
    className,
    isPlaying,
    isCurrent,
    rotationDuration = 16,
    ...motionProps
  } = props;

  const rotate = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (!isCurrent) {
      rotate.set(0);
      return;
    }

    if (!isPlaying) return;

    const degPerMs = 360 / (rotationDuration * 1000);

    rotate.set(rotate.get() + degPerMs * delta);
  });

  return (
    <motion.div className={clsx(s.container, className)} style={{ rotate }} {...motionProps}>
      <div className={s.outerLineFirst}>
        <div className={s.outerLineSecond}>
          <div className={s.outerLineThird}>
            <div className={s.innerCycle}>
              <div className={s.innerLine}>
                <div className={s.innerPoint} />

                <div className={s.text}>
                  <Text view="tag" weight="bold">
                    {author}
                  </Text>
                  <Text view="tag" weight="regular">
                    {title}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={image} alt="plate" className={s.img} />
    </motion.div>
  );
};
