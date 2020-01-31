import styled from '@emotion/styled';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useMemo } from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';

interface Banner {
  readonly background: string;
  readonly description: string;
  readonly link: string;
  readonly linkTitle: string;
  readonly title: string;
}

const MainPage: React.FC<unknown> = () => {
  const data = useStaticQuery<{ json: { banners: Banner[]; }; }>(query);
  const banners = useMemo(() => {
    return data.json.banners.map((bannerData, i) => (
      <Banner key={i} {...{ bannerData, isLeft: i % 2 !== 0 }} />
    ));
  }, [data]);

  return (
    <Layout>
      <NavigationBar />
      <Wrapper>
        {banners}
      </Wrapper>
    </Layout>
  );
};
export default MainPage;

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

const Wrapper = styled.section({
  lineHeight: 1.3,
  color: C.textWhite,
});

interface BannerProps {
  bannerData: Banner;
  isLeft: boolean;
}

const Banner: React.FC<BannerProps> = ({ bannerData, isLeft }) => (
  <BannerWrapper>
    <BannerImage src={bannerData.background} />
    <BannerHeader {...{ isLeft }}>
      <div>
        <h3>{bannerData.title}</h3>
        <p>{bannerData.description}</p>
      </div>
    </BannerHeader>
    <BannerLink to={bannerData.link}>
      {bannerData.linkTitle + " >"}
    </BannerLink>
  </BannerWrapper>
);

const bannerHeight = 26;

const BannerWrapper = styled.article({
  position: 'relative',

  width: '100%',
  height: `${bannerHeight}vw`,

  backgroundColor: 'black',
});

const BannerImage = styled.img({
  position: 'absolute',

  width: 'inherit',
  height: 'inherit',
});

const BannerHeader = styled.header<{ isLeft: boolean }>({
  display: 'inline-block',
  position: 'absolute',
  top: '50%',
  bottom: '50%',

  marginTop: `${- bannerHeight / 2}vw`,

  height: `${bannerHeight}vw`,

  lineHeight: `${bannerHeight}vw`,

  div: {
    display: 'inline-block',

    verticalAlign: 'middle',
    lineHeight: 1.3,
  },

  h3: {
    fontSize: C.fontHugeSize,
  },

  p: {
    whiteSpace: 'pre-wrap',
    fontSize: C.fontLargeSize,
  },
}, ({ isLeft }) => ({
  left: isLeft ? '7%' : '73%',
}));

const BannerLink = styled(Link)({
  position: 'absolute',
  right: '2%',
  bottom: '1vw',

  color: 'inherit',
});
