<template>
  <view class="card">
    <image :src="item.picture" :alt="truncatedDesc" mode="aspectFill" class="image" />
    <view class="content">
      <view class="title">{{ truncatedName }}</view>
      <view class="desc">{{ truncatedDesc }}</view>
      <view class="price-box">
        <text class="origin-price">￥{{ item.price }}</text>
        <text class="order-num">{{ item.orderNum }}人已购</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  item: {
    id: string
    name: string
    desc: string
    price: number
    picture: string
    orderNum: number
  }
}>()

const truncate = (str: string, maxLength = 10) => {
  return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str
}

const truncatedName = computed(() => truncate(props.item.name))
const truncatedDesc = computed(() => truncate(props.item.desc))
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.05);
  margin: 10rpx;
}

.image {
  width: 100%;
  height: 300rpx;
  object-fit: cover;
}

.content {
  padding: 20rpx;
}

.title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 8rpx;
}

.desc {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 16rpx;
}

.price-box {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.origin-price {
  color: #d15b5b;
  font-size: 29rpx;
}

.order-num {
  font-size: 23rpx;
  color: #999;
}
</style>
