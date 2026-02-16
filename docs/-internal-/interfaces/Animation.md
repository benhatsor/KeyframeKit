[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Animation

# Interface: Animation

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2937

The **`Animation`** interface of the Web Animations API represents a single animation player and provides playback controls and a timeline for an animation node or source.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### currentTime

> **currentTime**: [`CSSNumberish`](../type-aliases/CSSNumberish.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2943

The **`Animation.currentTime`** property of the Web Animations API returns and sets the current time value of the animation in milliseconds, whether running or paused.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/currentTime)

***

### effect

> **effect**: [`AnimationEffect`](AnimationEffect.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2949

The **`Animation.effect`** property of the Web Animations API gets and sets the target effect of an animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/effect)

***

### finished

> `readonly` **finished**: `Promise`\<`Animation`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2955

The **`Animation.finished`** read-only property of the Web Animations API returns a Promise which resolves once the animation has finished playing.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/finished)

***

### id

> **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2961

The **`Animation.id`** property of the Web Animations API returns or sets a string used to identify the animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/id)

***

### oncancel

> **oncancel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2963

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/cancel_event)

***

### onfinish

> **onfinish**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2965

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/finish_event)

***

### onremove

> **onremove**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2967

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/remove_event)

***

### pending

> `readonly` **pending**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2973

The read-only **`Animation.pending`** property of the Web Animations API indicates whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/pending)

***

### playbackRate

> **playbackRate**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2985

The **`Animation.playbackRate`** property of the Web Animations API returns or sets the playback rate of the animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/playbackRate)

***

### playState

> `readonly` **playState**: [`AnimationPlayState`](../type-aliases/AnimationPlayState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2979

The read-only **`Animation.playState`** property of the Web Animations API returns an enumerated value describing the playback state of an animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/playState)

***

### ready

> `readonly` **ready**: `Promise`\<`Animation`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2991

The read-only **`Animation.ready`** property of the Web Animations API returns a Promise which resolves when the animation is ready to play.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/ready)

***

### replaceState

> `readonly` **replaceState**: [`AnimationReplaceState`](../type-aliases/AnimationReplaceState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2997

The read-only **`Animation.replaceState`** property of the Web Animations API indicates whether the animation has been removed by the browser automatically after being replaced by another animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/replaceState)

***

### startTime

> **startTime**: [`CSSNumberish`](../type-aliases/CSSNumberish.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3003

The **`Animation.startTime`** property of the Animation interface is a double-precision floating-point value which indicates the scheduled time when an animation's playback should begin.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/startTime)

***

### timeline

> **timeline**: [`AnimationTimeline`](AnimationTimeline.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3009

The **`Animation.timeline`** property of the Animation interface returns or sets the AnimationTimeline associated with this animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/timeline)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3058

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`AnimationEventMap`](AnimationEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`EventTarget`](EventTarget.md).[`addEventListener`](EventTarget.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3059

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

***

### cancel()

> **cancel**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3015

The Web Animations API's **`cancel()`** method of the Animation interface clears all KeyframeEffects caused by this animation and aborts its playback.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/cancel)

#### Returns

`void`

***

### commitStyles()

> **commitStyles**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3021

The `commitStyles()` method of the Web Animations API's Animation interface writes the computed values of the animation's current styles into its target element's `style` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/commitStyles)

#### Returns

`void`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

[`Event`](Event.md)

#### Returns

`boolean`

#### Inherited from

[`EventTarget`](EventTarget.md).[`dispatchEvent`](EventTarget.md#dispatchevent)

***

### finish()

> **finish**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3027

The **`finish()`** method of the Web Animations API's Animation Interface sets the current playback time to the end of the animation corresponding to the current playback direction.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/finish)

#### Returns

`void`

***

### pause()

> **pause**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3033

The **`pause()`** method of the Web Animations API's Animation interface suspends playback of the animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/pause)

#### Returns

`void`

***

### persist()

> **persist**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3039

The `persist()` method of the Web Animations API's Animation interface explicitly persists an animation, preventing it from being automatically removed when it is replaced by another animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/persist)

#### Returns

`void`

***

### play()

> **play**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3045

The **`play()`** method of the Web Animations API's Animation Interface starts or resumes playing of an animation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/play)

#### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3060

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`AnimationEventMap`](AnimationEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`EventTarget`](EventTarget.md).[`removeEventListener`](EventTarget.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3061

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`

***

### reverse()

> **reverse**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3051

The **`Animation.reverse()`** method of the Animation Interface reverses the playback direction, meaning the animation ends at its beginning.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/reverse)

#### Returns

`void`

***

### updatePlaybackRate()

> **updatePlaybackRate**(`playbackRate`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3057

The **`updatePlaybackRate()`** method of the Web Animations API's synchronizing its playback position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Animation/updatePlaybackRate)

#### Parameters

##### playbackRate

`number`

#### Returns

`void`
