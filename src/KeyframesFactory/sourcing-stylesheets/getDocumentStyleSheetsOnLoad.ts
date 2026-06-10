
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

  const isLoaded = () => (document.readyState === 'complete');

  if (isLoaded()) return;

  const { promise, signal, abort } = abortablePromise();

  // 'signal' removes listener after abortion
  document.addEventListener('readystatechange', () => {
    if (isLoaded()) abort();
  }, { signal });

  await promise;

}

function abortablePromise() {

  const abortController = new AbortController(),
        signal = abortController.signal,
        abort = abortController.abort.bind(abortController);

  const { promise, resolve } = Promise.withResolvers<typeof signal.reason>();

  signal.addEventListener(
    'abort', () => resolve(signal.reason), { once: true }
  );

  return { promise, signal, abort };

}
