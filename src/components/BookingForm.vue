<template>
  <form class="card form-grid" @submit.prevent="$emit('submit', form)">
    <h2>Passenger Details</h2>
    <input v-model="form.name" required placeholder="Passenger name" />
    <input v-model="form.email" required type="email" placeholder="Email address" />
    <input v-model="form.phone" required placeholder="Phone number" />
    <input v-model.number="form.passengers" required min="1" type="number" placeholder="Passengers" />
    <button class="btn" type="submit">Confirm Booking</button>
  </form>
</template>
<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', email: '', phone: '', passengers: 1 })
defineEmits(['submit'])
</script>
