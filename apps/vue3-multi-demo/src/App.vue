
<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <b>GUI</b>Expert Table Demos
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <MainMenue></MainMenue>
    </q-drawer>

    <q-page-container>
      <Suspense>
      <router-view />
      </Suspense>
      <!--q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="accent"></q-btn>
      </q-page-sticky-->
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref, Suspense } from 'vue';
import MainMenue from './components/mainmenu/MainMenue.vue';


const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

