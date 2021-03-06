import VueRouter from "vue-router";
import PageNotFound from "./404.vue";
import Login from "../container/auth/login.vue";
import Logout from "../container/auth/logout.vue";
import { beforeEnter } from "./private.js";

const Table = () =>
  import(/* webpackChunkName: "table" */ "../container/table/index.vue");

const Dasboard = () =>
  import(
    /* webpackChunkName: "dashboard" */ "../container/dashboard/index.vue"
  );

const Threejs = () =>
  import(/* webpackChunkName: "threejs" */ "../container/threejs/index.vue");

const Webgl = () =>
  import(/* webpackChunkName: "webgl" */ "../container/webgl/index.vue");

const routes = [
  { path: "/", redirect: { name: "table" } },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { name: "auth" },
  },
  {
    path: "/logout",
    component: Logout,
    name: "logout",
    meta: { name: "auth" },
  },
  {
    path: "/table",
    component: Table,
    name: "table",
    meta: { name: "table" },
    beforeEnter,
  },
  {
    path: "/threejs",
    component: Threejs,
    name: "threejs",
    meta: { name: "threejs" },
    beforeEnter,
  },
  {
    path: "/webgl",
    component: Webgl,
    name: "webgl",
    meta: { name: "webgl" },
    beforeEnter,
  },
  {
    path: "/dashboard",
    component: Dasboard,
    name: "dashboard",
    meta: { name: "dashboard" },
    beforeEnter,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  // mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
export default router;
