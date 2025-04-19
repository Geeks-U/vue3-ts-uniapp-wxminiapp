<template>
  <view>
    <!-- 顶部栏 -->
    <view class="top-bar">
      <text class="left-text">{{ name }}</text>
      <view class="right-box">
        <text class="right-text">全部</text>
        <uni-icons type="right" size="17"></uni-icons>
      </view>
    </view>

    <!-- 卡片列表 -->
    <view class="card-container">
      <view v-for="item in goodsList" :key="item.id" class="card-wrapper">
        <ProductCard
          :item="{
            name: item.name,
            price: item.price,
            picture: item.imgUrl
          }"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'

type Goods = {
  id: number
  name: string
  price: number
  imgUrl: string
}

defineProps({
  name: {
    type: String,
    default: '',
  },
  goodsList: {
    type: Array as () => Goods[],
    default: () => [],
  },
})
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
}

.left-text {
  font-size: 37rpx;
  font-weight: bold;
}

.right-box {
  display: flex;
  align-items: center;
}

.right-text {
  font-size: 28rpx;
  margin-right: 8rpx;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 修改为 left对齐 */
}

.card-wrapper {
  width: 33%; /* 每行显示3张卡片 */
  box-sizing: border-box;
  padding: 5rpx;
}
</style>
