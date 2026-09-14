import type { GlobalContext } from "vike/types";

import type { PostInfo } from "../components/PostList";

export async function onCreateGlobalContext(globalContext: GlobalContext) {
  const pages = globalContext.pages;
  console.log("aaaaa");
  globalContext.posts = Object.keys(pages).map((k): PostInfo | void => {
    const page = pages[k];
    const { frontmatter } = page.config;
    if (frontmatter !== undefined && page.route !== undefined) {
      const post = {
        ...frontmatter,
        url: String(page.route),
      };
      return post;
    }
  }).filter((v) => v !== undefined);
  console.log(globalContext.posts);
}
