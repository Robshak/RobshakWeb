import clsx from 'clsx';
import { forwardRef, useImperativeHandle, type ForwardRefRenderFunction, useState } from 'react';

import { Plate } from './Plate';
import s from './Plate.module.scss';
import { getTrackIndex, MyMusicData } from '../../model';

type TPlateWrapperProps = {
  currentTrack: number;
  className?: string;
  isPlaying: boolean;
  rotationDuration?: number;
  onChangeTrack?: (diff: number) => void;
};

export type TPlateWrapperExpose = { changeTrack: (diff: number) => void };
export const DURATION = 0.5;
const PlateWrapperInner: ForwardRefRenderFunction<TPlateWrapperExpose, TPlateWrapperProps> = (
  props,
  ref
) => {
  const { className, isPlaying, rotationDuration, currentTrack, onChangeTrack } = props;

  const [currentPlate, setCurrentPlate] = useState(currentTrack);
  const [isAnimate, setIsAnimate] = useState(false);

  const [prevPlatePosition, setPrevPlatePosition] = useState(-600);
  const [currentPlatePosition, setCurrentPlatePosition] = useState(0);
  const [nextPlatePosition, setNextPlatePosition] = useState(600);

  const track = MyMusicData[currentTrack];
  const prevTrack = MyMusicData[getTrackIndex(currentTrack - 1)];
  const nextTrack = MyMusicData[getTrackIndex(currentTrack + 1)];

  useImperativeHandle(
    ref,
    () => ({
      changeTrack(diff: number) {
        if (isAnimate) {
          return;
        }

        setIsAnimate(true);

        if (diff === 1) {
          setCurrentPlatePosition(-600);
          setNextPlatePosition(0);
        } else {
          setCurrentPlatePosition(600);
          setPrevPlatePosition(0);
        }

        setTimeout(() => {
          setCurrentPlate(getTrackIndex(currentPlate + diff));
          setPrevPlatePosition(-600);
          setCurrentPlatePosition(0);
          setNextPlatePosition(600);
          setIsAnimate(false);
          onChangeTrack?.(diff);
        }, DURATION * 1000);
      },
    }),
    [currentPlate, isAnimate, onChangeTrack]
  );

  return (
    <div className={clsx(s.wrapper, className)}>
      {' '}
      <Plate
        animate={{ x: prevPlatePosition }}
        transition={{ duration: isAnimate ? DURATION : 0 }}
        key={prevTrack.id}
        rotationDuration={rotationDuration}
        isPlaying={false}
        image={prevTrack.img}
        author={prevTrack.author}
        title={prevTrack.title}
        className={s.plate}
      />{' '}
      <Plate
        animate={{ x: currentPlatePosition }}
        transition={{ duration: isAnimate ? DURATION : 0 }}
        key={track.id}
        rotationDuration={rotationDuration}
        isPlaying={isPlaying}
        image={track.img}
        author={track.author}
        title={track.title}
        className={s.plate}
        isCurrent
      />{' '}
      <Plate
        animate={{ x: nextPlatePosition }}
        transition={{ duration: isAnimate ? DURATION : 0 }}
        key={nextTrack.id}
        rotationDuration={rotationDuration}
        isPlaying={false}
        image={nextTrack.img}
        author={nextTrack.author}
        title={nextTrack.title}
        className={s.plate}
      />{' '}
    </div>
  );
};

export const PlateWrapper = forwardRef<TPlateWrapperExpose, TPlateWrapperProps>(PlateWrapperInner);
