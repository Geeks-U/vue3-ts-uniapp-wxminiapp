<template>
  <view class="page-container">
    <!-- 顶部搜索栏（固定） -->
    <view class="navbar-fixed">
      <CustomNavbar />
    </view>

    <!-- 主体内容区域 -->
    <PageSkeleton v-if="skeletonLoading" />
    <view v-else class="main-container">
      <!-- 左侧导航滚动容器 -->
      <scroll-view
        scroll-y
        class="left-scroll-view"
      >
        <uni-list>
          <uni-list-item
            v-for="item in categoriesDataList"
            :key="item.id"
            :title="item.name"
            @tap="getCategory(item.children, item.id)"
          />
        </uni-list>
      </scroll-view>

      <!-- 右侧内容滚动容器 -->
      <scroll-view
        scroll-y
        class="right-scroll-view"
      >
        <GoodsShow
          v-for="item in categoryList"
          :key="item.id"
          :name="item.name"
          :goodsList="item.goods"
        />
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

// 组件引入
import CustomNavbar from './components/CustomNavbar.vue'
import GoodsShow from './components/GoodsShow.vue'
import PageSkeleton from './components/PageSkeleton.vue'

// 接口
import { getCategoriesData } from '@/services/category'

// 数据
const categoriesDataList = ref([])
const categoryList = ref([])
const selectedCategoryId = ref<number | null>(null)  // 用来跟踪选中的分类ID
const skeletonLoading = ref(true)  // 用于控制骨架屏的显示

const fetchCategoriesDataList = async () => {
  try {
    const res = await getCategoriesData()
    categoriesDataList.value = res.result.map((item) => ({
      id: item.id,
      name: item.name,
      children: item.children.map((child) => ({
        id: child.id,
        name: child.name,
        goods: child.goods.map((good) => ({
          id: good.id,
          name: good.name,
          price: good.price,
          imgUrl: good.picture,
        })),
      })),
    }))
    categoryList.value = categoriesDataList.value[0].children.map((child: any) => ({
      id: child.id,
      name: child.name,
      goods: child.goods.map((good: any) => ({
        id: good.id,
        name: good.name,
        price: good.price,
        imgUrl: good.imgUrl,
      })),
    }))
    
    // 设置初始选中的分类ID为第一个分类的ID
    selectedCategoryId.value = categoriesDataList.value[0].id
  } catch (error) {
    console.error('获取分类数据失败:', error)
  }
}

// 页面加载时获取数据
onLoad(async () => {
  await Promise.all([fetchCategoriesDataList()])
  skeletonLoading.value = false  // 数据加载完成后隐藏骨架屏
})

// 分类数据展示切换
const getCategory = (children: [], categoryId: number) => {
  selectedCategoryId.value = categoryId  // 更新选中的分类ID
  categoryList.value = children.map((child: any) => ({
    id: child.id,
    name: child.name,
    goods: child.goods.map((good: any) => ({
      id: good.id,
      name: good.name,
      price: good.price,
      imgUrl: good.imgUrl,
    })),
  }))
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.navbar-fixed {
  height: 50rpx; /* 你可以根据CustomNavbar的实际高度调整 */
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
}

.main-container {
  display: flex;
  flex: 1;
  padding-top: 120rpx; /* 需要与navbar的高度一致，以避免遮挡 */
  height: 100%;
  overflow: hidden; /* 防止双滚动条 */
}

.left-scroll-view {
  width: 25%; /* 左侧导航宽度 */
  height: 100%;
}

.right-scroll-view {
  width: 75%; /* 右侧内容宽度 */
  height: 100%;
  background-color: #fff;
}
</style>
