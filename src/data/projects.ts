import { Language } from '../utils/languages';

interface ProjectData {
  readonly projectGroups: readonly ProjectGroup[];
}
interface ProjectGroup {
  readonly title: string;
  readonly projects: readonly Project[];
}
interface Project {
  readonly title: string;
  readonly link: string;
  readonly images: readonly Image[];
}
type Image = readonly [string, string];

const languageNeutralProjects: ProjectData = {
  projectGroups: [
    {
      title: 'Haskell',
      projects: [
        {
          title: 'Haskell Language Server',
          link: 'https://github.com/haskell/haskell-language-server',
          images: [
            [
              'HLS logo',
              'https://raw.githubusercontent.com/haskell/haskell-language-server/master/docs/logos/logo-128.png',
            ],
            [
              'HLS hackage version',
              'https://img.shields.io/hackage/v/haskell-language-server.svg?logo=haskell',
            ],
            [
              'HLS license',
              'https://img.shields.io/badge/license-Apache2-green.svg?dummy',
            ],
            [
              'HLS CI status',
              'https://img.shields.io/circleci/project/github/haskell/haskell-language-server/master.svg',
            ],
          ],
        },
        {
          title: 'Adjoint Metaprogramming Prototype Implementation',
          link: 'https://github.com/Ailrun/adjoint-meta-impl',
          images: [],
        },
        {
          title: 'SATyros - Step-by-step SAT/SMT solver',
          link: 'https://github.com/Ailrun/satyros',
          images: [],
        },
        {
          title: 'Lambda cube',
          link: 'https://github.com/Ailrun/lambda-cube',
          images: [],
        },
        // {
        //   title: 'CUTE Lang',
        //   link: 'https://github.com/CUTE-Lang',
        //   images: [
        //     [
        //       'CUTE Lang logo',
        //       'https://avatars0.githubusercontent.com/u/17797042?v=3&s=200',
        //     ],
        //   ],
        // },
        {
          title: 'Htaut',
          link: 'https://github.com/Ailrun/Htaut',
          images: [
            [
              'The lastest version of Htaut in Hackage',
              'https://img.shields.io/hackage/v/htaut.svg?maxAge=2592000',
            ],
          ],
        },
        {
          title: 'LambdaDB',
          link: 'https://github.com/Ailrun/LambdaDB',
          images: [
            [
              'The lastest version of LambdaDB in Hackage',
              'https://img.shields.io/hackage/v/LambdaDB.svg?maxAge=2592000',
            ],
          ],
        },
      ],
    },
    {
      title: 'Coq',
      projects: [
        {
          title: 'McTT - Mechanized Type Theory',
          link: 'https://github.com/Beluga-lang/McLTT',
          images: [],
        },
      ],
    },
    {
      title: 'Agda',
      projects: [
        {
          title: 'MINT - Modal INtuitionistic Type theory',
          link: 'https://hustmphrrr.github.io/Kripke-style/index.html',
          images: [],
        },
        {
          title: 'Adjoint logic mechanization',
          link: 'https://github.com/Ailrun/elevator-artifacts',
          images: [],
        },
      ],
    },
    {
      title: 'Emacs',
      projects: [
        {
          title: 'Yet Another Emacs Settings',
          link: 'https://github.com/Ailrun/yet-another-emacs-settings',
          images: [],
        },
        {
          title: 'Emacs Retrie',
          link: 'https://github.com/Ailrun/emacs-retrie',
          images: [],
        },
        {
          title: 'Magit LFS',
          link: 'https://github.com/Ailrun/magit-lfs',
          images: [],
        },
        {
          title: 'Coq Commenter',
          link: 'https://github.com/Ailrun/coq-commenter',
          images: [],
        },
      ],
    },
    {
      title: 'Others',
      projects: [
        {
          title: 'Emotion JS',
          link: 'https://github.com/emotion-js/emotion',
          images: [
            ['npm version', 'https://badge.fury.io/js/emotion.svg'],
            ['Build Status', 'https://img.shields.io/circleci/project/github/emotion-js/emotion/main.svg'],
          ],
        },
        {
          title: 'TSdux',
          link: 'https://github.com/Ailrun/tsdux',
          images: [
            ['npm latest version', 'https://img.shields.io/npm/v/tsdux/latest.svg'],
            ['codecov coverage', 'https://img.shields.io/codecov/c/github/ailrun/tsdux.svg'],
          ],
        },
        {
          title: 'TSdux Observable',
          link: 'https://github.com/Ailrun/tsdux-observable',
          images: [
            ['npm latest version', 'https://img.shields.io/npm/v/tsdux-observable/latest.svg'],
            ['codecov coverage', 'https://img.shields.io/codecov/c/github/ailrun/tsdux-observable.svg'],
          ],
        },
      ],
    },
    {
      title: 'Study',
      projects: [
        {
          title: 'Core lang in Haskell',
          link: 'https://github.com/Ailrun/core-lang-haskell',
          images: [],
        },
        {
          title: 'TRPL',
          link: 'https://github.com/Ailrun/TRPL-study',
          images: [],
        },
        {
          title: 'Programming in Haskell',
          link: 'https://github.com/Ailrun/Programming_in_Haskell',
          images: [],
        },
        {
          title: 'Elevator2way7floor',
          link: 'https://github.com/Ailrun/Elevator2way7floor',
          images: [],
        },
        {
          title: 'LD 8bit Microprocessor',
          link: 'https://github.com/Ailrun/LD_8bit_Microprocessor',
          images: [],
        },
      ],
    },
  ],
};

const dataProjects = {
  [Language.KO]: languageNeutralProjects,
  [Language.EN]: languageNeutralProjects,
};
export default dataProjects;
