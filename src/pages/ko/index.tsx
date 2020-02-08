import styled from '@emotion/styled';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';

import { Language } from '../../languages';
import * as C from '../../styles/constants';
import Layout from '../../components/Layout';
import NavigationBar from '../../components/NavigationBar';

const IndexPage: React.FC<unknown> = () => {
  const data = useStaticQuery<Data>(query);

  return (
    <Layout>
      <NavigationBar language={Language.KO} />
      <Wrapper>
        {
          data.json.banners.map((bannerData, i) => (
            <Banner key={i} {...{ bannerData, isLeft: i % 2 !== 0 }} />
          ))
        }
      </Wrapper>
    </Layout>
  );
};
export default IndexPage;

interface Data {
  readonly json: {
    readonly banners: Banner[];
  };
}
interface Banner {
  readonly background: string;
  readonly description: string;
  readonly link: string;
  readonly linkTitle: string;
  readonly title: string;
}
const query = graphql`
  query {
    json: mainJson {
      banners {
        background
        description
        link
        linkTitle
        title
      }
    }
  }
`;

const Wrapper = styled.main({
  color: C.textWhite,
});

interface BannerProps {
  bannerData: Banner;
  isLeft: boolean;
}

const Banner: React.FC<BannerProps> = ({ bannerData, isLeft }) => (
  <BannerWrapper backgroundSrc={bannerData.background}>
    <BannerHeader {...{ isLeft }}>
      <hgroup>
        <BannerTitle>{bannerData.title}</BannerTitle>
        <BannerSubtitle>{bannerData.description}</BannerSubtitle>
      </hgroup>
    </BannerHeader>
    <BannerLink to={bannerData.link}>
      {bannerData.linkTitle + " >"}
    </BannerLink>
  </BannerWrapper>
);

interface BannerWrapperProps {
  readonly backgroundSrc: string;
}
const BannerWrapper = styled.article<BannerWrapperProps>({
  position: 'relative',

  width: '100%',
  height: '26vw',

  backgroundColor: 'black',
  backgroundSize: 'cover',
}, ({ backgroundSrc }) => ({
  backgroundImage: `url('${backgroundSrc}')`,
}));

const BannerHeader = styled.header<{ isLeft: boolean }>({
  display: 'flex',
  position: 'absolute',
  top: '50%',
  bottom: '50%',

  lineHeight: 1.3,

  alignItems: 'center',
}, ({ isLeft }) => ({
  left: isLeft ? '7%' : '73%',
}));

const BannerTitle = styled.h3({
  fontSize: C.fontHugeSize,
});

const BannerSubtitle = styled.h4({
  whiteSpace: 'pre-wrap',
  fontSize: C.fontLargeSize,
  fontWeight: 'normal',
});

const BannerLink = styled(Link)({
  position: 'absolute',
  right: '2em',
  bottom: '1em',

  fontSize: C.fontBaseSize,
});
