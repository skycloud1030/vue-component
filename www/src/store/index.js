import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const global = {
  state: {
    loading: false,
  },
  mutations: {
    loadingSwitch(state) {
      state.loading = !state.loading;
    },
  },
};

const store = new Vuex.Store({
  modules: {
    global,
  },
});

export default store;
