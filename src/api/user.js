import { serve } from '@/utils/request'

export function login () {
  console.log(serve)
  return serve.request({
    url: '/getUserInfo',
    method: 'get'
  })
}
