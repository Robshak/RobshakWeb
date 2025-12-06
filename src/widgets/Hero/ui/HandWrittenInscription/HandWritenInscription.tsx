import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import titleSvgRaw from 'shared/icons/heroText.svg?raw';
import svgPathReverse from 'svg-path-reverse';

import s from './HandWrittenInscription.module.scss';
import type { TAnimatedStep } from '../../model';

const extractPathD = (svgRaw: string): string[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgRaw, 'image/svg+xml');
  const paths = Array.from(doc.querySelectorAll('path'));

  return paths.map((p) => p.getAttribute('d')).filter((d): d is string => Boolean(d));
};

export type THandwrittenSvgProps = TAnimatedStep & {
  /** viewBox исходного svg, например "0 0 519 90" */
  viewBox: string;

  /** width/height — опционально, можно задать в стилях */
  width?: number | string;
  height?: number | string;

  /** длительность рисования одного path (сек) */
  segmentDuration?: number;

  /** задержка между path’ами (сек) */
  segmentStagger?: number;
};

export const HandWrittenText: React.FC<THandwrittenSvgProps> = (props) => {
  let { segmentDuration = 0.6, segmentStagger = 0.15 } = props;
  const { viewBox, onComplete, isAnimate, className } = props;
  const [paths, setPaths] = useState<string[]>([]);
  const pathRefs = useRef<SVGPathElement[]>([]);

  if (!isAnimate) {
    segmentDuration = 0;
    segmentStagger = 0;
  }

  useEffect(() => {
    const rawPaths = extractPathD(titleSvgRaw);
    const reversedPaths = rawPaths.map((d) => svgPathReverse.reverse(d));
    setPaths(reversedPaths);
  }, []);

  useEffect(() => {
    const total = pathRefs.current.length;

    pathRefs.current.forEach((path, index) => {
      if (!path) return;

      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.setProperty('--path-length', `${length}`);

      const delayFromStart = (total - index - 1) * segmentStagger;

      path.style.animationDuration = `${segmentDuration}s`;
      path.style.animationDelay = `${delayFromStart}s`;

      path.classList.add(s.ready);
    });
  }, [paths, segmentDuration, segmentStagger]);

  useEffect(() => {
    if (!onComplete) return;
    if (!paths.length) return;

    const totalDurationSeconds = segmentDuration + (paths.length - 1) * segmentStagger;

    const timeoutId = setTimeout(() => {
      onComplete();
    }, totalDurationSeconds * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [paths.length, segmentDuration, segmentStagger, onComplete]);

  return (
    <svg
      className={clsx(s.container, className)}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d, index) => (
        <path
          key={index}
          ref={(el) => {
            if (el) {
              pathRefs.current[index] = el;
            }
          }}
          className={s.path}
          d={d}
        />
      ))}
    </svg>
  );
};
