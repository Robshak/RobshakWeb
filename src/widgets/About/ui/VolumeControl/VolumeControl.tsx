import { type FC, useCallback } from 'react';
import VolumeIcon0 from 'shared/icons/volume0.svg?react';
import VolumeIcon1 from 'shared/icons/volume1.svg?react';
import VolumeIcon2 from 'shared/icons/volume2.svg?react';
import VolumeIcon3 from 'shared/icons/volume3.svg?react';
import { ButtonWithIcon } from 'shared/ui/ButtonWithIcon';
import { Progressbar } from 'shared/ui/Progressbar';
import { usePlayerStore } from 'widgets/About/model';

import s from './VolumeControl.module.scss';

export const VolumeControl: FC = () => {
  const { volume, volumeState, updateVolume, updateVolumeState } = usePlayerStore();

  const isMuted = volumeState === 'off' || volume === 0;

  const currentIcon = (() => {
    if (isMuted) return <VolumeIcon0 />;
    if (volume <= 33) return <VolumeIcon1 />;
    if (volume <= 66) return <VolumeIcon2 />;
    return <VolumeIcon3 />;
  })();

  const handleToggleMute = useCallback(() => {
    updateVolumeState(volumeState === 'on' ? 'off' : 'on');
  }, [updateVolumeState, volumeState]);

  const handleVolumeChange = useCallback(
    (value: number) => {
      updateVolume(value);

      // Авто-смена состояния mute по факту
      if (value === 0 && volumeState === 'on') {
        updateVolumeState('off');
      }
      if (value > 0 && volumeState === 'off') {
        updateVolumeState('on');
      }
    },
    [updateVolume, updateVolumeState, volumeState]
  );

  return (
    <div className={s.volume}>
      <ButtonWithIcon icon={currentIcon} onClick={handleToggleMute} />
      <Progressbar
        maximum={100}
        current={isMuted ? 0 : volume}
        setCurrent={handleVolumeChange}
        view="large"
        className={s.volumeBar}
      />
    </div>
  );
};
