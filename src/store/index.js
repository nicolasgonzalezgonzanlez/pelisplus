import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: ''
  },
  mutations: {
    id (state, value) {
      state.id = value
    }
  },
  actions: {},
  modules: {}
});
