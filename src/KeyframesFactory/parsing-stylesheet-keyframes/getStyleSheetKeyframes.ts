
import { KeyframesRuleNameTypeError, SourceTypeError } from '../errors';
import { ParsedKeyframes } from '../data-types/ParsedKeyframes';
import { parseKeyframesRule } from './parseKeyframesRule';
import { type CSSStyleSheetSource } from '../data-types/CSSStyleSheetSource';


/**
 * Gets a CSS keyframes rule from a stylesheet or stylesheet list,
 * then converts it to Web Animations API keyframes.
 * @param obj
 *  @param obj.of The name of the `@keyframes` rule to get keyframes from.
 *  @param obj.in The stylesheet or stylesheet list where the rule resides.
 * @throws
 *  - {@linkcode KeyframesRuleNameTypeError} &nbsp;
 *    - Thrown if keyframes rule name is not a string.
 *  - {@linkcode SourceTypeError} &nbsp;
 *    - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Parsing Stylesheet Keyframes
 */
export function getStyleSheetKeyframes({ of: ruleName, in: source }: {
  of: string,
  in: CSSStyleSheetSource
}): ParsedKeyframes | undefined {

  if (typeof ruleName !== 'string') {
    throw new KeyframesRuleNameTypeError();
  }

  if (source instanceof StyleSheetList) {

    return getStyleSheetKeyframesInStyleSheetList({
      of: ruleName,
      styleSheetList: source
    });

  } else if (source instanceof CSSStyleSheet) {

    return getStyleSheetKeyframesInStyleSheet({
      of: ruleName,
      styleSheet: source
    });

  } else {

    throw new SourceTypeError();

  }

}

function getStyleSheetKeyframesInStyleSheetList({ of: ruleName, styleSheetList }: {
  of: string,
  styleSheetList: StyleSheetList
}): ParsedKeyframes | undefined {

  for (const styleSheet of styleSheetList) {

    const keyframesRule = getStyleSheetKeyframesInStyleSheet({
      of: ruleName,
      styleSheet: styleSheet
    });

    if (keyframesRule !== undefined) {
      return keyframesRule;
    }

  }

}

function getStyleSheetKeyframesInStyleSheet({ of: ruleName, styleSheet }: {
  of: string,
  styleSheet: CSSStyleSheet
}): ParsedKeyframes | undefined {

  for (const rule of styleSheet.cssRules) {

    if (!(rule instanceof CSSKeyframesRule)) {
      continue;
    }

    if (rule.name === ruleName) {

      const keyframes = parseKeyframesRule({
        rule: rule
      });

      return keyframes;

    }

  }

}
