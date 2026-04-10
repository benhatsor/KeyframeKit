
import { SourceTypeError } from '../errors';
import { type ParsedKeyframesRules } from '../data-types/ParsedKeyframes';
import { type CSSStyleSheetSource } from '../data-types/CSSStyleSheetSource';
import { parseKeyframesRule } from './parseKeyframesRule';


/**
 * Gets all the CSS keyframes rules in a stylesheet or stylesheet list,
 * then converts them to Web Animations API keyframes.
 * @param obj
 *  @param obj.in The style sheet or style sheet list to get keyframes from.
 * @throws
 *  - {@linkcode SourceTypeError} &nbsp;
 *    - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Parsing Stylesheet Keyframes
 */
export function getAllStyleSheetKeyframesRules({ in: source }: {
  in: CSSStyleSheetSource
}): ParsedKeyframesRules {

  if (source instanceof StyleSheetList) {

    return getAllStyleSheetKeyframesRulesInStyleSheetList({
      styleSheetList: source
    });

  } else if (source instanceof CSSStyleSheet) {

    return getAllStyleSheetKeyframesRulesInStyleSheet({
      styleSheet: source
    });

  } else {

    throw new SourceTypeError();

  }

}

function getAllStyleSheetKeyframesRulesInStyleSheetList({ styleSheetList }: {
  styleSheetList: StyleSheetList
}): ParsedKeyframesRules {

  let keyframesRules: ParsedKeyframesRules = {};

  for (const styleSheet of styleSheetList) {

    const styleSheetKeyframesRules = getAllStyleSheetKeyframesRulesInStyleSheet({
      styleSheet: styleSheet
    });

    keyframesRules = {
      ...keyframesRules,
      ...styleSheetKeyframesRules
    };

  }

  return keyframesRules;

}

function getAllStyleSheetKeyframesRulesInStyleSheet({ styleSheet }: {
  styleSheet: CSSStyleSheet
}): ParsedKeyframesRules {

  let keyframesRules: ParsedKeyframesRules = {};

  for (const rule of styleSheet.cssRules) {

    if (!(rule instanceof CSSKeyframesRule)) {
      continue;
    }

    const keyframes = parseKeyframesRule({
      rule: rule
    });

    keyframesRules[rule.name] = keyframes;

  }

  return keyframesRules;

}
