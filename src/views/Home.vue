<template>
  <main _ngcontent-c5="" class="home_page">
    <Carousel />
    <Recommend />
    <!---->
    <div _ngcontent-c5="" class="container curating">
      <div _ngcontent-c5="" class="row">
        <h3 _ngcontent-c5="">熱門推薦</h3>
      </div>
      <div _ngcontent-c5="" class="row curating_tabbar">
        <ul _ngcontent-c5="">
          <!---->
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(1, 1)"
            v-bind:class="[
              getRowIndex(1) == 1 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass
            ]"
          >
            限時賞味
          </li>
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(1, 2)"
            v-bind:class="[
              getRowIndex(1) == 2 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass
            ]"
          >
            追劇追不完
          </li>
        </ul>
      </div>
      <!---->
      <div v-if="getRowIndex(1) == 1">
        <ShowList type="1" />
        <!--<%- partial('_partial/ctn1_1', null, {cache: !config.relative_link}) %>-->
      </div>
      <div v-if="getRowIndex(1) == 2">
        <ShowList type="2" />
        <!--<%- partial('_partial/ctn1_2', null, {cache: !config.relative_link}) %>-->
      </div>
    </div>
    <!---->
    <div _ngcontent-c5="" class="container curating">
      <div _ngcontent-c5="" class="row">
        <h3 _ngcontent-c5="">精彩時刻</h3>
      </div>
      <div _ngcontent-c5="" class="row curating_tabbar">
        <ul _ngcontent-c5="">
          <!---->
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(2, 1)"
            v-bind:class="[
              getRowIndex(2) == 1 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass
            ]"
          >
            兒少/生活
          </li>
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(2, 2)"
            v-bind:class="[
              getRowIndex(2) == 2 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass
            ]"
          >
            追劇30分
          </li>
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(2, 3)"
            v-bind:class="[
              getRowIndex(2) == 3 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass
            ]"
          >
            藝文/紀錄
          </li>
        </ul>
      </div>
      <!---->
      <div v-if="getRowIndex(2) == 1">
        <ShowList type="3" />
        <!--<%- partial('_partial/ctn2_1', null, {cache: !config.relative_link}) %>-->
      </div>
      <div v-if="getRowIndex(2) == 2">
        <ShowList type="4" />
        <!--<%- partial('_partial/ctn2_2', null, {cache: !config.relative_link}) %>-->
      </div>
      <div v-if="getRowIndex(2) == 3">
        <ShowList type="5" />
        <!--<%- partial('_partial/ctn2_3', null, {cache: !config.relative_link}) %>-->
      </div>
    </div>
    <!---->
    <div _ngcontent-c5="" class="container live_series live_now">
      <router-link _ngcontent-c5="" to="/live">
        <div _ngcontent-c5="" class="row">
          <div _ngcontent-c5="" class="col-md-5">
            <div _ngcontent-c5="" class="img_hover_effect">
              <img
                _ngcontent-c5=""
                :src="
                  getImgSrc(
                    '/static/WebListPage_WebListPage_公視直播_直播列表Web.jpg'
                  )
                "
                alt="公共電視 網路直播 PTS Live"
              />
            </div>
          </div>
          <div _ngcontent-c5="" class="col-md-7">
            <span _ngcontent-c5="" class="item_label"></span>
            <p _ngcontent-c5="" class="item_name">公共電視 網路直播 PTS Live</p>
            <p _ngcontent-c5="" class="item_description">
              開始時間: 2018/07/30 00:00
            </p>
            <p _ngcontent-c5="" class="item_description">
              公共電視因部分節目無網路播出權，直播時段將依授權狀況進行調整~若有造成您的不便也請多包涵！
              網路直播節目表 https://goo.gl/4B0P3R
            </p>
            <p _ngcontent-c5="" class="text-right pt-md-3">
              <button
                _ngcontent-c5=""
                class="btn btn-outline-primary"
                type="button"
              >
                立即前往
              </button>
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <br _ngcontent-c5="" />
    <div
      _ngcontent-c5=""
      aria-hidden="true"
      aria-labelledby="popupModalLabel"
      class="modal fade"
      id="popupModalError"
      role="dialog"
      tabindex="-1"
    >
      <div _ngcontent-c5="" class="modal-dialog" role="document">
        <div _ngcontent-c5="" class="modal-content">
          <div _ngcontent-c5="" class="modal-header">
            <h5 _ngcontent-c5="" class="modal-title" id="popupModalLabel">
              警告
            </h5>
          </div>
          <div _ngcontent-c5="" class="modal-body">
            <p _ngcontent-c5=""></p>
          </div>
          <div _ngcontent-c5="" class="modal-footer">
            <button
              _ngcontent-c5=""
              class="btn btn-outline-primary"
              data-dismiss="modal"
              data-toggle="modal"
              type="button"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from "@/components/carousel.vue";
import Recommend from "@/components/recommend.vue";
import ShowList from "@/components/showlist.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    Recommend,
    ShowList
  },
  computed: {},
  data: function() {
    return {
      ctn1: 1,
      ctn2: 1,
      ctnActiveClass: "tabbar_active",
      ctnDeactiveClass: "",
      ctnErrorClass: ""
    };
  },
  methods: {
    toPage: function(target) {
      this.$router.push({
        name: target
      });
    },
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    setRowIndex: function(row, index) {
      this.$store.commit("setRowVisit", [row, index]);
    },
    getRowIndex: function(row) {
      if (row == 1) return this.$store.state.rowLastVisit1;
      else if (row == 2) return this.$store.state.rowLastVisit2;
    }
  }
};
</script>

<style scoped></style>>
