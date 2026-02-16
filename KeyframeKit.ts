//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//


const PERCENTAGE_CHAR = '%';


export default new class KeyframesFactory {

  getStyleSheetKeyframes({ in: documentOrShadowRoot = document }: {
    in?: DocumentOrShadowRoot
  } = {}): ParsedKeyframesDictionary {

    let keyframesDict: ParsedKeyframesDictionary = {};

    for (const styleSheet of documentOrShadowRoot.styleSheets) {

      for (const rule of styleSheet.cssRules) {

        if (!(rule instanceof CSSKeyframesRule)) {
          continue
        }

        const [animationName, keyframes] = this.#parseKeyframesRule({
          rule
        });

        keyframesDict[animationName] = keyframes;

      }

    }

    return keyframesDict;

  }

  #parseKeyframesRule({ rule: keyframes }: {
    rule: CSSKeyframesRule
  }): ParsedKeyframesRule {

    const animationName = keyframes.name;

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

    return [animationName, parsedKeyframesInstance];

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
    
    const keyframeEffect = new KeyframeEffectParameters({
      keyframes: this.keyframes,
      options: options ?? undefined
    });

    return keyframeEffect;

  }

}


type ParsedKeyframesRule = [
  animationName: string,
  ParsedKeyframes
];

export type ParsedKeyframesDictionary = {
  [animationName: string]: ParsedKeyframes
};



// MARK: - Util
function removeSuffix({ of: string, suffix }: {
  of: string,
  suffix: string
}) {

  return string.slice(0, -suffix.length);

}
