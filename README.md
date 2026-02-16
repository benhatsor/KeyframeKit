# KeyframeKit.js

A lightweight and performant set of tools for working with CSS animations in JavaScript.  
Powered by the [Web Animations API][1].

## Usage

### Playing CSS-defined animations with JS

In your CSS:
```css
@keyframes rotate-small { ... }
```

Then, in JS:
```js
import KeyframeKit from './KeyframeKit.js';

// get all keyframes defined in document stylesheets
const keyframes = KeyframeKit.getStyleSheetKeyframes();

const rotateSmallAnim = keyframes['rotate-small'].toKeyframeEffect({
  duration: 700,
  easing: 'ease'
});

// then:
const targetedAnim = rotateSmallAnim.toAnimation({
  target: document.querySelector('.el')
});

targetedAnim.play();
```

The primary reason to play your animation with JS is because you get way more control over its playback:
```js
targetedAnim.pause();
targetedAnim.playbackRate = -1;
const progress = targetedAnim.overallProgress; // 0 to 1 (Baseline newly available)
await targetedAnim.finished;
```
[...and more.][2]

### Defining animations in JS

This is useful for when you want to have all your animation code in one place.

```js
import { KeyframeEffectParameters } from './KeyframeKit.js';

const linkTextHoverAnim = new KeyframeEffectParameters({

  keyframes: {
    offset: [0, 0.499, 0.5, 1],
    clipPath: ['inset(0 0 0 0)', 'inset(100% 0 0 0)', 'inset(0 0 100% 0)', 'inset(0 0 0 0)'],
    top: ['0', '-20px', '20px', '0']
  },

  options: {
    duration: 700,
    easing: 'ease'
  }
  
});

// then:
const targetedAnim = linkTextHoverAnim.toAnimation({
  target: document.querySelector('.link')
});

targetedAnim.play();
```

## TypeScript

This library is completely usable in native JS, but it also has full spec-compliant type support.  
Simply import the `.ts` or use the `.d.ts`.

## License

[MIT](LICENSE)


[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
