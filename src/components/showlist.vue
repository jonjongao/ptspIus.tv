<template>
  <div _ngcontent-c1="" class="curating_block d-block">
    <div _ngcontent-c1="" class="row">
      <h3 _ngcontent-c1="">
        <a _ngcontent-c1="" href="/banner-more/BANNER_04">限時賞味</a>
      </h3>
    </div>
    <div _ngcontent-c1="" class="row item_lists series">
      <!--
        <div _ngcontent-c1="">
        <a _ngcontent-c1="" appseasonlink="" href="javascript:void(0)">
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" src="-------------" alt="甜心兔" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">甜心兔</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 174 集</p>
          </div>
        </a>
      </div>
      -->
      <div v-for="s in getListByType" :key="s.id">
        <a _ngcontent-c1="" appseasonlink="" :href="s.url">
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img _ngcontent-c1="" :src="s.imgSrc" :alt="s.title" />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ s.title }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ s.note }}</p>
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
import ctn from "../assets/ctn.json";
export default {
  name: "ShowList",
  props: ["type"],
  components: {},
  computed: {
    getListByType: function () {
      var posts = [];
      for (var i = 0; i < this.show.length; i++) {
        if (this.isType(this.show[i].id)) {
          posts.push(this.show[i]);
        }
      }
      return posts;
    },
  },
  data: function () {
    return {
      show: ctn,
    };
  },
  methods: {
    isType: function (id) {
      var t = parseInt(this.type, 10);
      var i = parseInt(id, 10);
      if (t == 1) {
        switch (i) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 21:
          case 8:
          case 9:
            return true;
            break;
        }
      } else if (t == 2) {
        switch (i) {
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
            return true;
            break;
        }
      } else if (t == 3) {
        switch (i) {
          case 8:
          case 23:
          case 24:
          case 10:
          case 25:
          case 26:
          case 27:
          case 28:
          case 29:
          case 30:
            return true;
            break;
        }
      } else if (t == 4) {
        switch (i) {
          case 32:
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 49:
            return true;
            break;
        }
      } else if (t == 5) {
        switch (i) {
          case 21:
          case 41:
          case 42:
          case 43:
          case 9:
          case 44:
          case 45:
          case 46:
          case 5:
          case 47:
            return true;
            break;
        }
      }

      return false;
    },
  },
};
</script>

<style scoped></style>>
