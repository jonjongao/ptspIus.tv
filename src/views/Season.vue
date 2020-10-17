<template>
  <main _ngcontent-c1="" class="series_page">
    <div _ngcontent-c1="" class="container">
      <div _ngcontent-c1="" class="row">
        <div _ngcontent-c1="" class="col-md-9">
          <!---->
          <h1 _ngcontent-c1="" class="series_name">{{ getMETA.title }}</h1>
        </div>
      </div>
    </div>
    <!---->
    <div _ngcontent-c1="" class="container">
      <div _ngcontent-c1="" class="row">
        <div _ngcontent-c1="" class="col-md-9">
          <div _ngcontent-c1="" class="page_cover_image">
            <img _ngcontent-c1="" :src="getImgSrc(getMETA.imgSrc)" :alt="getMETA.title" />
          </div>
          <div _ngcontent-c1="" class="page_action">
            <div _ngcontent-c1="">
              <div _ngcontent-c1="" class="publish_date">
                {{ getMETA.date }}
              </div>
              <div _ngcontent-c1="" class="episode_num">
                全 {{ getMETA.epNum }} 集
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
              v-html="getMETA.desc"
            >
              {{ getMETA.desc }}
            </div>
            <!---->
            <div _ngcontent-c1="" class="series_direct">
              {{ getMETA.direct }}
            </div>
            <!---->
            <div _ngcontent-c1="" class="series_actor">{{ getMETA.actor }}</div>
            <ul _ngcontent-c1="" class="series_category">
              <!---->
              <li _ngcontent-c1="" v-for="c in getMETA.category" :key="c">
                <a _ngcontent-c1="" href="javascript:void(0)">{{ c }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          _ngcontent-c1=""
          class="col-md-3 series_and_video_sidebar"
          style="max-height: 600px;"
        >
          <div _ngcontent-c1="" class="series_episode">
            <div _ngcontent-c1="" class="row">
              <h4 _ngcontent-c1="">選集</h4>
            </div>
            <div _ngcontent-c1="" class="row item_lists">
              <div _ngcontent-c1="" class="series_episode_btn_bar d-block">
                <ul _ngcontent-c1="">
                  <!---->
                  <li _ngcontent-c1="" class="active">
                    <a _ngcontent-c1="" href="javascript:void(0);">
                      {{ getMETA.active[0] }}
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
                <div _ngcontent-c3="" v-for="i in getMETA.item" :key="i.id">
                  <router-link _ngcontent-c3="" :to="getEpisodeURL(i)">
                    <div _ngcontent-c3="" class="img_hover_effect">
                      <img _ngcontent-c3="" :src="i.src" :alt="i.name" />
                    </div>
                    <div _ngcontent-c3="" class="item_info">
                      <p _ngcontent-c3="" class="item_name_override">
                        {{ i.name }}
                      </p>
                    </div>
                  </router-link>
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
            style="margin: 0px auto;"
            id="div-gpt-ad-1536305061365-0"
          >
            <div
              id="google_ads_iframe_/21623531013/CP_TEST_0__container__"
              style="border: 0pt none; width: 320px; height: 50px;"
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
import ctn from "../assets/season.json";
export default {
  name: "Season",
  components: {},
  computed: {
    getMETA: function() {
      for (var i = 0; i < ctn.length; i++) {
        if (ctn[i].id == this.$route.params.id) return ctn[i];
      }
      return null;
    }
  },
  data: function() {
    return {
      show: ctn
    };
  },
  methods: {
    // ! item = season.item
    getEpisodeURL: function(item) {
      if (item.url == "javascript:void(0)" || item.url == "#")
        return "/season/" + this.$route.params.id;
      else
        return {
          name: "Episode",
          params: { id: this.getMETA.id, ep: item.id }
        };
    },
    getImgSrc: function(src) {

      if (src.includes("http")) return src;
      else
        return process.env.NODE_ENV === "production"
          ? process.env.PUBLIC_PATH + src
          : '/' + src;
    }
  }
};
</script>

<style scoped></style>>
