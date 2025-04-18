<script lang="ts" setup>
import { useUserStore } from '@/stores/index'

const userStore = useUserStore();

import {  http } from '@/utils/http'

const getData = () => {
  http<any[]>({
    method: 'GET',
    url: '/home/banner',
  }).then((res) => {
    console.log('Data fetched successfully:', res);
  }).catch((error) => {
    console.error('Error fetching data:', error);
  });
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
