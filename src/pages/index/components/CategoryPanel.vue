<template>
  <view class="nav-container">
    <navigator
      v-for="category in categoryList"
      :key="category.id"
      :url="`/pages/goodsList/:${category.id}`"
      open-type="navigate"
      hover-class="navigator-hover"
      class="nav-item"
    >
      <image :src="category.icon" mode="scaleToFill" />
      <text>{{ category.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
type Category = {
  id: number
  name: string
  icon: string
}

const props = defineProps({
  categoryList: {
    type: Array as () => Category[],
    default: () => [],
  },
})
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18%; /* 每行大约显示5个 */
  margin-bottom: 15px;
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #e6f7ff;
}

image {
  width: 40px;
  height: 40px;
  margin-bottom: 6px;
}

text {
  font-size: 14px;
  color: #333;
}
</style>
