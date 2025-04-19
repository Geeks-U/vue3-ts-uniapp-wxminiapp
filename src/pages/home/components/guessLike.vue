<template>
  <view class="product-list">
    <view
      class="product-item"
      v-for="item in guessLikeList"
      :key="item.id"
    >
      <ProductCard :item="item" />
    </view>
  </view>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  guessLikeList: {
    type: Array as () => Array<{
      id: string
      name: string
      desc: string
      price: number
      picture: string
      orderNum: number
    }>,
    default: () => [],
  },
})
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  width: 49%; /* 两个商品之间留点间距 */
  margin-bottom: 11rpx;
}
</style>
