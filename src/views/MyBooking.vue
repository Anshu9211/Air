<template>
  <div class="container"><div class="page-head"><div><p class="eyebrow">TRIPS</p><h1>My Bookings</h1></div></div><div class="booking-list"><div v-for="booking in bookings" :key="booking.id" class="card booking"><div><b>{{ booking.flight }}</b><span>{{ booking.route }}</span></div><div><span>{{ booking.date }}</span><strong>{{ booking.status }}</strong></div></div></div></div>
</template>
<script setup>
const bookings = [{ id: 1, flight: 'SF-101', route: 'Delhi → Mumbai', date: '18 Sep 2026', status: 'Confirmed' }, { id: 2, flight: 'SF-205', route: 'Delhi → Bengaluru', date: '19 Sep 2026', status: 'Confirmed' }]
</script>
