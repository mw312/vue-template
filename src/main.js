// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用工具文件
import dataUtil from './utils/date.js'
// 将工具方法绑定到全局
Vue.prototype.$DataUtil = dataUtil

// 引用常量文件
import CONST from '../config/const.js'
Vue.prototype.$CONST = CONST

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
