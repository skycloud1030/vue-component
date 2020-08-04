import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index.js";
import router from "./routes";
import Layout from "./container/layout/index.vue";
import VueLazyload from "vue-lazyload";
import VueVirtualScroller from "vue-virtual-scroller";
import VueObserveVisibility from "vue-observe-visibility";
import Fragment from "vue-fragment";
import { Drawer, Modal } from "ant-design-vue";

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import "./index.less";

// Vue.config.productionTip = false;
Vue.use(VueObserveVisibility);
Vue.use(VueVirtualScroller);
Vue.use(VueLazyload);
Vue.use(VueRouter);
Vue.use(Fragment.Plugin);
Vue.use(Drawer);
Vue.use(Modal);

const app = new Vue({ render: (h) => h(Layout), router, store });
router.onReady(() => {
  app.$mount("#index");
});
