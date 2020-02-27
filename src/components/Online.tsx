import React, { useEffect, useState } from 'react';

export interface Props {
  readonly fallback?: React.ReactNode;
}
const Online: React.FC<Props> = ({ children, fallback = null }) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const toOnline = (): void => {
      setIsOnline(true);
    };

    const toOffline = (): void => {
      setIsOnline(false);
    };

    window.addEventListener('online', toOnline);
    window.addEventListener('offline', toOffline);

    return (): void => {
      window.removeEventListener('online', toOnline);
      window.removeEventListener('offline', toOffline);
    };
  }, [setIsOnline]);

  return (
    <>
      {
        isOnline ?
          children :
          fallback
      }
    </>
  );
};
export default Online;
