
import { ParsedKeyframes } from '../data-types/ParsedKeyframes';


const CHARS = {
  PERCENT_SIGN: '%',
  HYPHEN_MINUS: '-',
  DOUBLE_HYPHEN_MINUS: '--',
  WEBKIT_PREFIX: '-webkit-'
} as const;


/**
 * Converts a CSS keyframes rule to Web Animations API keyframes.
 * @param obj
 *  @param obj.rule The rule to convert.
 * @group Parsing Stylesheet Keyframes
 */
export function parseKeyframesRule({ rule: keyframes }: {
  rule: CSSKeyframesRule
}): ParsedKeyframes {

  let parsedKeyframes: Keyframe[] = [];

  for (const keyframe of keyframes) {

    // remove trailing '%'
    /// https://drafts.csswg.org/css-animations/#dom-csskeyframerule-keytext
    const percentString = removeSuffix({
      of: keyframe.keyText,
      suffix: CHARS.PERCENT_SIGN
    });

    const percent = Number(percentString);

    const offset = percent / 100;


    /** https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument */
    type KeyframeProperties = { [propertyName: string]: string };

    let parsedProperties: KeyframeProperties = {};

    for (const propertyName of keyframe.style) {

      /// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
      const propertyValue = keyframe.style.getPropertyValue(propertyName);

      /// https://drafts.csswg.org/web-animations-1/#ref-for-animation-property-name-to-idl-attribute-name%E2%91%A0
      const attributeName = animationPropertyNameToIDLAttributeName(
        propertyName
      );

      parsedProperties[attributeName] = propertyValue;

    }


    const parsedKeyframe: Keyframe = {
      ...parsedProperties,
      offset: offset
    };

    parsedKeyframes.push(parsedKeyframe);

  }

  const parsedKeyframesInstance = new ParsedKeyframes(parsedKeyframes);

  return parsedKeyframesInstance;

}


/** https://drafts.csswg.org/web-animations-1/#animation-property-name-to-idl-attribute-name */
function animationPropertyNameToIDLAttributeName(property: string) {

  if (isCustomPropertyName(property)) return property;

  if (property === 'float') return 'cssFloat';

  if (property === 'offset') return 'cssOffset';

  // https://drafts.csswg.org/cssom/#ref-for-supported-css-property%E2%91%A2
  const lowercaseFirst = isWebkitCasedAttribute(property);

  return cssPropertyToIDLAttribute(property, lowercaseFirst);

}

/** https://drafts.csswg.org/cssom/#css-property-to-idl-attribute */
function cssPropertyToIDLAttribute(property: string, lowercaseFirst: boolean = false) {

  let output = '';

  let uppercaseNext = false;

  if (lowercaseFirst) {
    property = property.slice(1);
  }

  for (const c of property) {

    if (c === CHARS.HYPHEN_MINUS) {

      uppercaseNext = true;

    } else if (uppercaseNext) {

      uppercaseNext = false;

      output += c.toUpperCase();

    } else {

      output += c;

    }

  }

  return output;

}

/** https://drafts.csswg.org/css-variables-2/#typedef-custom-property-name */
function isCustomPropertyName(property: string) {
  return property.startsWith(CHARS.DOUBLE_HYPHEN_MINUS) &&
         property !== CHARS.DOUBLE_HYPHEN_MINUS;
}

/** https://drafts.csswg.org/cssom/#ref-for-supported-css-property%E2%91%A2 */
function isWebkitCasedAttribute(property: string) {
  return property.startsWith(CHARS.WEBKIT_PREFIX);
}


function removeSuffix({ of: string, suffix }: {
  of: string,
  suffix: string
}) {

  return string.slice(0, -suffix.length);

}
