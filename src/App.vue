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
import Header from "@/components/app_header.vue";
import Footer from "@/components/app_footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

</style>