
/**
 * Thrown if keyframes rule name is not a string.
 * @group Errors
 */
export class KeyframesRuleNameTypeError extends TypeError {
  message = `Keyframes rule name must be a string.`;
}

/**
 * Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Errors
 */
export class SourceTypeError extends TypeError {
  message = `Source must be either a CSSStyleSheet or a StyleSheetList.`;
}

/**
 * Thrown if the stylesheet could not be imported.
 * @group Errors
 */
export class StyleSheetImportError extends Error {
  message = `The stylesheet could not be imported.`;
}
