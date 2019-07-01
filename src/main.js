import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Bus from './utils/bus'
Vue.prototype.$bus = Bus

if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
