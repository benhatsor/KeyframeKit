// @ts-check

import { MarkdownThemeContext } from 'typedoc-plugin-markdown';
import { UnionType } from 'typedoc';

/// https://typedoc-plugin-markdown.org/docs/customization#hooks
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {

  app.renderer.markdownHooks.on('page.begin', (context) => {

    context.partials.unionType = (model) => { return unionType(context, model) };

    // console.log(context);

    return '';
    // return `**Generated using "page.begin" hook**`;

  });

}

/// https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/context/partials/type.union.ts
/**
 * @param {MarkdownThemeContext} thiss @param {UnionType} model @returns {string}
 */
function unionType(
  thiss,
  model,
) {
  // const useCodeBlocks = thiss.options.getValue('useCodeBlocks');
  const typesOut = model.types.map((unionType) =>
    thiss.partials.someType(unionType, { forceCollapse: true }),
  );
  /* const shouldFormat =
    useCodeBlocks &&
    (typesOut?.join('').length > 70 || typesOut?.join('').includes('\n')); */
  const md = typesOut.join(` \\| `); // typesOut.join(shouldFormat ? `\n  \\| ` : ` \\| `);
  // console.log(md);
  return md; // shouldFormat ? `\n  \\| ` + md : md;
}
