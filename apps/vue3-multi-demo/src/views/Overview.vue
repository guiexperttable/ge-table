<template>
  <div class="page">

    <q-item v-for="item in items">
      <q-item-section style="align-items: flex-start">
        <q-item-label>{{item.caption}}</q-item-label>
        <router-link :to="item.path">{{ item.name }}</router-link>
      </q-item-section>
    </q-item>

  </div>
</template>


<script lang="ts" setup>
import demoItems from '../router/demos.ts';
import { ref } from 'vue';

const items = ref(demoItems.slice(2));
</script>

<style lang="postcss">

</style>
