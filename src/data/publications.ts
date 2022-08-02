import { Language } from '../utils/languages';

interface PublicationsData {
  readonly years: PublicationsPerYear[];
}
interface PublicationsPerYear {
  readonly year: number;
  readonly publications: readonly Publication[];
}
interface Publication {
  readonly authors: Name[];
  readonly title: string;
  readonly year: number;
  readonly editors?: Name[];
  readonly venue: string;
  readonly url: string;
  readonly doi: string;
}
interface Name {
  readonly first: string;
  readonly last: string;
}

const JunyoungJang = {
  first: 'Junyoung',
  last: 'Jang',
};

const BrigittePientka = {
  first: 'Brigitte',
  last: 'Pientka',
};

const publications: PublicationsData = {
  years: [
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
          year: 2022,
          venue: 'Proceedings of the ACM on Programming Languages, Volume 6, Issue POPL',
          url: 'https://dl.acm.org/doi/abs/10.1145/3498700',
          doi: '10.1145/3498700',
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
          year: 2021,
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
          year: 2021,
          venue: 'arXiv',
          url: 'https://doi.org/10.48550/arXiv.2111.08099',
          doi: '10.48550/arXiv.2111.08099',
        },
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
          year: 2021,
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
};

const dataPublications = {
  [Language.KO]: publications,
  [Language.EN]: publications,
};
export default dataPublications;
