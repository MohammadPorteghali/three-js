import { createRouter, createWebHistory } from "vue-router";
import AnimationPage from "../views/AnimationPage.vue";
import Geometries from "../views/GeometriesPage.vue";

const routes = [
  {
    path: "/",
    name: "AnimationPage",
    component: AnimationPage,
  },
  {
    path: "/geometries",
    name: "Geometries",
    component: Geometries,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
