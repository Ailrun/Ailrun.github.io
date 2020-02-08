import { useEffect, useRef, useState } from 'react';

const useTimer = (initialTime: number): number => {
  const [time, setTime] = useState(initialTime);
  const timeoutKey = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (time !== 0) {
      timeoutKey.current = setTimeout(() => {
        timeoutKey.current = null;
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return (): void => {
      if (timeoutKey.current != null) {
        clearTimeout(timeoutKey.current);
      }
    };
  }, [time])

  return time;
};
export default useTimer;
