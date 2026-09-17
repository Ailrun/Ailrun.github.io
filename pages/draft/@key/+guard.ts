import { render } from 'vike/abort';
import type { PageContext } from 'vike/types';

export default async function guard(pageContext: PageContext) {
  if (pageContext.routeParams.key !== import.meta.env.PUBLIC_ENV__VIKE_DRAFT_PATH) {
    throw render(404);
  }
};
