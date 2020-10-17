// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import './bus'
import store from './store'
//import './assets/mobile/pttweb.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCookies from 'vue-cookies'

Vue.config.ignoredElements = [
  'app-root',
  'app-home',
  'app-header',
  'app-footer',
  'app-remind-update-email-dialog',
  'app-google-ad-manager',
  'app-season-relation-list',
  'app-season-episode-side-list',
  'app-video-player',
  'app-episode-intro',
  'app-episode-relation-list'
]

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('1d')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  computed: {

  },
  created: function () {
    /**
     * * Vue初始化時觸發
     */

  },
  watch: {
    '$route'(to, from) {
      /**
       * * router view變更時觸發
       */
    }
  },
  template: '<App/>',
  data: {
    loginName: '琪',
    trySearch: ''
  },
  methods: {
    toggle: function () {
      this.a1 = !this.a1;
    },
    onSearch: function () {
      console.log("prev " + this.$cookies.get("search"));
      console.log("hey " + this.trySearch);
      this.$cookies.set("search", this.trySearch, 10);
      if (this.trySearch == '車廂') {
        window.location.href = 'http://www.google.com';
      } else if (this.trySearch == '只是傷心無法延續') {
        // ! 跳轉BBS
      } else if (this.trySearch == '我是誰') {
        // ! 跳轉我是誰節目頁
      }
      this.trySearch = '';
    },
    setCookie: function (key, value) {
      console.log("set cookie[" + key + "]=" + value);
      var t = 10; // ! 以秒為單位
      this.$cookies.set(id, value, t);
    }
  }
})
