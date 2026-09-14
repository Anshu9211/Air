<template>
  <div class="app-shell">
    <Navbar v-if="!isLoginPage" />
    <main :class="{ 'page-with-nav': !isLoginPage }">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
</script>
