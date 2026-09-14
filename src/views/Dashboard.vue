<template>
  <div class="container">
    <section class="hero"><div><p class="eyebrow">WELCOME TO SKYFLY</p><h1>Travel made simple.</h1><p>Find flights, book your seat and manage every trip from one clean dashboard.</p><router-link to="/flights" class="btn">Explore Flights</router-link></div><div class="hero-icon">✈</div></section>
    <div class="stats"><div class="card"><span>Upcoming Flights</span><b>3</b></div><div class="card"><span>Bookings</span><b>8</b></div><div class="card"><span>Rewards</span><b>2,450</b></div></div>
    <h2 class="section-title">Popular flights</h2>
    <div class="grid-2"><FlightCard v-for="flight in flights.slice(0,2)" :key="flight.id" :flight="flight" /></div>
  </div>
</template>
<script setup>
import FlightCard from '../components/FlightCard.vue'
import { flights } from '../data/flights'
</script>
