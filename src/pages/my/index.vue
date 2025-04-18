<script lang="ts" setup>
import { useUserStore } from '@/stores/index'

const userStore = useUserStore()
</script>

<template>
  <div>
    <p v-if="userStore.isLoggedIn">Hello, {{ userStore.name }}</p>
    <button @tap="userStore.login('Alice')">Login</button>
    <button @tap="userStore.logout">Logout</button>
  </div>
</template>
