export type TRatingItemType = 'sticker' | 'decoration';

export type TRatingItem = {
  id: string;
  type: TRatingItemType;
  title?: string;
  link?: string;
  color?: string;
  rotation?: number;
  desktopPosition?: { top: string; left: string };
  pinOffset?: { x: string; y: string };
  order?: number;
  content?: string;
};
