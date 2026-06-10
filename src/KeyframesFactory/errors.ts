
import type { getStyleSheetKeyframes } from './parsing-stylesheet-keyframes/getStyleSheetKeyframes';
import type { getAllStyleSheetKeyframesRules } from './parsing-stylesheet-keyframes/getAllStyleSheetKeyframesRules';

/**
 * Thrown if keyframes rule name is not a string.
 * @see
 *  - {@linkcode getStyleSheetKeyframes}
 * @group Errors
 */
export class KeyframesRuleNameTypeError extends TypeError {
  override message = `Keyframes rule name must be a string.`;
}

/**
 * Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @see
 *  - {@linkcode getStyleSheetKeyframes}
 *  - {@linkcode getAllStyleSheetKeyframesRules}
 * @group Errors
 */
export class SourceTypeError extends TypeError {
  override message = `Source must be either a CSSStyleSheet or a StyleSheetList.`;
}
