import Vue from 'vue'
import App from './App'
// HTML css reset
import './assets/css/reset.css'
// ElementUI components import
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// LNavRContentLayout
// import './assets/css/LNavRContentLayout.styl'

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