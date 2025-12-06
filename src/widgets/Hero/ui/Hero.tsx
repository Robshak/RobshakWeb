import { motion } from 'motion/react';
import { type FC, useCallback, useEffect, useState } from 'react';
import strokeOfPaint from 'shared/images/strokeOfPaint.png';
import { useLoaderStore } from 'shared/store';

import { HandWrittenText } from './HandWrittenInscription';


import s from './Hero.module.scss';
import { HeroAvatar } from './HeroAvatar';
import { InfoBlocks } from './InfoBlocks';
import { InspiredBy } from './InspiredBy';
import { ScrollHint } from './ScrollHint';
import { StrokeOfPaint } from './StrokeOfPaint';

const STEPS = 5;
const HERO_ANIMATION_KEY = 'heroAnimationPlayed';

export const Hero: FC = () => {
  const isLoading = useLoaderStore((state) => state.isLoading);
  const [hasPlayedOnce] = useState<boolean>(() => {

    if (typeof window === 'undefined') return false;

    try {
      return sessionStorage.getItem(HERO_ANIMATION_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const shouldAnimate = !hasPlayedOnce;

  const [currentState, setCurrentState] = useState<number>(() => (shouldAnimate ? 0 : STEPS - 1));
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(!shouldAnimate);

  const onComplete = useCallback(() => {
    if (!shouldAnimate || isLoading) return;

    setTimeout(() => {
      setCurrentState((prev) => {
        if (prev === STEPS - 1) {
          setIsAnimationComplete(true);

          try {
            sessionStorage.setItem(HERO_ANIMATION_KEY, 'true');
          } catch {
            // ignore
          }
        }

        return Math.min(prev + 1, STEPS - 1);
      });
    }, 200);
  }, [shouldAnimate, isLoading]);

  useEffect(() => {
    if (!shouldAnimate) return;

    if (!isAnimationComplete) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [shouldAnimate, isAnimationComplete]);

  const content = (
    <>
      <img src={strokeOfPaint} alt="" style={{ display: 'none' }} />
      {currentState >= 0 && (
        <HeroAvatar

          onComplete={onComplete}
          className={s.heroAvatar}
          isAnimate={shouldAnimate}
          isLoading={isLoading}
        />
      )}

      {currentState >= 1 && (

        <div className={s.handWrittenBlock}>
          <HandWrittenText
            height={100}
            width={500}
            viewBox="0 0 519 90"
            segmentDuration={0.1}
            segmentStagger={0.1}
            className={s.handWrittenText}
            onComplete={onComplete}
            isAnimate={shouldAnimate}
          />

          <div className={s.strokeSlot}>
            {currentState >= 3 && (
              <StrokeOfPaint
                className={s.strokeOfPaint}
                onComplete={onComplete}
                isAnimate={shouldAnimate}
              />
            )}
          </div>
        </div>
      )}

      {currentState >= 2 && (
        <InfoBlocks className={s.infoBlocks} onComplete={onComplete} isAnimate={shouldAnimate} />
      )}

      {currentState >= 4 && (
        <InspiredBy className={s.inspiredBy} onComplete={onComplete} isAnimate={shouldAnimate} />
      )}

      <ScrollHint className={s.scrollHint} isVisible={isAnimationComplete && shouldAnimate} />
    </>
  );

  if (shouldAnimate) {
    return <div className={s.container}>{content}</div>;
  }

  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {content}
    </motion.div>
  );
};
