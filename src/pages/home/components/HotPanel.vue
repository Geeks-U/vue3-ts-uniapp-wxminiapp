<template>
  <view class="nav-container">
    <navigator
      v-for="item in hotPanelList"
      :key="item.id"
      :url="`/pages/goodsList/:${item.id}`"
      open-type="navigate"
      hover-class="navigator-hover"
      class="nav-item"
    >
      <view class="item-content">
        <view class="item-left">
          <text>{{ item.title }}</text>
          <image :src="item.pictures[0]" mode="scaleToFill" />
        </view>
        <view class="item-right">
          <text class="alt-text">{{ item.alt }}</text>
          <image :src="item.pictures[1]" mode="scaleToFill" />
        </view>
      </view>
    </navigator>
  </view>
</template>

<script setup lang="ts">
type HotPanel = {
  id: number
  title: string
  alt: string
  pictures: string[]
  target: string
  type: string
}

const props = defineProps({
  hotPanelList: {
    type: Array as () => HotPanel[],
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
  width: 48%; /* 每行大约显示2个 */
  margin-bottom: 15px;
  box-sizing: border-box;
  text-align: center;
  background-color: #f8f8f8;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #e6f7ff;
}

.item-content {
  display: flex;
  justify-content: space-between; /* 水平排列两组 view */
  align-items: center;
}

.item-left,
.item-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

image {
  width: 85px;
  height: 85px;
  margin-bottom: 6px;
}

text {
  font-size: 14px;
  color: #333;
}

.alt-text {
  font-size: 12px; /* 更小的字体 */
  color: #888; /* 更淡的颜色 */
}
</style>
