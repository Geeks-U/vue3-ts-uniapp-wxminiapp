<template>
  <!-- 未登录 -->
  <view class="container">
    <view class="item">
      <text class="item-text">授权管理</text>
      <uni-icons type="right" size="21" class="item-icon"/>
    </view>
    <view class="item">
      <text class="item-text">问题反馈</text>
      <uni-icons type="right" size="21" class="item-icon"/>
    </view>
    <view @tap="goToCustomerServicePage" class="item">
      <text class="item-text">联系我们</text>
      <uni-icons type="right" size="21" class="item-icon"/>
    </view>
    <view class="item">
      <text class="item-text">关于小程序</text>
      <uni-icons type="right" size="21" class="item-icon"/>
    </view>
    <view v-if="userStore?.userInfoCPLogin.isLogin" class="item">
      <text class="item-text">收货地址管理</text>
      <uni-icons type="right" size="21" class="item-icon"/>
    </view>
    <view v-if="userStore?.userInfoCPLogin.isLogin" class="item">
      <button @tap="logout">退出登录</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores'
import { onLoad } from '@dcloudio/uni-app'

// 数据
const userStore = useUserStore()

// 事件函数
const goToCustomerServicePage = () => {
  uni.navigateTo({
    url: '/pages/customerService/index'
  })
}

const logout = () => {
  userStore.removeUserInfoCPLogin()
  uni.switchTab({
    url: '/pages/my/index'
  })
}
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f9f9f9;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border: 1rpx solid #eaeaea;
  border-radius: 8rpx;
  margin-bottom: 20rpx;
  background-color: #ffffff;
  box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.item:hover {
  background-color: #f5f5f5;
}

.item-text {
  font-size: 32rpx;
  color: #666;
}

.item-icon {
  color: #aaa;
}
</style>