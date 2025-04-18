// stores/user.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user',
  () => {
    // state
    const name = ref('')
    const isLoggedIn = ref(false)

    // actions
    function login(userName: string) {
      name.value = userName
      isLoggedIn.value = true
    }

    function logout() {
      name.value = 'user'
      isLoggedIn.value = false
    }

    return {
      name,
      isLoggedIn,
      login,
      logout,
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
