<template>
  <main _ngcontent-c1="" class="article_page">
    <div _ngcontent-c1="" class="container">
      <div _ngcontent-c1="" class="row justify-content-center">
        <div _ngcontent-c1="" class="col-md-12">
          <h4 _ngcontent-c1="">{{ getMETA.title }}</h4>
          <div _ngcontent-c1="" v-html="getMETA.text">
            <Terms/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

// import about from '../assets/about.md';
import Terams from '@/components/terms.vue';
export default {
  name: "Post",
  props: ["type"],
  components: {
      Terams
  },
  data: function() {
    return {};
  },
  computed: {
    getMETA: function() {
      var db = this.$store.state.db_post;
      for (var i = 0; i < db.length; i++) {
        if (db[i].type == this.type) return db[i];
      }
      return null;
    },
    // getAbout:function(){
    //     return about;
    // },
    // getTerms:function(){
    //     return terms;
    // }
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
