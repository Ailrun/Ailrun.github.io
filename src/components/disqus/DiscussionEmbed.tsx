import React, { useEffect } from 'react';

export interface Props {
  readonly shortname: string;
  readonly url: string;
  readonly identifier: string;
  readonly title: string;
  onNewComment?(comment: { readonly id: string; readonly text: string }): void;
}
const DiscussionEmbed: React.FC<Props> = ({ shortname, url, identifier, title, onNewComment }) => {
  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
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

    return (): void => {

      window.document.body.removeChild(script);
      (window as any).DISQUS?.reset({});

      try {
        delete (window as any).DISQUS;
      } catch {
        (window as any).DISQUS = undefined;
      }

      /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
      const disqusThread = window.document.getElementById('disqus_thread')!;

      while (disqusThread.hasChildNodes()) {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        disqusThread.removeChild(disqusThread.firstChild!);
      }
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, [shortname, url, identifier, title, onNewComment]);

  return (
    <div id='disqus_thread' />
  );
};
export default DiscussionEmbed;
