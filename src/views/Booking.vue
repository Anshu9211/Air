<template>
  <div class="container"><div class="page-head"><div><p class="eyebrow">RESERVATION</p><h1>Book a Flight</h1></div></div><BookingForm @submit="confirmBooking" /><div v-if="success" class="success">Booking confirmed successfully! <router-link to="/my-bookings">View My Bookings</router-link></div></div>
</template>
<script setup>
import { ref } from 'vue'
import BookingForm from '../components/BookingForm.vue'
const success = ref(false)
function confirmBooking() { success.value = true }
</script>
