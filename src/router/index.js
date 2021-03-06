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

export default router;
