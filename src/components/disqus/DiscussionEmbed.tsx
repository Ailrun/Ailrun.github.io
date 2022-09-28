import React, { useEffect, useRef, useState } from 'react';

import { assert } from '../../utils/typeHelpers';

export interface Props {
  readonly shortname: string;
  readonly url: string;
  readonly identifier: string;
  readonly title: string;
  onNewComment?(comment: { readonly id: string; readonly text: string }): void;
}
const DiscussionEmbed: React.FC<Props> = ({ shortname, url, identifier, title, onNewComment }) => {
  const disqusThreadRef = useRef<HTMLDivElement>(null);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (!('onscroll' in window)) {
      /*
       * If scroll event is not supported,
       * just pretend this discussion has been viewed
       */
      return setViewed(true);
    }

    assert(disqusThreadRef.current);
    const lastDisqusThread = disqusThreadRef.current;

    function isDisqusThreadInScreen(): boolean {
      const disqusThreadBoundingRect = lastDisqusThread.getBoundingClientRect();

      return window.innerHeight * 2 > disqusThreadBoundingRect.top;
    }

    function handleScroll(): void {
      if (isDisqusThreadInScreen()) {
        window.removeEventListener('scroll', handleScroll);

        setViewed(true);
      }
    }

    if (isDisqusThreadInScreen()) {
      return setViewed(true);
    }

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!viewed) {
      return;
    }

    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
    (window as any).disqus_config = function (this: any): void {
      /* eslint-disable react/no-this-in-sfc */
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;

      this.callbacks.onNewComment =
        typeof onNewComment !== 'undefined' ?
          [onNewComment] :
          [];
      /* eslint-enable react/no-this-in-sfc */
    };
    (window as any).disqus_shortname = shortname;

    const script = window.document.createElement('script');
    script.async = true;
    script.src = `https://${shortname}.disqus.com/embed.js`;

    window.document.body.appendChild(script);

    assert(disqusThreadRef.current);
    const lastDisqusThread = disqusThreadRef.current;

    return (): void => {
      window.document.body.removeChild(script);
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
      (window as any).DISQUS?.reset({});

      try {
        delete (window as any).DISQUS;
      } catch {
        (window as any).DISQUS = undefined;
      }

      while (lastDisqusThread.hasChildNodes()) {
        assert(lastDisqusThread.firstChild);
        lastDisqusThread.removeChild(lastDisqusThread.firstChild);
      }
    };
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
  }, [viewed, shortname, url, identifier, title, onNewComment]);

  return (
    <div ref={disqusThreadRef} id='disqus_thread' />
  );
};
DiscussionEmbed.defaultProps = {
  onNewComment: undefined,
};
export default DiscussionEmbed;
