
# Get Started

## About

The [Web Animations API][1] opens the browser's animation engine to developers and provides unprecedented control and performance when animating on the web. But confusingly, it provides no easy way to use your existing CSS animations with the API. So I wrote a lightweight, typed, spec-compliant library to convert stylesheet keyframes to Web Animations API-compatible animations, letting you play your CSS-defined animations right in JS. [Read more.][2]

## Installation

::: code-group
```sh [npm]
npm install keyframekit
```
:::

## Usage

### Playing CSS-defined animations with JS

In your CSS:
```css
@keyframes rotate-small { ... }
```

Then, in JS:
```js
import KeyframeKit from 'keyframekit';

const documentStyleSheets = await KeyframeKit.getDocumentStyleSheetsOnLoad();

// get animation keyframes from the document's stylesheets
const rotateSmallAnimKeyframes = KeyframeKit.getStyleSheetKeyframes({
  of: 'rotate-small',
  in: documentStyleSheets
});

// then, define your animation
const rotateSmallAnim = rotateSmallAnimKeyframes.toKeyframeEffect({
  duration: 700,
  easing: 'ease'
});

// finally, attach it to an element:
const attachedAnim = rotateSmallAnim.toAnimation({
  target: document.querySelector('.el')
});

attachedAnim.play();
```

The primary reason to play your animation with JS is because you get way more control over its playback:
```js
attachedAnim.pause();
attachedAnim.playbackRate = -1;
const progress = attachedAnim.overallProgress; // 0 to 1 (Baseline newly available)
await attachedAnim.finished;
```
[...and more.][3]

### Importing animations directly from a CSS file

Instead of getting an animation from the document's stylesheets, you can also import it directly from a CSS file.

```js
import KeyframeKit from 'keyframekit';

const styleSheet = await KeyframeKit.importStyleSheet('./styles.css');

// get animation keyframes from stylesheet
const rotateSmallAnimKeyframes = KeyframeKit.getStyleSheetKeyframes({
  of: 'rotate-small',
  in: styleSheet
});
```

> Note: This won't resolve any `@import` rules in the stylesheet. [See more.][4]

### Defining animations in JS

The [`KeyframeEffectParameters`](reference/classes/KeyframeEffectParameters.md) class provides a more convenient way to define your animations in JS than is offered natively.  
It's useful for when you want to have all your animation code in one place.

```js
import { KeyframeEffectParameters } from 'keyframekit';

// define your animation
const linkTextHoverAnim = new KeyframeEffectParameters({

  keyframes: {
    // 0 to 1. equivalent to CSS keyframe percentage values:
    offset: [0, 0.499, 0.5, 1],
    // respective CSS property keyframes:
    clipPath: ['inset(0 0 0 0)', 'inset(100% 0 0 0)', 'inset(0 0 100% 0)', 'inset(0 0 0 0)'],
    top: ['0', '-20px', '20px', '0']
  },

  options: {
    duration: 700,
    easing: 'ease'
  }
  
});

// then, attach it to an element:
const attachedAnim = linkTextHoverAnim.toAnimation({
  target: document.querySelector('.link')
});

attachedAnim.play();
```

### Full reference
[See here.](/reference/index.md)

## Typing

This library is fully compatable with native JS, but it also has full spec-compliant type support, including declaration files and source maps.

## License

[MIT](https://github.com/benhatsor/KeyframeKit/blob/main/LICENSE)


[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
[2]: https://benhatsor.medium.com/99573ef4738b
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
[4]: https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418
