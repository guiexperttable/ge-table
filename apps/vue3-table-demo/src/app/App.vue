<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="postcss">
@import '../assets/css/global.css';

:host,
#app,
.app,
router-view {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
