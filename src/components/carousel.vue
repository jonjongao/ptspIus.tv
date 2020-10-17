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
        v-for="s in getCarousel"
        :key="s.id"
        :class="s.id == 100 ? 'carousel-item active' : 'carousel-item'"
      >
        <router-link
          _ngcontent-c1=""
          :to="{ name: 'Season', params: { id: s.id } }"
        >
          <div _ngcontent-c1="" class="carousel_image_crop">
            <img
              _ngcontent-c1=""
              class="d-block w-100"
              :src="getImgSrc(s.imgSrc)"
              :alt="s.title"
            />
          </div>
          <div _ngcontent-c1="" class="carousel-caption">
            <div _ngcontent-c1="">
              <h5 _ngcontent-c1="">{{ s.title }}</h5>

              <p _ngcontent-c1="" v-html="s.caption">
                {{ s.caption }}
              </p>
            </div>
          </div>
        </router-link>
        <!--
        <a _ngcontent-c1="">
          <div _ngcontent-c1="" class="carousel-caption">
            <div _ngcontent-c1="">
              <h5 _ngcontent-c1="">{{ s.title }}</h5>

              <p _ngcontent-c1="" v-html="s.caption">
                {{ s.caption }}
              </p>
            </div>
          </div>
        </a>
        -->
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
import ctn from "../assets/season.json";
export default {
  name: "Carousel",
  computed: {
    getCarousel: function() {
      var posts = [];
      for (var i = 0; i < this.show.length; i++) {
        if (this.isCarousel(this.show[i].id)) {
          posts.push(this.show[i]);
        }
      }
      return posts;
    }
  },
  data: function() {
    return {
      show: ctn
    };
  },
  methods: {
    isCarousel: function(id) {
      var i = parseInt(id, 10);
      switch (i) {
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
          return true;
          break;
      }
      return false;
    },
    isID: function(id) {
      var i = parseInt(id, 10);
      return true;
    },
    getImgSrc: function(src) {

      if (src.includes("http")) return src;
      else
        return this.$store.state.base + src;
    }
  }
};
</script>

<style scoped>
.carousel-caption p {
  white-space: pre-wrap;
}
</style>
