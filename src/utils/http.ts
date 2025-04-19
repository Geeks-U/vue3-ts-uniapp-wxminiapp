// 请求拦截器配置
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

import { useUserStore } from '@/stores/index'

const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    // url地址拼接
    config.url = baseURL + config.url
    // 设置超时时间
    config.timeout = 10000
    // 设置请求头
    const userStore = useUserStore()
    config.header = {
      ...config.header,
      'source-client': 'miniapp',
      Authorization: userStore.userInfoCPLogin?.token || ''
    }
  }
}

// 配置挂载
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 请求函数封装

interface HttpResponseData<T> {
  code: number
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<HttpResponseData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 只要服务器有响应数据无论成功失败都会走这里
      success: (res) => {
        // 处理响应数据
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as HttpResponseData<T>)
        } else if (res.statusCode === 401) {
          // 401 登录过期
          const userStore = useUserStore()
          userStore.remove()
          uni.navigateTo({ url: '/pages/login/index' })
          reject(res)
        } else {
          // 其他错误
          uni.showToast({
            title: (res.data as HttpResponseData<T>).msg || '请求失败',
            icon: 'none',
          })
          reject(res)
        }
      },
      // 连接服务器失败走这里
      fail: (err) => {
        // 其他错误
        uni.showToast({
          title: '网络错误，请稍后再试',
          icon: 'none',
        })
        reject(err)
      }
    })
  })
}