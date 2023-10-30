import { createRouter, createWebHistory } from "vue-router";
import SimpleDemoPage from "./views/SimpleDemoPage.vue";
import RendererDemoPage from "./views/RendererDemoPage.vue";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash });
        }, 500);
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.noScroll && from.meta.noScroll) {
      return {};
    }
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Simple",
      component: SimpleDemoPage,
      meta: { title: "Simple Demo" }
    },
    {
      path: "/renderer",
      name: "Renderer",
      component: RendererDemoPage,
      meta: { title: "Renderer Demo" }
    }
  ]
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || "vue3-table-demo";
});

export default router;
