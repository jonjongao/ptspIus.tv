import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    db_home: {},
    db_season: {},
    db_season2: {},
    db_post: {},
    base: "/",
    rowLastVisit1: 1,
    rowLastVisit2: 1,
    unlock1: false,
    unlock2: false,
    unlock3: false,
    paymentUnlocked: []
  },
  mutations: {
    setHomeDatabase(state, db) {
      state.db_home = db;
    },
    setSeasonDatabase(state, db) {
      state.db_season = db;
    },
    setExtendDatabase(state, db) {
      state.db_season2 = db;
    },
    setPostDatabase(state, db) {
      state.db_post = db;
    },
    setBaseURL(state, url) {
      // state.base = url;
      state.base = window.location.href.replace(window.location.hash, "");
      console.log("current hash:" + window.location.hash);
      console.log("set base url=", state.base);
    },
    setRowVisit(state, data) {
      if (data[0] == 1) state.rowLastVisit1 = data[1];
      else if (data[0] == 2) state.rowLastVisit2 = data[1];
    },
    setUnlock(state, data) {
      switch (data[0]) {
        case 1:
          state.unlock1 = data[1];
          break;
        case 2:
          state.unlock2 = data[1];
          break;
        case 3:
          state.unlock3 = data[1];
          break;
      }
    },
    setPaymentUnlock(state, value) {
      if (state.paymentUnlocked.includes(value)) return;
      state.paymentUnlocked.push(value);
    }
  }
});

export default store;
