import { graphql, useStaticQuery } from 'gatsby';
import React, { useMemo } from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';

const MainPage: React.FC<unknown> = () => {
  const data = useStaticQuery<any>(query);
  const banners = useMemo(() => {
    return (data.json.banners as Array<any>).map((bannerData, i) => (
      <article key={i} className={bannerPositionClass(i)}>
        <img src={bannerData.background} />
        <header>
          <div>
            <h3>{bannerData.title}</h3>
            <p>{bannerData.description}</p>
          </div>
        </header>
        <a>{bannerData.linkTitle + " >"}</a>
      </article>
    ));
  }, [data]);

  return (
    <Layout>
      <NavigationBar />
      <section className='ailrun-blog-main-page'>
        {banners}
      </section>
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
        linkTitle
        title
      }
    }
  }
`;

const bannerPositionClass = (i: number) =>
  i % 2 == 0 ?
  'ailrun-blog-align-right' :
  'ailrun-blog-align-left';
