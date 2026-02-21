export default {
  base: 'vs',
  inherit: true,
  rules: [
    // Comments
    { token: 'comment', foreground: '6a737d' },
    { token: 'comment.line', foreground: '6a737d' },
    { token: 'comment.block', foreground: '6a737d' },
    { token: 'comment.doc', foreground: '6a737d' },

    // Keywords & Storage (red)
    { token: 'keyword', foreground: 'd73a49' },
    { token: 'keyword.control', foreground: 'd73a49' },
    { token: 'keyword.operator', foreground: 'd73a49' },
    { token: 'keyword.other', foreground: 'd73a49' },
    { token: 'storage', foreground: 'd73a49' },
    { token: 'storage.type', foreground: 'd73a49' },
    { token: 'storage.modifier', foreground: 'd73a49' },

    // Types / Classes / Entities (purple)
    { token: 'entity.name', foreground: '6f42c1' },
    { token: 'entity.name.type', foreground: '6f42c1' },
    { token: 'entity.name.class', foreground: '6f42c1' },
    { token: 'entity.name.function', foreground: '6f42c1' },
    { token: 'entity.name.namespace', foreground: '6f42c1' },
    { token: 'entity.name.enum', foreground: '6f42c1' },
    { token: 'entity.name.module', foreground: '6f42c1' },
    { token: 'entity.other.inherited-class', foreground: '6f42c1' },
    { token: 'type', foreground: '6f42c1' },
    { token: 'type.identifier', foreground: '6f42c1' },

    // HTML/XML tags (green)
    { token: 'tag', foreground: '22863a' },
    { token: 'tag.html', foreground: '22863a' },
    { token: 'metatag', foreground: '22863a' },
    { token: 'metatag.html', foreground: '22863a' },

    // Tag attributes
    { token: 'attribute.name', foreground: '6f42c1' },
    { token: 'attribute.value', foreground: '032f62' },

    // Constants & Numbers (dark blue)
    { token: 'constant', foreground: '005cc5' },
    { token: 'constant.language', foreground: '005cc5' },
    { token: 'constant.numeric', foreground: '005cc5' },
    { token: 'constant.character', foreground: '005cc5' },
    { token: 'constant.other', foreground: '005cc5' },
    { token: 'number', foreground: '005cc5' },
    { token: 'number.float', foreground: '005cc5' },
    { token: 'number.hex', foreground: '005cc5' },
    { token: 'number.octal', foreground: '005cc5' },
    { token: 'number.binary', foreground: '005cc5' },
    { token: 'variable.language', foreground: '005cc5' },

    // Strings (dark navy)
    { token: 'string', foreground: '032f62' },
    { token: 'string.quoted', foreground: '032f62' },
    { token: 'string.template', foreground: '032f62' },
    { token: 'string.interpolated', foreground: '032f62' },

    // String escape sequences (green bold)
    { token: 'string.escape', foreground: '22863a', fontStyle: 'bold' },
    { token: 'constant.character.escape', foreground: '22863a', fontStyle: 'bold' },

    // Regex
    { token: 'regexp', foreground: '032f62' },
    { token: 'regexp.escape', foreground: '22863a', fontStyle: 'bold' },

    // Variables (orange)
    { token: 'variable', foreground: 'e36209' },
    { token: 'variable.name', foreground: 'e36209' },
    { token: 'variable.parameter', foreground: '24292e' },
    { token: 'variable.other', foreground: '24292e' },
    { token: 'identifier', foreground: '24292e' },
    { token: 'parameter', foreground: '24292e' },

    // Support / Built-ins (dark blue)
    { token: 'support', foreground: '005cc5' },
    { token: 'support.function', foreground: '005cc5' },
    { token: 'support.class', foreground: '005cc5' },
    { token: 'support.type', foreground: '005cc5' },
    { token: 'support.constant', foreground: '005cc5' },
    { token: 'support.variable', foreground: '005cc5' },

    // Decorators / Annotations
    { token: 'annotation', foreground: '6f42c1' },
    { token: 'decorator', foreground: '6f42c1' },

    // Operators & Punctuation
    { token: 'operator', foreground: 'd73a49' },
    { token: 'delimiter', foreground: '24292e' },
    { token: 'delimiter.bracket', foreground: '24292e' },
    { token: 'delimiter.parenthesis', foreground: '24292e' },
    { token: 'delimiter.square', foreground: '24292e' },
    { token: 'delimiter.curly', foreground: '24292e' },

    // CSS-specific
    { token: 'attribute.value.css', foreground: '032f62' },
    { token: 'attribute.value.number.css', foreground: '005cc5' },
    { token: 'attribute.value.unit.css', foreground: '005cc5' },
    { token: 'attribute.value.hex.css', foreground: '005cc5' },
    { token: 'selector', foreground: '6f42c1' },
    { token: 'selector.tag', foreground: '22863a' },
    { token: 'selector.class', foreground: '6f42c1' },
    { token: 'selector.id', foreground: '6f42c1' },
    { token: 'property', foreground: '005cc5' },
    { token: 'value', foreground: 'e36209' },
    { token: 'unit', foreground: '005cc5' },

    // Markdown
    { token: 'markup.heading', foreground: '005cc5', fontStyle: 'bold' },
    { token: 'markup.bold', foreground: '24292e', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: '24292e', fontStyle: 'italic' },
    { token: 'markup.underline', fontStyle: 'underline' },
    { token: 'markup.strikethrough', fontStyle: 'strikethrough' },
    { token: 'markup.inline.raw', foreground: '005cc5' },
    { token: 'markup.quote', foreground: '22863a' },
    { token: 'markup.list', foreground: 'e36209' },
    { token: 'markup.link', foreground: '032f62', fontStyle: 'underline' },

    // Diff
    { token: 'markup.inserted', foreground: '22863a' },
    { token: 'markup.deleted', foreground: 'b31d28' },
    { token: 'markup.changed', foreground: 'e36209' },

    // JSON
    { token: 'key', foreground: '005cc5' },

    // Invalid
    { token: 'invalid', foreground: 'b31d28', fontStyle: 'italic' },
    { token: 'invalid.deprecated', foreground: 'b31d28', fontStyle: 'italic' },

    // Default / Plain text
    { token: '', foreground: '24292e' },
  ],
  colors: {
    // Editor core
    'editor.foreground': '#24292e',
    'editor.background': '#ffffff',
    'editor.lineHighlightBackground': '#f6f8fa',
    'editor.selectionBackground': '#0366d625',
    'editor.inactiveSelectionBackground': '#0366d611',
    'editor.selectionHighlightBackground': '#34d05840',
    'editor.selectionHighlightBorder': '#34d05800',
    'editor.findMatchBackground': '#ffdf5d',
    'editor.findMatchHighlightBackground': '#ffdf5d66',
    'editor.wordHighlightBackground': '#34d05800',
    'editor.wordHighlightStrongBackground': '#34d05800',
    'editor.wordHighlightBorder': '#24943e99',
    'editor.wordHighlightStrongBorder': '#24943e50',
    'editor.linkedEditingBackground': '#0366d611',

    // Cursor & whitespace
    'editorCursor.foreground': '#044289',
    'editorWhitespace.foreground': '#d1d5da',
    'editorIndentGuide.background': '#eff2f6',
    'editorIndentGuide.activeBackground': '#d7dbe0',

    // Line numbers
    'editorLineNumber.foreground': '#1b1f234d',
    'editorLineNumber.activeForeground': '#24292e',

    // Bracket matching
    'editorBracketMatch.background': '#34d05840',
    'editorBracketMatch.border': '#34d05800',

    // Bracket pair colorization
    'editorBracketHighlight.foreground1': '#005cc5',
    'editorBracketHighlight.foreground2': '#e36209',
    'editorBracketHighlight.foreground3': '#5a32a3',
    'editorBracketHighlight.foreground4': '#005cc5',
    'editorBracketHighlight.foreground5': '#e36209',
    'editorBracketHighlight.foreground6': '#5a32a3',

    // Errors & warnings
    'editorError.foreground': '#cb2431',
    'editorWarning.foreground': '#f9c513',

    // Overview ruler
    'editorOverviewRuler.border': '#ffffff',

    // Gutter
    'editorGutter.modifiedBackground': '#2188ff',
    'editorGutter.addedBackground': '#28a745',
    'editorGutter.deletedBackground': '#d73a49',

    // Diff editor
    'diffEditor.insertedTextBackground': '#34d05822',
    'diffEditor.removedTextBackground': '#d73a4922',

    // Widgets
    /*
    'editorWidget.background': '#f6f8fa',
    'editorSuggestWidget.background': '#f6f8fa',
    'editorSuggestWidget.border': '#e1e4e8',
    'editorSuggestWidget.foreground': '#24292e',
    'editorSuggestWidget.selectedBackground': '#cce5ff',
    'editorSuggestWidget.highlightForeground': '#005cc5',
    'editorHoverWidget.background': '#f6f8fa',
    'editorHoverWidget.border': '#e1e4e8',*/

    // Peek view
    'peekViewEditor.matchHighlightBackground': '#ffd33d33',
    'peekViewResult.matchHighlightBackground': '#ffd33d33',

    // Scrollbar
    'scrollbar.shadow': '#6a737d33',
    'scrollbarSlider.background': '#959da533',
    'scrollbarSlider.hoverBackground': '#959da544',
    'scrollbarSlider.activeBackground': '#959da588',

    // Focus border
    'focusBorder': '#2188ff',
    'foreground': '#444d56',

    // Title bar
    'titleBar.activeBackground': '#ffffff',
    'titleBar.activeForeground': '#2f363d',
    'titleBar.inactiveBackground': '#f6f8fa',
    'titleBar.inactiveForeground': '#6a737d',
    'titleBar.border': '#e1e4e8',

    // Activity bar
    'activityBar.background': '#ffffff',
    'activityBar.foreground': '#2f363d',
    'activityBar.inactiveForeground': '#959da5',
    'activityBar.border': '#e1e4e8',
    'activityBar.activeBorder': '#f9826c',
    'activityBarBadge.background': '#2188ff',
    'activityBarBadge.foreground': '#fff',

    // Side bar
    'sideBar.background': '#f6f8fa',
    'sideBar.foreground': '#586069',
    'sideBar.border': '#e1e4e8',
    'sideBarTitle.foreground': '#2f363d',
    'sideBarSectionHeader.background': '#f6f8fa',
    'sideBarSectionHeader.foreground': '#2f363d',
    'sideBarSectionHeader.border': '#e1e4e8',

    // Lists
    'list.hoverBackground': '#ebf0f4',
    'list.hoverForeground': '#2f363d',
    'list.activeSelectionBackground': '#e2e5e9',
    'list.activeSelectionForeground': '#2f363d',
    'list.inactiveSelectionBackground': '#e8eaed',
    'list.inactiveSelectionForeground': '#2f363d',
    'list.focusBackground': '#cce5ff',
    'list.inactiveFocusBackground': '#dbedff',

    // Tabs
    'editorGroupHeader.tabsBackground': '#f6f8fa',
    'editorGroupHeader.tabsBorder': '#e1e4e8',
    'editorGroup.border': '#e1e4e8',
    'tab.activeBackground': '#ffffff',
    'tab.activeForeground': '#2f363d',
    'tab.activeBorder': '#ffffff',
    'tab.activeBorderTop': '#f9826c',
    'tab.inactiveBackground': '#f6f8fa',
    'tab.inactiveForeground': '#6a737d',
    'tab.border': '#e1e4e8',
    'tab.hoverBackground': '#ffffff',
    'tab.unfocusedActiveBorder': '#ffffff',
    'tab.unfocusedActiveBorderTop': '#e1e4e8',
    'tab.unfocusedHoverBackground': '#ffffff',

    // Breadcrumb
    'breadcrumb.foreground': '#6a737d',
    'breadcrumb.focusForeground': '#2f363d',
    'breadcrumb.activeSelectionForeground': '#586069',
    'breadcrumbPicker.background': '#fafbfc',

    // Status bar
    'statusBar.background': '#ffffff',
    'statusBar.foreground': '#586069',
    'statusBar.border': '#e1e4e8',
    'statusBar.noFolderBackground': '#ffffff',
    'statusBar.debuggingBackground': '#f9826c',
    'statusBar.debuggingForeground': '#fff',
    'statusBarItem.prominentBackground': '#e8eaed',
    'statusBarItem.remoteForeground': '#586069',
    'statusBarItem.remoteBackground': '#ffffff',

    // Panel (terminal etc)
    'panel.background': '#f6f8fa',
    'panel.border': '#e1e4e8',
    'panelTitle.activeBorder': '#f9826c',
    'panelTitle.activeForeground': '#2f363d',
    'panelTitle.inactiveForeground': '#6a737d',
    'panelInput.border': '#e1e4e8',

    // Terminal
    'terminal.foreground': '#586069',
    'terminal.tab.activeBorder': '#f9826c',
    'terminalCursor.background': '#d1d5da',
    'terminalCursor.foreground': '#005cc5',
    'terminal.ansiBlack': '#24292e',
    'terminal.ansiRed': '#d73a49',
    'terminal.ansiGreen': '#28a745',
    'terminal.ansiYellow': '#dbab09',
    'terminal.ansiBlue': '#0366d6',
    'terminal.ansiMagenta': '#5a32a3',
    'terminal.ansiCyan': '#1b7c83',
    'terminal.ansiWhite': '#6a737d',
    'terminal.ansiBrightBlack': '#959da5',
    'terminal.ansiBrightRed': '#cb2431',
    'terminal.ansiBrightGreen': '#22863a',
    'terminal.ansiBrightYellow': '#b08800',
    'terminal.ansiBrightBlue': '#005cc5',
    'terminal.ansiBrightMagenta': '#5a32a3',
    'terminal.ansiBrightCyan': '#3192aa',
    'terminal.ansiBrightWhite': '#d1d5da',

    // Input
    'input.background': '#fafbfc',
    'input.border': '#e1e4e8',
    'input.foreground': '#2f363d',
    'input.placeholderForeground': '#959da5',

    // Dropdown
    'dropdown.background': '#fafbfc',
    'dropdown.border': '#e1e4e8',
    'dropdown.foreground': '#2f363d',
    'dropdown.listBackground': '#ffffff',

    // Button
    'button.background': '#159739',
    'button.foreground': '#ffffff',
    'button.hoverBackground': '#138934',
    'button.secondaryBackground': '#e1e4e8',
    'button.secondaryForeground': '#1b1f23',
    'button.secondaryHoverBackground': '#d1d5da',

    // Badge
    'badge.background': '#dbedff',
    'badge.foreground': '#005cc5',

    // Checkbox
    'checkbox.background': '#fafbfc',
    'checkbox.border': '#d1d5da',

    // Progress bar
    'progressBar.background': '#2188ff',

    // Notifications
    'notificationCenterHeader.background': '#e1e4e8',
    'notificationCenterHeader.foreground': '#6a737d',
    'notifications.background': '#fafbfc',
    'notifications.foreground': '#2f363d',
    'notifications.border': '#e1e4e8',
    'notificationsErrorIcon.foreground': '#d73a49',
    'notificationsWarningIcon.foreground': '#e36209',
    'notificationsInfoIcon.foreground': '#005cc5',

    // Quick input
    'quickInput.background': '#fafbfc',
    'quickInput.foreground': '#2f363d',

    // Picker
    'pickerGroup.border': '#e1e4e8',
    'pickerGroup.foreground': '#2f363d',

    // Git decorations
    'gitDecoration.addedResourceForeground': '#28a745',
    'gitDecoration.modifiedResourceForeground': '#005cc5',
    'gitDecoration.deletedResourceForeground': '#d73a49',
    'gitDecoration.untrackedResourceForeground': '#28a745',
    'gitDecoration.ignoredResourceForeground': '#959da5',
    'gitDecoration.conflictingResourceForeground': '#e36209',
    'gitDecoration.submoduleResourceForeground': '#959da5',

    // Debug
    'debugToolBar.background': '#ffffff',
    'editor.stackFrameHighlightBackground': '#ffd33d33',
    'editor.focusedStackFrameHighlightBackground': '#28a74525',

    // Settings
    'settings.headerForeground': '#2f363d',
    'settings.modifiedItemIndicator': '#2188ff',

    // Welcome
    'welcomePage.buttonBackground': '#f6f8fa',
    'welcomePage.buttonHoverBackground': '#e1e4e8',

    // Text
    //'textLink.foreground': '#0366d6',
    //'textLink.activeForeground': '#005cc5',
    'textBlockQuote.background': '#fafbfc',
    'textBlockQuote.border': '#e1e4e8',
    'textCodeBlock.background': '#f6f8fa',
    'textPreformat.foreground': '#586069',
    'textSeparator.foreground': '#d1d5da',
    'descriptionForeground': '#6a737d',
    'errorForeground': '#cb2431',

    // Tree
    'tree.indentGuidesStroke': '#e1e4e8',
  }
};