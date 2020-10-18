<template>
  <main _ngcontent-c14="" class="video_page">
    <div _ngcontent-c14="" class="container">
      <div _ngcontent-c14="" class="row">
        <div _ngcontent-c14="" class="col-md-9">
          <!---->
          <h1 _ngcontent-c14="" class="series_name">乘客Ep9：惡夢</h1>
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
                src="https://prod-material.ptsplus.tv/series/1-2018696-1-9/artworks/key_visual/web/WebItemPage_9.jpg"
                alt="苦力 ep9"
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
                <div _ngcontent-c16="" class="play_frequency">4469</div>
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
              <div _ngcontent-c16="" class="series_name">乘客Ep9：惡夢</div>
              <div _ngcontent-c16="" class="series_description">從那天開始，我每天做著同樣的惡夢。夢裡我坐上程文亮的單車後座，趕著去搭那班前往台北的末班車。我好像亟欲逃離什麼，但我不知道為什麼就是想不起來。我只知道我一醒，心臟就彷彿曾經炸開過又拼回去一般，來回十遍百遍千遍。每一次的痛苦，都是如此椎心撕裂。 這個夢沒有開頭，也沒有結尾，它準時在每天晚上的三點二十分夜襲我的腦海，我拼命的吶喊。停下來，拜託快點停下來。程文亮頭也不回的越騎越快，闖進閘口，和那般末班車對撞著。</div>
              <!---->
              <div _ngcontent-c16="" class="series_direct">蕭詒徽</div>
              <!---->
              <div _ngcontent-c16="" class="series_actor">
                劉芸香，方芮欣
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
                  <a _ngcontent-c16="" href="/channel/10">戲劇</a>
                </li>
                <li _ngcontent-c16="">
                  <a _ngcontent-c16="" href="/channel/10/sub-genre/10-2"
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
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-10/artworks/posters/web/WebListPage_10.jpg"
                        alt="苦力 ep10"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep10
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-9/artworks/posters/web/WebListPage_9.jpg"
                        alt="苦力 ep9"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p
                        _ngcontent-c17=""
                        class="item_name_override item_name_mark"
                      >
                        苦力 ep9
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-8/artworks/posters/web/WebListPage_080.jpg"
                        alt="苦力 ep8"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep8
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-7/artworks/posters/web/WebListPage_070.jpg"
                        alt="苦力 ep7"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep7
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-6/artworks/posters/web/WebListPage_6.jpg"
                        alt="苦力 ep6"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep6
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-5/artworks/posters/web/WebListPage_5.jpg"
                        alt="苦力 ep5"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep5
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-4/artworks/posters/web/WebListPage_44.jpg"
                        alt="苦力 ep4"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep4
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-3/artworks/posters/web/WebListPage_3-1.jpg"
                        alt="苦力 ep3"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep3
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-2/artworks/posters/web/WebListPage_02.jpg"
                        alt="苦力 ep2"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep2
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c17="">
                  <a _ngcontent-c17="" href="javascript:void(0);">
                    <div _ngcontent-c17="" class="img_hover_effect">
                      <img
                        _ngcontent-c17=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-1-1/artworks/posters/web/WebListPage_001.jpg"
                        alt="苦力 ep1"
                      />
                    </div>
                    <div _ngcontent-c17="" class="item_info">
                      <p _ngcontent-c17="" class="item_name_override">
                        苦力 ep1
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
              <li _ngcontent-c14="" class="series_tab_active">預告</li>
            </ul>
          </div>
          <app-episode-relation-list _ngcontent-c14="" _nghost-c18=""
            ><div _ngcontent-c18="" class="series_tab_contnet">
              <div _ngcontent-c18="" class="item_lists video">
                <!----><!---->
                <!---->
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-17/artworks/posters/web/WebListPage_苦力.jpg"
                        alt="苦力 搶先看"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">苦力 搶先看</p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-16/artworks/posters/web/WebListPage_1.jpg"
                        alt="【苦力COOLIE】卡司篇"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】卡司篇
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-15/artworks/posters/web/WebListPage_2.jpg"
                        alt="【苦力】前導演員推薦篇 白家綺"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力】前導演員推薦篇 白家綺
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-14/artworks/posters/web/WebListPage_1.jpg"
                        alt="【苦力】前導演員推薦篇 蔡昌憲"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力】前導演員推薦篇 蔡昌憲
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-13/artworks/posters/web/WebListPage_1.jpg"
                        alt="【苦力】前導演員推薦篇 黃文星"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力】前導演員推薦篇 黃文星
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-12/artworks/posters/web/WebListPage_3.jpg"
                        alt="【苦力】前導演員推薦篇 陳怡嘉"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力】前導演員推薦篇 陳怡嘉
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-11/artworks/posters/web/WebListPage_11.jpg"
                        alt="【苦力】前導演員推薦篇 傅子純"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力】前導演員推薦篇 傅子純
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-10/artworks/posters/web/WebListPage_1.jpg"
                        alt="【苦力】前導演員推薦篇 林玟誼"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力】前導演員推薦篇 林玟誼
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-9/artworks/posters/web/WebListPage_9.jpg"
                        alt="【苦力COOLIE】訪問導演李岳峰"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】訪問導演李岳峰
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-8/artworks/posters/web/WebListPage_8.jpg"
                        alt="【苦力COOLIE】李岳峰導演最新作品"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】李岳峰導演最新作品
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-7/artworks/posters/web/WebListPage_7.jpg"
                        alt="【苦力COOLIE】片頭曲MV"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】片頭曲MV
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-6/artworks/posters/web/WebListPage_6.jpg"
                        alt="【苦力COOLIE】愛情篇"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】愛情篇
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-5/artworks/posters/web/WebListPage_5.jpg"
                        alt="【苦力COOLIE】男人篇"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】男人篇
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-4/artworks/posters/web/WebListPage_4.jpg"
                        alt="【苦力COOLIE】女人篇"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】女人篇
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-3/artworks/posters/web/WebListPage_3.jpg"
                        alt="【苦力COOLIE】人物訪問傅子純"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】人物訪問傅子純
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-2/artworks/posters/web/WebListPage_2.jpg"
                        alt="【苦力COOLIE】人物訪問蔡昌憲"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】人物訪問蔡昌憲
                      </p>
                    </div>
                  </a>
                </div>
                <div _ngcontent-c18="">
                  <a _ngcontent-c18="" href="javascript:void(0)">
                    <div _ngcontent-c18="" class="img_hover_effect">
                      <img
                        _ngcontent-c18=""
                        src="https://prod-material.ptsplus.tv/series/1-2018696-3-1/artworks/posters/web/WebListPage_1.jpg"
                        alt="【苦力COOLIE】人物訪問陳怡嘉"
                      />
                    </div>
                    <div _ngcontent-c18="" class="item_info">
                      <p _ngcontent-c18="" class="item_name">
                        【苦力COOLIE】人物訪問陳怡嘉
                      </p>
                    </div>
                  </a>
                </div>
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
