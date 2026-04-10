
/**
 * Gets a document's stylesheets when it loads,
 * or immediately returns them if it's already loaded.
 * @param obj
 *  @param obj.document The document to get stylesheets from.
 * @group Sourcing Stylesheets
 */
export async function getDocumentStyleSheetsOnLoad({ document = window.document }: {
  document?: Document
} = {}) {

  await waitForDocumentLoad({
    document: document
  });

  return document.styleSheets;

}

async function waitForDocumentLoad({ document }: {
  document: Document
}) {

  if (document.readyState === 'complete') {
    return;
  }

  const { promise, resolve } = Promise.withResolvers();

  function onReadyStateChange() {
    if (document.readyState === 'complete') {
      resolve(null);
    }
  }

  const listener = [
    'readystatechange',
    onReadyStateChange
  ] as const;

  document.addEventListener(...listener);

  await promise;

  document.removeEventListener(...listener);

}
