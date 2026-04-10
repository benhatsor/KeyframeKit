// @ts-check

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions & { inheritNone?: boolean }}
 */
export default {
  "name": "KeyframeKit",
  
	"plugin": [
    "typedoc-plugin-markdown",
    "typedoc-plugin-mdn-links",
    "typedoc-plugin-no-inherit",
    "./typedoc/plugin-param-names.js",
    "./typedoc/plugin-markdown-mdn-links-fix.js",
    "./typedoc/plugin-markdown-see-also.js",
    //"typedoc-plugin-inline-sources",
    //"typedoc-plugin-remark",
    //"typedoc-github-wiki-theme",
    //"typedoc-plugin-missing-exports"
  ],

  "entryPoints": ["../src/index.ts"],
  "out": "docs/reference",

  "validation": {
    "notExported": false
  },

  //"excludeExternals": true,
  //"placeInternalsInOwningModule": true,

  "disableSources": true,
  
  //"flattenOutputFiles": false,

  "router": "member", // "module"

  "readme": "none",

  //"sidebar": {
    //"autoConfiguration": false,
    //"heading": "[KeyframeKit](../wiki)"
  //},

  /* "remarkPlugins": [
    ["remark-insert-headings", { "text": "Contents", "minHeadingCount": 1 }],
    ["remark-toc", { "maxDepth": 3, "tight": true }],
    //["remark-collapse", {"test": "Contents"}]
  ], */
  
  //"modulesFileName": "index", // KeyframeKit

  "entryFileName": "index",

  "expandParameters": true,
  "expandObjects": true,

  //"parametersFormat": "htmlTable",

  "useCodeBlocks": true,

  //"hidePageTitle": true,
  "hidePageHeader": true,

  //"namedParamName": "obj"

  "navigationJson": "docs/reference/navigation.json",
  "navigation": {
    "includeGroups": true,
    "includeCategories": true,
    "includeFolders": true,
  },

  "pageTitleTemplates": {
    "member": `<div class="subheader">{keyword} {kind}</div>{name}`
  },

  "groupOrder": ["Default Export", "Sourcing Stylesheets", "Parsing Stylesheet Keyframes", "Data Types", "Errors"],
  
  "inheritNone": true,

  //"pageTitleTemplates": {
    //"index": "Reference"
  //},

  //"hideBreadcrumbs": true
};
