<template>
  <div class="container" v-if="flight"><router-link to="/flights" class="back">← Back to flights</router-link><div class="details card"><p class="eyebrow">{{ flight.flightNo }}</p><h1>{{ flight.from }} → {{ flight.to }}</h1><div class="detail-grid"><div><span>Date</span><b>{{ flight.date }}</b></div><div><span>Departure</span><b>{{ flight.time }}</b></div><div><span>Duration</span><b>{{ flight.duration }}</b></div><div><span>Fare</span><b>₹{{ flight.price.toLocaleString('en-IN') }}</b></div></div><router-link :to="`/booking?flight=${flight.id}`" class="btn">Book This Flight</router-link></div></div>
  <div v-else class="container"><h1>Flight not found</h1></div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { flights } from '../data/flights'
const route = useRoute()
const flight = computed(() => flights.find(f => String(f.id) === route.params.id))
</script>
