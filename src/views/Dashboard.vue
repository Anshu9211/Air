<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div>
        <h1>dashboard design </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Navbar from "../components/Navbar.vue";
// import { useUserStore } from "../data/user.js";
// import { useBookingStore, flights } from "../data/flights.js";

// const userStore = useUserStore();
// const bookingStore = useBookingStore();

// const firstName = computed(() => userStore.currentUser?.name?.split(" ")[0] || "Traveler");
// const upcomingCount = computed(() => bookingStore.bookings.length);
</script>

<style scoped>
h1{
  text-align: center;
  margin: auto;
}
</style>
