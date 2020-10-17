// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./bus";
import store from "./store";
//import './assets/mobile/pttweb.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCookies from "vue-cookies";

Vue.config.ignoredElements = [
  "app-root",
  "app-home",
  "app-header",
  "app-footer",
  "app-remind-update-email-dialog",
  "app-google-ad-manager",
  "app-season-relation-list",
  "app-season-episode-side-list",
  "app-video-player",
  "app-episode-intro",
  "app-episode-relation-list",
  "app-live-player"
];

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookies);

// set default config
Vue.$cookies.config("1d");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  computed: {},
  created: function() {
    /**
     * * Vue初始化時觸發
     */
    console.log("current env="+process.env.NODE_ENV);
    
    this.$store.commit(
      "setBaseURL",
      process.env.NODE_ENV === "production"
        ? process.env.PUBLIC_PATH
        : '/'
    );
  },
  mounted: function() {
    this.$bus.$on("trySearch", this.trySearch);
  },
  beforeDestroy: function() {
    this.$bus.$off("trySearch", this.trySearch);
  },
  watch: {
    $route(to, from) {
      /**
       * * router view變更時觸發
       */
    }
  },
  template: "<App/>",
  data: {
    loginName: "琪"
  },
  methods: {
    trySearch: function(text) {
      console.log("prev=" + this.$cookies.get("search"));
      console.log("current value:" + text);
      this.setCookie("search", text);
      if (text == "車廂") {
        // ! 跳轉車廂EP2
        router.push({ name: "Episode", params: { id: 600, ep: "ep2" } });
      } else if (text == "只是傷心無法延續") {
        // ! 跳轉BBS
        console.log("跳轉BBS");
        window.location.href = "https://jonjongao.github.io/jbv_dev/";
      } else if (text == "我是誰") {
        // ! 跳轉我是誰節目頁
        router.push({ name: "Season", params: { id: 200 } });
      } else if (text == "換你幫我了") {
        // ! 跳轉沈華的第一首詩彩蛋頁面
      }
    },
    setCookie: function(key, value) {
      console.log("set cookie[" + key + "]=" + value);
      var t = 10; // ! 以秒為單位
      this.$cookies.set(key, value, t);
    }
  }
});
