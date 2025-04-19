<!--
此文件为开发者工具生成，生成时间: 2025/4/18下午10:30:01
使用方法：
在 D:\Code\Uniapp\temp\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\Code\Uniapp\temp\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view is="components/Swiper" current="0" autoplay="false">
    <swiper autoplay="false" circular="true" class="banner Swiper--banner" indicator-dots="true" current="0">
      <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
        <image class="sk-image"></image>
      </swiper-item>
      <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(-100%, 0px) translateZ(0px);">
        <image class="sk-image"></image>
      </swiper-item>
    </swiper>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="nav-container CategoryPanel--nav-container data-v-44ae5a81 CategoryPanel--data-v-44ae5a81">
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-508 sk-text" style="background-position-x: 50%;">居家</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-892 sk-text" style="background-position-x: 50%;">锦鲤</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-476 sk-text" style="background-position-x: 50%;">服饰</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-323 sk-text" style="background-position-x: 50%;">母婴</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-525 sk-text" style="background-position-x: 50%;">个护</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-552 sk-text" style="background-position-x: 50%;">严选</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-919 sk-text" style="background-position-x: 50%;">数码</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-696 sk-text" style="background-position-x: 50%;">运动</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-320 sk-text" style="background-position-x: 50%;">杂项</text>
      </navigator>
      <navigator class="nav-item CategoryPanel--nav-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81" hover-class="navigator-hover" open-type="navigate">
        <image class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image" mode="scaleToFill"></image>
        <text class="data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-771 sk-text" style="background-position-x: 50%;">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="nav-container HotPanel--nav-container data-v-df6c854a HotPanel--data-v-df6c854a">
      <navigator class="nav-item HotPanel--nav-item data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="navigator-hover" open-type="navigate">
        <view class="item-content HotPanel--item-content data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="item-left HotPanel--item-left data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-833 sk-text" style="background-position-x: 50%;">特惠推荐</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
          <view class="item-right HotPanel--item-right data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="alt-text HotPanel--alt-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-773 sk-text" style="background-position-x: 50%;">精选全攻略</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
        </view>
      </navigator>
      <navigator class="nav-item HotPanel--nav-item data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="navigator-hover" open-type="navigate">
        <view class="item-content HotPanel--item-content data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="item-left HotPanel--item-left data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-469 sk-text" style="background-position-x: 50%;">爆款推荐</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
          <view class="item-right HotPanel--item-right data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="alt-text HotPanel--alt-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-911 sk-text" style="background-position-x: 50%;">最受欢迎</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
        </view>
      </navigator>
      <navigator class="nav-item HotPanel--nav-item data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="navigator-hover" open-type="navigate">
        <view class="item-content HotPanel--item-content data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="item-left HotPanel--item-left data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-377 sk-text" style="background-position-x: 50%;">一站买全</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
          <view class="item-right HotPanel--item-right data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="alt-text HotPanel--alt-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-825 sk-text" style="background-position-x: 50%;">精心优选</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
        </view>
      </navigator>
      <navigator class="nav-item HotPanel--nav-item data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="navigator-hover" open-type="navigate">
        <view class="item-content HotPanel--item-content data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="item-left HotPanel--item-left data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-30 sk-text" style="background-position-x: 50%;">新鲜好物</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
          <view class="item-right HotPanel--item-right data-v-df6c854a HotPanel--data-v-df6c854a">
            <text class="alt-text HotPanel--alt-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-460 sk-text" style="background-position-x: 50%;">生活加分项</text>
            <image class="data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="scaleToFill"></image>
          </view>
        </view>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/guessLike">
    <view class="product-list guessLike--product-list data-v-93201d83 guessLike--data-v-93201d83">
      <view class="product-item guessLike--product-item data-v-93201d83 guessLike--data-v-93201d83">
        <view is="components/ProductCard" class="data-v-93201d83 guessLike--data-v-93201d83">
          <view class="card ProductCard--card data-v-a4cce9c2 ProductCard--data-v-a4cce9c2">
            <image class="image ProductCard--image data-v-a4cce9c2 ProductCard--data-v-a4cce9c2 sk-image" mode="aspectFill"></image>
          </view>
        </view>
      </view>
      <view class="product-item guessLike--product-item data-v-93201d83 guessLike--data-v-93201d83">
        <view is="components/ProductCard" class="data-v-93201d83 guessLike--data-v-93201d83">
          <view class="card ProductCard--card data-v-a4cce9c2 ProductCard--data-v-a4cce9c2">
            <image class="image ProductCard--image data-v-a4cce9c2 ProductCard--data-v-a4cce9c2 sk-image" mode="aspectFill"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-147 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.0769rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-508 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-892 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-476 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-323 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-525 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-552 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-919 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-696 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-320 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-771 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-833 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-773 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
  }
.sk-text-14-2857-469 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-911 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
  }
.sk-text-14-2857-377 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-825 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
  }
.sk-text-14-2857-30 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
  }
.sk-text-14-2857-460 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>