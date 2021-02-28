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
          title: 'CUTE Lang',
          link: 'https://github.com/CUTE-Lang',
          images: [
            [
              'CUTE Lang logo',
              'https://avatars0.githubusercontent.com/u/17797042?v=3&s=200',
            ],
          ],
        },
        {
          title: 'Htaut',
          link: 'https://github.com/Ailrun/Htaut',
          images: [
            [
              'Travis CI status for Htaut',
              'https://travis-ci.org/Ailrun/Htaut.svg',
            ],
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
              'Travis CI status for LambdaDB',
              'https://travis-ci.org/Ailrun/LambdaDB.svg?branch=v0.0.0.6',
            ],
            [
              'The lastest version of LambdaDB in Hackage',
              'https://img.shields.io/hackage/v/LambdaDB.svg?maxAge=2592000',
            ],
          ],
        },
      ],
    },
    {
      title: 'Emacs',
      projects: [
        {
          title: 'yet-another-emacs-settings',
          link: 'https://github.com/Ailrun/yet-another-emacs-settings',
          images: [],
        },
        {
          title: 'emacs-retrie',
          link: 'https://github.com/Ailrun/emacs-retrie',
          images: [],
        },
        {
          title: 'coq-commenter',
          link: 'https://github.com/Ailrun/coq-commenter',
          images: [],
        },
      ],
    },
    {
      title: 'Study',
      projects: [
        {
          title: 'core-lang-haskell',
          link: 'https://github.com/Ailrun/core-lang-haskell',
          images: [],
        },
        {
          title: 'TRPL-study',
          link: 'https://github.com/Ailrun/TRPL-study',
          images: [],
        },
        {
          title: 'Programming_in_Haskell',
          link: 'https://github.com/Ailrun/Programming_in_Haskell',
          images: [],
        },
        {
          title: 'StackCalc',
          link: 'https://github.com/Ailrun/StackCalc',
          images: [],
        },
        {
          title: 'BigInteger',
          link: 'https://github.com/Ailrun/BigInteger',
          images: [],
        },
        {
          title: 'Elevator2way7floor',
          link: 'https://github.com/Ailrun/Elevator2way7floor',
          images: [],
        },
        {
          title: 'LD_8bit_Microprocessor',
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
