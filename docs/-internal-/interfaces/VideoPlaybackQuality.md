[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / VideoPlaybackQuality

# Interface: VideoPlaybackQuality

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33315

A **`VideoPlaybackQuality`** object is returned by the HTMLVideoElement.getVideoPlaybackQuality() method and contains metrics that can be used to determine the playback quality of a video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality)

## Properties

### ~~corruptedVideoFrames~~

> `readonly` **corruptedVideoFrames**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33322

The VideoPlaybackQuality interface's read-only **`corruptedVideoFrames`** property the number of corrupted video frames that have been received since the video element was last loaded or reloaded.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames)

***

### creationTime

> `readonly` **creationTime**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33328

The read-only **`creationTime`** property on the the browsing context was created this quality sample was recorded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality/creationTime)

***

### droppedVideoFrames

> `readonly` **droppedVideoFrames**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33334

The read-only **`droppedVideoFrames`** property of the VideoPlaybackQuality interface returns the number of video frames which have been dropped rather than being displayed since the last time the media was loaded into the HTMLVideoElement.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames)

***

### totalVideoFrames

> `readonly` **totalVideoFrames**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33340

The VideoPlaybackQuality interface's **`totalVideoFrames`** read-only property returns the total number of video frames that have been displayed or dropped since the media was loaded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality/totalVideoFrames)
