<template>
  <div
    _ngcontent-c5=""
    class="carousel slide carousel-fade"
    data-ride="carousel"
    id="pts_carsusel"
  >
    <ol _ngcontent-c5="" class="carousel-indicators">
      <!---->
      <li
        _ngcontent-c5=""
        data-target="#pts_carsusel"
        class="active"
        data-slide-to="0"
      ></li>
      <li
        _ngcontent-c5=""
        data-target="#pts_carsusel"
        data-slide-to="1"
        class=""
      ></li>
      <li _ngcontent-c5="" data-target="#pts_carsusel" data-slide-to="2"></li>
      <li _ngcontent-c5="" data-target="#pts_carsusel" data-slide-to="3"></li>
      <li _ngcontent-c5="" data-target="#pts_carsusel" data-slide-to="4"></li>
    </ol>
    <div _ngcontent-c5="" class="carousel-inner">
      <div
        _ngcontent-c1=""
        v-for="(c, index) in listCarousel"
        :key="c.id"
        :class="index == 0 ? 'carousel-item active' : 'carousel-item'"
      >
        <router-link _ngcontent-c1="" :to="getSeasonUrl(c.id)">
          <div _ngcontent-c1="" class="carousel_image_crop">
            <img
              _ngcontent-c1=""
              class="d-block w-100"
              :src="getImgSrc(c.src)"
              :alt="c.name"
            />
          </div>
          <div _ngcontent-c1="" class="carousel-caption">
            <div _ngcontent-c1="">
              <h5 _ngcontent-c1="">{{ c.name }}</h5>

              <p _ngcontent-c1="" v-html="c.caption">
                {{ c.caption }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <a
      _ngcontent-c5=""
      class="carousel-control-prev"
      data-slide="prev"
      href="#pts_carsusel"
      role="button"
    >
      <span
        _ngcontent-c5=""
        aria-hidden="true"
        class="carousel-control-prev-icon"
      ></span>
      <span _ngcontent-c5="" class="sr-only">Previous</span>
    </a>
    <a
      _ngcontent-c5=""
      class="carousel-control-next"
      data-slide="next"
      href="#pts_carsusel"
      role="button"
    >
      <span
        _ngcontent-c5=""
        aria-hidden="true"
        class="carousel-control-next-icon"
      ></span>
      <span _ngcontent-c5="" class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  computed: {
    listCarousel: function() {
      if ("carousel" in this.$store.state.db_home) {
        return this.$store.state.db_home["carousel"];
      }
      return [];
    }
  },
  data: function() {
    return {};
  },
  methods: {
    isID: function(id) {
      var i = parseInt(id, 10);
      return true;
    },
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    getSeasonUrl: function(value) {
      if (value == 104) return { name: "Season", params: { id: 4000 } };
      else return { name: "Season", params: { id: value } };
    }
  }
};
</script>

<style scoped>
.carousel-caption p {
  white-space: pre-wrap;
}
</style>
