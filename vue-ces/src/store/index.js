import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'

// import Base from './modules/Base/index'
import User from './modules/Base/User/index'

const state = {
  userName:'admin'
}
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state,
  modules: {
    User
  }
})
