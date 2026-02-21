export default {
  base: 'vs-dark',
  inherit: true,
  rules: [
    // Comments
    { token: 'comment', foreground: '6a737d' },
    { token: 'comment.line', foreground: '6a737d' },
    { token: 'comment.block', foreground: '6a737d' },
    { token: 'comment.doc', foreground: '6a737d' },

    // Keywords & Storage (red/pink)
    { token: 'keyword', foreground: 'f97583' },
    { token: 'keyword.control', foreground: 'f97583' },
    { token: 'keyword.operator', foreground: 'f97583' },
    { token: 'keyword.other', foreground: 'f97583' },
    { token: 'storage', foreground: 'f97583' },
    { token: 'storage.type', foreground: 'f97583' },
    { token: 'storage.modifier', foreground: 'f97583' },

    // Types / Classes / Entities (purple)
    { token: 'entity.name', foreground: 'b392f0' },
    { token: 'entity.name.type', foreground: 'b392f0' },
    { token: 'entity.name.class', foreground: 'b392f0' },
    { token: 'entity.name.function', foreground: 'b392f0' },
    { token: 'entity.name.namespace', foreground: 'b392f0' },
    { token: 'entity.name.enum', foreground: 'b392f0' },
    { token: 'entity.name.module', foreground: 'b392f0' },
    { token: 'entity.other.inherited-class', foreground: 'b392f0' },
    { token: 'type', foreground: 'b392f0' },
    { token: 'type.identifier', foreground: 'b392f0' },

    // HTML/XML tags (green)
    { token: 'tag', foreground: '85e89d' },
    { token: 'tag.html', foreground: '85e89d' },
    { token: 'metatag', foreground: '85e89d' },
    { token: 'metatag.html', foreground: '85e89d' },

    // Tag attributes (light blue)
    { token: 'attribute.name', foreground: 'b392f0' },
    { token: 'attribute.value', foreground: '9ecbff' },

    // Constants & Numbers (light blue)
    { token: 'constant', foreground: '79b8ff' },
    { token: 'constant.language', foreground: '79b8ff' },
    { token: 'constant.numeric', foreground: '79b8ff' },
    { token: 'constant.character', foreground: '79b8ff' },
    { token: 'constant.other', foreground: '79b8ff' },
    { token: 'number', foreground: '79b8ff' },
    { token: 'number.float', foreground: '79b8ff' },
    { token: 'number.hex', foreground: '79b8ff' },
    { token: 'number.octal', foreground: '79b8ff' },
    { token: 'number.binary', foreground: '79b8ff' },
    { token: 'variable.language', foreground: '79b8ff' },

    // Strings (light blue-white)
    { token: 'string', foreground: '9ecbff' },
    { token: 'string.quoted', foreground: '9ecbff' },
    { token: 'string.template', foreground: '9ecbff' },
    { token: 'string.interpolated', foreground: '9ecbff' },

    // String escape sequences (green bold)
    { token: 'string.escape', foreground: '85e89d', fontStyle: 'bold' },
    { token: 'constant.character.escape', foreground: '85e89d', fontStyle: 'bold' },

    // Regex (lighter blue)
    { token: 'regexp', foreground: 'dbedff' },
    { token: 'regexp.escape', foreground: '85e89d', fontStyle: 'bold' },

    // Variables (orange)
    { token: 'variable', foreground: 'ffab70' },
    { token: 'variable.name', foreground: 'ffab70' },
    { token: 'variable.parameter', foreground: 'e1e4e8' },
    { token: 'variable.other', foreground: 'e1e4e8' },
    { token: 'identifier', foreground: 'e1e4e8' },
    { token: 'parameter', foreground: 'e1e4e8' },

    // Support / Built-ins (light blue)
    { token: 'support', foreground: '79b8ff' },
    { token: 'support.function', foreground: '79b8ff' },
    { token: 'support.class', foreground: '79b8ff' },
    { token: 'support.type', foreground: '79b8ff' },
    { token: 'support.constant', foreground: '79b8ff' },
    { token: 'support.variable', foreground: '79b8ff' },

    // Decorators / Annotations
    { token: 'annotation', foreground: 'b392f0' },
    { token: 'decorator', foreground: 'b392f0' },

    // Operators & Punctuation
    { token: 'operator', foreground: 'f97583' },
    { token: 'delimiter', foreground: 'e1e4e8' },
    { token: 'delimiter.bracket', foreground: 'e1e4e8' },
    { token: 'delimiter.parenthesis', foreground: 'e1e4e8' },
    { token: 'delimiter.square', foreground: 'e1e4e8' },
    { token: 'delimiter.curly', foreground: 'e1e4e8' },

    // CSS-specific
    { token: 'attribute.value.css', foreground: '9ecbff' },
    { token: 'attribute.value.number.css', foreground: '79b8ff' },
    { token: 'attribute.value.unit.css', foreground: '79b8ff' },
    { token: 'attribute.value.hex.css', foreground: '79b8ff' },
    { token: 'selector', foreground: 'b392f0' },
    { token: 'selector.tag', foreground: '85e89d' },
    { token: 'selector.class', foreground: 'b392f0' },
    { token: 'selector.id', foreground: 'b392f0' },
    { token: 'property', foreground: '79b8ff' },
    { token: 'value', foreground: 'ffab70' },
    { token: 'unit', foreground: '79b8ff' },

    // Markdown
    { token: 'markup.heading', foreground: '79b8ff', fontStyle: 'bold' },
    { token: 'markup.bold', foreground: 'e1e4e8', fontStyle: 'bold' },
    { token: 'markup.italic', foreground: 'e1e4e8', fontStyle: 'italic' },
    { token: 'markup.underline', fontStyle: 'underline' },
    { token: 'markup.strikethrough', fontStyle: 'strikethrough' },
    { token: 'markup.inline.raw', foreground: '79b8ff' },
    { token: 'markup.quote', foreground: '85e89d' },
    { token: 'markup.list', foreground: 'ffab70' },
    { token: 'markup.link', foreground: 'dbedff', fontStyle: 'underline' },

    // Diff
    { token: 'markup.inserted', foreground: '85e89d' },
    { token: 'markup.deleted', foreground: 'fdaeb7' },
    { token: 'markup.changed', foreground: 'ffab70' },

    // JSON
    { token: 'key', foreground: '79b8ff' },

    // Invalid
    { token: 'invalid', foreground: 'fdaeb7', fontStyle: 'italic' },
    { token: 'invalid.deprecated', foreground: 'fdaeb7', fontStyle: 'italic' },

    // Default / Plain text
    { token: '', foreground: 'e1e4e8' },
  ],
  colors: {
    // Editor core
    'editor.foreground': '#e1e4e8',
    'editor.background': '#24292e',
    'editor.lineHighlightBackground': '#2b3036',
    'editor.selectionBackground': '#3392FF44',
    'editor.inactiveSelectionBackground': '#3392FF22',
    'editor.selectionHighlightBackground': '#17E5E633',
    'editor.selectionHighlightBorder': '#17E5E600',
    'editor.findMatchBackground': '#ffd33d44',
    'editor.findMatchHighlightBackground': '#ffd33d22',
    'editor.wordHighlightBackground': '#17E5E600',
    'editor.wordHighlightStrongBackground': '#17E5E600',
    'editor.wordHighlightBorder': '#17E5E699',
    'editor.wordHighlightStrongBorder': '#17E5E666',

    // Cursor & whitespace
    'editorCursor.foreground': '#c8e1ff',
    'editorWhitespace.foreground': '#444d56',
    'editorIndentGuide.background': '#2f363d',
    'editorIndentGuide.activeBackground': '#444d56',

    // Line numbers
    'editorLineNumber.foreground': '#444d56',
    'editorLineNumber.activeForeground': '#e1e4e8',

    // Bracket matching
    'editorBracketMatch.background': '#17E5E650',
    'editorBracketMatch.border': '#17E5E600',

    // Bracket pair colorization
    'editorBracketHighlight.foreground1': '#79b8ff',
    'editorBracketHighlight.foreground2': '#ffab70',
    'editorBracketHighlight.foreground3': '#b392f0',
    'editorBracketHighlight.foreground4': '#79b8ff',
    'editorBracketHighlight.foreground5': '#ffab70',
    'editorBracketHighlight.foreground6': '#b392f0',

    // Errors & warnings
    'editorError.foreground': '#f97583',
    'editorWarning.foreground': '#ffea7f',

    // Overview ruler
    'editorOverviewRuler.border': '#1b1f23',

    // Gutter
    'editorGutter.modifiedBackground': '#2188ff',
    'editorGutter.addedBackground': '#28a745',
    'editorGutter.deletedBackground': '#ea4a5a',

    // Diff editor
    'diffEditor.insertedTextBackground': '#28a74530',
    'diffEditor.removedTextBackground': '#d73a4930',

    // Widgets
    /*
    'editorWidget.background': '#202127',
    'editorSuggestWidget.background': '#202127',
    'editorSuggestWidget.border': '#2e2e32',
    'editorSuggestWidget.foreground': '#e1e4e8',
    'editorSuggestWidget.selectedBackground': '#2b2f37',
    'editorSuggestWidget.highlightForeground': '#79b8ff',
    'editorSuggestWidget.focusHighlightForeground': '#79b8ff',
    'editorHoverWidget.background': '#202127',
    'editorHoverWidget.border': '#2e2e32',
    */

    // Peek view
    'peekViewEditor.background': '#1f242888',
    'peekViewEditor.matchHighlightBackground': '#ffd33d33',
    'peekViewResult.background': '#1f2428',
    'peekViewResult.matchHighlightBackground': '#ffd33d33',

    // Scrollbar
    'scrollbar.shadow': '#0008',
    'scrollbarSlider.background': '#6a737d33',
    'scrollbarSlider.hoverBackground': '#6a737d44',
    'scrollbarSlider.activeBackground': '#6a737d88',

    // Focus border
    'focusBorder': '#005cc5',
    'foreground': '#d1d5da',

    // Title bar
    'titleBar.activeBackground': '#24292e',
    'titleBar.activeForeground': '#e1e4e8',
    'titleBar.inactiveBackground': '#1f2428',
    'titleBar.inactiveForeground': '#959da5',
    'titleBar.border': '#1b1f23',

    // Activity bar
    'activityBar.background': '#24292e',
    'activityBar.foreground': '#e1e4e8',
    'activityBar.inactiveForeground': '#6a737d',
    'activityBar.border': '#1b1f23',
    'activityBar.activeBorder': '#f9826c',
    'activityBarBadge.background': '#0366d6',
    'activityBarBadge.foreground': '#fff',

    // Side bar
    'sideBar.background': '#1f2428',
    'sideBar.foreground': '#d1d5da',
    'sideBar.border': '#1b1f23',
    'sideBarTitle.foreground': '#e1e4e8',
    'sideBarSectionHeader.background': '#1f2428',
    'sideBarSectionHeader.foreground': '#e1e4e8',
    'sideBarSectionHeader.border': '#1b1f23',

    // Lists
    'list.hoverBackground': '#282e34',
    'list.hoverForeground': '#e1e4e8',
    'list.activeSelectionBackground': '#39414a',
    'list.activeSelectionForeground': '#e1e4e8',
    'list.inactiveSelectionBackground': '#282e34',
    'list.inactiveSelectionForeground': '#e1e4e8',
    'list.focusBackground': '#044289',
    'list.inactiveFocusBackground': '#1d2d3e',

    // Tabs
    'editorGroupHeader.tabsBackground': '#1f2428',
    'editorGroupHeader.tabsBorder': '#1b1f23',
    'editorGroup.border': '#1b1f23',
    'tab.activeBackground': '#24292e',
    'tab.activeForeground': '#e1e4e8',
    'tab.activeBorder': '#24292e',
    'tab.activeBorderTop': '#f9826c',
    'tab.inactiveBackground': '#1f2428',
    'tab.inactiveForeground': '#959da5',
    'tab.border': '#1b1f23',
    'tab.hoverBackground': '#24292e',
    'tab.unfocusedActiveBorder': '#24292e',
    'tab.unfocusedActiveBorderTop': '#1b1f23',
    'tab.unfocusedHoverBackground': '#24292e',

    // Breadcrumb
    'breadcrumb.foreground': '#959da5',
    'breadcrumb.focusForeground': '#e1e4e8',
    'breadcrumb.activeSelectionForeground': '#d1d5da',
    'breadcrumbPicker.background': '#2b3036',

    // Status bar
    'statusBar.background': '#24292e',
    'statusBar.foreground': '#d1d5da',
    'statusBar.border': '#1b1f23',
    'statusBar.noFolderBackground': '#24292e',
    'statusBar.debuggingBackground': '#931c06',
    'statusBar.debuggingForeground': '#fff',
    'statusBarItem.prominentBackground': '#282e34',
    'statusBarItem.remoteForeground': '#d1d5da',
    'statusBarItem.remoteBackground': '#24292e',

    // Panel (terminal etc)
    'panel.background': '#1f2428',
    'panel.border': '#1b1f23',
    'panelTitle.activeBorder': '#f9826c',
    'panelTitle.activeForeground': '#e1e4e8',
    'panelTitle.inactiveForeground': '#959da5',
    'panelInput.border': '#2f363d',

    // Terminal
    'terminal.foreground': '#d1d5da',
    'terminal.tab.activeBorder': '#f9826c',
    'terminalCursor.background': '#586069',
    'terminalCursor.foreground': '#79b8ff',
    'terminal.ansiBlack': '#586069',
    'terminal.ansiRed': '#ea4a5a',
    'terminal.ansiGreen': '#34d058',
    'terminal.ansiYellow': '#ffea7f',
    'terminal.ansiBlue': '#2188ff',
    'terminal.ansiMagenta': '#b392f0',
    'terminal.ansiCyan': '#39c5cf',
    'terminal.ansiWhite': '#d1d5da',
    'terminal.ansiBrightBlack': '#959da5',
    'terminal.ansiBrightRed': '#f97583',
    'terminal.ansiBrightGreen': '#85e89d',
    'terminal.ansiBrightYellow': '#ffea7f',
    'terminal.ansiBrightBlue': '#79b8ff',
    'terminal.ansiBrightMagenta': '#b392f0',
    'terminal.ansiBrightCyan': '#56d4dd',
    'terminal.ansiBrightWhite': '#fafbfc',

    // Input
    'input.background': '#2f363d',
    'input.border': '#1b1f23',
    'input.foreground': '#e1e4e8',
    'input.placeholderForeground': '#959da5',

    // Dropdown
    'dropdown.background': '#2f363d',
    'dropdown.border': '#1b1f23',
    'dropdown.foreground': '#e1e4e8',
    'dropdown.listBackground': '#24292e',

    // Button
    'button.background': '#176f2c',
    'button.foreground': '#dcffe4',
    'button.hoverBackground': '#22863a',
    'button.secondaryBackground': '#444d56',
    'button.secondaryForeground': '#fff',
    'button.secondaryHoverBackground': '#586069',

    // Badge
    'badge.background': '#044289',
    'badge.foreground': '#c8e1ff',

    // Checkbox
    'checkbox.background': '#444d56',
    'checkbox.border': '#1b1f23',

    // Progress bar
    'progressBar.background': '#0366d6',

    // Notifications
    'notificationCenterHeader.background': '#24292e',
    'notificationCenterHeader.foreground': '#959da5',
    'notifications.background': '#2f363d',
    'notifications.foreground': '#e1e4e8',
    'notifications.border': '#1b1f23',
    'notificationsErrorIcon.foreground': '#ea4a5a',
    'notificationsWarningIcon.foreground': '#ffab70',
    'notificationsInfoIcon.foreground': '#79b8ff',

    // Quick input
    'quickInput.background': '#24292e',
    'quickInput.foreground': '#e1e4e8',

    // Picker
    'pickerGroup.border': '#444d56',
    'pickerGroup.foreground': '#e1e4e8',

    // Git decorations
    'gitDecoration.addedResourceForeground': '#34d058',
    'gitDecoration.modifiedResourceForeground': '#79b8ff',
    'gitDecoration.deletedResourceForeground': '#ea4a5a',
    'gitDecoration.untrackedResourceForeground': '#34d058',
    'gitDecoration.ignoredResourceForeground': '#6a737d',
    'gitDecoration.conflictingResourceForeground': '#ffab70',
    'gitDecoration.submoduleResourceForeground': '#6a737d',

    // Debug
    'debugToolBar.background': '#2b3036',
    'editor.stackFrameHighlightBackground': '#C6902625',
    'editor.focusedStackFrameHighlightBackground': '#2b6a3033',

    // Settings
    'settings.headerForeground': '#e1e4e8',
    'settings.modifiedItemIndicator': '#0366d6',

    // Welcome
    'welcomePage.buttonBackground': '#2f363d',
    'welcomePage.buttonHoverBackground': '#444d56',

    // Text
    /* 'textLink.foreground': '#79b8ff',
    'textLink.activeForeground': '#c8e1ff', */
    'textBlockQuote.background': '#24292e',
    'textBlockQuote.border': '#444d56',
    'textCodeBlock.background': '#2f363d',
    'textPreformat.foreground': '#d1d5da',
    'textSeparator.foreground': '#586069',
    'descriptionForeground': '#959da5',
    'errorForeground': '#f97583',

    // Tree
    'tree.indentGuidesStroke': '#2f363d',
  }
};