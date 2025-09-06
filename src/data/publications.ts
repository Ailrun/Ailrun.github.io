import { Language } from '../utils/languages';

interface PublicationsData {
  readonly peerJournalPubs: PublicationsPerYear[];
  readonly peerConfPubs: PublicationsPerYear[];
  readonly nonPeerPubs: PublicationsPerYear[];
}
interface PublicationsPerYear {
  readonly year: number;
  readonly publications: readonly Publication[];
}
interface Publication {
  readonly authors: Name[];
  readonly title: string;
  readonly editors?: Name[];
  readonly venue: string;
  readonly url?: string;
  readonly doi?: string;
  readonly note?: string;
}
interface Name {
  readonly first: string;
  readonly last: string;
}

const JunyoungJang : Name = {
  first: 'Junyoung',
  last: 'Jang',
};

const BrigittePientka : Name = {
  first: 'Brigitte',
  last: 'Pientka',
};

const FrankPfenning : Name = {
  first: 'Frank',
  last: 'Pfenning',
};

const JasonHu : Name = {
  first: 'Jason Z. S.',
  last: 'Hu',
};

const SophiaRoshal : Name = {
  first: 'Sophia',
  last: 'Roshal',
};

const AntoineGaulin : Name = {
  first: 'Antoine',
  last: 'Gaulin',
};

const publications: PublicationsData = {
  peerJournalPubs: [
    {
      year: 2025,
      publications: [
        {
          authors: [
            JunyoungJang,
            AntoineGaulin,
            JasonHu,
            BrigittePientka,
          ],
          title: 'McTT: A Verified Kernel for a Proof Assistant',
          venue: 'Proceedings of the ACM on Programming Languages, Volume 9, Issue ICFP',
          url: 'https://doi.org/10.1145/3747511',
          doi: '10.1145/3747511',
        },
      ],
    },

    {
      year: 2023,
      publications: [
        {
          authors: [
            JasonHu,
            JunyoungJang,
            BrigittePientka,
          ],
          title: 'Normalization by Evaluation for Modal Dependent Type Theory',
          venue: 'Journal of Functional Programming (JFP) 33, E7',
          url: 'https://doi.org/10.1017/S0956796823000060',
          doi: '10.1017/S0956796823000060',
        },
      ],
    },

    {
      year: 2022,
      publications: [
        {
          authors: [
            JunyoungJang,
            {
              first: 'Samuel',
              last: 'Gélineau',
            },
            {
              first: 'Stefan',
              last: 'Monnier',
            },
            BrigittePientka,
          ],
          title: 'Mœbius: Metaprogramming Using Contextual Types: The Stage where System F can Pattern Match on Itself',
          venue: 'Proceedings of the ACM on Programming Languages, Volume 6, Issue POPL',
          url: 'https://doi.org/10.1145/3498700',
          doi: '10.1145/3498700',
        },
      ],
    },
  ],

  peerConfPubs: [
    {
      year: 2025,
      publications: [
        {
          authors: [
            {
              first: 'Aleks',
              last: 'Chakarov',
            },
            {
              first: 'Jaco',
              last: 'Geldenhuys',
            },
            {
              first: 'Matthew',
              last: 'Heck',
            },
            {
              first: 'Michael',
              last: 'Hicks',
            },
            {
              first: 'Sam',
              last: 'Huang',
            },
            {
              first: 'Georges-Axel',
              last: 'Jaloyan',
            },
            {
              first: 'Anjali',
              last: 'Joshi',
            },
            {
              first: 'K. Rustan M.',
              last: 'Leino',
            },
            {
              first: 'Mikael',
              last: 'Mayer',
            },
            {
              first: 'Sean',
              last: 'McLaughlin',
            },
            {
              first: 'Akhilesh',
              last: 'Mritunjai',
            },
            {
              first: 'Clement',
              last: 'Pit-Claudel',
            },
            {
              first: 'Sorawee',
              last: 'Porncharoenwase',
            },
            {
              first: 'Florian',
              last: 'Rabe',
            },
            {
              first: 'Marianna',
              last: 'Rapoport',
            },
            {
              first: 'Giles',
              last: 'Reger',
            },
            {
              first: 'Cody',
              last: 'Roux',
            },
            {
              first: 'Neha',
              last: 'Rungta',
            },
            {
              first: 'Robin',
              last: 'Salkeld',
            },
            {
              first: 'Matthias',
              last: 'Schlaipfer',
            },
            {
              first: 'Daniel',
              last: 'Schoepe',
            },
            {
              first: 'Johanna',
              last: 'Schwartzentruber',
            },
            {
              first: 'Serdar',
              last: 'Tasiran',
            },
            {
              first: 'Aaron',
              last: 'Tomb',
            },
            {
              first: 'Emina',
              last: 'Torlak',
            },
            {
              first: 'Jean-Baptiste',
              last: 'Tristan',
            },
            {
              first: 'Lucas',
              last: 'Wagner',
            },
            {
              first: 'Michael',
              last: 'Whalen',
            },
            {
              first: 'Remy',
              last: 'Willems',
            },
            {
              first: 'Tongtong',
              last: 'Xiang',
            },
            {
              first: 'Taejoon',
              last: 'Byun',
            },
            {
              first: 'Joshua',
              last: 'Cohen',
            },
            {
              first: 'Ruijie',
              last: 'Fang',
            },
            JunyoungJang,
            {
              first: 'Jakob',
              last: 'Rath',
            },
            {
              first: 'Hira',
              last: 'Taqdees Syeda',
            },
            {
              first: 'Dominik',
              last: 'Wagner',
            },
            {
              first: 'Yongwei',
              last: 'Yuan',
            },
          ],
          title: 'Formally Verified Cloud-Scale Authorization',
          venue: 'International Conference on Software Engineering (ICSE 25)',
          url: 'https://doi.org/10.1109/ICSE55347.2025.00166',
          doi: '10.1109/ICSE55347.2025.00166',
          note: 'Amazon authors and external authors are separately sorted lexicographically on their last names.'
        },
      ],
    },

    {
      year: 2024,
      publications: [
        {
          authors: [
            JunyoungJang,
            SophiaRoshal,
            FrankPfenning,
            BrigittePientka,
          ],
          title: 'Adjoint Natural Deduction',
          venue: 'Formal Structures for Computation and Deduction (FSCD 24)',
          url: 'https://doi.org/10.4230/LIPIcs.FSCD.2024.15',
          doi: '10.4230/LIPIcs.FSCD.2024.15',
        },
      ],
    },

    {
      year: 2021,
      publications: [
        {
          authors: [
            {
              first: 'Jacob',
              last: 'Errington',
            },
            JunyoungJang,
            BrigittePientka,
          ],
          title: 'Harpoon: Mechanizing Metatheory Interactively (System Description)',
          editors: [
            {
              first: 'André',
              last: 'Platzer',
            },
            {
              first: 'Geoff',
              last: 'Sutcliffe',
            },
          ],
          venue: 'Automated Deduction - CADE 28',
          url: 'https://doi.org/10.1007/978-3-030-79876-5_38',
          doi: '10.1007/978-3-030-79876-5_38',
        },
      ],
    },
  ],

  nonPeerPubs: [
    {
      year: 2024,
      publications: [
        {
          authors: [
            JunyoungJang,
            SophiaRoshal,
            FrankPfenning,
            BrigittePientka,
          ],
          title: 'Adjoint Natural Deduction (Extended Version)',
          venue: 'arXiv',
          url: 'https://doi.org/10.48550/arXiv.2402.01428',
          doi: '10.48550/arXiv.2402.01428',
        },
      ],
    },

    {
      year: 2021,
      publications: [
        {
          authors: [
            {
              first: 'Hanwen',
              last: 'Zhu',
            },
            JunyoungJang,
            {
              first: 'Xujie',
              last: 'Si',
            },
          ],
          title: 'XCheck: a Simple, Effective and Extensible Bug Finder using micro-grammar',
          venue: 'arXiv',
          url: 'https://doi.org/10.48550/arXiv.2112.08010',
          doi: '10.48550/arXiv.2112.08010',
        },
        {
          authors: [
            JunyoungJang,
            {
              first: 'Samuel',
              last: 'Gélineau',
            },
            {
              first: 'Stefan',
              last: 'Monnier',
            },
            BrigittePientka,
          ],
          title: 'Moebius: Metaprogramming using Contextual Types -- The stage where System F can pattern match on itself (Long Version)',
          venue: 'arXiv',
          url: 'https://doi.org/10.48550/arXiv.2111.08099',
          doi: '10.48550/arXiv.2111.08099',
        },
      ],
    },
  ],
};

const dataPublications = {
  [Language.KO]: publications,
  [Language.EN]: publications,
};
export default dataPublications;
