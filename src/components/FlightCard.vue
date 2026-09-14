<template>
  <article class="flight-card">
    <div class="flight-top">
      <div><strong>{{ flight.airline }}</strong><span>{{ flight.flightNo }}</span></div>
      <strong>₹{{ flight.price.toLocaleString('en-IN') }}</strong>
    </div>
    <div class="route">
      <div><b>{{ flight.time }}</b><span>{{ flight.from }}</span></div>
      <div class="line">✈ ─────────</div>
      <div class="right"><b>{{ flight.duration }}</b><span>{{ flight.to }}</span></div>
    </div>
    <div class="flight-bottom"><span>{{ flight.date }}</span><router-link :to="`/flights/${flight.id}`" class="btn small">View Details</router-link></div>
  </article>
</template>

<script setup>
defineProps({ flight: { type: Object, required: true } })
</script>
