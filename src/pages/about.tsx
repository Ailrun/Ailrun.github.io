import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const AboutPage: React.FC<unknown> = () => {
  const data = useStaticQuery<any>(query);

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

const Info: React.FC<any> = ({ subjects }) => {
  return (
    <InfoWrapper>
      <Owner>Junyoung Clare Jang</Owner>
      <SubjectList>
      {
        subjects.map((subject: any, i: number) => (
          <Subject key={i} {...{ subject }} />
        ))
      }
      </SubjectList>
      <OwnerProfile>
        <img src='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about-profile.png' />
        <h3>Clare with a few cups of beer</h3>
      </OwnerProfile>
    </InfoWrapper>
  );
};

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

const SubjectList = styled.div({
  display: 'inline-block',

  width: '60%',
});

const OwnerProfile = styled.div({
  margin: 0,
  float: 'right',

  width: '30%',

  img: {
    width: '100%',
  },

  h3: {
    width: '100%',

    textAlign: 'center',
    fontWeight: 'normal',
  }
});

const Subject: React.FC<any> = ({ subject }) => {
  return (
    <SubjectWrapper>
      <SubjectTitle>{subject.title}</SubjectTitle>
      <p>
        <SubjectEntryList>
          {
            subject.entries.map((entry: any, i: number) => (
              <SubjectEntry key={i}>- {entry}</SubjectEntry>
            ))
          }
        </SubjectEntryList>
      </p>
    </SubjectWrapper>
  );
};

const SubjectWrapper = styled.article({
  paddingTop: '1vw',
  paddingLeft: '1em',
});

const SubjectTitle = styled.h3({
  fontSize: C.fontHugeSize,
});

const SubjectEntryList = styled.ul({
  textIndent: '-0.5em',
  listStyleType: 'none',
});

const SubjectEntry = styled.li({
  paddingLeft: '1em',

  fontSize: C.fontLargeSize,
});
