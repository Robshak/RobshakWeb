import clsx from 'clsx';
import { motion } from 'motion/react';
import { type FC, useState } from 'react';
import { Text } from 'shared/ui';

import s from './AboutMeAsEngineer.module.scss';
import { Conveyor } from './Conveyor';
import { ABOUT_ME_AS_ENGINEER } from './Pages';
import { useAboutStore } from '../../model';

type TDesktopVersionProps = {
  className?: string;
};

const FIRST_STEP_DURATION = 0.4;
const SECOND_STEP_DURATION = 0.5;

export const DesktopVersion: FC<TDesktopVersionProps> = (props) => {
  const { className } = props;
  const { currentPage, setCurrentPage } = useAboutStore();
  const [changePosContent, setChangePosContent] = useState(false);
  const [changePosImg, setChangePosImg] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const page = ABOUT_ME_AS_ENGINEER[currentPage];

  const onChangePage = (pageIndex: number) => {
    if (pageIndex === currentPage) {
      return;
    }

    setIsAnimate(true);
    setChangePosImg(true);
    setTimeout(() => {
      setChangePosContent(true);
    }, FIRST_STEP_DURATION * 1000);
    setTimeout(
      () => {
        setCurrentPage(pageIndex);
        setChangePosContent(false);
      },
      (FIRST_STEP_DURATION + SECOND_STEP_DURATION) * 1000
    );
    setTimeout(
      () => {
        setChangePosImg(false);
      },
      (FIRST_STEP_DURATION * 2 + SECOND_STEP_DURATION) * 1000
    );
    setTimeout(
      () => {
        setIsAnimate(false);
      },
      (FIRST_STEP_DURATION * 2 + SECOND_STEP_DURATION * 2) * 1000
    );
  };

  return (
    <div className={clsx(s.container, className)}>
      <div className={s.viewport}>
        {
          <motion.div
            animate={{
              x: changePosContent ? -400 : 0,
              opacity: changePosContent ? 0 : 1,
            }}
            transition={{
              duration: SECOND_STEP_DURATION,
              ease: [0.79, 0.57, 0.32, 0.54],
            }}
            className={s.page}
          >
            <Text view={'header1'} withLines align={'offset'} className={s.pageTitle}>
              {page.name}
            </Text>
            <div className={s.content}>
              <div className={s.text} key={page.name}>
                {page.pageType === 'single' ? page.content : <Conveyor items={page.content} />}
              </div>
              <motion.div
                animate={{
                  x: changePosImg ? -400 : 0,
                  opacity: changePosImg ? 0 : 1,
                }}
                transition={{
                  duration: FIRST_STEP_DURATION,
                  ease: [0.79, 0.57, 0.32, 0.54],
                }}
                className={s.img}
              >
                {page.img}
              </motion.div>
            </div>
          </motion.div>
        }
      </div>
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
    </div>
  );
};
