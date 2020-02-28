import styled from '@emotion/styled';
import { PageRendererProps } from 'gatsby';
import React from 'react';

import dataAbout from '../../data/about';
import * as C from '../../styles/constants';
import { Language, locationToLanguage } from '../../utils/languages';
import FlexSpacer from '../FlexSpacer';
import Layout from '../Layout';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';

const AboutPage: React.FC<PageRendererProps> = ({ location }) => {
  const language = locationToLanguage(location);
  const data = dataAbout[language];

  return (
    <Layout>
      <NavigationBar language={language} />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about.png'
        title='About'
      />
      <main>
        <Info
          ownerProfileCaption={data.ownerProfileCaption}
          subjects={data.subjects}
        />
      </main>
    </Layout>
  );
};
export default AboutPage;

type Subject = typeof dataAbout[Language.KO]['subjects'][0];

interface InfoProps {
  readonly ownerProfileCaption: string;
  readonly subjects: Subject[];
}
const Info: React.FC<InfoProps> = ({ ownerProfileCaption, subjects }) => (
  <InfoRoot>
    <Owner>Junyoung Clare Jang</Owner>
    <InfoSubjectList>
      {
        subjects.map((subject, i) => (
          <InfoSubject key={i} {...{ subject }} />
        ))
      }
    </InfoSubjectList>
    <FlexSpacer />
    <OwnerProfile>
      <OwnerProfileImage
        src='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about-profile.png'
      />
      <OwnerProfileCaption>{ownerProfileCaption}</OwnerProfileCaption>
    </OwnerProfile>
  </InfoRoot>
);

const InfoRoot = styled.article({
  display: 'flex',

  margin: '3em auto',

  width: '45%',

  color: C.textLightBlack,

  flexWrap: 'wrap',

  [C.mediaQueries[0]]: {
    width: '90%',

    flexDirection: 'column',

    alignItems: 'center',
  },
});

const Owner = styled.h2({
  width: '100%',

  lineHeight: 2,
  fontWeight: 'bold',
  fontSize: C.fontGiantSize,

  [C.mediaQueries[0]]: {
    display: 'inline',

    width: 'unset',
  },
}, C.fontDancing);

const InfoSubjectList = styled.div({
  width: '50%',

  paddingTop: '0.5em',
  paddingLeft: '1em',

  [C.mediaQueries[0]]: {
    width: '90%',

    order: 2,
  },
});

const OwnerProfile = styled.figure({
  width: '40%',

  [C.mediaQueries[0]]: {
    width: '60%',

    order: 1,
  },
});

const OwnerProfileImage = styled.img({
  width: '100%',

  pointerEvents: 'auto',
});

const OwnerProfileCaption = styled.figcaption({
  textAlign: 'center',
});

interface InfoSubjectProps {
  readonly subject: Subject;
}
const InfoSubject: React.FC<InfoSubjectProps> = ({ subject }) => (
  <InfoSubjectRoot>
    <InfoSubjectTitle id={`about-${subject.title}`}>{subject.title}</InfoSubjectTitle>
    <InfoSubjectEntryList>
      {
        subject.entries.map((entry, i) => (
          <InfoSubjectEntry key={i}>{entry}</InfoSubjectEntry>
        ))
      }
    </InfoSubjectEntryList>
  </InfoSubjectRoot>
);

const InfoSubjectRoot = styled.figure({
  '& + &': {
    marginTop: '1em',
  },
});

const InfoSubjectTitle = styled.figcaption({
  fontSize: C.fontLargeSize,
  fontWeight: 'bold',
});

const InfoSubjectEntryList = styled.ul({
  paddingLeft: '2em',

  listStyleType: '\'-\'',
});

const InfoSubjectEntry = styled.li({
  paddingLeft: '0.5em',

  fontSize: C.fontBaseSize,
});
