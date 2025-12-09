import type { ReactNode } from 'react';
import AboutMeEducation from 'shared/images/aboutMeEducation.png';
import AboutMeExperience from 'shared/images/aboutMeExperience.png';
import AboutMeSkills from 'shared/images/aboutMeSkills.png';
import AboutMeSummary from 'shared/images/aboutMeSummary.png';

import { Education } from './Education';
import { Experience2025 } from './Experience';
import { Skills } from './Skills';
import { Summary } from './Summary';

type TPageGeneral = {
  name: string;
  pageType: 'single' | 'multiple';
  img: ReactNode;
};

type TPageSingle = TPageGeneral & {
  content: ReactNode;
  pageType: 'single';
};

type TPageMultiple = TPageGeneral & {
  content: ReactNode[];
  pageType: 'multiple';
};

type TPage = TPageSingle | TPageMultiple;

export const ABOUT_ME_AS_ENGINEER: TPage[] = [
  {
    name: 'Summary',
    pageType: 'single',
    content: <Summary />,
    img: <img src={AboutMeSummary} alt={'AboutMeSummary'} />,
  },
  {
    name: 'Experience',
    pageType: 'multiple',
    content: [<Experience2025 />],
    img: <img src={AboutMeExperience} alt={'AboutMeExperience'} />,
  },
  {
    name: 'Skills',
    pageType: 'single',
    content: <Skills />,
    img: <img src={AboutMeSkills} alt={'AboutMeSkills'} />,
  },
  {
    name: 'Education',
    pageType: 'single',
    content: <Education />,
    img: <img src={AboutMeEducation} alt={'AboutMeEducation'} />,
  },
  // {
  //   name: 'Ideas in motion',
  //   pageType: 'single',
  //   content: <Ideas />,
  //   img: <img src={AboutMeIdeas} alt={'AboutMeIdeas'} />,
  // },
];
