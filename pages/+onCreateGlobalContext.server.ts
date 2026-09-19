import type { GlobalContext } from "vike/types";

import type { PostInfo } from "../src/components/PostList";

export async function onCreateGlobalContext(globalContext: GlobalContext) {
  const pages = globalContext.pages;
  globalContext.posts =
    Object.keys(pages)
      .map((k): PostInfo | void => {
        const page = pages[k];
        const { metadata } = page.config;
        if (metadata !== undefined && !metadata.draft && page.route !== undefined) {
          const post = {
            title: metadata.title,
            date: metadata.date,
            excerpt: metadata.excerpt,
            url: String(page.route),
          };
          return post;
        }
      })
      .filter((v) => v !== undefined)
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};
