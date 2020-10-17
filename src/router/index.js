import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
//Test sample template
import Home from "@/views/Home"

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, ];

const router = new VueRouter({
  moode: "history",
  base: process.env.NODE_ENV === 'production' ?
    process.env.PUBLIC_PATH : process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Fired before load route template
  // Must execute next() so it'll do rendering
  next();
})

export default router;
