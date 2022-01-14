import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "@/views/pages/Home.vue";
import About from "@/views/pages/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
