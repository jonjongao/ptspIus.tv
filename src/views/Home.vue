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
              ctnErrorClass,
            ]"
          >
            限時賞味
          </li>
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(1, 2)"
            v-bind:class="[
              getRowIndex(1) == 2 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass,
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
              ctnErrorClass,
            ]"
          >
            兒少/生活
          </li>
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(2, 2)"
            v-bind:class="[
              getRowIndex(2) == 2 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass,
            ]"
          >
            追劇30分
          </li>
          <li
            _ngcontent-c5
            v-on:click="setRowIndex(2, 3)"
            v-bind:class="[
              getRowIndex(2) == 3 ? ctnActiveClass : ctnDeactiveClass,
              ctnErrorClass,
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
      <a _ngcontent-c5="">
        <div _ngcontent-c5="" class="row">
          <div _ngcontent-c5="" class="col-md-5">
            <router-link
              to="/live"
              tag="div"
              _ngcontent-c5=""
              class="img_hover_effect"
            >
              <img
                _ngcontent-c5=""
                :src="
                  getImgSrc(
                    '/static/WebListPage_WebListPage_公視直播_直播列表Web.jpg'
                  )
                "
                alt="金鸞之聲 網路直播 CL Live"
              />
            </router-link>
          </div>
          <div _ngcontent-c5="" class="col-md-7">
            <span _ngcontent-c5="" class="item_label"></span>
            <p _ngcontent-c5="" class="item_name">金鸞之聲 網路直播 CL Live</p>
            <p _ngcontent-c5="" class="item_description">
              開始時間: 2020/11/30 00:00
            </p>
            <p _ngcontent-c5="" class="item_description">
              金鸞+因部分節目無網路播出權，直播時段將依居民睡眠狀況和情緒波動進行調整~若有造成您的不便也請多包涵！若您在直播中有聽到雜訊或異常片段請不用擔心，很有可能是直播主在以趣味的方式推薦您另外一個優質節目，請仔細觀看聆聽，與我們共享金鸞美好時光。
            </p>
            <p _ngcontent-c5="" class="text-right pt-md-3">
              <router-link
                _ngcontent-c5=""
                class="btn btn-outline-primary"
                type="button"
                to="/live"
                tag="button"
              >
                立即前往
              </router-link>
            </p>
          </div>
        </div>
      </a>
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
    ShowList,
  },
  mounted: function () {
    if (this.$store.state.onboarding == false) {
      this.$fire({
        title: "關於金鸞+",
        html: "金鸞+是服務金鑾居民的優質影音串流平台，內容包含各類居民自製節目，提供您多樣的收視選擇，大幅提升您的觀影體驗。<br/><br/>使用之前，有一件事情請您再三牢記，任何找不到的節目，或是您認為重要的關鍵字，都可透過上方搜索鍵來一探究竟。<br/><br/>找到那三把記憶的鑰匙，您就會看到金鑾+悉心為您準備的獨家驚喜。",
        type: "info",
      }).then((r) => {
        // * 選擇同意
        this.$store.commit("setOnboarding", true);
      });
    }
  },
  computed: {},
  data: function () {
    return {
      ctn1: 1,
      ctn2: 1,
      ctnActiveClass: "tabbar_active",
      ctnDeactiveClass: "",
      ctnErrorClass: "",
    };
  },
  methods: {
    toPage: function (target) {
      this.$router.push({
        name: target,
      });
    },
    getImgSrc: function (src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    setRowIndex: function (row, index) {
      this.$store.commit("setRowVisit", [row, index]);
    },
    getRowIndex: function (row) {
      if (row == 1) return this.$store.state.rowLastVisit1;
      else if (row == 2) return this.$store.state.rowLastVisit2;
    },
  },
};
</script>

<style scoped></style>>
