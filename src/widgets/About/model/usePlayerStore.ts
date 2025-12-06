import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { getTrackIndex } from './MyMusicData';

type TVolumeState = 'on' | 'off';

interface IPlayerState {
  currentTrack: number;
  progress: number;
  volume: number;
  volumeState: TVolumeState;
}

interface IPlayerActions {
  updateProgress: (progress: number) => void;
  updateVolume: (volume: number) => void;
  updateVolumeState: (volumeState: TVolumeState) => void;
  updateCurrentTrack: (currentTrack: number) => void;
}

const initialState: IPlayerState = {
  currentTrack: 0,
  progress: 0,
  volume: 50,
  volumeState: 'on',
};

export const usePlayerStore = create<IPlayerState & IPlayerActions>()(
  immer(
    persist(
      combine(initialState, (set) => ({
        updateProgress: (progress: number) => {
          set((state) => {
            state.progress = progress;
          });
        },
        updateVolume: (volume: number) => {
          set((state) => {
            state.volume = volume;
          });
        },
        updateVolumeState: (volumeState: TVolumeState) => {
          set((state) => {
            state.volumeState = volumeState;
          });
        },
        updateCurrentTrack: (diff: number) => {
          set((state) => {
            state.currentTrack = getTrackIndex(state.currentTrack + diff);
            state.progress = 0;
          });
        },
      })),
      { name: 'playerStore' }
    )
  )
);
