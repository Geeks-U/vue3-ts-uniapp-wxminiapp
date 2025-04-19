// stores/user.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfoCPLogin = ref({
    isLogin: false,
    id: null as number | null,
    mobile: '',
    token: '',
    nickname: '',
    avatar: '',
    gender: '',
    birthday: '',
    cityCode: '',
    provinceCode: '',
    profession: '',
    account: ''
  })

  // 设置用户信息
  function setUserInfoCPLogin(user: {
    id: number
    token: string
    mobile?: string
    nickname?: string
    avatar?: string
    gender?: string
    birthday?: string
    cityCode?: string
    provinceCode?: string
    profession?: string
    account?: string
  }) {
    userInfoCPLogin.value = {
      ...userInfoCPLogin.value,
      ...user,
      isLogin: true
    }
  }

  // 清空用户信息
  function removeUserInfoCPLogin() {
    userInfoCPLogin.value = {
      isLogin: false,
      id: null,
      mobile: '',
      token: '',
      nickname: '',
      avatar: '',
      gender: '',
      birthday: '',
      cityCode: '',
      provinceCode: '',
      profession: '',
      account: ''
    }
  }

  return {
    userInfoCPLogin,
    setUserInfoCPLogin,
    removeUserInfoCPLogin
  }
}, {
  // 专用于uniapp的持久化
  persist: {
    storage: {
      getItem: (key: string) => uni.getStorageSync(key),
      setItem: (key: string, value: any) => uni.setStorageSync(key, value)
    }
  }
})
