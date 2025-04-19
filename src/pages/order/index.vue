<template>
  <view>
    <!-- 头部 -->
    <view class="header">
      <text
        class="header-item"
        :class="{'active': activeTab === 0}"
        @click="setActiveTab(0)"
      >全部</text>
      <text
        class="header-item"
        :class="{'active': activeTab === 1}"
        @click="setActiveTab(1)"
      >待付款</text>
      <text
        class="header-item"
        :class="{'active': activeTab === 2}"
        @click="setActiveTab(2)"
      >待发货</text>
      <text
        class="header-item"
        :class="{'active': activeTab === 3}"
        @click="setActiveTab(3)"
      >待收货</text>
      <text
        class="header-item"
        :class="{'active': activeTab === 4}"
        @click="setActiveTab(4)"
      >待评价</text>
    </view>
    <!-- 主体 -->
    <view>
      <text>没有更多数据</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 当前选中的tab
const activeTab = ref(0);

// 设置当前选中的tab
const setActiveTab = (tabIndex: number) => {
  activeTab.value = tabIndex;
};

// 给每个导航准备一个组件用于渲染不同类型的订单

</script>

<style scoped>
/* 头部样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* 头部每个项的样式 */
.header-item {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
}

/* 默认选中的tab样式 */
.header-item.active {
  color: #007aff;
  border-bottom: 2px solid #007aff;
}

/* 鼠标悬停效果 */
.header-item:hover {
  color: #007aff;
}

/* 主体样式 */
.view {
  padding: 20px;
  text-align: center;
}
</style>
