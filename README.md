# KeyframeKit.js

A lightweight and performant set of tools for working with JavaScript animations.  
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

// get keyframes defined in document stylesheets
const keyframes = KeyframeKit.getStyleSheetKeyframes();

const rotateSmallAnim = keyframes['rotate-small'].toKeyframeEffect({
  duration: 700,
  easing: 'ease'
});

const targetedAnim = rotateSmallAnim.toAnimation({
  target: document.querySelector('.el')
});

// then:
targetedAnim.play();
// targetedAnim.pause();
// targetedAnim.playbackRate = -1;
// const progress = targetedAnim.overallProgress; (Baseline newly available)
```


### Defining animations in JS

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


## License

[MIT](LICENSE.md)


[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
