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
      <PublicationYearList pubYears={data.pubYears} />
    </>
  );
};
export default PublicationsPage;

export const Head: React.FC<HeadProps<Queries.SEOInformationFragment>> = ({ location, data }) => {
  const language = locationToLanguage(location);

  return (
    <SEO
      title='Projects'
      description='List of Posts in VoV'
      pathname={`/${language}/projects`}
      data={data}
    />
  );
};

type PublicationPerYear = typeof dataPublications[Language.KO]['pubYears'][0];
type Publication = PublicationPerYear['publications'][0];

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

const PublicationYearListRoot = styled.main({
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
        publication.authors.map((author) => (
          <PublicationAuthor key={author.first + ' ' + author.last} author={author} />
        ))
      }
      {`. (${year}). `}
      <PublicationTitle id={publication.doi ? publication.doi : publication.title}>{publication.title}</PublicationTitle>
      {'. In '}
      {
        publication.editors === undefined
          ? []
          : publication.editors.map((editor) => (
            <PublicationAuthor key={editor.first + ' ' + editor.last} author={editor} />
          ))
      }
      {publication.editors === undefined ? '' : '(Eds.), '}
      <PublicationVenue>{publication.venue}</PublicationVenue>
      {'. '}
      {
        publication.url === undefined
          ? []
          : (
            <PublicationUrl href={publication.url}>{publication.url}</PublicationUrl>
          )
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
