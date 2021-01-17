import Vue from 'vue'
import App from './App'
import './assets/css/reset.css'

import './plugins/element.js'
// 搜索表单
import './assets/css/Form/search.css'
import './assets/css/Layout/main.css'
import router from './plugins/vueRouter'

import 'babel-polyfill'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})