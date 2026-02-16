//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//


const PERCENTAGE_CHAR = '%';


export type KeyframesFactorySource = DocumentOrShadowRoot | CSSStyleSheet;

export default new class KeyframesFactory {

  static readonly KeyframesRuleNameTypeError = class KeyframesFactoryKeyframesRuleNameTypeError extends TypeError {
    message = `Keyframes rule name must be a string.`;
  }

  static readonly SourceTypeError = class KeyframesFactorySourceTypeError extends TypeError {
    message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
  }

  
  getStyleSheetKeyframes({ name, in: source = document }: {
    name: string,
    in?: KeyframesFactorySource
  }): ParsedKeyframes | undefined {

    if (typeof name !== 'string') {
      throw new KeyframesFactory.KeyframesRuleNameTypeError();
    }

    if (source instanceof Document || source instanceof ShadowRoot) {

      return this.#getStyleSheetKeyframesInDocumentOrShadowRoot({
        name: name,
        documentOrShadowRoot: source as DocumentOrShadowRoot
      });

    } else if (source instanceof CSSStyleSheet) {

      return this.#getStyleSheetKeyframesInStyleSheet({
        name: name,
        styleSheet: source as CSSStyleSheet
      });

    } else {

      throw new KeyframesFactory.SourceTypeError();

    }

  }

  #getStyleSheetKeyframesInDocumentOrShadowRoot({ name, documentOrShadowRoot }: {
    name: string,
    documentOrShadowRoot: DocumentOrShadowRoot
  }): ParsedKeyframes | undefined {

    for (const styleSheet of documentOrShadowRoot.styleSheets) {

      const keyframesRule = this.#getStyleSheetKeyframesInStyleSheet({
        name: name,
        styleSheet: styleSheet
      });

      if (keyframesRule !== undefined) {
        return keyframesRule;
      }

    }

    return undefined;

  }

  #getStyleSheetKeyframesInStyleSheet({ name, styleSheet }: {
    name: string,
    styleSheet: CSSStyleSheet
  }): ParsedKeyframes | undefined {

    for (const rule of styleSheet.cssRules) {

      if (!(rule instanceof CSSKeyframesRule)) {
        continue;
      }

      if (rule.name === name) {

        const keyframes = this.parseKeyframesRule({
          rule: rule
        });

        return keyframes;

      }

    }

    return undefined;

  }


  getAllStyleSheetKeyframesRules({ in: source = document }: {
    in?: KeyframesFactorySource
  } = {}): ParsedKeyframesRules {

    if (source instanceof Document || source instanceof ShadowRoot) {

      return this.#getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot({
        documentOrShadowRoot: source
      });

    } else if (source instanceof CSSStyleSheet) {

      return this.#getAllStyleSheetKeyframesRulesInStyleSheet({
        styleSheet: source
      });

    } else {

      throw new KeyframesFactory.SourceTypeError();

    }

  }

  #getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot({ documentOrShadowRoot }: {
    documentOrShadowRoot: DocumentOrShadowRoot
  }): ParsedKeyframesRules {

    let keyframesRules: ParsedKeyframesRules = {};

    for (const styleSheet of documentOrShadowRoot.styleSheets) {

      const styleSheetKeyframesRules = this.#getAllStyleSheetKeyframesRulesInStyleSheet({
        styleSheet: styleSheet
      });

      keyframesRules = {
        ...keyframesRules,
        ...styleSheetKeyframesRules
      };

    }

    return keyframesRules;

  }

  #getAllStyleSheetKeyframesRulesInStyleSheet({ styleSheet }: {
    styleSheet: CSSStyleSheet
  }): ParsedKeyframesRules {

    let keyframesRules: ParsedKeyframesRules = {};

    for (const rule of styleSheet.cssRules) {

      if (!(rule instanceof CSSKeyframesRule)) {
        continue;
      }

      const keyframes = this.parseKeyframesRule({
        rule: rule
      });

      keyframesRules[rule.name] = keyframes;

    }

    return keyframesRules;

  }


  parseKeyframesRule({ rule: keyframes }: {
    rule: CSSKeyframesRule
  }): ParsedKeyframes {

    let parsedKeyframes: Keyframe[] = [];

    for (const keyframe of keyframes) {

      // remove trailing '%'
      /// https://drafts.csswg.org/css-animations/#dom-csskeyframerule-keytext
      const percentString = removeSuffix({
        of: keyframe.keyText,
        suffix: PERCENTAGE_CHAR
      });
      
      const percent = Number(percentString);

      const offset = percent / 100;


      let parsedProperties: KeyframeProperties = {};

      for (const propertyName of keyframe.style) {

        /// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
        const propertyValue = keyframe.style.getPropertyValue(propertyName);
        
        parsedProperties[propertyName] = propertyValue;

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

}


/// https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument

type KeyframeProperties = { [propertyName: string]: string };

export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;


/// https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
export class KeyframeEffectParameters {

  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;

  constructor({ keyframes, options = {} }: {
    keyframes: KeyframeArgument,
    options?: number | KeyframeEffectOptions
  }) {
    this.keyframes = keyframes;
    this.options = options;
  }

  /// https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
  /// https://drafts.csswg.org/web-animations-1/#the-animation-interface
  toAnimation({ target, timeline = document.timeline }: {
    target: Element | null,
    timeline?: AnimationTimeline
  }): Animation {
    
    const keyframeEffect = new KeyframeEffect(
      target,
      this.keyframes,
      this.options
    );

    const animation = new Animation(
      keyframeEffect,
      timeline
    );

    return animation;

  }
  
}


export class ParsedKeyframes {

  keyframes: Keyframe[];

  constructor(keyframes: Keyframe[]) {
    this.keyframes = keyframes;
  }

  toKeyframeEffect(
    options: number | KeyframeEffectOptions | null
  ): KeyframeEffectParameters {

    // convert (required) nullable to optional
    const optionalOptions = options === null ? undefined : options;
    
    const keyframeEffect = new KeyframeEffectParameters({
      keyframes: this.keyframes,
      options: optionalOptions
    });

    return keyframeEffect;

  }

}


export type ParsedKeyframesRules = {
  [name: string]: ParsedKeyframes
};



// MARK: - Util
function removeSuffix({ of: string, suffix }: {
  of: string,
  suffix: string
}) {

  return string.slice(0, -suffix.length);

}
