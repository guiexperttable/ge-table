import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import Home from './../views/Home.vue';
import demoItems from '../components/demos/demos.ts';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...demoItems
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;