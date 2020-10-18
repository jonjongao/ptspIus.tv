<template>
  <main _ngcontent-c14="" class="video_page">
    <div _ngcontent-c14="" class="container">
      <div _ngcontent-c14="" class="row">
        <div _ngcontent-c14="" class="col-md-9">
          <!---->
          <h1 _ngcontent-c14="" class="series_name">車廂 EP2：掙扎</h1>
        </div>
      </div>
    </div>

    <!---->
    <div _ngcontent-c14="" class="container">
      <div _ngcontent-c14="" class="row">
        <div _ngcontent-c14="" class="col-md-9">
          <app-video-player _ngcontent-c14="" _nghost-c15=""
            ><div _ngcontent-c15="" class="page_cover_image" id="videoSection">
              <!---->
              <div _ngcontent-c15="" class="btn_play"></div>
              <!----><img
                _ngcontent-c15=""
                src="https://prod-material.ptsplus.tv/series/1-2005007-1-2/artworks/key_visual/web/WebItemPage_危險心靈2.jpg"
                alt="危險心靈 ep2"
              />
              <video _ngcontent-c15="" id="AsiaPlayPlayer"></video>
            </div>

            <div
              _ngcontent-c15=""
              aria-hidden="true"
              aria-labelledby="checkLoginPopupModalLabel"
              class="modal fade"
              id="checkLoginPopupModal"
              role="dialog"
              tabindex="-1"
            >
              <div _ngcontent-c15="" class="modal-dialog" role="document">
                <div _ngcontent-c15="" class="modal-content">
                  <div _ngcontent-c15="" class="modal-header">
                    <h5
                      _ngcontent-c15=""
                      class="modal-title"
                      id="checkLoginPopupModalLabel"
                    >
                      尚未登入
                    </h5>
                    <button
                      _ngcontent-c15=""
                      aria-label="Close"
                      class="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span _ngcontent-c15="" aria-hidden="true"></span>
                    </button>
                  </div>
                  <div _ngcontent-c15="" class="modal-body">
                    <p _ngcontent-c15="">請問您要登入嗎？</p>
                  </div>
                  <div _ngcontent-c15="" class="modal-footer">
                    <button
                      _ngcontent-c15=""
                      class="btn btn-outline-primary"
                      data-dismiss="modal"
                      tabindex="0"
                    >
                      是
                    </button>
                    <button
                      _ngcontent-c15=""
                      class="btn btn-outline-primary"
                      data-dismiss="modal"
                    >
                      否
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              _ngcontent-c15=""
              aria-hidden="true"
              aria-labelledby="ageLegalPopupModalLabel"
              class="modal fade"
              id="ageLegalPopupModal"
              role="dialog"
              tabindex="-1"
            >
              <div _ngcontent-c15="" class="modal-dialog" role="document">
                <div _ngcontent-c15="" class="modal-content">
                  <div _ngcontent-c15="" class="modal-header">
                    <h5
                      _ngcontent-c15=""
                      class="modal-title"
                      id="ageLegalPopupModalLabel"
                    >
                      限制級影片
                    </h5>
                    <button
                      _ngcontent-c15=""
                      aria-label="Close"
                      class="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span _ngcontent-c15="" aria-hidden="true"></span>
                    </button>
                  </div>
                  <div _ngcontent-c15="" class="modal-body">
                    <p _ngcontent-c15="">請問您年滿18歲了嗎？</p>
                  </div>
                  <div _ngcontent-c15="" class="modal-footer">
                    <button
                      _ngcontent-c15=""
                      class="btn btn-outline-primary"
                      data-dismiss="modal"
                    >
                      是，我已滿18歲
                    </button>
                    <button
                      _ngcontent-c15=""
                      class="btn btn-outline-primary"
                      data-dismiss="modal"
                    >
                      否
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              _ngcontent-c15=""
              aria-hidden="true"
              aria-labelledby="errorPopupModalLabel"
              class="modal fade"
              id="errorPopupModal"
              role="dialog"
              tabindex="-1"
            >
              <div _ngcontent-c15="" class="modal-dialog" role="document">
                <div _ngcontent-c15="" class="modal-content">
                  <div _ngcontent-c15="" class="modal-header">
                    <h5
                      _ngcontent-c15=""
                      class="modal-title"
                      id="errorPopupModalLabel"
                    ></h5>
                  </div>
                  <div _ngcontent-c15="" class="modal-body">
                    <p _ngcontent-c15=""></p>
                  </div>
                  <div _ngcontent-c15="" class="modal-footer">
                    <button
                      _ngcontent-c15=""
                      class="btn btn-outline-primary"
                      data-dismiss="modal"
                    >
                      確定
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <app-remind-update-email-dialog _ngcontent-c15="" _nghost-c19=""
              ><div
                _ngcontent-c19=""
                aria-hidden="true"
                aria-labelledby="emailValidPopupModalLabel"
                class="modal fade"
                id="emailValidPopupModal"
                role="dialog"
                tabindex="-1"
              >
                <div _ngcontent-c19="" class="modal-dialog" role="document">
                  <div _ngcontent-c19="" class="modal-content">
                    <div _ngcontent-c19="" class="modal-header">
                      <h5
                        _ngcontent-c19=""
                        class="modal-title"
                        id="emailValidPopupModalLabel"
                      >
                        尚未驗證
                      </h5>
                      <button
                        _ngcontent-c19=""
                        aria-label="Close"
                        class="close"
                        data-dismiss="modal"
                        type="button"
                      >
                        <span _ngcontent-c19="" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div _ngcontent-c19="" class="modal-body">
                      <p _ngcontent-c19="">
                        請進行 Email
                        認證，按下『確定』後，將幫您轉至『個人資料』頁，方可更改
                        Email，更改完畢後，系統將傳送一封認證信至您的信箱，再請您進行後續認證．
                      </p>
                    </div>
                    <div _ngcontent-c19="" class="modal-footer">
                      <button
                        _ngcontent-c19=""
                        class="btn btn-outline-primary"
                        data-dismiss="modal"
                        tabindex="0"
                      >
                        確定
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </app-remind-update-email-dialog>
          </app-video-player>
          <app-episode-intro _ngcontent-c14="" _nghost-c16=""
            ><!----><!---->
            <div _ngcontent-c16="" class="page_action">
              <div _ngcontent-c16="">
                <div _ngcontent-c16="" class="play_frequency">124</div>
              </div>
              <div _ngcontent-c16="">
                <span _ngcontent-c16="" class=""></span>
                <a _ngcontent-c16="" href="javascript:void(0)" target="popup">
                  <div _ngcontent-c16="" class="btn_share"></div>
                </a>
                <div _ngcontent-c16="" class="label_graded graded_0"></div>
              </div>
            </div>

            <div _ngcontent-c16="" class="page_detail_info">
              <div _ngcontent-c16="" class="series_name">車廂 EP2：掙扎</div>
              <div _ngcontent-c16="" class="series_description">【觀看期限至1999/3/4】最後還是搭上了這班車，我也忘記我用了什麼方法搭上的。我只知道這裡的車廂好像無限增長蔓延般地往前延伸，窗外的風景也只有同一種長相。難道我再也醒不過來了嗎？</div>
              <!---->
              
              <!---->
              <div _ngcontent-c16="" class="series_actor">
                劉芸香、方芮欣
              </div>
              <ul _ngcontent-c16="" class="series_category">
                <!---->
                <li _ngcontent-c16="">
                  <a _ngcontent-c16="" href="/channel/1">懸疑</a>
                </li>
                <li _ngcontent-c16="">
                  <a _ngcontent-c16="" href="/channel/1/sub-genre/1-4"
                    >文學</a
                  >
                </li>
                <li _ngcontent-c16="">
                  <a _ngcontent-c16="" href="/channel/1">戲劇</a>
                </li>
                <li _ngcontent-c16="">
                  <a _ngcontent-c16="" href="/channel/1/sub-genre/1-4"
                    >4K</a
                  >
                </li>
              </ul>
            </div>
          </app-episode-intro>
        </div>
        <div
          _ngcontent-c14=""
          class="col-md-3 series_and_video_sidebar"
          style="max-height: 600px"
        >
          <div _ngcontent-c14="" class="series_episode">
            <div _ngcontent-c14="" class="row">
              <h4 _ngcontent-c14="">選集</h4>
            </div>
            <div _ngcontent-c14="" class="row item_lists">
              <div _ngcontent-c14="" class="series_episode_btn_bar d-block">
                <ul _ngcontent-c14="">
                  <!---->
                  <li _ngcontent-c14="" class="active">
                    <a _ngcontent-c14="" href="javascript:void(0)"> 1-10 </a>
                  </li>
                  <li _ngcontent-c14="">
                    <a _ngcontent-c14="" href="javascript:void(0)"> 11-20 </a>
                  </li>
                  <li _ngcontent-c14="">
                    <a _ngcontent-c14="" href="javascript:void(0)"> 21-30 </a>
                  </li>
                </ul>
              </div>
              <app-episode-side-list
                _ngcontent-c14=""
                style="width: 100%"
                _nghost-c17=""
                ><!----><!---->
                <!---->
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-10/artworks/posters/web/WebListPage_危險心靈10.jpg"
                        alt="危險心靈 ep10"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep10
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-9/artworks/posters/web/WebListPage_危險心靈9.jpg"
                        alt="危險心靈 ep9"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep9
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-8/artworks/posters/web/WebListPage_危險心靈8.jpg"
                        alt="危險心靈 ep8"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep8
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-7/artworks/posters/web/WebListPage_危險心靈7.jpg"
                        alt="危險心靈 ep7"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep7
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-6/artworks/posters/web/WebListPage_危險心靈6.jpg"
                        alt="危險心靈 ep6"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep6
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-5/artworks/posters/web/WebListPage_危險心靈5.jpg"
                        alt="危險心靈 ep5"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep5
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-4/artworks/posters/web/WebListPage_危險心靈4.jpg"
                        alt="危險心靈 ep4"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep4
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-3/artworks/posters/web/WebListPage_危險心靈3.jpg"
                        alt="危險心靈 ep3"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep3
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-2/artworks/posters/web/WebListPage_危險心靈2.jpg"
                        alt="危險心靈 ep2"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p
                        _ngcontent-c17=""
                        class="item_name_override item_name_mark"
                      >
                        危險心靈 ep2
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2005007-1-1/artworks/posters/web/WebListPage_危險心靈1.jpg"
                        alt="危險心靈 ep1"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        危險心靈 ep1
                      </p>
                    </div>
                  </a>
                </div>
              </app-episode-side-list>
            </div>
          </div>
        </div>
      </div>

      <div _ngcontent-c14="" class="row">
        <div _ngcontent-c14="" class="col-md-9">
          <div _ngcontent-c14="" class="series_tab_area">
            <ul _ngcontent-c14="" class="series_tab">
              <!---->
            </ul>
          </div>
          <app-episode-relation-list _ngcontent-c14="" _nghost-c18=""
            ><div _ngcontent-c18="" class="series_tab_contnet">
              <div _ngcontent-c18="" class="item_lists video">
                <!---->
              </div>
            </div>
          </app-episode-relation-list>
        </div>
      </div>
    </div>

    <app-google-ad-manager _ngcontent-c14="">
      <div class="container">
        <div class="row">
          <div
            class="ad-container-used"
            style="margin: 0 auto"
            id="div-gpt-ad-1536305061365-0"
          ></div>
        </div>
      </div>
    </app-google-ad-manager>
  </main>
</template>

<script>
</script>

<style scoped></style>>
