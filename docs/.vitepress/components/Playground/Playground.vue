<template>
  <div class="playground" :class="{ loaded: isLoaded === true }">
    <div class="editor-pane">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
      <div class="editor-container">

        <div
          v-for="tab in tabs"
          :key="tab"
          :ref="el => setEditorRef(tab, el)"
          class="editor-mount"
          :style="{ visibility: activeTab === tab ? 'visible' : 'hidden' }"
        />

        <svg class="loader" width="18" height="18" viewBox="0 0 100 100"><rect fill="#555555" height="10" opacity="0" rx="5" ry="5" transform="rotate(-90 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.125" rx="5" ry="5" transform="rotate(-45 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.25" rx="5" ry="5" transform="rotate(0 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.375" rx="5" ry="5" transform="rotate(45 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.5" rx="5" ry="5" transform="rotate(90 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.625" rx="5" ry="5" transform="rotate(135 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.75" rx="5" ry="5" transform="rotate(180 50 50)" width="28" x="67" y="45"></rect><rect fill="#555555" height="10" opacity="0.875" rx="5" ry="5" transform="rotate(225 50 50)" width="28" x="67" y="45"></rect></svg>

      </div>
    </div>

    <div class="preview-pane">
      <iframe ref="previewFrame" class="preview-frame" sandbox="allow-scripts" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { playground } from './Playground.js'

import * as defaultExample from './defaultExample.js';
import * as libCode from './libCode.js';

const props = defineProps({
  initialHtml: { type: String, default: defaultExample.html },
  initialCss:  { type: String, default: defaultExample.css },
  initialJs:   { type: String, default: defaultExample.js },

  decLibSrc:   { type: String, default: libCode.decLibSrc },
  libImportMap:   { type: String, default: libCode.libImportMap }
})

const previewFrame = ref(null)
const { tabs, activeTab, isLoaded, setEditorRef } = playground(props, previewFrame)
</script>

<style scoped>
.playground {
  display: flex;
  height: 500px;
  --border-radius: 8px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 48px;
}

@media (max-width: 1000px) {
  .playground {
    flex-flow: column-reverse;
  }
  .playground .preview-pane {
    border-bottom-width: 0;
    border-left-width: 1px;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
}

@media (max-width: 640px) {
  .playground {
    margin-left: -24px;
    margin-right: -24px;
    --border-radius: 0;
  }
  .playground .preview-pane {
    border-right-width: 0;
    border-left-width: 0;
  }
}

@media (min-width: 640px) {
  .playground {
    margin-bottom: 64px;
  }
}

.editor-pane {
  display: flex;
  flex-direction: column;
  background: var(--vp-code-block-bg);
  flex: 1;
}

.tabs {
  display: flex;
  flex-shrink: 0;
  padding: 0 12px;
  background-color: var(--vp-code-tab-bg);
  box-shadow: inset 0 -1px var(--vp-code-tab-divider);
}

.tab {
  position: relative;
  display: inline-block;
  border-bottom: 1px solid transparent;
  padding: 0 12px;
  line-height: 48px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-code-tab-text-color);
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.25s;
}
.tab:hover {
  color: var(--vp-code-tab-hover-text-color);
}
.tab.active {
  color: var(--vp-code-tab-active-text-color);
}

.tab::after {
  position: absolute;
  right: 8px;
  bottom: -1px;
  left: 8px;
  z-index: 1;
  height: 2px;
  border-radius: 2px;
  content: '';
  background-color: transparent;
  /* transition: background-color 0.25s; */
}
.tab.active::after {
  background-color: var(--vp-code-tab-active-bar-color);
}

.editor-container {
  flex: 1;
  /* overflow: hidden; */
  position: relative;
}
.editor-mount {
  width: 100%;
  height: 100%;
  position: absolute;
}

.editor-container .loader {
  translate: -50% -50%;
  left: 50%;
  top: 50%;
  position: relative;
  color: var(--vp-c-text-2);
  pointer-events: none;
  animation: spin8 0.8s steps(8) infinite;
  transition: .18s ease-in-out .18s opacity;

  @starting-style {
    opacity: 0;
  }
}

.editor-container .loader rect {
  fill: currentColor;
}

.playground.loaded .loader {
  display: none;
}

@keyframes spin8 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(540deg);
  }
}

.preview-pane {
  border: 1px solid var(--vp-code-block-bg);
  border-left-width: 0;
  flex: 1;
  display: flex;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  overflow: hidden;
  background: #fff;
}

.preview-frame {
  flex: 1;
  width: 100%;
  border: none;
}
</style>
