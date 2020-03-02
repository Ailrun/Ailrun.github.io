import styled from '@emotion/styled';
import { PageRendererProps, navigate } from 'gatsby';
import React from 'react';

import useTimer from '../../hooks/useTimer';
import SEO from '../SEO';

const Page404: React.FC<PageRendererProps> = ({ location }) => {
  const timeLeft = useTimer(30);

  console.log(location);

  if (timeLeft === 0) {
    navigate('/', {
      replace: true,
    });
  }

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
