import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    base: '/',
  },
  mutations: {
    setBaseURL(state, url){
      state.base = url;
      console.log("set base url=",url);
    },
  }
})

export default store;
