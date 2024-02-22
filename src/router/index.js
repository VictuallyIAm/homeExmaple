import { createRouter, createWebHistory } from "vue-router";
// import TeamStructure from "../pages/TeamStructure";
import ChargeBackNew from "../pages/ChargeBackNew";

const routes = [
  {
    path: "/homeExmaple",
    name: "TeamStructure",
    component: ChargeBackNew,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
