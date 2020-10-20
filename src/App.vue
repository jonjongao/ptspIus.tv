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
import Header from "@/components/app_header.vue";
import Footer from "@/components/app_footer.vue";
export default {
  db_home: home,
  db_season: season,
  name: "App",
  created: function() {
    this.$store.commit("setHomeDatabase", this.$options.db_home);
    this.$store.commit("setSeasonDatabase", this.$options.db_season);
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
