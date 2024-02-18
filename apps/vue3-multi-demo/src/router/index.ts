import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import demoItems from '../components/demos/demos.ts';

const routes: RouteRecordRaw[] = [
  ...demoItems
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;