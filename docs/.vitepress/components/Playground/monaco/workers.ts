// Wires up monaco's web workers (using Vite `?worker` imports).
// Importing this module registers the global MonacoEnvironment.

import EditorWorker from 'monaco-editor/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/language/typescript/ts.worker?worker'
import CssWorker from 'monaco-editor/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/language/html/html.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    switch (label) {
      case 'typescript':
      case 'javascript': return new TsWorker()
      case 'css': return new CssWorker()
      case 'html': return new HtmlWorker()
      default: return new EditorWorker()
    }
  }
}
