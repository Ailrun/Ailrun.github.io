import styled from '@emotion/styled';
import type { HeadProps, PageProps } from 'gatsby';
import React from 'react';

import dataPublications from '../../data/publications';
import useLanguage from '../../hooks/useLanguage';
import * as C from '../../styles/constants';
import { Language, locationToLanguage } from '../../utils/languages';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';

const PublicationsPage: React.FC<PageProps> = () => {
  const language = useLanguage();
  const data = dataPublications[language];

  return (
    <>
      <NavigationBar />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/publication.png'
        title='Publications'
      />
      <JournalPubs pubYears={data.peerJournalPubs} />
      <ConferencePubs pubYears={data.peerConfPubs} />
      <OtherPubs pubYears={data.nonPeerPubs} />
    </>
  );
};
export default PublicationsPage;

export const Head: React.FC<HeadProps<Queries.SEOInformationFragment>> = ({ location, data }) => {
  const language = locationToLanguage(location);

  return (
    <SEO
      title='Publications'
      description='Publication List of Junyoung/"Clare" Jang'
      pathname={`/${language}/publications`}
      data={data}
    />
  );
};

type PublicationPerYear = typeof dataPublications[Language.KO]['peerJournalPubs'][0];
type Publication = PublicationPerYear['publications'][0];

interface JournalPubsProps {
  readonly pubYears: readonly PublicationPerYear[];
}
const JournalPubs: React.FC<JournalPubsProps> = ({ pubYears }) => {
  return (
    <PublicationTypeRoot>
      <PublicationTypeTitle>Journal Publications</PublicationTypeTitle>
      <PublicationYearList pubYears={pubYears} />
    </PublicationTypeRoot>
  );
};

interface ConferencePubsProps {
  readonly pubYears: readonly PublicationPerYear[];
}
const ConferencePubs: React.FC<ConferencePubsProps> = ({ pubYears }) => {
  return (
    <PublicationTypeRoot>
      <PublicationTypeTitle>Conference Proceedings</PublicationTypeTitle>
      <PublicationYearList pubYears={pubYears} />
    </PublicationTypeRoot>
  );
};

interface OtherPubsProps {
  readonly pubYears: readonly PublicationPerYear[];
}
const OtherPubs: React.FC<OtherPubsProps> = ({ pubYears }) => {
  return (
    <PublicationTypeRoot>
      <PublicationTypeTitle>Other Publications</PublicationTypeTitle>
      <PublicationYearList pubYears={pubYears} />
    </PublicationTypeRoot>
  );
};

const PublicationTypeRoot = styled.section({
  margin: '3em auto',

  width: '80%',

  color: C.textLightBlack,
});

const PublicationTypeTitle = styled.h2({
  margin: '3em auto',

  width: '80%',

  color: C.textLightBlack,
});

interface PublicationYearListProps {
  readonly pubYears: readonly PublicationPerYear[];
}
const PublicationYearList: React.FC<PublicationYearListProps> = ({ pubYears }) => {
  return (
    <PublicationYearListRoot>
      {
        pubYears.map((pubYear) => (
          <PublicationPerYearList key={pubYear.year} pubYear={pubYear} />
        ))
      }
    </PublicationYearListRoot>
  );
};

const PublicationYearListRoot = styled.section({
  margin: '3em auto',

  width: '80%',

  color: C.textLightBlack,
});

interface PublicationPerYearListProps {
  readonly pubYear: PublicationPerYear;
}
const PublicationPerYearList: React.FC<PublicationPerYearListProps> = ({ pubYear: { year, publications } }) => {
  return (
    <PublicationPerYearListRoot>
      <PublicationPerYearListTitle>{year}</PublicationPerYearListTitle>
      {
        publications.map((publication) => (
          <Publication key={publication.title} year={year} publication={publication} />
        ))
      }
    </PublicationPerYearListRoot>
  );
};

const PublicationPerYearListRoot = styled.section({
  '& + &': {
    marginTop: '2em',
  },
});

const PublicationPerYearListTitle = styled.h3({
  marginBottom: '0.1em',

  fontSize: C.fontHugeSize,

  [C.mediaQueries[0]]: {
    fontSize: C.fontLargeSize,
  },
});

interface PublicationProps {
  readonly year: number;
  readonly publication: Publication;
}
const Publication: React.FC<PublicationProps> = ({ year, publication }) => {
  return (
    <PublicationRoot>
      {
        publication.authors.map((author, idx, arr) => (
          <PublicationAuthor key={author.first + ' ' + author.last} author={author} last={idx != 1 && idx == arr.length - 1} />
        ))
      }
      {`. (${year}). `}
      <PublicationTitle id={publication.doi ? publication.doi : publication.title}>{publication.title}</PublicationTitle>
      {'. In '}
      {
        publication.editors === undefined
          ? []
          : publication.editors.map((editor, idx, arr) => (
            <PublicationAuthor key={editor.first + ' ' + editor.last} author={editor} last={idx != 1 && idx == arr.length - 1} />
          ))
      }
      {publication.editors === undefined ? '' : '(Eds.), '}
      <PublicationVenue>{publication.venue}</PublicationVenue>
      {'.'}
      {
        publication.url === undefined
          ? []
          : [
            ' ',
            <PublicationUrl href={publication.url}>{publication.url}</PublicationUrl>,
          ]
      }
      {
        publication.note === undefined
          ? []
          : [
            '. Note: ',
            <PublicationNote>{publication.note}</PublicationNote>,
          ]
      }
    </PublicationRoot>
  );
};

const PublicationRoot = styled.article({
  marginLeft: '1em',

  fontSize: C.fontLargeSize,

  [C.mediaQueries[0]]: {
    fontSize: C.fontBaseSize,
  },

  '& + &': {
    marginTop: '1em',
  },
});

const PublicationTitle = styled.span();

const PublicationVenue = styled.span({
  fontStyle: 'italic',
});

const PublicationUrl = styled.a({
  color: 'blue',

  ':visited': {
    color: 'purple',
  },
});

const PublicationNote = styled.span();

interface PublicationAuthorProps {
  readonly author: Publication['authors'][0];
  readonly last: boolean;
}
const PublicationAuthor: React.FC<PublicationAuthorProps> = ({ author, last }) => {
  const style : React.CSSProperties | undefined = author.first === 'Junyoung' && author.last === 'Jang' ?
    { fontWeight: 'bold' } :
    undefined;
  const lastAuthorConnective : string = last ? 'and ' : '';

  return (
    <PublicationAuthorRoot style={style}>
      {lastAuthorConnective}{author.first} {author.last}
    </PublicationAuthorRoot>
  );
};

const PublicationAuthorRoot = styled.span({
  '& + &::before': {
    content: '", "',
  },
});
