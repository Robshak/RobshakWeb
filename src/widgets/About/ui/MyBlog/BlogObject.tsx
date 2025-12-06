import type { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { type FC, useEffect, useRef } from 'react';
import Blog from 'shared/images/Blog.png';
import { Link } from 'shared/ui';

import s from './MyBlog.module.scss';

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

type PathCommand = [command: string, ...coords: number[]];

const points: PathCommand[] = [
  ['M', 0, 85.5],
  ['C', 0, 74.454, 8.995, 67.101, 20, 65.5],
  ['L', 480, 1.5],
  ['C', 490.085, 0.033, 500, 10.454, 500, 21.5],
  ['L', 500, 212],
  ['C', 500, 223.046, 491.046, 232, 480, 232],
  ['L', 20, 232],
  ['C', 8.954, 232, 0, 223.046, 0, 212],
  ['Z'],
];

export const BlogObject: FC = () => {
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!portalRef.current) return;

    const el = portalRef.current;
    const rect = el.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    const scaleX = W / 500;
    const scaleY = H / 232;

    const pathStr = points
      .map(([command, ...coords]) => {
        if (coords.length === 0) return command;

        const scaled = coords.map((v, i) =>
          i % 2 === 0 ? (v * scaleX).toFixed(5) : (v * scaleY).toFixed(5)
        );

        return `${command} ${scaled.join(' ')}`;
      })
      .join(' ');

    el.style.clipPath = `path('${pathStr}')`;
  }, []);

  return (
    <Link className={s.scene} href={'https://t.me/RobShakDigitalYell'} toAnotherPage>
      <div className={s.portalOuter}>
        <div className={s.portalInner} ref={portalRef} />
      </div>

      <motion.div
        className={s.cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <motion.div variants={cardVariants} className={s.card}>
          <img src={Blog} alt="Blog" className={s.blogImage} />
        </motion.div>
      </motion.div>
    </Link>
  );
};
