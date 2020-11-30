<template>
  <main _ngcontent-c11="" class="video_page">
    <div _ngcontent-c11="" class="container">
      <div _ngcontent-c11="" class="row">
        <div _ngcontent-c11="" class="col-md-9">
          <!---->
          <h1 _ngcontent-c11="" class="series_name">{{ getMETA.title }}</h1>
        </div>
      </div>
    </div>

    <!---->
    <div _ngcontent-c11="" class="container">
      <div _ngcontent-c11="" class="row">
        <div _ngcontent-c11="" class="col-md-9">
          <app-video-player _ngcontent-c11="" _nghost-c12="">
            <div _ngcontent-c12="" class="page_cover_image" id="videoSection">
              <iframe
                width="825"
                height="464"
                src="https://www.youtube.com/embed/LGrpsZ7BsQA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <!--<video _ngcontent-c12="" id="AsiaPlayPlayer"></video>-->
            </div>
          </app-video-player>
          <app-episode-intro _ngcontent-c11="" _nghost-c13="">
            <!---->
            <!---->
            <div _ngcontent-c13="" class="page_action">
              <div _ngcontent-c13="">
                <div _ngcontent-c13="" class="play_frequency">
                  {{ getMETA.epNum }}
                </div>
              </div>
              <div _ngcontent-c13="">
                <span _ngcontent-c13="" class=""></span>
                <a _ngcontent-c13="" href="javascript:void(0)">
                  <div _ngcontent-c13="" class="btn_share"></div>
                </a>
                <div _ngcontent-c13="" class="label_graded graded_0"></div>
              </div>
            </div>

            <div _ngcontent-c13="" class="page_detail_info">
              <div _ngcontent-c13="" class="series_name">
                {{ getMETA.title }}
              </div>
              <div _ngcontent-c1="" class="series_description">
                {{ getMETA.desc }}
              </div>
              <!---->
              <div _ngcontent-c1="" class="series_direct">
                {{ getMETA.direct }}
              </div>
              <!---->
              <div _ngcontent-c1="" class="series_actor">
                {{ getMETA.actor }}
              </div>
              <ul _ngcontent-c1="" class="series_category">
                <!---->
                <li _ngcontent-c1="" v-for="c in getMETA.category" :key="c">
                  <a _ngcontent-c1="" href="javascript:void(0)">{{ c }}</a>
                </li>
              </ul>
            </div>
          </app-episode-intro>
        </div>
        <div
          _ngcontent-c11=""
          class="col-md-3 series_and_video_sidebar"
          style="max-height: 600px;"
        >
          <div _ngcontent-c11="" class="series_episode">
            <div _ngcontent-c11="" class="row">
              <h4 _ngcontent-c11="">選集</h4>
            </div>
            <div _ngcontent-c11="" class="row item_lists">
              <div _ngcontent-c11="" class="series_episode_btn_bar d-block">
                <ul _ngcontent-c11="">
                  <!---->
                  <li _ngcontent-c1="" class="active">
                    <a _ngcontent-c1="" href="javascript:void(0);">
                      {{ getSeasonMETA.active[0] }}
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
                  v-for="i in getSeasonMETA.item"
                  :key="i.id"
                >
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
        </div>
      </div>

      <div _ngcontent-c11="" class="row">
        <div _ngcontent-c11="" class="col-md-9">
          <div _ngcontent-c11="" class="series_tab_area">
            <ul _ngcontent-c11="" class="series_tab">
              <!---->
            </ul>
          </div>

          <app-episode-relation-list _ngcontent-c11="" _nghost-c15="">
            <div _ngcontent-c15="" class="series_tab_contnet">
              <div _ngcontent-c15="" class="item_lists video"></div>
            </div>
          </app-episode-relation-list>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "Episode",
  components: {},
  computed: {
    getMETA: function() {
      for (var i = 0; i < ctn.length; i++) {
        if (
          ctn[i].parent == this.$route.params.id &&
          ctn[i].id == this.$route.params.ep
        )
          return ctn[i];
      }
      return null;
    },
    getSeasonMETA: function() {
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
      else if (item.url == "/") return { name: "Home" };
      else
        return {
          name: "Episode",
          params: { id: this.getMETA.parent, ep: item.id }
        };
    }
  }
};
</script>

<style scoped></style>>
