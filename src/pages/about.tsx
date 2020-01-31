import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';

const AboutPage: React.FC<unknown> = () => {
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <NavigationBar />
      <section className='ailrun-blog-about-page'>
        <Title />
        <Subjects subjects={data.json.subjects} />
      </section>
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

const Title: React.FC<unknown> = () => {
  return (
    <section className='ailrun-blog-page-title'>
      <img src='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about.png' />
      <header>
        <h1>About</h1>
      </header>
    </section>
  );
};

const Subjects: React.FC<any> = ({ subjects }) => {
  return (
    <section className='ailrun-blog-page-main'>
      <h2>Junyoung Clare Jang</h2>
      <div className='ailrun-blog-align-left'>
      {
        subjects.map((subject: any, i: number) => (
          <Subject key={i} {...{ subject }} />
        ))
      }
      </div>
      <div className='ailrun-blog-align-right'>
        <img src='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about-profile.png' />
        <h3>Clare with cups of beer</h3>
      </div>
    </section>
  );
};

const Subject: React.FC<any> = ({ subject }) => {
  return (
    <article>
      <h3>{subject.title}</h3>
      <p>
        <ul>
          {
            subject.entries.map((entry: any, i: number) => (
              <Entry key={i} {...{ entry }} />
            ))
          }
        </ul>
      </p>
    </article>
  );
};

const Entry: React.FC<any> = ({ entry }) => {
  return (
    <li>
      - {entry}
    </li>
  );
};
