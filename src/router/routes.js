export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'home',
    alias: '/home-page', // 路由别名
    meta: {
      name: 'home',
      title: '首页'
    },
    component: () => import('@/views/home')
  },
  {
    path: '/parent',
    name: 'parent',
    meta: {
      name: 'parent',
      title: '父级路由页面'
    },
    component: () => import('@/views/parent'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/child')
      }
    ]
  },
  // 命名视图
  {
    path: '/name',
    components: {
      default: () => import('@/views/child'),
      tel: () => import('@/views/tel'),
      email: () => import('@/views/email')
    }
  },
  // 路由重定向
  {
    path: '/main',
    redirect: '/'
  },
  { // 404
    path: '*',
    component: () => import('@/views/404')
  }
]
