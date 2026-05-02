
import { StyleSheetImportError } from '../errors';


/**
 * Imports a stylesheet from a URL.
 * @param url The URL of the stylesheet to import.
 * @throws
 *  - {@linkcode StyleSheetImportError} &nbsp;
 *    - Thrown if the stylesheet could not be imported.
 * @remarks
 *  Note: `@import` rules won't be resolved in imported stylesheets.
 *  [See more.](https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418)
 * @group Sourcing Stylesheets
 */
export async function importStyleSheet(url: string) {

  const resp = await fetch(url);

  if (!resp.ok) {
    throw new StyleSheetImportError();
  }

  const respText = await resp.text();

  // remove file name from URL to get base URL
  const baseURL = url.split('/').slice(0, -1).join('/');

  const styleSheet = new CSSStyleSheet({
    baseURL: baseURL
  });

  await styleSheet.replace(respText);

  return styleSheet;

}
