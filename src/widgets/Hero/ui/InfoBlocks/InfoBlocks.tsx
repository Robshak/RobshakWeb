import clsx from 'clsx';
import { motion } from 'motion/react';
import { type FC, useEffect } from 'react';
import { Card, Tag, Text } from 'shared/ui';
import type { TAnimatedStep } from 'widgets/Hero/model';

import s from './InfoBlocks.module.scss';

type TInfoBlocksProps = TAnimatedStep & {
  className?: string;
};

const MotionCard = motion.create(Card);

export const InfoBlocks: FC<TInfoBlocksProps> = (props) => {
  const { className, onComplete, isAnimate } = props;

  const firstCardDuration = isAnimate ? 0.5 : 0;
  const secondCardDuration = isAnimate ? 1.5 : 0;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        onComplete?.();
      },
      (firstCardDuration + secondCardDuration) * 1000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [firstCardDuration, onComplete, secondCardDuration]);

  return (
    <div className={clsx(className, s.container)}>
      <MotionCard
        initial={{
          x: isAnimate ? '100vw' : 0,
        }}
        animate={{
          x: '0px',
        }}
        transition={{
          type: 'spring',
          restSpeed: 0.01,
          mass: 1.2,
          stiffness: 50,
          damping: 11,
          delay: firstCardDuration,
        }}
        className={s.cardHello}
        withShadow
      >
        <Text className={s.emoji} view={'display1'}>
          👋🏻
        </Text>
        <Text className={s.hello} view={'overline'}>
          Hello, I am
        </Text>
        <Text className={s.robert} view={'display1'}>
          Robert
        </Text>
      </MotionCard>
      <MotionCard
        initial={{
          x: isAnimate ? '100vw' : 0,
        }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          restSpeed: 0.01,
          stiffness: 50,
          damping: 10,
        }}
        className={s.cardTags}
        withShadow
      >
        <Text view={'header1'} muted className={s.cardTagsTitle} weight={'regular'}>
          Software engineer
        </Text>
        <div className={s.tagContainer}>
          <Tag backgroundColor={'#C9F0FF'} textColor={'#008BB8'}>
            React
          </Tag>
          <Tag backgroundColor={'#303030'} textColor={'#FFFFFF'}>
            Next.js
          </Tag>
          <Tag backgroundColor={'#CAE9FF'} textColor={'#277EDE'}>
            Go
          </Tag>
          <Tag backgroundColor={'#3178C6'} textColor={'#FFFFFF'}>
            Typescript
          </Tag>
          <Tag backgroundColor={'#CFE5FF'} textColor={'#005CA6'}>
            Docker
          </Tag>
        </div>
      </MotionCard>
    </div>
  );
};
