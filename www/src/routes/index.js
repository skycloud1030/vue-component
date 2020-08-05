import VueRouter from "vue-router";
import PageNotFound from "./404.vue";
import Login from "../container/auth/login.vue"

const Table = () =>
  import(/* webpackChunkName: "logs" */ "../container/table/index.vue");

const routes = [
  { path: "/", redirect: { name: "table" } },
  {
    path: "/table",
    component: Table,
    name: "table",
    meta: { name: "table" },
  },
  {
    path:"/login",
    component: Login,
    name: "auth",
    meta: { name: "auth" },
  },
  {
    path: "/dashboard",
    component: PageNotFound,
    name: "dashboard",
    meta: { name: "dashboard" },
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
export default router;
