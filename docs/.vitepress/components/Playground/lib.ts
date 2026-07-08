/**
 * Loads the KeyframeKit build artifacts the playground needs: the
 * type declarations for the editor, and the library source as an
 * import map for the preview iframe.
 *
 * note: the absolute URLs here are important, because if they were relative,
 * they would return an invalid response when navigating from another page due to a vue bug.
 */
export async function fetchPlaygroundLib() {
  const [dtsSource, jsSource] = await Promise.all([
    fetch('/playground/KeyframeKit/dist/index.d.ts').then(res => res.text()),
    fetch('/playground/KeyframeKit/dist/index.js').then(res => res.text())
  ])

  const importMap = `
    <script type="importmap">
    {
      "imports": {
        "keyframekit": "data:text/javascript;base64,${btoa(jsSource)}"
      }
    }
    </script>
  `

  return { dtsSource, importMap }
}
