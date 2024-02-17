

<template>

  <q-list class="" style="width: 100%;">
    <q-item>
      <q-item-section avatar>
        <q-icon name="navigate_next"></q-icon>
      </q-item-section>
      <q-item-section>
        <router-link to="/">Home</router-link>
      </q-item-section>
    </q-item>

    <q-separator  />

    <q-item v-for="item in items">
      <q-item-section avatar>
        <q-icon name="navigate_next"></q-icon>
      </q-item-section>
      <q-item-section>
        <router-link :to="item.url">{{item.label}}</router-link>
      </q-item-section>
    </q-item>

  </q-list>

</template>

<script setup lang="ts">

 import { ref } from 'vue';
 import { MenuItem } from './MenuItem.ts';

 const items = ref([
   new MenuItem('Home', '/'),
   new MenuItem('About', '/about'),
 ]);

</script>

