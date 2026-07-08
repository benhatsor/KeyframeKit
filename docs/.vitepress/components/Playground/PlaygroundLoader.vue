<template>
  <svg class="loader" width="18" height="18" viewBox="0 0 100 100"><rect height="10" opacity="0" rx="5" ry="5" transform="rotate(-90 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.125" rx="5" ry="5" transform="rotate(-45 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.25" rx="5" ry="5" transform="rotate(0 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.375" rx="5" ry="5" transform="rotate(45 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.5" rx="5" ry="5" transform="rotate(90 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.625" rx="5" ry="5" transform="rotate(135 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.75" rx="5" ry="5" transform="rotate(180 50 50)" width="28" x="67" y="45"></rect><rect height="10" opacity="0.875" rx="5" ry="5" transform="rotate(225 50 50)" width="28" x="67" y="45"></rect></svg>
</template>

<style scoped>
.loader {
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

.loader rect {
  fill: currentColor;
}

@keyframes spin8 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(540deg);
  }
}
</style>
