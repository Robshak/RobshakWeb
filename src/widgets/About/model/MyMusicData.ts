import AlwaysWannaFlyAudio from './AlwaysWannaFly.wav';
import AlwaysWannaFlyWrap from './AlwaysWannaFlyWrap.png';
import DreamBellsAudio from './DreamBells.wav';
import DreamBellsWrap from './DreamBellsWrap.png';

export type TMusicData = {
  id: string;
  author: string;
  title: string;
  img: string;
  audio: string;
};

export const MyMusicData: TMusicData[] = [
  {
    id: 'DreamBells1',
    author: 'Robert Paradise',
    title: 'Dream Bells',
    img: DreamBellsWrap,
    audio: DreamBellsAudio,
  },
  {
    id: 'AlwaysWannaFly1',
    author: 'Robert Paradise',
    title: 'Always Wanna Fly',
    img: AlwaysWannaFlyWrap,
    audio: AlwaysWannaFlyAudio,
  },
  {
    id: 'DreamBells2',
    author: 'Robert Paradise',
    title: 'Dream Bells',
    img: DreamBellsWrap,
    audio: DreamBellsAudio,
  },
  {
    id: 'AlwaysWannaFly2',
    author: 'Robert Paradise',
    title: 'Always Wanna Fly',
    img: AlwaysWannaFlyWrap,
    audio: AlwaysWannaFlyAudio,
  },
];

export const getTrackIndex = (index: number) => {
  return (index + MyMusicData.length) % MyMusicData.length;
};
