import clsx from 'clsx';
import { motion } from 'motion/react';
import { type FC, useState } from 'react';
import { Text } from 'shared/ui';

import s from './AboutMeAsEngineer.module.scss';
import { Conveyor } from './Conveyor';
import { ABOUT_ME_AS_ENGINEER } from './Pages';
import { useAboutStore } from '../../model';

type TMobileVersionProps = {
  className?: string;
};

const DURATION = 0.3;

export const MobileVersion: FC<TMobileVersionProps> = (props) => {
  const { className } = props;
  const { currentPage, setCurrentPage } = useAboutStore();
  const [hidePage, setHidePage] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const page = ABOUT_ME_AS_ENGINEER[currentPage];

  const onChangePage = (pageIndex: number) => {
    if (pageIndex === currentPage) {
      return;
    }

    setIsAnimate(true);
    setHidePage(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setHidePage(false);
    }, 1000 * DURATION);
    setTimeout(
      () => {
        setIsAnimate(false);
      },
      1000 * DURATION * 2
    );
  };

  return (
    <div className={clsx(s.container, className)}>
      <div
        className={clsx(s.pagination, {
          [s.disablePagination]: isAnimate,
        })}
      >
        {ABOUT_ME_AS_ENGINEER.map((page, index) => {
          return (
            <Text
              key={page.name}
              view={'body'}
              caps
              onClick={() => {
                onChangePage(index);
              }}
              className={clsx(s.pageButton, {
                [s.activePage]: index === currentPage,
              })}
            >
              {page.name}
            </Text>
          );
        })}
      </div>
      {
        <motion.div
          animate={{
            y: hidePage ? -20 : 0,
            opacity: hidePage ? 0 : 1,
          }}
          transition={{
            duration: DURATION,
          }}
          className={s.page}
        >
          <Text view={'header1'} withLines align={'offset'} className={s.pageTitle}>
            {page.name}
          </Text>
          <div className={s.content}>
            <div className={s.text}>
              {page.pageType === 'single' ? page.content : <Conveyor items={page.content} />}
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
};
