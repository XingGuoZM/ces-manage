import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'

import './plugins/element.ts'
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