import type { RenderBodyArgs } from 'gatsby';
import { languageToBCP47, locationToLanguage } from '../src/utils/languages';

const onRenderBody = ({ pathname, setHtmlAttributes }: RenderBodyArgs): void => {
  setHtmlAttributes({
    lang: languageToBCP47(locationToLanguage({ pathname })),
  });
};
export default onRenderBody;
