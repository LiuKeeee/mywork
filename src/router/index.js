import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

// 导入路由模块
import filmsRouter from "./routes/films";
import centerRouter from "./routes/center";
import cinemasRouter from "./routes/cinemas";

const routes = [
  filmsRouter,
  centerRouter,
  cinemasRouter,
  {path:"/",redirect:"/films"}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
