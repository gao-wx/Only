// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import less from 'less'
import axios from 'axios'
import VueAxios from 'vue-axios'


// 单独使用  vue-resouce在vue2.0就停止更细 首选axios
Vue.prototype.$axios = axios

// Vue.use(Antd);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// vue-axios是将axios集成到Vue.js的小包装器
Vue.use(VueAxios, axios)

// import Less from 'Less'
// import 'ant-design-vue/dist/antd.less';

Vue.use(less)
Vue.use(Antd)
