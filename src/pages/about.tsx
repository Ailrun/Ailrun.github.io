import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as C from '../constants';
import FlexSpacer from '../components/FlexSpacer';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const AboutPage: React.FC<unknown> = () => {
  const data = useStaticQuery<Data>(query);

  return (
    <Layout>
      <NavigationBar />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about.png'
        title='About'
      />
      <main>
        <Info subjects={data.json.subjects} />
      </main>
    </Layout>
  );
};
export default AboutPage;

interface Data {
  readonly json: {
    readonly subjects: Subject[];
  };
}
interface Subject {
  readonly entries: string[];
  readonly title: string;
}
const query = graphql`
  query {
    json: aboutJson {
      subjects {
        entries
        title
      }
    }
  }
`;

interface InfoProps {
  readonly subjects: Subject[];
}
const Info: React.FC<InfoProps> = ({ subjects }) => (
  <InfoWrapper>
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
      <OwnerProfileCaption>Clare with a few cups of beer</OwnerProfileCaption>
    </OwnerProfile>
  </InfoWrapper>
);

const InfoWrapper = styled.article({
  display: 'flex',

  margin: '5vw 0',

  width: '100%',

  padding: '0 10%',

  color: C.textLightBlack,

  flexWrap: 'wrap',
});

const Owner = styled.h2({
  width: '100%',

  lineHeight: 2,
  fontWeight: 'bold',
  fontSize: C.fontGiantSize,
}, C.fontDancing);

const InfoSubjectList = styled.div({
  width: '60%',

  paddingTop: '1vw',
  paddingLeft: '1em',
});

const OwnerProfile = styled.figure({
  width: '30%',
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
  <InfoSubjectWrapper>
    <InfoSubjectTitle id={`about-${subject.title}`}>{subject.title}</InfoSubjectTitle>
    <InfoSubjectEntryList>
      {
        subject.entries.map((entry, i) => (
          <InfoSubjectEntry key={i}>{entry}</InfoSubjectEntry>
        ))
      }
    </InfoSubjectEntryList>
  </InfoSubjectWrapper>
);

const InfoSubjectWrapper = styled.figure({
  '& + &': {
    marginTop: '1vw',
  },
});

const InfoSubjectTitle = styled.figcaption({
  fontSize: C.fontHugeSize,
  fontWeight: 'bold',
});

const InfoSubjectEntryList = styled.ul({
  paddingLeft: '2em',

  listStyleType: '\'-\'',
});

const InfoSubjectEntry = styled.li({
  paddingLeft: '0.5em',

  fontSize: C.fontLargeSize,
});
