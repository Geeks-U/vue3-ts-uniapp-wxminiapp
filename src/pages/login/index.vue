<template>
  <view class="login">
    <view class="title">请使用微信登录</view>
    <button
      type="primary"
      class="wx-login-btn"
      open-type="getPhoneNumber"
      @getphonenumber="handleGetPhoneNumber"
    >
      微信一键登录
    </button>
    <button
      type="primary"
      class="wx-login-btn"
      @tap="handleLogin"
      
    >
      账号密码登录
    </button>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores'

// 接口
import { wxMinlogin, login } from '@/services/login'

// 数据
const userStore = useUserStore()

// 快捷登录(利用微信小程序的登录接口)
const handleGetPhoneNumber = (e: any) => {
  console.log('获取到的手机号:', e)
  if (e.detail.errMsg === 'getPhoneNumber:ok') {
    // 获取手机号成功
    const encryptedData = e.detail.encryptedData
    const iv = e.detail.iv
    // 获取code
    uni.login({
      "provider": "weixin",
      success: (res) => {
        const code = res.code
        // 调用登录接口
        wxMinlogin(code, encryptedData, iv)
          .then((res) => {
            // 返回信息处理
            console.log('登录成功:', res)
            // 登录成功后跳转到首页
            uni.switchTab({ url: '/pages/my/index' })
          })
          .catch((err) => {
            console.error('登录失败:', err)
            uni.showToast({ title: '登录失败', icon: 'none' })
        })
      },
    })
    // 把手机号发送给后端服务器
  } else {
    // 获取手机号失败
    uni.showToast({ title: '获取手机号失败', icon: 'none' })
  }
}

// 账号密码登录
const handleLogin = () => {
  login()
    .then((res) => {
      // 返回信息处理
      userStore.setUserInfoCPLogin(res.result)
      uni.showToast({ title: '登录成功', icon: 'success', duration: 2000 })
      // 登录成功后跳转到首页
      uni.switchTab({ url: '/pages/my/index' })
    })
    .catch((err) => {
      console.error('登录失败:', err)
      uni.showToast({ title: '登录失败', icon: 'none', duration: 2000 })
    })
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.title {
  font-size: 20px;
  margin-bottom: 20px;
}
.wx-login-btn {
  width: 80%;
  height: 45px;
  line-height: 45px;
  border-radius: 8px;
}
</style>
