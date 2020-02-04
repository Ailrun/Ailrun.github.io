import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const AboutPage: React.FC<unknown> = () => {
  const data = useStaticQuery<Data>(query);

  return (
    <Layout>
      <NavigationBar />
      <PageTitle
        imgSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about.png'
        title='About'
      />
      <Info subjects={data.json.subjects} />
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
    <OwnerProfile>
      <img src='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about-profile.png' />
      <h3>Clare with a few cups of beer</h3>
    </OwnerProfile>
  </InfoWrapper>
);

const InfoWrapper = styled.section({
  margin: '5vw auto',

  width: '80%',

  color: C.textLightBlack,
});

const Owner = styled.h2({
  lineHeight: 2,

  ...C.fontDancing,
  fontWeight: 'bold',
  fontSize: C.fontGiantSize,
});

const InfoSubjectList = styled.div({
  display: 'inline-block',

  width: '60%',
});

const OwnerProfile = styled.div({
  margin: 0,
  float: 'right',

  width: '30%',

  img: {
    width: '100%',

    pointerEvents: 'auto',
  },

  h3: {
    width: '100%',

    textAlign: 'center',
    fontWeight: 'normal',
  }
});

interface InfoSubjectProps {
  readonly subject: Subject;
}
const InfoSubject: React.FC<InfoSubjectProps> = ({ subject }) => (
  <InfoSubjectWrapper>
    <InfoSubjectTitle>{subject.title}</InfoSubjectTitle>
    <InfoSubjectEntryList>
      {
        subject.entries.map((entry, i) => (
          <InfoSubjectEntry key={i}>- {entry}</InfoSubjectEntry>
        ))
      }
    </InfoSubjectEntryList>
  </InfoSubjectWrapper>
);

const InfoSubjectWrapper = styled.article({
  paddingTop: '1vw',
  paddingLeft: '1em',
});

const InfoSubjectTitle = styled.h3({
  fontSize: C.fontHugeSize,
});

const InfoSubjectEntryList = styled.ul({
  textIndent: '-0.5em',
  listStyleType: 'none',
});

const InfoSubjectEntry = styled.li({
  paddingLeft: '1em',

  fontSize: C.fontLargeSize,
});
