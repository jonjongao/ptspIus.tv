<template>
  <app-footer _ngcontent-c5="" _nghost-c3="">
    <footer _ngcontent-c3="">
      <div _ngcontent-c3="" class="container">
        <div _ngcontent-c3="" class="row">
          <div _ngcontent-c3="" class="col-md-4 order-md-0 order-3">
            <div _ngcontent-c3="" class="pts_info">
              <router-link
                _ngcontent-c3=""
                v-on:click.native="scrollToTop()"
                to="/"
                class="pts_info_logo"
                ><img
                  _ngcontent-c3=""
                  alt=""
                  :src="getImgSrc('/static/pts_logo_l.png')"
              /></router-link>
              <h6 _ngcontent-c3="">財團法人金鸞文化事業基金會</h6>
              <p _ngcontent-c3="">
                地址：114 台北市內湖區康寧路三段 75 巷 50 號
              </p>
              <p _ngcontent-c3="">
                Public Television Service Foundation. All Rights Reserved.
              </p>
              <p _ngcontent-c3="">Version: 1.0.0.218</p>
            </div>
          </div>
          <div _ngcontent-c3="" class="col-md-4 order-md-1 order-2">
            <h6 _ngcontent-c3="">相關連結</h6>
            <ul _ngcontent-c3="" class="footer_link">
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="https://greenwoodpoem.club/"> 翠華詩社</a>
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)"> 隱私權政策</a>
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)"> iOS使用者需知</a>
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)"> 影音播放問題</a>
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)">
                  優惠代碼使用條款</a
                >
              </li>
              <li _ngcontent-c3="">
                <router-link _ngcontent-c3="" to="/about"> 關於金鸞+</router-link>
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)"> 其他常見問題</a>
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)">
                  會員權利與義務</a
                >
              </li>
              <li _ngcontent-c3="">
                <a _ngcontent-c3="" href="javascript:void(0)">
                  個人資料保護政策</a
                >
              </li>
            </ul>
          </div>
          <div _ngcontent-c3="" class="col-md-2 order-md-2 order-0">
            <h6 _ngcontent-c3="">下載APP</h6>
            <div _ngcontent-c3="" class="download_badge">
              <a
                _ngcontent-c3=""
                target="_blank"
                rel="noopener"
                href="https://play.google.com/store/apps/details?id=com.ptsplus.app"
                ><img
                  _ngcontent-c3=""
                  alt="在google play下載金鸞＋"
                  :src="getImgSrc('/static/google-play.png')"
              /></a>
              <a _ngcontent-c3="" href="javascript:void(0)"
                ><img
                  _ngcontent-c3=""
                  alt="在app store下載金鸞＋"
                  :src="getImgSrc('/static/app-store.png')"
              /></a>
            </div>
          </div>
          <div _ngcontent-c3="" class="col-md-2 order-md-3 order-1">
            <h6 _ngcontent-c3="">社群分享</h6>
            <div _ngcontent-c3="" class="fb_btn_qroup">
              <a
                _ngcontent-c3=""
                href="https://www.facebook.com/DetentionTheSeries/"
                target="_blank"
                ><span _ngcontent-c3="" class="fb_fan_page">粉絲頁</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </app-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    scrollToTop: function() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped></style>
