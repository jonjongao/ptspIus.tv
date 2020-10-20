<template>
  <div _ngcontent-c5="" class="container-fluid new_recommend">
    <div _ngcontent-c5="" class="row item_lists">
      <!---->
      <div _ngcontent-c5="" v-for="r in listRecommend" :key="r.id">
        <router-link
          _ngcontent-c5=""
          appseasonlink=""
          :to="{ name: 'Season', params: { id: r.id } }"
        >
          <div _ngcontent-c5="" class="img_hover_effect">
            <p _ngcontent-c5="" class="item_episode">{{ r.episode }}</p>
            <span _ngcontent-c5="" class=""></span>
            <img
              _ngcontent-c5=""
              :src="getImgSrc(r.src)"
              :alt="r.name"
            />
          </div>
          <div _ngcontent-c5="" class="item_info">
            <p _ngcontent-c5="" class="item_name">
              {{ r.name }}
            </p>

            <p _ngcontent-c5="" class="item_description">{{ r.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  computed:{
    listRecommend: function() {
      if ("new_recommend" in this.$store.state.db_home) {
        return this.$store.state.db_home["new_recommend"];
      }
      return [];
    },
  },
  methods: {
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    }
  }
};
</script>

<style scoped></style>
