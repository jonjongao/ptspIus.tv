<template>
  <main _ngcontent-c1="" class="article_page">
    <div _ngcontent-c1="" class="container">
      <div _ngcontent-c1="" class="row justify-content-center">
        <div _ngcontent-c1="" class="col-md-12">
          <h4 _ngcontent-c1="">{{ getMETA.title }}</h4>
          <div _ngcontent-c1="">
            <div v-if="getMETA.component == 'About'">
              <About />
            </div>
            <div v-else-if="getMETA.component == 'Terms'">
              <Terms />
            </div>
            <div v-else-if="getMETA.component == 'Secret'">
              <Secret />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import About from "@/components/about.vue";
import Terms from "@/components/terms.vue";
import Secret from "@/components/secret.vue";
export default {
  name: "Post",
  props: ["path"],
  components: {
    About,
    Terms,
    Secret
  },
  data: function() {
    return {};
  },
  computed: {
    getMETA: function() {
      // console.log("get meta");
      var db = this.$store.state.db_post;
      for (var i = 0; i < db.length; i++) {
        if (db[i].path == this.path) return db[i];
      }
      return null;
    }
  },
  methods: {
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    }
  }
};
</script>

<style scoped></style>>
