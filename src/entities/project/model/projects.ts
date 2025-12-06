import MyWebsiteImageForItem from './images/MyWebsiteImageForItem.png';
import MyWebsiteImageForPage from './images/MyWebsiteImageForPage.png';
import TaglistImageForItem from './images/TaglistImageForItem.png';
import TaglistImageForPage from './images/TaglistImageForPage.png';

export type TProject = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  imageForItem: string;
  imageForPage?: string;
  githubUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;
};

export const MyProjects: TProject[] = [
  {
    id: 'taglist',
    name: 'Taglist',
    description:
      'A music player where playlists are tag-based templates. You can create custom collections by genre, mood, or any tags you define.',
    stack: ['React 19 + TypeScript', 'Zustand', 'SCSS', 'Framer Motion', 'i18next', 'Vite'],
    imageForItem: TaglistImageForItem,
    imageForPage: TaglistImageForPage,
    githubUrl: 'https://github.com/Robshak/Taglist-Remake',
    demoUrl: 'https://taglist-remake.vercel.app/',
  },
  {
    id: 'my-website',
    name: 'My website',
    description: 'This is my personal website where I share my work and my creative projects.',
    stack: ['React 19 + TypeScript', 'Zustand', 'SCSS', 'Framer Motion', 'Vite'],
    imageForItem: MyWebsiteImageForItem,
    imageForPage: MyWebsiteImageForPage,
    githubUrl: 'https://github.com/Robshak/RobshakWeb',
    demoUrl: '/',
  },
];
