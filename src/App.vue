<template>
  <div id="app">
    <app-root _nghost-c0="" ng-version="5.2.11">
      <app-home _nghost-c5="">
        <Header loginName="琪" />
        <router-view></router-view>
        <Footer />
      </app-home>
    </app-root>
  </div>
</template>

<script>
import home from "./assets/home.json";
import season from "./assets/db.json";
import season2 from "./assets/db2.json";
import post from "./assets/post.json";
import yt from "./assets/yt.json";
import Header from "@/components/app_header.vue";
import Footer from "@/components/app_footer.vue";
export default {
  db_home: home,
  db_season: season,
  db_season2: season2,
  db_post: post,
  db_yt: yt,
  name: "App",
  metaInfo() {
        return { 
            title: "金鸞+｜金鸞OTT影音平台",
            meta: [
                { name: 'description', content: '金鸞+是金鸞線上串流服務首選的OTT影音平台，公視台劇《返校》隨播線上看。金鸞OTT包含高畫質影集、金鸞之聲，精選電視劇、熱門直播、獨家彩蛋，讓你追劇不間斷。'},
                { property: 'og:title', content: "金鸞+｜金鸞OTT影音平台"},
                { property: 'og:description', content: "金鸞+是金鸞線上串流服務首選的OTT影音平台，公視台劇《返校》隨播線上看。金鸞OTT包含高畫質影集、金鸞之聲，精選電視劇、熱門直播、獨家彩蛋，讓你追劇不間斷。"},
                { name: 'robots', content: 'index,follow'} 
            ]
        }
  },
  created: function() {
    this.$store.commit("setDBs", [this.$options.db_home,
    this.$options.db_season,
    this.$options.db_season2,
    this.$options.db_post,
    this.$options.db_yt]);
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
