import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import NextIcon from 'shared/icons/Next.svg?react';
import PauseIcon from 'shared/icons/Pause.svg?react';
import PlayIcon from 'shared/icons/Play.svg?react';
import PrevIcon from 'shared/icons/Prev.svg?react';
import { ButtonWithIcon } from 'shared/ui/ButtonWithIcon';
import { Progressbar } from 'shared/ui/Progressbar';
import { MyMusicData, usePlayerStore } from 'widgets/About/model';
import { PlateWrapper } from 'widgets/About/ui/Plate';

import s from './MyMusic.module.scss';
import type { TPlateWrapperExpose } from '../Plate';
import { VolumeControl } from '../VolumeControl';

export const MusicObject: FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const plateRef = useRef<TPlateWrapperExpose | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const { progress, volume, volumeState, currentTrack, updateProgress, updateCurrentTrack } =
    usePlayerStore();

  const track = MyMusicData[currentTrack];

  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;

    const normalized = volumeState === 'off' ? 0 : volume / 100;
    audioRef.current.volume = Math.min(Math.max(normalized, 0), 1);
  }, [volume, volumeState]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlayingRef.current) {
      void audioRef.current.play();
    }
  }, [currentTrack]);

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const durationSeconds = audio.duration || 0;

    if (durationSeconds > 0 && progress > 0) {
      audio.currentTime = (progress / 100) * durationSeconds;
    }
  };

  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current || !isPlaying) return;

    const audio = audioRef.current;
    const current = audio.currentTime;
    const duration = audio.duration;
    if (duration === 0) return;

    const percent = (current / duration) * 100;
    updateProgress(percent);
  }, [updateProgress, isPlaying]);

  const handlePlayPause = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      void audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (!plateRef.current) {
      return;
    }

    plateRef.current.changeTrack(1);
  }, []);

  const handlePrev = useCallback(() => {
    if (!plateRef.current) {
      return;
    }

    plateRef.current.changeTrack(-1);
  }, []);

  const handleSeek = useCallback(
    (percent: number) => {
      if (!audioRef.current) return;

      const audio = audioRef.current;
      const duration = audio.duration;
      if (duration === 0) return;

      audio.currentTime = (percent / 100) * duration;
      updateProgress(percent);
    },
    [updateProgress]
  );

  return (
    <>
      <audio
        ref={audioRef}
        src={track.audio}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />

      <div className={s.scene}>
        <PlateWrapper
          ref={plateRef}
          className={s.plate}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onChangeTrack={updateCurrentTrack}
        />

        <div className={s.player}>
          <Progressbar
            maximum={100}
            current={progress}
            setCurrent={handleSeek}
            view="small"
            className={s.progress}
          />

          <div className={s.body}>
            <VolumeControl />

            <div className={s.controls}>
              <ButtonWithIcon icon={<PrevIcon />} onClick={handlePrev} />
              <ButtonWithIcon
                className={s.playButton}
                icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
                onClick={handlePlayPause}
              />
              <ButtonWithIcon icon={<NextIcon />} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
