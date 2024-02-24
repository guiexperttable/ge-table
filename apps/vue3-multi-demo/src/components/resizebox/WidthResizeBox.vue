<template>

  <div
    class="resize-panel"
    ref="root">
    <div class="resize-content">
      <slot></slot>
    </div>
    <div class="resize-handle"></div>
  </div>

</template>


<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue';

const root = ref();
const emit = defineEmits<{
  (e: 'onResized', width: number): void
}>();
let mousePosX = 0;
let resizeHandle: HTMLDivElement | undefined;
let parentWidth = 0;

onMounted(() => {
  const hostNode = root.value as HTMLDivElement;
  if (hostNode) {
    resizeHandle = hostNode.querySelector('.resize-handle') as HTMLDivElement;
    if (resizeHandle) {
      resizeHandle.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    }
  }
});

onUnmounted(() => {
  if (resizeHandle) {
    resizeHandle.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mouseup', handleMouseUp);
  }
});

function handleMouseDown(e: MouseEvent) {
  mousePosX = e.x;
  document.addEventListener('mousemove', resize, false);
}

function handleMouseUp() {
  document.removeEventListener('mousemove', resize, false);
  emit('onResized', parentWidth - 4);
}

function resize(e: MouseEvent) {
  if (resizeHandle) {
    let parent = resizeHandle.parentNode as HTMLDivElement;
    let dx = mousePosX - e.x;
    mousePosX = e.x;
    parentWidth = (parseInt(getComputedStyle(parent, '').width) - dx);
    parent.style.width = parentWidth + 'px';
  }
}
</script>

<style lang="postcss">

.resize-panel {
  display: grid;
  grid-template-columns: 1fr 4px;
  height: 100%;
  resize: horizontal;
}

.resize-handle {
  border-left: 1px solid #e00034;
  background-color: transparent;
  height: 100%;
  cursor: ew-resize;
}

.resize-handle:hover {
  border-left: 1px solid cyan;
  background-color: cyan;
}
</style>