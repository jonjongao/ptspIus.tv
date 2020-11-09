import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";
//Test sample template
import Home from "@/views/Home";
import Live from "@/views/Live";
import Payment1 from "@/views/Payment1";
import Season from "@/views/Season";
import Episode from "@/views/Episode";
import Post from "@/views/Post";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { trackedTitle: "首頁" }
  },
  {
    path: "/live",
    name: "Live",
    component: Live,
    meta: { trackedTitle: "直播" }
  },
  {
    path: "/payment-step-1",
    name: "Payment1",
    component: Payment1,
    meta: { trackedTitle: "方案" }
  },
  {
    path: "/season/:id",
    name: "Season",
    component: Season,
    props: true,
    meta: { trackedTitle: "節目頁" }
  },
  {
    path: "/:path",
    name: "Post",
    component: Post,
    props: true,
    meta: { trackedTitle: "文章" }
  }
];

const router = new VueRouter({
  moode: "history",
  hash: false,
  base:
    process.env.NODE_ENV === "production"
      ? process.env.PUBLIC_PATH
      : process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  // Fired before load route template
  // Must execute next() so it'll do rendering
  next();
});

const pageUserTrack = async ({ trackedTitle = "" } = {}) => {
  // 從 vue router 實體中取的目前路由 meta 資訊
  const { meta } = router.currentRoute;
  const { name } = router.currentRoute;
  const { params } = router.currentRoute;

  // 以傳入此方法的 trackedTitle 為主，若無則使用定義在 router 上的 meta 資訊
  let pageTitle = trackedTitle || meta.trackedTitle;

  switch (name) {
    case "Home":
      break;
    case "Season":
      // const h1 = document.getElementsByTagName("h1")[0].innerHTML;
      pageTitle += " " + params.id;
      break;
    case "Post":
      pageTitle += " " + params.path;
      break;
  }

  console.log(pageTitle);

  // 若無傳入參數或當下路由無 mate 資訊時會略過軌跡紀錄
  if (Vue.gtm && pageTitle) {
    // 發送 content-view 事件給 GTM
    Vue.gtm.trackEvent({
      // 自行定義的事件名稱
      event: "content-view",
      // 頁面功能/分頁標題文字
      pageTitle: pageTitle
    });
  }
};

router.afterEach(route => {
  setTimeout(() => {
    pageUserTrack();
  }, 500);
});

export default router;
