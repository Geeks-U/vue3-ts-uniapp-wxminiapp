<template>
  <!-- 需要显式给出高度才能触发scroll -->
  <scroll-view
    v-if="!skeletonLoading"
    scroll-y
    class="scroll-content"
    @scrolltolower="handleScrollToLower"
    :lower-threshold="50"
  >
    <!-- 用户信息 -->
     <!-- 未登录 -->
    <view v-if="!userStore.userInfoCPLogin.isLogin" class="custom-list" :style="navBarStyle">
      <view class="row-container">
        <view class="avatar-wrapper">
          <image
            class="avatar"
            src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
            mode="scaleToFill"
          />
        </view>
        <view @tap="goToLoginPage" class="body-text">
          <p class="body-title">未登录</p>
          <p class="body-subtitle">点击登录账号</p>
        </view>
        <view @tap="goToSettingsPage" class="footer-text">
          <text class="footer-label">设置</text>
        </view>
      </view>
    </view>
    <!-- 已登录 -->
    <view v-else class="custom-list" :style="navBarStyle">
      <view class="row-container">
        <view class="avatar-wrapper">
          <image
            class="avatar"
            :src="userStore.userInfoCPLogin.avatar"
            mode="scaleToFill"
          />
        </view>
        <view class="body-text">
          <p class="body-title">{{ userStore.userInfoCPLogin.nickname }}</p>
          <p class="body-subtitle">更新个人信息</p>
        </view>
        <view @tap="goToSettingsPage" class="footer-text">
          <text class="footer-label">设置</text>
        </view>
      </view>
    </view>

    <!-- 订单模块 -->
    <view class="order-container">
      <view class="top-row">
        <text class="order-title">我的订单</text>
        <view @tap="goToOrderPage" class="right-container">
          <text class="order-view-all">查看全部订单</text>
          <uni-icons type="right" size="17" />
        </view>
      </view>

      <view class="body-row">
        <view class="body-item">
          <uni-icons type="shop" size="24" />
          <p>待付款</p>
        </view>
        <view class="body-item">
          <uni-icons type="shop-filled" size="24" />
          <p>待发货</p>
        </view>
        <view class="body-item">
          <uni-icons type="paperplane" size="24" />
          <p>待收货</p>
        </view>
        <view class="body-item">
          <uni-icons type="chatboxes" size="24" />
          <p>待评价</p>
        </view>
        <view @tap="goToCustomerServicePage" class="body-item">
          <uni-icons type="headphones" size="24" />
          <p>售后</p>
        </view>
      </view>
    </view>

    <!-- 猜你喜欢 -->
    <view>
      <p class="guess-like-title">猜你喜欢</p>
      <guessLike :guessLikeList="guessLikeList" />
    </view>

    <!-- 加载提示 -->
    <view v-if="isLoading" style="text-align:center; padding: 10px;">加载中...</view>
    <view v-if="isFinished" style="text-align:center; padding: 10px;">没有更多了</view>
  </scroll-view>
  <PageSkeleton v-else></PageSkeleton>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useUserStore } from '@/stores'

// 组件引入
import guessLike from './components/guessLike.vue'
import PageSkeleton from './components/PageSkeleton.vue'

// 接口
import { getHomeGuessLikeData } from '@/services/home'

// 数据
let userStore
const { safeAreaInsets, statusBarHeight } = uni.getSystemInfoSync()
const safeTop = statusBarHeight || safeAreaInsets?.top || 20
const navBarStyle = {
  paddingTop: safeTop + 'px'
}

const guessLikeList = ref([])

const guessLikeListPageInfo = ref({
  currentPage: 0,
  pageSize: 10,
  pageSum: 0
})

const isLoading = ref(false)
const isFinished = ref(false)
const skeletonLoading = ref(true)

const fetchGuessLikeList = async () => {
  try {
    guessLikeListPageInfo.value.currentPage += 1
    isFinished.value = false
    const res = await getHomeGuessLikeData(
      guessLikeListPageInfo.value.currentPage,
      guessLikeListPageInfo.value.pageSize
    )
    guessLikeListPageInfo.value.pageSum = res.result.pages

    guessLikeList.value = res.result.items.map((item) => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      picture: item.picture,
      price: item.price,
      orderNum: item.orderNum
    }))

    if (guessLikeListPageInfo.value.currentPage >= guessLikeListPageInfo.value.pageSum)
      isFinished.value = true
  } catch (error) {
    console.error('获取猜你喜欢数据失败:', error)
  }
}

// 页面加载时获取数据
onLoad(async () => {
  await Promise.all([
  fetchGuessLikeList()
  ])
  // 等待pinia初始化完成
  userStore = useUserStore()
  skeletonLoading.value = false
})

const loadMoreGuessLike = async () => {
  if (isFinished.value) {
    setTimeout(() => {
      isFinished.value = false
    }, 3000)
    return
  }
  if (isLoading.value) return

  isLoading.value = true
  try {
    const nextPage = guessLikeListPageInfo.value.currentPage + 1
    const res = await getHomeGuessLikeData(nextPage, guessLikeListPageInfo.value.pageSize)

    const newItems = res.result.items.map((item) => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      picture: item.picture,
      price: item.price,
      orderNum: item.orderNum
    }))

    guessLikeList.value.push(...newItems)
    guessLikeListPageInfo.value.currentPage = nextPage
    guessLikeListPageInfo.value.pageSum = res.result.pages

    if (nextPage >= guessLikeListPageInfo.value.pageSum) {
      isFinished.value = true
    }
  } catch (error) {
    console.error('加载更多猜你喜欢失败:', error)
  } finally {
    isLoading.value = false
  }
}

// 事件函数
const handleScrollToLower = () => {
  loadMoreGuessLike()
}

const goToLoginPage = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}

const goToOrderPage = () => {
  uni.navigateTo({
    url: '/pages/order/index'
  })
}

const goToCustomerServicePage = () => {
  uni.navigateTo({
    url: '/pages/customerService/index'
  })
}

const goToSettingsPage = () => {
  uni.navigateTo({
    url: '/pages/settings/index'
  })
}
</script>

<style scoped>
.scroll-content {
  height: 100vh;
}

.custom-list {
  background-color: #c99999;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.row-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.avatar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.body-text {
  text-align: left;
  flex-grow: 1;
}

.body-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}

.body-subtitle {
  font-size: 14px;
  color: #fff;
}

.footer-text {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer-label {
  font-size: 16px;
  color: #fff;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.order-title {
  font-size: 17px;
  font-weight: bold;
}

.order-view-all {
  font-size: 14px;
  color: #999;
}

.right-container {
  display: flex;
  align-items: center;
}

.body-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.body-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.order-container {
  border: 2px solid #c99999;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
}

.guess-like-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}
</style>
