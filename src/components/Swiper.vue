<template>
	<swiper class="banner" indicator-dots="true" autoplay="true" circular="true">
		<swiper-item v-for="(item, index) in pictures" :key="item.id ?? index">
			<image @tap="onPreviewImage(item.url)" :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script lang="ts" setup>

// 图片类型定义，id 可选
interface Picture {
	id?: number
	url: string
}

// 接收 props
const props = defineProps<{
	pictures: Picture[]
}>()

// 预览图片方法
const onPreviewImage = (url: string) => {
	uni.previewImage({
		urls: props.pictures.map((item: Picture) => item.url),
		current: url
	})
}
</script>

<style>
.banner,
.banner image {
	width: 750rpx;
	height: 300rpx;
}
</style>
