import styled from '@emotion/styled';
import { PageRendererProps, navigate } from 'gatsby';
import React, { useEffect } from 'react';

import useTimer from '../../hooks/useTimer';
import SEO from '../SEO';

const Page404: React.FC<PageRendererProps> = () => {
  const timeLeft = useTimer(30);
  const isDone = timeLeft === 0;

  useEffect(() => {
    if (isDone) {
      navigate('/', {
        replace: true,
      })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [isDone]);

  return (
    <>
      <SEO
        title='Page Not Found'
        description='The page is not found. Please check your URL.'
        pathname='/404.html'
      />
      <main>
        <h1>404: Not Found!</h1>
        <p>Your tab will be redirected to the index page within <Time>{timeLeft}</Time> seconds...</p>
      </main>
    </>
  );
};
export default Page404;

const Time = styled.span({
  fontWeight: 'bold',
});
