import Swiper from "./Swiper.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Swiper: typeof Swiper
  }
}