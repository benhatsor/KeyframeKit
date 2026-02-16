# KeyframeKit.js

An intuitive, lightweight and performant set of tools for working with CSS animations in JavaScript.  
Powered by the [Web Animations API][1].

## Installation

### NPM
```sh
npm install keyframekit
```

## Usage

### Playing CSS-defined animations with JS

In your CSS:
```css
@keyframes rotate-small { ... }
```

Then, in JS:
```js
import KeyframeKit from 'keyframekit';

// get animation keyframes from document stylesheet
const rotateSmallAnimKeyframes = KeyframeKit.getStyleSheetKeyframes({
  of: 'rotate-small'
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
[...and more.][2]

### Defining animations in JS

This is useful for when you want to have all your animation code in one place.

```js
import { KeyframeEffectParameters } from 'keyframekit';

// define your animation
const linkTextHoverAnim = new KeyframeEffectParameters({

  keyframes: {
    // 0 to 1. equivalent to CSS keyframe percentage values:
    offset: [0, 0.499, 0.5, 1],
    // respective property keyframes:
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

## Typing

While this library is completely compatable with native JS, it also has full, spec-compliant type support,  
including declaration files and source maps.

## License

[MIT](LICENSE)


[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
