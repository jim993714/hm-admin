import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 登录页面
    { path: '/', name: 'login', component: Login },
    // 首页
    { path: '/home', name: 'home', component: Home },
  ],
});

export default router;
