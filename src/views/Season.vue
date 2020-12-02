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
              :src="getYt"
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

              <div _ngcontent-c1="" class="btn_share"></div>

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
      // console.log("can't find id:" + this.id);
      return null;
    },
    isParent: function () {
      if (this.getMETA.parent == "") return true;
      else return false;
    },
    getParentMETA: function () {
      switch (this.id) {
        case 7260:
          // console.log("從 我是誰EP7 所謂的遠方 解鎖線索1");
          this.$store.commit("setUnlock", [1, true]);
          this.$bus.$emit("saveUnlock", 1);
          break;
        case 7286:
          // console.log("從 車廂EP2：掙扎 解鎖線索2");
          this.$store.commit("setUnlock", [2, true]);
          this.$bus.$emit("saveUnlock", 2);
          break;
      }

      if (this.isParent) {
        // console.log("parent page");
        return this.getMETA;
      } else {
        // console.log("child page");
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
    getYt: function () {
      for (var i = 0; i < this.$store.state.db_yt.length; i++) {
        var id = parseInt(this.$store.state.db_yt[i]["id"]);
        if (id == this.id) {
          // console.log(this.$store.state.db_yt[i]["yt_url"]);
          return this.$store.state.db_yt[i]["yt_url"]+"?rel=0";
        }
      }
      return null;
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
        // console.log("avoid nav same page");
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
