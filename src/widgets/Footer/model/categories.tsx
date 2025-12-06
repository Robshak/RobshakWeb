import type { ReactNode } from 'react';
import CodeforcesIcon from 'shared/icons/CodeforcesIcon.svg?react';
import GithubIcon from 'shared/icons/GithubIcon.svg?react';
import GmailIcon from 'shared/icons/GmailIcon.svg?react';
import LeetCodeIcon from 'shared/icons/LeetCodeIcon.svg?react';
import SpotifyIcon from 'shared/icons/SpotifyIcon.svg?react';
import SteamIcon from 'shared/icons/SteamIcon.svg?react';
import TelegramIcon from 'shared/icons/TelegramIcon.svg?react';
import YoutubeIcon from 'shared/icons/YoutubeIcon.svg?react';

type TLink = {
  name: string;
  icon: ReactNode;
  href?: string;
  gradient: string;
};

type TCategory = {
  name: string;
  links: TLink[];
};

export const Categories: TCategory[] = [
  {
    name: 'Work & Code',
    links: [
      {
        name: 'Github',
        icon: <GithubIcon />,
        href: 'https://github.com/Robshak',
        gradient: 'linear-gradient(45deg, #111)',
      },
      // {
      //   name: 'LinkedIn',
      //   icon: <LinkedInIcon />,
      //   href: 'https://github.com/Robshak',
      //   gradient: 'linear-gradient(45deg, #007AB5)',
      // },
      {
        name: 'LeetCode',
        icon: <LeetCodeIcon />,
        href: 'https://leetcode.com/u/Robshak/',
        gradient: 'linear-gradient(45deg, #070706, #EBA340)',
      },
      {
        name: 'Codeforces',
        icon: <CodeforcesIcon />,
        href: 'https://codeforces.com/profile/Robshak',
        gradient: 'linear-gradient(45deg, #F5C639, #127FC2, #AF1E24)',
      },
    ],
  },
  {
    name: 'Contact Me',
    links: [
      {
        name: 'Telegram',
        icon: <TelegramIcon />,
        href: 'https://t.me/Robshakk',
        gradient: 'linear-gradient(45deg, #24A2DF)',
      },
      {
        name: 'rdshakura@gmail.com',
        icon: <GmailIcon />,
        gradient: 'linear-gradient(45deg, #4285F4, #C5221F, #EA4335, #FBBC04, #34A853)',
      },
    ],
  },
  {
    name: 'Beyond Code',
    links: [
      {
        name: 'Telegram channel',
        icon: <TelegramIcon />,
        href: 'https://t.me/RobShakDigitalYell',
        gradient: 'linear-gradient(45deg, #24A2DF)',
      },
      {
        name: 'Youtube',
        icon: <YoutubeIcon />,
        href: 'https://www.youtube.com/@Robshakk',
        gradient: 'linear-gradient(45deg, #FB0D1C)',
      },
      {
        name: 'Spotify',
        icon: <SpotifyIcon />,
        href: 'https://open.spotify.com/artist/0kUc9Ike5lrvP4XE9x9tbC',
        gradient: 'linear-gradient(45deg, #1ED760)',
      },
      {
        name: 'Steam',
        icon: <SteamIcon />,
        href: 'https://steamcommunity.com/profiles/76561198378023995/',
        gradient:
          'linear-gradient(45deg, #111D2E, #051839, #0A1B48, #132E62, #144B7E, #136497, #1387B8)',
      },
    ],
  },
];
