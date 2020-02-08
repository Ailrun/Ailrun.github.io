import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import React from 'react';

import useTimer from '../hooks/useTimer';

const Page404: React.FC<unknown> = () => {
  const timeLeft = useTimer(5);

  if (timeLeft === 0) {
    navigate('/', {
      replace: true,
    });
  }

  return (
    <main>
      <h1>404: Not Found!</h1>
      <p>will be redirected to the index page within <Time>{timeLeft}</Time> seconds...</p>
    </main>
  );
};
export default Page404;

const Time = styled.span({
  fontWeight: 'bold',
});
