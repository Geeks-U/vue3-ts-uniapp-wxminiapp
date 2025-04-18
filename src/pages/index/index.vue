<template>
  <!-- 顶部搜索栏（固定） -->
  <view class="navbar-wrapper">
    <CustomNavbar />
  </view>

  <!-- 滚动容器 -->
  <scroll-view
    scroll-y
    class="scroll-content"
    @scrolltolower="handleScrollToLower"
    :lower-threshold="20"
  >
    <!-- 轮播图 -->
    <Swiper :pictures="bannerList" />

    <!-- 分类面板 -->
    <CategoryPanel :categoryList="categoryList" />

    <!-- 热门 -->
    <HotPanel :hotPanelList="hotPanelList" />

    <!-- 猜你喜欢 -->
    <guessLike :guessLikeList="guessLikeList" />
  </scroll-view>

  <!-- 加载提示 -->
  <view v-if="isLoading" class="loading-text">正在加载中...</view>
  <view v-else-if="isFinished" class="loading-text">没有更多数据了</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

// 组件引入
import CustomNavbar from './components/CustomNavbar.vue'
import Swiper from '@/components/Swiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import guessLike from './components/guessLike.vue'

// 接口
import {
  getHomeSwiperData,
  getHomeCategoryData,
  getHomeHotPanelData,
  getHomeGuessLikeData
} from '@/services/home'

// 数据
const bannerList = ref([])
const categoryList = ref([])
const hotPanelList = ref([])
const guessLikeList = ref([])

const guessLikeListPageInfo = ref<{ currentPage: number; pageSize: number; pageSum: number }>({
  currentPage: 0,
  pageSize: 10,
  pageSum: 0
})

const isLoading = ref(false)
const isFinished = ref(false)

const fetchBannerList = async () => {
  try {
    const res = await getHomeSwiperData()
    bannerList.value = res.result.map((item) => ({
      id: item.id,
      url: item.imgUrl
    }))
  } catch (error) {
    console.error('获取轮播图数据失败:', error)
  }
}

const fetchCategoryList = async () => {
  try {
    const res = await getHomeCategoryData()
    categoryList.value = res.result.map((item) => ({
      id: item.id,
      name: item.name,
      icon: item.icon
    }))
  } catch (error) {
    console.error('获取分类数据失败:', error)
  }
}

const fetchHotPanelList = async () => {
  try {
    const res = await getHomeHotPanelData()
    hotPanelList.value = res.result.map((item) => ({
      id: item.id,
      title: item.title,
      alt: item.alt,
      pictures: item.pictures,
      target: item.target,
      type: item.type
    }))
  } catch (error) {
    console.error('获取热门数据失败:', error)
  }
}

const fetchGuessLikeList = async () => {
  try {
    guessLikeListPageInfo.value.currentPage += 1
    isFinished.value = false
    const res = await getHomeGuessLikeData(guessLikeListPageInfo.value.currentPage, guessLikeListPageInfo.value.pageSize)
    guessLikeListPageInfo.value.pageSum = res.result.pages
    guessLikeList.value = res.result.items.map((item) => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      picture: item.picture,
      price: item.price,
      orderNum: item.orderNum
    }))

    guessLikeListPageInfo.value.pageSize = res.result.pageSize
    guessLikeListPageInfo.value.pageSum = res.result.pages

    if (guessLikeListPageInfo.value.currentPage >= guessLikeListPageInfo.value.pageSum)
      isFinished.value = true
  } catch (error) {
    console.error('获取猜你喜欢数据失败:', error)
  }
}

// 页面加载时获取数据
onLoad(async () => {
  await Promise.all([
    fetchBannerList(),
    fetchCategoryList(),
    fetchHotPanelList(),
    fetchGuessLikeList()
  ])
})

// 到底部触发
const handleScrollToLower = () => {
  loadMoreGuessLike()
}

// 加载更多猜你喜欢数据
const loadMoreGuessLike = async () => {
  if (isFinished.value){
    // 添加定时器：几秒后自动隐藏提示
    setTimeout(() => {
      isFinished.value = false
    }, 3000) // 3秒后隐藏提示
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
    guessLikeListPageInfo.value.pageSize = res.result.pageSize
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
</script>

<style>
/* 固定顶部导航栏 */
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
}

/* 滚动区域内容 */
.scroll-content {
  margin-top: 89rpx; /* 与导航栏高度一致，按需调整 */
  height: calc(100vh - 89rpx - 10rpx); /* 调整内容高度，避免被底部导航遮挡 */
  padding-bottom: 80rpx; /* 为底部加载提示腾出空间 */
}

/* 底部加载提示 */
.loading-text {
  text-align: center;
  padding: 20rpx;
  color: #888;
  font-size: 24rpx;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
