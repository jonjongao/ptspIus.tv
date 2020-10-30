<template>
  <div _ngcontent-c1="" class="curating_block d-block">
    <div _ngcontent-c1="" class="row">
      <h3 _ngcontent-c1="">
        <a _ngcontent-c1="" href="/banner-more/BANNER_04">限時賞味</a>
      </h3>
    </div>
    <div v-if="this.type == 1" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="" v-for="s in listSeries[0].items" :key="s.id">
        <a
          _ngcontent-c1=""
          appseasonlink=""
          v-on:click.prevent="checkClick($event, s.id)"
          :href="getUrl(s.id)"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" :src="getImgSrc(s.src)" :alt="s.name" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ s.name }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ s.episode }}</p>
          </div>
        </a>
      </div>
    </div>
    <div v-if="this.type == 2" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="" v-for="s in listSeries[1].items" :key="s.id">
        <a
          _ngcontent-c1=""
          appseasonlink=""
          v-on:click.prevent="checkClick($event, s.id)"
          :href="getUrl(s.id)"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" :src="getImgSrc(s.src)" :alt="s.name" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ s.name }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ s.episode }}</p>
          </div>
        </a>
      </div>
    </div>
    <div v-if="this.type == 3" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="" v-for="s in listSeries[2].items" :key="s.id">
        <a
          _ngcontent-c1=""
          appseasonlink=""
          v-on:click.prevent="checkClick($event, s.id)"
          :href="getUrl(s.id)"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" :src="getImgSrc(s.src)" :alt="s.name" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ s.name }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ s.episode }}</p>
          </div>
        </a>
      </div>
    </div>
    <div v-if="this.type == 4" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="" v-for="s in listSeries[3].items" :key="s.id">
        <a
          _ngcontent-c1=""
          appseasonlink=""
          v-on:click.prevent="checkClick($event, s.id)"
          :href="getUrl(s.id)"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" :src="getImgSrc(s.src)" :alt="s.name" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ s.name }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ s.episode }}</p>
          </div>
        </a>
      </div>
    </div>
    <div v-if="this.type == 5" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="" v-for="s in listSeries[4].items" :key="s.id">
        <a
          _ngcontent-c1=""
          appseasonlink=""
          v-on:click.prevent="checkClick($event, s.id)"
          :href="getUrl(s.id)"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" :src="getImgSrc(s.src)" :alt="s.name" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ s.name }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ s.episode }}</p>
          </div>
        </a>
      </div>
    </div>
    <div _ngcontent-c1="" class="row">
      <a _ngcontent-c1="" class="see_more disabled_href">看更多&gt;&gt;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowList",
  props: ["type"],
  components: {},
  created: function() {},
  computed: {
    listSeries: function() {
      if ("series" in this.$store.state.db_home) {
        return this.$store.state.db_home["series"];
      }
      return [];
    },
    hasUnlock1: function() {
      return this.$store.state.paymentUnlocked.includes(1);
    },
    hasUnlock2: function() {
      return this.$store.state.paymentUnlocked.includes(2);
    },
    hasUnlock3: function() {
      return this.$store.state.paymentUnlocked.includes(3);
    }
  },
  data: function() {
    return {};
  },
  methods: {
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    isPass: function(id) {
      var i = parseInt(id);
      switch (i) {
        case 7061:
          return this.hasUnlock1;
        case 7171:
          return this.hasUnlock2;
        case 7080:
          return this.hasUnlock3;
        default:
          return true;
      }
      return true;
    },
    checkClick: function(e, id) {
      if (this.isPass(id)) {
        this.$router.push({ name: "Season", params: { id: id } });
      } else alert("尚未解鎖該節目!");
    },
    getUrl: function(id) {
      return "#/season/" + id;
    }
  }
};
</script>

<style scoped></style>>
