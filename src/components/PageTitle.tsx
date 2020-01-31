import React from 'react';

export interface Props {
  readonly imgSrc: string;
  readonly title: string;
}

const PageTitle: React.FC<Props> = ({ imgSrc, title }) => (
  <section className='ailrun-blog-page-title'>
    <img src={imgSrc} />
    <header>
      <h1>{title}</h1>
    </header>
  </section>
);
export default PageTitle;
