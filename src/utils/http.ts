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
      Authorization: userStore.userInfo?.token || ''
    }
    console.log('配置：', config)
  }
}

// 配置挂载
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)