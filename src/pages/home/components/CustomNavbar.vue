<template>
  <view class="nav-bar" :style="navBarStyle">
    <view class="search-wrapper">
      <text class="icon">🔍</text>
      <input
        class="search-input"
        type="text"
        placeholder="搜索商品"
        confirm-type="search"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
/* 顶部搜索栏 */
// 获取状态栏高度
const { safeAreaInsets, statusBarHeight } = uni.getSystemInfoSync()
const safeTop = statusBarHeight || safeAreaInsets?.top || 20  // fallback 20
// 在 script 中提前处理样式对象
const navBarStyle = {
  paddingTop: safeTop + 'px'
}
</script>

<style scoped>
.nav-bar {
  background-color: #b39e9e;
  padding: 8px 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

/* 搜索框容器 */
.search-wrapper {
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
}

/* 搜索图标 */
.icon {
  font-size: 16px;
  color: #999;
  margin-right: 6px;
}

/* 输入框 */
.search-input {
  flex: 1;
  font-size: 14px;
  background-color: transparent;
  border: none;
  outline: none;
}
</style>
