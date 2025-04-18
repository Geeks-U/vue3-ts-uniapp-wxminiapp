<script lang="ts" setup>
import { useUserStore } from '@/stores/index'

const userStore = useUserStore();

import '@/utils/http'

const getData = () => {
  uni.request({
    method: 'GET',
    url: '/home/banner',
    success: (res) => {
      console.log('Data fetched successfully:', res.data)
    },
    fail: (err) => {
      console.error('Failed to fetch data:', err)
    }
  })
}
</script>

<template>
  <div>
    <p v-if="userStore.userInfo.isLoggedIn">Hello, {{ userStore.userInfo.name }}</p>
    <button @tap="userStore.login('Tom', 'hhh')">Login</button>
    <button @tap="userStore.logout">Logout</button>
    <button @tap="getData">Get Data</button>
  </div>
</template>
