//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//


const PERCENTAGE_CHAR = '%';


export type KeyframesFactorySource = DocumentOrShadowRoot | CSSStyleSheet;

class KeyframesFactory {

  readonly Error = {
    KeyframesRuleNameTypeError: class extends TypeError {
      message = `Keyframes rule name must be a string.`;
    },
    SourceTypeError: class extends TypeError {
      message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
    }
  } as const;
  
  
  getStyleSheetKeyframes({ of: ruleName, in: source = document }: {
    of: string,
    in?: KeyframesFactorySource
  }): ParsedKeyframes | undefined {

    if (typeof ruleName !== 'string') {
      throw new this.Error.KeyframesRuleNameTypeError();
    }

    if (source instanceof Document || source instanceof ShadowRoot) {

      return this.#getStyleSheetKeyframesInDocumentOrShadowRoot({
        of: ruleName,
        documentOrShadowRoot: source as DocumentOrShadowRoot
      });

    } else if (source instanceof CSSStyleSheet) {

      return this.#getStyleSheetKeyframesInStyleSheet({
        of: ruleName,
        styleSheet: source as CSSStyleSheet
      });

    } else {

      throw new this.Error.SourceTypeError();

    }

  }

  #getStyleSheetKeyframesInDocumentOrShadowRoot({ of: ruleName, documentOrShadowRoot }: {
    of: string,
    documentOrShadowRoot: DocumentOrShadowRoot
  }): ParsedKeyframes | undefined {

    /// https://drafts.csswg.org/cssom/#dom-documentorshadowroot-stylesheets
    for (const styleSheet of documentOrShadowRoot.styleSheets) {

      const keyframesRule = this.#getStyleSheetKeyframesInStyleSheet({
        of: ruleName,
        styleSheet: styleSheet
      });

      if (keyframesRule !== undefined) {
        return keyframesRule;
      }

    }

  }

  #getStyleSheetKeyframesInStyleSheet({ of: ruleName, styleSheet }: {
    of: string,
    styleSheet: CSSStyleSheet
  }): ParsedKeyframes | undefined {

    for (const rule of styleSheet.cssRules) {

      if (!(rule instanceof CSSKeyframesRule)) {
        continue;
      }

      if (rule.name === ruleName) {

        const keyframes = this.parseKeyframesRule({
          rule: rule
        });

        return keyframes;

      }

    }

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

      throw new this.Error.SourceTypeError();

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

export default new KeyframesFactory();
export type { KeyframesFactory };

/** https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument */
type KeyframeProperties = { [propertyName: string]: string };


/** https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument */
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;

/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
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

  /** - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface  
   *  - https://drafts.csswg.org/web-animations-1/#the-animation-interface */
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

  /** 
   * @param options
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options MDN Reference}
   */
  toKeyframeEffect(
    options: number | KeyframeEffectOptions | null
  ): KeyframeEffectParameters {

    let keyframeEffect: KeyframeEffectParameters;

    // convert (required) nullable to optional
    if (options !== null) {
      
      keyframeEffect = new KeyframeEffectParameters({
        keyframes: this.keyframes,
        options: options
      });
    
    } else {

      keyframeEffect = new KeyframeEffectParameters({
        keyframes: this.keyframes
      });

    }

    return keyframeEffect;

  }

}


export type ParsedKeyframesRules = {
  [ruleName: string]: ParsedKeyframes
};



// MARK: - Util
function removeSuffix({ of: string, suffix }: {
  of: string,
  suffix: string
}) {

  return string.slice(0, -suffix.length);

}
