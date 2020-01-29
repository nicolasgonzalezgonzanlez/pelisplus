import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import id from "../views/id.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/:key",
    name: "id",
    component: id
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
