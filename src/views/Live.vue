<template>
  <main _ngcontent-c5="" class="video_page">
    <div _ngcontent-c5="" class="container">
      <div _ngcontent-c5="" class="row">
        <div _ngcontent-c5="" class="col-md-9">
          <h1 _ngcontent-c5="" class="series_name">救救我... Live</h1>
        </div>
      </div>
    </div>
    <div _ngcontent-c5="" class="container">
      <div _ngcontent-c5="" class="row">
        <div _ngcontent-c5="" class="col-md-9">
          <app-live-player _ngcontent-c5="" _nghost-c6="">
            <div _ngcontent-c6="" class="page_cover_image" id="videoSection">
              <!-- <div _ngcontent-c6="" class="btn_play" id="btn_play_icon"></div> -->
              <img
                _ngcontent-c6=""
                :src="
                  getImgSrc(
                    'static/WebListPage_WebListPage_公視直播_直播列表Web.jpg'
                  )
                "
                alt="金鸞之聲 網路直播 CL Live"
              />

              <iframe
                class="overlay"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kjf6R35sHaA?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div
              _ngcontent-c6=""
              aria-hidden="true"
              aria-labelledby="popupModalLabel"
              class="modal fade"
              id="popupModal"
              role="dialog"
              tabindex="-1"
            >
              <div _ngcontent-c6="" class="modal-dialog" role="document">
                <div _ngcontent-c6="" class="modal-content">
                  <div _ngcontent-c6="" class="modal-header">
                    <h5
                      _ngcontent-c6=""
                      class="modal-title"
                      id="popupModalLabel"
                    >
                      尚未開始
                    </h5>
                    <button
                      _ngcontent-c6=""
                      aria-label="Close"
                      class="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span _ngcontent-c6="" aria-hidden="true"></span>
                    </button>
                  </div>
                  <div _ngcontent-c6="" class="modal-body">
                    <p _ngcontent-c6="">開始時間: 2020/11/30 00:00</p>
                  </div>
                  <div _ngcontent-c6="" class="modal-footer">
                    <button
                      _ngcontent-c6=""
                      class="btn btn-outline-primary"
                      data-dismiss="modal"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </app-live-player>
          <div _ngcontent-c5="" class="page_action">
            <div _ngcontent-c5="">
              <div _ngcontent-c5="" class="series_description">
                開始時間: 2020/11/30 00:00
              </div>
            </div>
            <div _ngcontent-c5="">
              <a _ngcontent-c5="" href="javascript:void(0)" target="popup">
                <div _ngcontent-c5="" class="btn_share"></div>
              </a>
              <div _ngcontent-c5="" class="label_graded graded_0"></div>
            </div>
          </div>
          <div _ngcontent-c5="" class="page_detail_info">
            <div _ngcontent-c5="" class="series_description">
              金鸞+因部分節目無網路播出權，直播時段將依居民睡眠狀況和情緒波動進行調整~若有造成您的不便也請多包涵！若您在直播中有聽到雜訊或異常片段請不用擔心，很有可能是直播主在以趣味的方式著重推薦您另外一個優質節目，聽到關鍵字都可以搜尋金鸞+，更多好節目等著您，請仔細觀看聆聽，與我們共享金鸞美好時光。
            </div>
          </div>
        </div>

        <div
          _ngcontent-c5=""
          class="col-md-3 series_and_video_sidebar"
          style="max-height: 600px"
        >
          <div _ngcontent-c5="" class="live_videos">
            <div _ngcontent-c5="" class="row">
              <h4 _ngcontent-c5="">直播節目</h4>
            </div>

            <div _ngcontent-c5="" class="row item_lists">
              <!---->
              <div _ngcontent-c5="">
                <router-link _ngcontent-c5="" :to="{ name: 'Live' }">
                  <div _ngcontent-c5="" class="img_hover_effect">
                    <img
                      _ngcontent-c5=""
                      :src="
                        getImgSrc(
                          '/static/WebListPage_WebListPage_公視直播_直播列表Web.jpg'
                        )
                      "
                      alt="金鸞文化 網路直播 PTS Live"
                    />
                  </div>
                  <div _ngcontent-c5="" class="item_info">
                    <p _ngcontent-c5="" class="item_name">救救我... Live</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "Live",
  metaInfo() {
        return { 
            title: "金鸞+｜金鸞OTT影音平台",
            meta: [
                { name: 'description', content: '金鸞之聲在每個時段都有居民精彩的直播秀，若您在直播中有聽到雜訊或異常片段請不用擔心，很有可能是直播主在以趣味的方式演出，請仔細觀看聆聽，與我們共享金鸞美好時光。'},
                { property: 'og:title', content: "金鸞之聲"},
                { property: 'og:description', content: "金鸞之聲在每個時段都有居民精彩的直播秀，若您在直播中有聽到雜訊或異常片段請不用擔心，很有可能是直播主在以趣味的方式演出，請仔細觀看聆聽，與我們共享金鸞美好時光。"},
                { name: 'robots', content: 'index,follow'} 
            ]
        }
  },
  components: {},
  data: function() {
    return {};
  },
  created:function(){
    console.log("從 直播頁 解鎖線索3");
    this.$store.commit("setUnlock",[3,true]);
    this.$bus.$emit("saveUnlock", 3);
  },
  methods: {
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    }
  }
};
</script>

<style scoped></style>>
