//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//


const PERCENTAGE_CHAR = '%';


export type KeyframesFactorySource = StyleSheetList | CSSStyleSheet;

class KeyframesFactory {

  readonly Error = {
    KeyframesRuleNameTypeError: class extends TypeError {
      message = `Keyframes rule name must be a string.`;
    },
    SourceTypeError: class extends TypeError {
      message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
    },
    StyleSheetImportError: class extends Error {
      message = `The stylesheet could not be imported.`;
    }
  } as const;


  async getDocumentStyleSheetsOnLoad({ document = window.document }: {
    document?: Document
  } = {}) {

    await waitForDocumentLoad({
      document: document
    });

    return document.styleSheets;

  }

  
  /** - Note: `@import` rules won't be resolved in imported stylesheets.  
   *    See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418. */
  async importStyleSheet(url: string) {

    const resp = await fetch(url);

    if (!resp.ok) {
      throw new this.Error.StyleSheetImportError();
    }

    const respText = await resp.text();

    // remove file name from URL to get base URL
    const baseURL = url.split('/').slice(0, -1).join('/');

    const styleSheet = new CSSStyleSheet({
      baseURL: baseURL
    });

    await styleSheet.replace(respText);

    return styleSheet;

  }
  
  
  getStyleSheetKeyframes({ of: ruleName, in: source }: {
    of: string,
    in: KeyframesFactorySource
  }): ParsedKeyframes | undefined {

    if (typeof ruleName !== 'string') {
      throw new this.Error.KeyframesRuleNameTypeError();
    }

    if (source instanceof StyleSheetList) {

      return this.#getStyleSheetKeyframesInStyleSheetList({
        of: ruleName,
        styleSheetList: source
      });

    } else if (source instanceof CSSStyleSheet) {

      return this.#getStyleSheetKeyframesInStyleSheet({
        of: ruleName,
        styleSheet: source
      });

    } else {

      throw new this.Error.SourceTypeError();

    }

  }

  #getStyleSheetKeyframesInStyleSheetList({ of: ruleName, styleSheetList }: {
    of: string,
    styleSheetList: StyleSheetList
  }): ParsedKeyframes | undefined {

    for (const styleSheet of styleSheetList) {

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


  getAllStyleSheetKeyframesRules({ in: source }: {
    in: KeyframesFactorySource
  }): ParsedKeyframesRules {

    if (source instanceof StyleSheetList) {

      return this.#getAllStyleSheetKeyframesRulesInStyleSheetList({
        styleSheetList: source
      });

    } else if (source instanceof CSSStyleSheet) {

      return this.#getAllStyleSheetKeyframesRulesInStyleSheet({
        styleSheet: source
      });

    } else {

      throw new this.Error.SourceTypeError();

    }

  }

  #getAllStyleSheetKeyframesRulesInStyleSheetList({ styleSheetList }: {
    styleSheetList: StyleSheetList
  }): ParsedKeyframesRules {

    let keyframesRules: ParsedKeyframesRules = {};

    for (const styleSheet of styleSheetList) {

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

async function waitForDocumentLoad({ document }: {
  document: Document
}) {

  if (document.readyState === 'complete') return;

  const { promise, resolve } = Promise.withResolvers();

  function onReadyStateChange() {
    if (document.readyState === 'complete') {
      resolve(null);
    }
  }

  document.addEventListener(
    'readystatechange',
    onReadyStateChange
  );

  await promise;

  document.removeEventListener(
    'readystatechange',
    onReadyStateChange
  );

}
