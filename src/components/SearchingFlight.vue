<template>
  <div class="search-box">
    <input v-model="model.from" placeholder="From" />
    <input v-model="model.to" placeholder="To" />
    <input v-model="model.date" type="date" />
    <button class="btn" @click="$emit('search')">Search Flights</button>
  </div>
</template>
<script setup>
const model = defineModel({ default: () => ({ from: '', to: '', date: '' }) })
defineEmits(['search'])
</script>
