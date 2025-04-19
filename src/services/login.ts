import { http } from '@/utils/http'

// 微信小程序快捷登录
type wxMinloginData = {
  id: number
  mobile: string
  token: string
  nickname: string
  avatar: string
  account: string
}
export const wxMinlogin = (code:string, encryptedData:string, iv:string) => {
  return http<wxMinloginData>(
    {
      method: 'POST',
      url: '/login/wxMin',
      data: {
        "code": code,
        "encryptedData": encryptedData,
        "iv": iv
      }
    }
  )
}

// 测试
type LoginData = {
  id: string
  mobile: string
  token: string
  nickname: string
  avatar: string
  gender: string
  birthday: string
  cityCode: string
  provinceCode: string
  profession: string
  account: string
}
export const login = (account="13123456789", password="123456") => {
  return http<LoginData>(
    {
      method: 'POST',
      url: '/login',
      data: {
        "account": account,
        "password": password
      }
    }
  )
}