import 'katex/dist/katex.min.css';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

import NavigationBar from '../NavigationBar';
import Post from '../Post';
import type { PostInfo } from '../Post';
// import SEO from '../SEO';

const PostTemplate: React.FC<PropsWithChildren> = (props) => {
  const pageContext = usePageContext();

  if (pageContext.config.metadata === undefined) {
    throw Error("A Critical Bug!");
  }

  const post: PostInfo = {
    title: pageContext.config.metadata.title,
    date: pageContext.config.metadata.date,
    postPath: pageContext.urlPathname,
    draft: pageContext.urlPathname.startsWith('draft'),
  };

  return (
    <>
      <NavigationBar />
      <PostWrapper>
        <Post
          disqusShortname={import.meta.env.PUBLIC_ENV__DISQUS_NAME}
          postInfo={post}
          {...props}
        />
      </PostWrapper>
    </>
  );
};
export default PostTemplate;

// export const Head: React.FC<HeadProps<Queries.PostInformationFragment & Queries.SEOInformationFragment>> = ({ data }) => {
//   const language = useLanguage();
//   const post = refineData(data);

//   return (
//     <SEO
//       title={post.title}
//       description={(data.markdownPost!.parent as Queries.MarkdownRemark).excerpt!}
//       pathname={post.postPath}
//       og={{
//         type: 'article',
//         additional: {
//           author: `https://ailrun.github.io/${language}/about`,
//           published_time: post.date,
//           section: 'Science',
//         },
//       }}
//       data={data}
//     />
//   );
// };

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
