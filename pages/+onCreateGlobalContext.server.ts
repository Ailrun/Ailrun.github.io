import type { GlobalContext } from "vike/types";

import type { PostInfo } from "../src/components/PostList";

export async function onCreateGlobalContext(globalContext: GlobalContext) {
  const pages = globalContext.pages;
  globalContext.posts = Object.keys(pages).map((k): PostInfo | void => {
    const page = pages[k];
    const { frontmatter } = page.config;
    console.log(page.route, page.config);
    if (frontmatter !== undefined && !frontmatter.draft && page.route !== undefined) {
      const post = {
        title: frontmatter.title,
        date: frontmatter.date,
        url: String(page.route),
      };
      return post;
    }
  }).filter((v) => v !== undefined);
  console.log(globalContext.posts);
}
