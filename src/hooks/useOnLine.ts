import { useEffect, useState } from 'react';

const useOnLine = (): boolean => {
  const [isOnline, setIsOnline] = useState(() => {
    if (typeof navigator === 'undefined') {
      return false;
    }

    return navigator.onLine;
  });

  useEffect(() => {
    function toOnline(): void {
      setIsOnline(true);
    }

    function toOffline(): void {
      setIsOnline(false);
    }

    window.addEventListener('online', toOnline);
    window.addEventListener('offline', toOffline);

    return (): void => {
      window.removeEventListener('online', toOnline);
      window.removeEventListener('offline', toOffline);
    };
  }, []);

  return isOnline;
};
export default useOnLine;
