<template>
  <main
    _ngcontent-c1=""
    v-bind:class="[isParent ? 'series_page' : 'video_page']"
  >
    <div _ngcontent-c1="" class="container">
      <div _ngcontent-c1="" class="row">
        <div _ngcontent-c1="" class="col-md-9">
          <!---->
          <h1 _ngcontent-c1="" class="series_name">{{ getMETA.name }}</h1>
        </div>
      </div>
    </div>
    <!---->
    <div _ngcontent-c1="" class="container">
      <div _ngcontent-c1="" class="row">
        <div _ngcontent-c1="" class="col-md-9">
          <div _ngcontent-c1="" class="page_cover_image">
            <img
              _ngcontent-c1=""
              :src="getImgSrc(getMETA.src)"
              :alt="getMETA.name"
            />
            <iframe
              v-if="isParent == false"
              class="overlay"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LGrpsZ7BsQA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div _ngcontent-c1="" class="page_action">
            <div _ngcontent-c1="">
              <div _ngcontent-c1="" class="publish_date" v-if="isParent">
                {{ getMETA.date }}
              </div>
              <div _ngcontent-c1="" class="episode_num">
                {{ getMETA.episode }}
              </div>
            </div>
            <div _ngcontent-c1="">
              <span _ngcontent-c1="" class=""></span>

              <a _ngcontent-c1="" href="javascript:void(0)">
                <div _ngcontent-c1="" class="btn_share"></div>
              </a>

              <div _ngcontent-c1="" class="btn_favorite"></div>
            </div>
          </div>

          <div _ngcontent-c1="" class="page_detail_info">
            <div
              _ngcontent-c1=""
              class="series_description"
              v-html="getMETA.description"
            >
              {{ getMETA.description }}
            </div>
            <!---->
            <div _ngcontent-c1="" class="series_direct">
              {{ getMETA.direct }}
            </div>
            <!---->
            <div _ngcontent-c1="" class="series_actor">{{ getMETA.actor }}</div>
            <ul _ngcontent-c1="" class="series_category">
              <!---->
              <li
                _ngcontent-c1=""
                v-for="(c, index) in getMETA.category"
                :key="index"
              >
                <a _ngcontent-c1="" href="javascript:void(0)">{{ c }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          _ngcontent-c1=""
          class="col-md-3 series_and_video_sidebar"
          style="max-height: 600px"
        >
          <div _ngcontent-c1="" class="series_episode">
            <div _ngcontent-c1="" class="row">
              <h4 _ngcontent-c1="">選集</h4>
            </div>
            <div _ngcontent-c1="" class="row item_lists">
              <div _ngcontent-c1="" class="series_episode_btn_bar d-block">
                <ul _ngcontent-c1="">
                  <!---->
                  <li
                    _ngcontent-c1=""
                    v-bind:class="[episode_tab == index ? 'active' : '']"
                    v-for="(i, index) in getParentMETA.active"
                    :key="index"
                  >
                    <a
                      _ngcontent-c1=""
                      href="javascript:void(0);"
                      v-on:click="episode_tab = index"
                    >
                      {{ i.label }}
                    </a>
                  </li>
                </ul>
              </div>
              <app-season-episode-side-list
                _ngcontent-c1=""
                style="width: 100%"
                _nghost-c3=""
                ><!----><!---->
                <!---->
                <div
                  _ngcontent-c3=""
                  v-for="(i, index) in getParentMETA.active[this.episode_tab]
                    .items"
                  :key="index"
                >
                  <a
                    _ngcontent-c3=""
                    v-on:click.prevent="checkClick($event, i.id)"
                    :href="isLockedSeason ? 'javascript:void(0)' : getUrl(i.id)"
                  >
                    <div _ngcontent-c3="" class="img_hover_effect">
                      <img
                        _ngcontent-c3=""
                        :src="getImgSrc(i.src)"
                        :alt="i.name"
                      />
                    </div>
                    <div _ngcontent-c3="" class="item_info">
                      <p _ngcontent-c3="" class="item_name_override">
                        {{ i.name }}
                      </p>
                    </div>
                  </a>
                </div>
              </app-season-episode-side-list>
            </div>
          </div>
          <!---->
        </div>
      </div>
      <div _ngcontent-c1="" class="row">
        <div _ngcontent-c1="" class="col-md-9">
          <div _ngcontent-c1="" class="series_tab_area">
            <ul _ngcontent-c1="" class="series_tab">
              <!---->
            </ul>
          </div>
          <app-season-relation-list _ngcontent-c1="" _nghost-c4=""
            ><div _ngcontent-c4="" class="series_tab_contnet">
              <div _ngcontent-c4="" class="item_lists video">
                <!---->
              </div>
            </div>
          </app-season-relation-list>
        </div>
      </div>
    </div>

    <app-google-ad-manager _ngcontent-c1="">
      <div class="container">
        <div class="row">
          <div
            class="ad-container-used"
            style="margin: 0px auto"
            id="div-gpt-ad-1536305061365-0"
          >
            <div
              id="google_ads_iframe_/21623531013/CP_TEST_0__container__"
              style="border: 0pt none; width: 320px; height: 50px"
            ></div>
          </div>
        </div>
      </div>
    </app-google-ad-manager>

    <div
      _ngcontent-c1=""
      aria-hidden="true"
      aria-labelledby="popupModalLabel"
      class="modal fade"
      id="popupModal"
      role="dialog"
      tabindex="-1"
    >
      <div _ngcontent-c1="" class="modal-dialog" role="document">
        <div _ngcontent-c1="" class="modal-content">
          <div _ngcontent-c1="" class="modal-header">
            <h5 _ngcontent-c1="" class="modal-title" id="popupModalLabel">
              我的收藏
            </h5>
            <button
              _ngcontent-c1=""
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
            >
              <span _ngcontent-c1="" aria-hidden="true"></span>
            </button>
          </div>
          <div _ngcontent-c1="" class="modal-body">
            <p _ngcontent-c1=""></p>
          </div>
          <div _ngcontent-c1="" class="modal-footer">
            <a
              _ngcontent-c1=""
              class="btn btn-outline-primary"
              data-dismiss="modal"
              type="button"
              >確定</a
            >
          </div>
        </div>
      </div>
    </div>

    <div
      _ngcontent-c1=""
      aria-hidden="true"
      aria-labelledby="popupModalLabel"
      class="modal fade"
      id="popupModalError"
      role="dialog"
      tabindex="-1"
    >
      <div _ngcontent-c1="" class="modal-dialog" role="document">
        <div _ngcontent-c1="" class="modal-content">
          <div _ngcontent-c1="" class="modal-header">
            <h5 _ngcontent-c1="" class="modal-title" id="popupModalLabel">
              警告
            </h5>
          </div>
          <div _ngcontent-c1="" class="modal-body">
            <p _ngcontent-c1=""></p>
          </div>
          <div _ngcontent-c1="" class="modal-footer">
            <button
              _ngcontent-c1=""
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
export default {
  name: "Season",
  props: ["id"],
  components: {},
  created: function () {},
  computed: {
    getMETA: function () {
      var db2 = this.$store.state.db_season2;
      for (var i = 0; i < db2.length; i++) {
        if (db2[i].id == this.id) return db2[i];
      }
      var db = this.$store.state.db_season;
      for (var i = 0; i < db.length; i++) {
        if (db[i].id == this.id) return db[i];
      }
      console.log("can't find id:" + this.id);
      return null;
    },
    isParent: function () {
      if (this.getMETA.parent == "") return true;
      else return false;
    },
    getParentMETA: function () {
      switch (this.id) {
        case 7260:
          console.log("從 我是誰EP7 所謂的遠方 解鎖線索1");
          this.$store.commit("setUnlock",[1,true]);
          break;
        case 7286:
          console.log("從 車廂EP2：掙扎 解鎖線索2");
          this.$store.commit("setUnlock",[2,true]);
          break;
      }

      if (this.isParent) {
        console.log("parent page");
        return this.getMETA;
      } else {
        console.log("child page");
        var db2 = this.$store.state.db_season2;
        for (var i = 0; i < db2.length; i++) {
          if (db2[i].id == this.getMETA.parent) return db2[i];
        }
        var db = this.$store.state.db_season;
        for (var i = 0; i < db.length; i++) {
          if (db[i].id == this.getMETA.parent) {
            return db[i];
          }
        }
      }
    },
    isLockedSeason: function () {
      var i = parseInt(this.getParentMETA.id);
      switch (i) {
        case 7061:
        case 7171:
        case 7080:
          return true;
        default:
          return false;
      }
    },
  },
  data: function () {
    return {
      episode_tab: 0,
    };
  },
  methods: {
    // ! item = season.item
    getImgSrc: function (src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    checkClick: function (e, value) {
      if (this.isLockedSeason) {
        return;
      }
      if (this.id == value) {
        console.log("avoid nav same page");
        return;
      }
      this.$router.push({
        name: "Season",
        params: { id: value },
      });
    },
    getUrl: function (id) {
      return "#/season/" + id;
    },
  },
};
</script>

<style scoped></style>>
