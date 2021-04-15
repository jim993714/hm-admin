import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 引入通用样式
import '../src/style/base.css';
// 使用element-ui
import { Button, Form, Input, FormItem, Message } from 'element-ui';
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.config.productionTip = false;
// 引入axios
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
