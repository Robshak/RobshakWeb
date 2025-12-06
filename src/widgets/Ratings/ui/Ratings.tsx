import clsx from 'clsx';
import type { FC, CSSProperties } from 'react';
import { usePlatform, PlatformType } from 'shared/hooks';
import { Text, Link } from 'shared/ui';

import { ratingItems } from '../model';
import MapIcon from './Map.svg?react';
import NoteIcon from './Note.svg?react';
import PhotoIcon from './Photo.svg?react';
import s from './Ratings.module.scss';

type TRatingsProps = {
  className?: string;
};

export const Ratings: FC<TRatingsProps> = (props) => {
  const { className } = props;
  const platform = usePlatform();
  const isMobile = platform !== PlatformType.Desktop;

  const sortedItems = [...ratingItems]
    .filter((item) => typeof item.order === 'number')
    .sort((a, b) => (a.order as number) - (b.order as number));

  const MOBILE_ITEM_HEIGHT = 280;
  const MOBILE_TOP_OFFSET = 160;

  const getPosition = (item: (typeof ratingItems)[0], index: number) => {
    if (isMobile) {
      const isLeft = index % 2 === 0;
      const pinXValue = parseInt(item.pinOffset?.x || '50');

      let leftPos = '50%';

      if (isLeft) {
        leftPos = pinXValue > 60 ? '40%' : '30%';
      } else {
        leftPos = pinXValue < 40 ? '60%' : '70%';
      }

      return {
        top: `${MOBILE_TOP_OFFSET + index * MOBILE_ITEM_HEIGHT}px`,
        left: leftPos,
        xForSvg: leftPos,
      };
    }
    return { ...item.desktopPosition, xForSvg: item.desktopPosition?.left };
  };

  const connections = [];
  for (let i = 0; i < sortedItems.length - 1; i++) {
    connections.push({
      start: sortedItems[i],
      end: sortedItems[i + 1],
      startIndex: i,
      endIndex: i + 1,
    });
  }

  const renderDecoration = (id: string) => {
    switch (id) {
      case 'note':
        return <NoteIcon className={s.decorationIcon} />;
      case 'photo':
        return <PhotoIcon className={s.decorationIcon} />;
      case 'map':
        return <MapIcon className={s.decorationIcon} />;
      default:
        return null;
    }
  };

  return (
    <div className={clsx(s.container, className)}>
      <div
        className={s.board}
        style={
          isMobile
            ? ({
                height: `${MOBILE_TOP_OFFSET + (sortedItems.length - 1) * MOBILE_ITEM_HEIGHT + 250}px`,
              } as CSSProperties)
            : undefined
        }
      >
        <Text view={'display2'} className={s.title}>
          My Ratings
        </Text>

        <svg className={s.strings}>
          {connections.map(({ start, end, startIndex, endIndex }, i) => {
            const startPos = getPosition(start, startIndex);
            const endPos = getPosition(end, endIndex);

            if (!startPos || !endPos) return null;

            return (
              <line
                key={i}
                x1={startPos.xForSvg}
                y1={startPos.top}
                x2={endPos.xForSvg}
                y2={endPos.top}
                className={s.stringLine}
              />
            );
          })}
        </svg>

        <div className={s.itemsContainer}>
          {sortedItems.map((item, index) => {
            const pos = getPosition(item, index);

            return (
              <div
                key={item.id}
                className={clsx(s.itemWrapper, s[item.type])}
                style={
                  {
                    '--top': pos?.top,
                    '--left': pos?.left || 'auto',
                    '--rotation': `${item.rotation}deg`,
                    '--bg-color': item.color,
                    '--pin-x': item.pinOffset?.x || '50%',
                    '--pin-y': item.pinOffset?.y || '10px',
                  } as CSSProperties
                }
              >
                <div className={s.pin} />

                <div className={s.itemContent}>
                  {item.type === 'sticker' ? (
                    <Link
                      href={item.link === 'WILL_BE' ? '#' : item.link || '#'}
                      className={s.stickerLink}
                      toAnotherPage={item.link !== 'WILL_BE'}
                      onClick={(e) => {
                        if (item.link === 'WILL_BE') {
                          e.preventDefault();
                          alert('Not ready yet');
                        }
                      }}
                    >
                      <div className={s.stickerBody}>
                        <Text view="body" weight="bold" handwritten>
                          {item.title}
                        </Text>
                      </div>
                    </Link>
                  ) : (
                    <div className={s.decorationBody}>{renderDecoration(item.id)}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
