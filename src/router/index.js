import { createRouter, createWebHistory } from "vue-router";
import TeamStructure from "../pages/TeamStructure";

const routes = [
  {
    path: "/homeExmaple",
    name: "TeamStructure",
    component: TeamStructure,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
