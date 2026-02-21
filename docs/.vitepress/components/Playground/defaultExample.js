
export const js = `import KeyframeKit from 'keyframekit';

const documentStyleSheets = await KeyframeKit.getDocumentStyleSheetsOnLoad();

// get animation keyframes from stylesheet
const rotateAnimKeyframes = KeyframeKit.getStyleSheetKeyframes({
  of: 'rotate',
  in: documentStyleSheets
});

// then, define your animation
const rotateAnim = rotateAnimKeyframes.toKeyframeEffect({
  duration: 700,
  easing: 'ease'
});

// finally, attach it to your elements:

let attachedAnims = [];
let animDelay = 0;

const spans = document.querySelectorAll('.text-anim span');

for (const span of spans) {

  const attachedAnim = rotateAnim.toAnimation({
    target: span,
    options: { delay: animDelay * 1000 }
  });

  attachedAnims.push(attachedAnim);

  animDelay += .02;

}

attachedAnims.forEach(anim => anim.play());


// the primary reason to play your animation with JS
// is because you get way more control over its playback:

const textAnimEl = document.querySelector('.text-anim');

textAnimEl.addEventListener('mouseenter', () => {
  attachedAnims.forEach(anim => {
    anim.playbackRate = 1;
    anim.play();
  });  
});

textAnimEl.addEventListener('mouseleave', () => {
  const isPlaying = attachedAnims.some(anim =>
    anim.playState === 'running'
  );
  // if animation is playing, reverse it:
  if (isPlaying) attachedAnims.forEach(anim => {
    anim.playbackRate = -1;
    anim.play();
  });
});`;


export const css = `@keyframes rotate {
  from {
    clip-path: inset(0 0 0 0);
    translate: 0 0;
  }
  49.99% {
    clip-path: inset(100% 0 0 0);
    translate: 0 -50px;
  }
  50% {
    clip-path: inset(0 0 100% 0);
    translate: 0 50px;
  }
  to {
    clip-path: inset(0 0 0 0);
    translate: 0 0;
  }
}


.text-anim {
  display: flex;
  font-size: 85px;
  font-weight: 600;
  color: #7ab6ff;
  cursor: pointer;
}

body {
  font-family: 'Inter', system-ui;
  background: #f0f7ff;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}`;


export const html = `<div class="text-anim">
  <span>H</span>
  <span>o</span>
  <span>v</span>
  <span>e</span>
  <span>r</span>
</div>`;
