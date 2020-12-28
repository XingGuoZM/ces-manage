import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './plugins/vueRouter'
import store from './store'
Vue.config.productionTip = false

// new Vue({
//   store,
//   router,
//   render: h => h(App),

// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})