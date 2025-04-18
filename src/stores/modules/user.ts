// stores/user.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user',
  () => {
    // state
    const userInfo = ref({
      name: '',
      isLoggedIn: false,
      token: ''
    })

    // actions
    function login(userName: string, token: string) {
      userInfo.value.name = userName
      userInfo.value.isLoggedIn = true
      userInfo.value.token = token
    }

    function logout() {
      userInfo.value.name = 'user'
      userInfo.value.isLoggedIn = false
      userInfo.value.token = ''
    }

    function remove() {
      userInfo.value.name = ''
      userInfo.value.isLoggedIn = false
      userInfo.value.token = ''
    }

    return {
      userInfo,
      login,
      logout,
      remove
    }
  },
  {
    persist: {
      storage: {
        getItem: (key: string) => {
          return uni.getStorageSync(key)
        },
        setItem: (key: string, value: any) => {
          uni.setStorageSync(key, value)
        }
      }
    }
  }
)
