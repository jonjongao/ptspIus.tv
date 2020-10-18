import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    base: "/",
    rowLastVisit1: 1,
    rowLastVisit2: 1
  },
  mutations: {
    setBaseURL(state, url) {
      state.base = url;
      console.log("set base url=", url);
    },
    setRowVisit(state, data) {
      if (data[0] == 1) state.rowLastVisit1 = data[1];
      else if (data[0] == 2) state.rowLastVisit2 = data[1];
    }
  }
});

export default store;
