import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setPageTitle } from '@/utils'
import store from '@/store'

Vue.use(Router)

// 后台的app名称
const appName = store.state.app.appName

const router = new Router({
  routes
})

// 伪数据
const HAS_LOGING = localStorage.getItem('HAS_LOGING')

// 全局路由跳转前
router.beforeEach((to, from, next) => {
  setPageTitle(appName)
  // console.log(to)
  // console.log(from)
  // console.log(next)
  to.meta && to.meta.title && setPageTitle(to.meta.title)
  if (to.name !== 'login') {
    // next({name: 'login'})
    // next({path: '/login'})
    HAS_LOGING ? next() : next('/login')
  } else {
    HAS_LOGING ? next('/') : next()
  }
})

// router.beforeResolve((to, from, next) => {})

// 全局路由跳转后
router.afterEach((to, from) => {
  // console.log(to)
  // console.log(from)
})

export default router

// export default new Router({
//   // mode: 'history',
//   // base: process.env.BASE_URL,
//   routes
// })

/**
 * 1.导航被触发
 * 2.在失活的组件(即将离开的页面组件)里面调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用 beforeRouteEnter 守卫里传给next的回调函数
 */
