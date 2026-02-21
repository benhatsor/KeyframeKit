
import githubDark from './themes/githubDark.js';
import githubLight from './themes/githubLight.js';

export const themes = {
  dark: {
    ...githubDark,
    colors: {
      ...githubDark.colors,
      'editor.background':           '#161618', //'#24292e',
      'editor.lineHighlightBackground': '#202022', //'#2b3036',
    }
  },

  light: {
    ...githubLight,
    colors: {
      ...githubLight.colors,
      'editor.background':                  '#f6f6f7', //'#ffffff',
      'editor.lineHighlightBackground':     '#efeff1', //'#f6f8fa',
    }
  }
  
}
