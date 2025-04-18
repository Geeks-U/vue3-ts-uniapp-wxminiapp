import { http } from '@/utils/http'

// 获取轮播图数据
type SwiperData = {
  id: string
  imgUrl: string
  type: number
}
export const getHomeSwiperData = () => {
  return http<SwiperData[]>(
    {
      method: 'GET',
      url: '/home/banner',
      data: {
        distributionSite: 1
      }
    }
  )
}

// 获取分类数据
type Category = {
  id: number
  name: string
  icon: string
}
export const getHomeCategoryData = () => {
  return http<Category[]>(
    {
      method: 'GET',
      url: '/home/category/mutli',
    }
  )
}

// 获取热门分类数据
type HotPanel = {
  id: number
  title: string
  alt: string
  pictures: string[]
  target: string
  type: string
}
export const getHomeHotPanelData = () => {
  return http<HotPanel[]>(
    {
      method: 'GET',
      url: '/home/hot/mutli',
    }
  )
}

// 获取猜你喜欢数据
type item = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  orderNum: number
}
type GuessLike = {
  "counts": number
  "pageSize": number
  "pages": number
  "page": number
  "items": Array<item>
}
export const getHomeGuessLikeData = (page=1, pageSize=10) => {
  return http<GuessLike>(
    {
      method: 'GET',
      url: '/home/goods/guessLike',
      data: {
        page,
        pageSize
      }
    }
  )
}