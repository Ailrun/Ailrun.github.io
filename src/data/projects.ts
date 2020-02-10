import { Language } from '../languages';

const languageNeutralProjects = {
  projectGroups: [
    {
      title: 'Haskell',
      projects: [
        {
          title: 'CUTE Lang',
          link: 'https://github.com/CUTE-Lang',
          images: [
            'https://avatars0.githubusercontent.com/u/17797042?v=3&s=200',
          ],
        },
        {
          title: 'Htaut',
          link: 'https://github.com/Ailrun/Htaut',
          images: [
            'https://travis-ci.org/Ailrun/Htaut.svg',
            'https://img.shields.io/hackage/v/htaut.svg?maxAge=2592000',
          ],
        },
        {
          title: 'LambdaDB',
          link: 'https://github.com/Ailrun/LambdaDB',
          images: [
            'https://img.shields.io/badge/stack->=1.1-blue.svg?style=flat',
            'https://img.shields.io/badge/status-alpha-orange.svg?style=flat',
            'https://img.shields.io/hackage/v/LambdaDB.svg',
            'https://travis-ci.org/Ailrun/LambdaDB.svg?branch=v0.0.0.6',
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
          images: [
            'https://img.shields.io/badge/Version-0.02.00-lightgrey.svg?style=flat',
            'https://img.shields.io/badge/Status-Alpha-yellow.svg?style=flat',
          ],
        },
        {
          title: 'coq-commenter',
          link: 'https://github.com/Ailrun/coq-commenter',
          images: [
            'https://melpa.org/packages/coq-commenter-badge.svg',
          ],
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
