<template>
  <div class="container"><div class="page-head"><div><p class="eyebrow">SEARCH</p><h1>Available Flights</h1></div></div><SearchingFlight v-model="search" @search="searched = true" /><div class="grid-2"><FlightCard v-for="flight in filteredFlights" :key="flight.id" :flight="flight" /></div><p v-if="!filteredFlights.length" class="empty">No flights found.</p></div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue'
import SearchingFlight from '../components/SearchingFlight.vue'
import FlightCard from '../components/FlightCard.vue'
import { flights } from '../data/flights'
const search = reactive({ from: '', to: '', date: '' })
const searched = ref(false)
const filteredFlights = computed(() => flights.filter(f => (!search.from || f.from.toLowerCase().includes(search.from.toLowerCase())) && (!search.to || f.to.toLowerCase().includes(search.to.toLowerCase()))))
</script>
