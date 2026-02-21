import { ref, onMounted, onBeforeUnmount } from 'vue'
import { themes } from './themes.js'
import { editor } from 'monaco-editor'

const langMap = { HTML: 'html', CSS: 'css', JS: 'javascript' }

export function playground(props, previewFrame) {
  const tabs = ['JS', 'CSS', 'HTML']
  const activeTab = ref('JS')
  const code = ref({ HTML: props.initialHtml, CSS: props.initialCss, JS: props.initialJs })
  const libCode = ref({ decLibSrc: props.decLibSrc, libImportMap: props.libImportMap });
  const isLoaded = ref(false);

  const editorRefs = {}
  const editorInstances = {}

  const models = {}

  function setEditorRef(tab, el) {
    if (el) editorRefs[tab] = el
  }

  let updateTimer = null
  function scheduleUpdate() {
    if (updateTimer !== null) clearTimeout(updateTimer)
    updateTimer = setTimeout(updatePreview, 300)
  }

  function updatePreview() {

    if (!previewFrame.value) return;

    const doc = `
<!DOCTYPE html>
<html>
  <head>
    <base href="${window.location.href}">
    <style>${code.value.CSS}</style>
  </head>
  <body>
    ${code.value.HTML}
    ${libCode.value.libImportMap}
    <script type="module">${code.value.JS}<\/script>
  </body>
</html>`
    const blob = new Blob([doc], { type: 'text/html' })
    previewFrame.value.src = URL.createObjectURL(blob)
  }

  function addLibrary(monaco) {

    // validation settings
    monaco.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false
    });

    // compiler options
    monaco.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.typescript.ScriptTarget.ESNext,
      module: monaco.typescript.ModuleKind.ESNext,
      allowNonTsExtensions: true,
      allowImportingTsExtensions: true,
      paths: {
        "keyframekit": ["file:///KeyframeKit"]
      },
      baseUrl: './',
    });

    const decLibModel = createModel(
      libCode.value.decLibSrc,
      'typescript',
      'file:///KeyframeKit.d.ts',
      monaco
    );

  }

  function createModel(srcStr, language, uriStr, monaco) {

    const uri = monaco.Uri.parse(uriStr);

    const existing = monaco.editor.getModel(uri)

    if (existing) existing.dispose()

    const model = monaco.editor.createModel(srcStr, language, uri);

    models[uriStr] = model;

    return model;

  }

  function applyTheme(monaco) {
    const dark = document.documentElement.classList.contains('dark')
    monaco.editor.setTheme(dark ? 'vp-dark' : 'vp-light')
  }

  function watchTheme(monaco) {
    applyTheme(monaco)
    new MutationObserver(() => applyTheme(monaco))
      .observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  }

  onMounted(async () => {

    updatePreview()


    const monaco = await import('monaco-editor')

    const config = {
      fontSize: 16,
      fontFamily: 'var(--vp-font-family-mono)',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 20, bottom: 20 },
      automaticLayout: true,
      fixedOverflowWidgets: true,
      renderLineHighlightOnlyWhenFocus: true,
      tabSize: 2,
      lineNumbers: "off",
      scrollbar: {
        ignoreHorizontalScrollbarInContentHeight: true
      },
      lightbulb: {
        enabled: monaco.editor.ShowLightbulbIconMode.Off
      }
    };

    monaco.editor.defineTheme('vp-dark', themes.dark);
    monaco.editor.defineTheme('vp-light', themes.light);

    watchTheme(monaco);

    addLibrary(monaco);

    tabs.forEach(tab => {

      let instance;

      if (langMap[tab] === 'javascript') {

        // Mark as lang: typescript so we can see the full type annotations on hover,
        // but prefix the file with .js so as to not allow actual type annotations in the file's code.
        const mainModel = createModel(
          code.value[tab],
          'typescript',
          'file:///main.js',
          monaco
        );
        
        instance = monaco.editor.create(editorRefs[tab], {
          model: mainModel,
          ...config
        });

      } else {

        instance = monaco.editor.create(editorRefs[tab], {
          value: code.value[tab],
          language: langMap[tab],
          ...config
        })  

      }

      instance.onDidChangeModelContent(() => {
        code.value[tab] = instance.getValue()
        scheduleUpdate()
      })

      editorInstances[tab] = instance
      
    })


    isLoaded.value = true;

  })

  onBeforeUnmount(() => {

    Object.values(editorInstances).forEach(e => e.dispose())

    Object.values(models).forEach(e => e.dispose())

    if (updateTimer) clearTimeout(updateTimer)

  })

  return { tabs, activeTab, setEditorRef, isLoaded }
}