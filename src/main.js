// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueGtag from "vue-gtag";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./bus";
import store from "./store";
//import './assets/mobile/pttweb.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCookies from "vue-cookies";
import VueSimpleAlert from "vue-simple-alert";

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
  "app-live-player",
  "app-episode-side-list"
];

Vue.config.productionTip = false;
Vue.use(
  VueGtag,
  {
    config: { id: "GTM-MV5F6CW" },
    pageTrackerTemplate(to) {
      switch (to.name) {
        case "Season":
          return {
            page_title: to["meta"].trackedTitle + "_" + to["params"].id,
            page_path: to.path,
            page_location: window.location.href
          };
          break;
        case "Post":
          return {
            page_title: to["meta"].trackedTitle + "_" + to["params"].path,
            page_path: to.path,
            page_location: window.location.href
          };
          break;
        default:
          return {
            page_title: to["meta"].trackedTitle,
            page_path: to.path,
            page_location: window.location.href
          };
          break;
      }
    }
  },
  router
);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookies);
Vue.use(VueSimpleAlert);

import "./assets/css/ptsweb.css";
import "./assets/css/style.css";

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
    var a = window.location.href.split("/");
    var url = "";
    for (var i = 0; i < a.length - 2; i++) {
      if (i == 0) url += a[i] + "/";
      else url += a[i] + "/";
    }
    var base = url.slice(0, -1);

    //var base = window.location.href.slice(0, -3);

    this.$store.commit("setBaseURL", base);

    console.log("saved cookie:" + $cookies.keys());

    window.addEventListener("resize", this.onResize); // ! 監聽視窗縮放事件

    this.$bus.$on("resize", this.onResize);

    this.onResize();
  },
  mounted: function() {
    this.$bus.$on("trySearch", this.trySearch);
    this.$bus.$on("saveUnlock", this.saveUnlock);
  },
  beforeDestroy: function() {
    this.$bus.$off("trySearch", this.trySearch);
    this.$bus.$off("saveUnlock", this.saveUnlock);

    this.$bus.$off("resize", this.onResize);
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
      this.saveSearch(text);

      if (text == "我愛你") {
        // ! 跳轉車廂EP2
        //router.push({ name: "Episode", params: { id: 600, ep: "ep2" } });
        router.push({ name: "Season", params: { id: 7286 } });
      } else if (text == "國家感謝你") {
        router.push({ name: "Season", params: { id: 8000 } });
      } else if (text == "猴草路") {
        // ! 跳轉BBS
        console.log("跳轉BBS");
        window.location.href = "https://jonjongao.github.io/jbv_dev/";
      } else if (text == "我是誰") {
        // ! 跳轉我是誰節目頁
        router.push({ name: "Season", params: { id: 7256 } });
      } else if (text == "換你幫我了") {
        // ! 跳轉沈華的第一首詩彩蛋頁面
        // router.push({ name: "Post", params: { path: 'xn--guw421c' } });
        window.location.href = "https://imgur.com/gallery/A9FGe9G";
      } else if (text == "cookie.clean") {
        // ! 清除cookie
        this.$cookies.remove("search");
        this.$cookies.remove("unlock1");
        this.$cookies.remove("unlock2");
        this.$cookies.remove("unlock3");
      }
    },
    saveSearch: function(value) {
      this.setCookie("search", value);
    },
    saveUnlock: function(value) {
      var i = parseInt(value, 10);
      switch (i) {
        case 1:
          this.setCookie("unlock1", 1);
          break;
        case 2:
          this.setCookie("unlock2", 1);
          break;
        case 3:
          this.setCookie("unlock3", 1);
          break;
      }
    },
    setCookie: function(key, value) {
      console.log("set cookie[" + key + "]=" + value);
      var t = 600; // ! 以秒為單位
      this.$cookies.set(key, value, t);
    },
    onResize: function(e) {
      var w = window.innerWidth;
      var h = window.innerHeight;
      var m = false;
      if (w < 768) m = true;
      this.$store.commit("setWindowSize", [w, h, m]);
    }
  }
});
