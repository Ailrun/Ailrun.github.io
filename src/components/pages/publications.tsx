import styled from '@emotion/styled';
import type { PageRendererProps } from 'gatsby';
import React from 'react';

import dataPublications from '../../data/publications';
import useLanguage from '../../hooks/useLanguage';
import * as C from '../../styles/constants';
import type { Language } from '../../utils/languages';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';

const PublicationsPage: React.FC<PageRendererProps> = () => {
  const language = useLanguage();
  const data = dataPublications[language];

  return (
    <>
      <SEO
        title='Publications'
        description='List of Publications by Junyoung Jang'
        pathname={`/${language}/publications`}
      />
      <NavigationBar />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/publication.png'
        title='Publications'
      />
      <PublicationYearList years={data.years} />
    </>
  );
};
export default PublicationsPage;

type PublicationYear = typeof dataPublications[Language.KO]['years'][0];
type Publication = PublicationYear['publications'][0];

interface PublicationYearListProps {
  readonly years: readonly PublicationYear[];
}
const PublicationYearList: React.FC<PublicationYearListProps> = ({ years }) => {
  return (
    <PublicationYearListRoot>
      {
        years.map((year) => (
          <PublicationPerYearList key={year.year} {...{ year }} />
        ))
      }
    </PublicationYearListRoot>
  );
};

const PublicationYearListRoot = styled.main({
  margin: '3em auto',

  width: '80%',

  color: C.textLightBlack,
});

interface PublicationPerYearListProps {
  readonly year: PublicationYear;
}
const PublicationPerYearList: React.FC<PublicationPerYearListProps> = ({ year }) => {
  return (
    <PublicationPerYearListRoot>
      <PublicationPerYearListTitle>{year.year}</PublicationPerYearListTitle>
      {
        year.publications.map((publication) => (
          <Publication key={publication.title} {...{ publication }} />
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
  readonly publication: Publication;
}
const Publication: React.FC<PublicationProps> = ({ publication }) => {
  return (
    <PublicationRoot>
      {
        publication.authors.map((author) => (
          <PublicationAuthor key={author.first + ' ' + author.last} {...{ author }} />
        ))
      }
      {`. (${publication.year}). `}
      <PublicationTitle id={publication.doi}>{publication.title}</PublicationTitle>
      {'. In '}
      {
        publication.editors === undefined
          ? []
          : publication.editors.map((author) => (
            <PublicationAuthor key={author.first + ' ' + author.last} {...{ author }} />
          ))
      }
      {publication.editors === undefined ? '' : '(Eds.), '}
      <PublicationVenue>{publication.venue}</PublicationVenue>
      {'. '}
      <PublicationUrl href={publication.url}>{publication.url}</PublicationUrl>
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

interface PublicationAuthorProps {
  readonly author: Publication['authors'][0];
}
const PublicationAuthor: React.FC<PublicationAuthorProps> = ({ author }) => {
  if (author.first === 'Junyoung' && author.last === 'Jang') {
    return (
      <PublicationAuthorRoot style={{ fontWeight: 'bold' }}>
        {author.first} {author.last}
      </PublicationAuthorRoot>
    );
  } else {
    return (
      <PublicationAuthorRoot>
        {author.first} {author.last}
      </PublicationAuthorRoot>
    );
  }
};

const PublicationAuthorRoot = styled.span({
  '& + &::before': {
    content: '", "',
  },
});
