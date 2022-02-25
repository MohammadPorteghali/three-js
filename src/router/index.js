import { createRouter, createWebHistory } from "vue-router";
import AnimationPage from "../views/AnimationPage.vue";

const routes = [
  {
    path: "/",
    name: "AnimationPage",
    component: AnimationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
