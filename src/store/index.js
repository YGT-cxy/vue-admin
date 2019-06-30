import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import user from './modules/user'
import app from './modules/app'
import { saveInLocal } from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    user,
    app
  },
  getters,
  plugins: [ saveInLocal ]
})
