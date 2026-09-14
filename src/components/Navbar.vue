<template>
  <header class="navbar">
    <div class="nav-inner">
      <router-link to="/dashboard" class="brand">Sky<span>Fly</span></router-link>
      <nav>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/flights">Flights</router-link>
        <router-link to="/booking">Book Flight</router-link>
        <router-link to="/my-bookings">My Bookings</router-link>
        <router-link to="/profile">Profile</router-link>
        <button class="logout" @click="logout">Logout</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
  localStorage.removeItem('airline_logged_in')
  router.replace('/login')
}
</script>
