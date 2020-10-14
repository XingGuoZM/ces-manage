import Vue from 'vue'
import App from './App'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 搜索表单
import './assets/css/Form/search.css'
import './assets/css/Layout/main.css'

import router from './router'
import store from './store'
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})