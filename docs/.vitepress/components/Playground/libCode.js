
// note: the absolute URLs here are important, because if they were relative,
// they would return an invalid response when navigating from another page due to a vue bug.

export const decLibSrc = await (await fetch('/playground/KeyframeKit/dist/KeyframeKit.d.ts')).text();

const jsLibSrc = await (await fetch('/playground/KeyframeKit/dist/KeyframeKit.js')).text();

export const libImportMap = `
<script type="importmap">
{
  "imports": {
    "keyframekit": "data:text/javascript;base64,${btoa(jsLibSrc)}"
  }
}
</script>
`;
