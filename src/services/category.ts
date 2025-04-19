import { http } from '@/utils/http'

// 获取分类数据列表
type GoodsData = {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  orderNum: number
}
type CategoryData = {
  id: string
  name: string
  picture: string
  parentId: string | null
  parentName: string | null
  goods: GoodsData[]
}
type CategoriesData = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: CategoryData[]
}
export const getCategoriesData = () => {
  return http<CategoriesData[]>(
    {
      method: 'GET',
      url: '/category/top',
    }
  )
}