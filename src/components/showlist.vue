<template>
  <div _ngcontent-c1="" class="curating_block d-block">
    <div _ngcontent-c1="" class="row">
      <h3 _ngcontent-c1="">
        <a _ngcontent-c1="" href="/banner-more/BANNER_04">限時賞味</a>
      </h3>
    </div>
    <div v-if="this.type == 1" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1000 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_01.jpg')"
              :alt="db7000.name"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">{{ db7000.name }}</p>
            <p _ngcontent-c1="" class="item_episode">{{ db7000.episode }}</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1001 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_5.jpg')"
              alt="東離劍遊紀"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">東離劍遊紀</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 7 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1002 } }"
          :disabled="!hasUnlock1"
          :event="hasUnlock1 ? 'click' : ''"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_甜心兔.jpg')"
              alt="甜心兔"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">甜心兔</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 199 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1003 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_30.jpg')"
              alt="空中看日本"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">空中看日本</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 5 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1004 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_1.png')"
              alt="水果冰淇淋2020"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">水果冰淇淋2020</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 2320 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1005 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_1.jpg')"
              alt="少年亞瑟王"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">少年亞瑟王</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 24 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1006 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_0.png')"
              alt="動物大明星"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">動物大明星</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 26 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1007 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_12.jpg')"
              alt="吉娃斯愛科學:新同學來了"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">吉娃斯愛科學:新同學來了</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 10 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1008 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_606.jpg')"
              alt="大地之詩"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">大地之詩</p>
            <p _ngcontent-c1="" class="item_episode">全 2 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1009 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_40.jpg')"
              alt="顛覆街頭 班克斯"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">顛覆街頭 班克斯</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 2 集</p>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="this.type == 2" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1100 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_婆婆_節目頁.png')"
              alt="我的婆婆怎麼那麼可愛"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">我的婆婆怎麼那麼可愛</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 38 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1101 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_12(1).jpg')"
              alt="住左邊住右邊"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">住左邊住右邊</p>
            <p _ngcontent-c1="" class="item_episode">全 36 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1102 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_4.jpg')"
              alt="噬罪者"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">噬罪者</p>
            <p _ngcontent-c1="" class="item_episode">全 13 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1103 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_5(1).jpg')"
              alt="盲人阿清"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">盲人阿清</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 4000 } }"
          :disabled="!hasUnlock1"
          :event="hasUnlock1 ? 'click' : ''"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              src="https://via.placeholder.com/165x93"
              alt="乘客"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">乘客</p>
            <p _ngcontent-c1="" class="item_episode">全 30 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1105 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_13.jpg')"
              alt="我們與惡的距離"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">我們與惡的距離</p>
            <p _ngcontent-c1="" class="item_episode">全 10 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1106 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_14.jpg')"
              alt="你的孩子不是你的孩子"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">你的孩子不是你的孩子</p>
            <p _ngcontent-c1="" class="item_episode">全 5 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1107 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_12(2).jpg')"
              alt="糖糖Online"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">糖糖Online</p>
            <p _ngcontent-c1="" class="item_episode">全 13 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1108 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_10.jpg')"
              alt="憤怒的菩薩"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">憤怒的菩薩</p>
            <p _ngcontent-c1="" class="item_episode">全 4 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 1109 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_5.jpg')"
              alt="東離劍遊紀"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">東離劍遊紀</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 7 集</p>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="this.type == 3" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2000 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_12.jpg')"
              alt="吉娃斯愛科學:新同學來了"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">吉娃斯愛科學:新同學來了</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 10 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2001 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_01(1).jpg')"
              alt="台泰由你遊-台灣篇"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">台泰由你遊-台灣篇</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 5 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2002 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_1.png')"
              alt="水果冰淇淋2020"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">水果冰淇淋2020</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 2320 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2003 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_1.jpg')"
              alt="少年亞瑟王"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">少年亞瑟王</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 24 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2004 } }"
          :disabled="!hasUnlock2"
          :event="hasUnlock2 ? 'click' : ''"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_23.jpg')"
              alt="無事坐巴士2"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">無事坐巴士2</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 64 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2005 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_19.jpg')"
              alt="全家有智慧3"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">全家有智慧3</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 122 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2006 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_0.png')"
              alt="動物大明星"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">動物大明星</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 26 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2007 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_溫泉屋小女將.jpg')"
              alt="溫泉屋小女將"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">溫泉屋小女將</p>
            <p _ngcontent-c1="" class="item_episode">全 24 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2008 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_36題愛上你_節目頁圖.png')"
              alt="36題愛上你"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">36題愛上你</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 60 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2009 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_2.jpg')"
              alt="出發騎幻島"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">出發騎幻島</p>
            <p _ngcontent-c1="" class="item_episode">全 13 集</p>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="this.type == 4" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2100 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_00.jpg')"
              alt="離巢"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">離巢</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2101 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_1(1).jpg')"
              alt="大吉"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">大吉</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2102 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_7.jpg')"
              alt="前世情人的情人"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">前世情人的情人</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2103 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_隨片登台_Banner_700.png')"
              alt="隨片登台"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">隨片登台</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2104 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_燒肉粽_Banner_700.png')"
              alt="燒肉粽2019"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">燒肉粽2019</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2105 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_阿嬤的秘密_Banner_700.png')"
              alt="阿嬤的秘密"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">阿嬤的秘密</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2106 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_編劇頭很痛.png')"
              alt="編劇頭很痛"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">編劇頭很痛</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2107 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_第一鮪.png')"
              alt="第一鮪"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">第一鮪</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2108 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_潘朵拉.png')"
              alt="潘朵拉"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">潘朵拉</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2109 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_年尾巴.png')"
              alt="年尾巴"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">年尾巴</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="this.type == 5" _ngcontent-c1="" class="row item_lists series">
      <!---->
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2200 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_40.jpg')"
              alt="顛覆街頭 班克斯"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">顛覆街頭 班克斯</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 2 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2201 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_33.jpg')"
              alt="來自街頭 凱斯哈林"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">來自街頭 凱斯哈林</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2202 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_606.jpg')"
              alt="大地之詩"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">大地之詩</p>
            <p _ngcontent-c1="" class="item_episode">全 2 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2203 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_4(1).jpg')"
              alt="來自故鄉的思念—蕭泰然逝世五周年紀念系列"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">
              來自故鄉的思念—蕭泰然逝世五周年紀念系列
            </p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2204 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_01(2).jpg')"
              alt="莫札特-費加洛的婚禮"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">莫札特-費加洛的婚禮</p>
            <p _ngcontent-c1="" class="item_episode">更新至第 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2205 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_22.jpg')"
              alt="咪咪貓的奇幻之旅"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">咪咪貓的奇幻之旅</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2206 } }"
          :disabled="!hasUnlock3"
          :event="hasUnlock3 ? 'click' : ''"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_1(2).jpg')"
              alt="殺人之眾"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">殺人之眾</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2207 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_13(1).jpg')"
              alt="天亮前的戀愛故事"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">天亮前的戀愛故事</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2208 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_4(2).jpg')"
              alt="地洞"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">地洞</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
      <div _ngcontent-c1="">
        <router-link
          _ngcontent-c1=""
          appseasonlink=""
          :to="{ name: 'StaticSeason', params: { id: 2209 } }"
        >
          <div _ngcontent-c1="" class="img_hover_effect">
            <span _ngcontent-c1="" class=""></span>
            <img
              _ngcontent-c1=""
              :src="getImgSrc('/static/WebListPage_6.jpg')"
              alt="神殿"
            />
          </div>
          <div _ngcontent-c1="" class="item_info">
            <p _ngcontent-c1="" class="item_name">神殿</p>
            <p _ngcontent-c1="" class="item_episode">全 1 集</p>
          </div>
        </router-link>
      </div>
    </div>
    <div _ngcontent-c1="" class="row">
      <a _ngcontent-c1="" class="see_more disabled_href">看更多&gt;&gt;</a>
    </div>
  </div>
</template>

<script>
import ctn from "../assets/ctn.json";
import db from "../assets/db.json";
import home from "../assets/home.json";
export default {
  name: "ShowList",
  props: ["type"],
  components: {},
  created: function() {
    
  },
  computed: {
    db7023: function(){
        return this.getDataByID(7023);
    },
    db7000: function(){
        return this.getDataByID(7000);
    },
    getListByType: function() {
      var posts = [];
      for (var i = 0; i < this.show.length; i++) {
        if (this.isType(this.show[i].id)) {
          posts.push(this.show[i]);
        }
      }
      return posts;
    },
    hasUnlock1: function() {
      return this.$store.state.unlock1;
    },
    hasUnlock2: function() {
      return this.$store.state.unlock2;
    },
    hasUnlock3: function() {
      return this.$store.state.unlock3;
    }
  },
  data: function() {
    return {
      show: ctn
    };
  },
  methods: {
    getDataByID: function(id) {
      console.log("try read db:"+id);
      for(var i=0;i<db.length;i++){
        if(db[i].id == id)
          return db[i]
      }
      return {}
    },
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    },
    isType: function(id) {
      var t = parseInt(this.type, 10);
      var i = parseInt(id, 10);
      if (t == 1) {
        switch (i) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 21:
          case 8:
          case 9:
            return true;
            break;
        }
      } else if (t == 2) {
        switch (i) {
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
            return true;
            break;
        }
      } else if (t == 3) {
        switch (i) {
          case 8:
          case 23:
          case 24:
          case 10:
          case 25:
          case 26:
          case 27:
          case 28:
          case 29:
          case 30:
            return true;
            break;
        }
      } else if (t == 4) {
        switch (i) {
          case 32:
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 49:
            return true;
            break;
        }
      } else if (t == 5) {
        switch (i) {
          case 21:
          case 41:
          case 42:
          case 43:
          case 9:
          case 44:
          case 45:
          case 46:
          case 5:
          case 47:
            return true;
            break;
        }
      }

      return false;
    }
  }
};
</script>

<style scoped></style>>
