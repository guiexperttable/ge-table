

<template>

  <q-list class="" style="width: 100%;">
    <q-item>
      <q-item-section avatar>
        <q-icon name="home"></q-icon>
      </q-item-section>
      <q-item-section style="align-items: flex-start">
        <router-link to="/">Home</router-link>
      </q-item-section>
    </q-item>

    <q-separator  />

    <q-item v-for="item in items">
      <q-item-section avatar>
        <q-icon :name="item.icon"></q-icon>
      </q-item-section>
      <q-item-section  style="align-items: flex-start">
        <q-item-label>Item with caption</q-item-label>
        <router-link :to="item.path">{{ item.name }}</router-link>
      </q-item-section>
    </q-item>

  </q-list>

</template>

<script setup lang="ts">

 import { ref } from 'vue';
 import { MenuItem } from './MenuItem.ts';
 import demoItems from '../demos/demos.ts';

 const items = ref([
   new MenuItem('Home', '/', 'home'),
   ...demoItems
 ]);

</script>

