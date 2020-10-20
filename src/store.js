import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    db_home: {},
    db_season: {},
    base: "/",
    rowLastVisit1: 1,
    rowLastVisit2: 1,
    unlock1: false,
    unlock2: false,
    unlock3: false
  },
  mutations: {
    setHomeDatabase(state, db) {
      state.db_home = db;
    },
    setSeasonDatabase(state, db) {
      state.db_season = db;
    },
    setBaseURL(state, url) {
      state.base = url;
      console.log("set base url=", url);
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
    }
  }
});

export default store;
