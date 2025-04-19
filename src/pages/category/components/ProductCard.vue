<template>
  <view class="card">
    <image :src="item.picture" mode="aspectFill" class="image" />
    <view class="content">
      <view class="title">{{ truncatedName }}</view>
      <view class="price-box">
        <text class="origin-price">￥{{ item.price }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  item: {
    name: string
    price: number
    picture: string
  }
}>()

const truncate = (str: string, maxLength = 10) => {
  return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str
}

const truncatedName = computed(() => truncate(props.item.name))
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.05);
  margin: 5rpx;
}

.image {
  width: 100%;
  height: 150rpx;
  object-fit: cover;
}

.content {
  padding: 20rpx;
}

.title {
  font-size: 25rpx;
  font-weight: bold;
  margin-bottom: 8rpx;
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
</style>
