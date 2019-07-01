import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
// const BASE_URL = ''

// console.log(axios)

class HttpRequest {
  constructor (baseURL = BASE_URL) {
    this.baseURL = BASE_URL
    // 队列，存放请求
    this.queue = {}
  }

  // 获取配置项
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      headers: {}
    }
    return config
  }

  interceptors (instance, url) {
    // 全局请求拦截器
    instance.interceptors.request.use(config => {
      console.log('请求拦截器')
      // console.log(config)
      // console.log(config)
      // 避免创建多个loading，利用队列，判断当前队列是否已经有请求
      if (!Object.keys(this.queue).length) {
        // 启动loading动画
        console.log('启动loading')
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 全局响应拦截器
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      // 关闭动画效果
      console.log('取消loading')
      console.log('响应拦截器')
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    // console.log(options)
    this.interceptors(instance)
    return instance(options)
  }
}

export const serve = new HttpRequest()

// console.log(HttpRequest)
