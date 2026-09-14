<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container">
        <h1 class="h4 fw-bold mb-4">My Bookings</h1>

        <div v-if="bookingStore.bookings.length === 0" class="air-surface p-5 text-center">
          <i class="bi bi-ticket-perforated fs-2 air-muted d-block mb-2"></i>
          <p class="air-muted mb-3">You haven't booked any flights yet.</p>
          <router-link class="btn air-btn-primary" :to="{ name: 'flights' }">Search Flights</router-link>
        </div>

        <div v-for="booking in bookingStore.bookings" :key="booking.bookingId" class="air-surface p-3 p-md-4 mb-3">
          <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
            <div>
              <span class="air-badge-soft mb-2 d-inline-block">{{ booking.bookingId }}</span>
              <h6 class="fw-semibold mb-0">{{ booking.flight.airline }} · {{ booking.flight.from }} → {{ booking.flight.to }}</h6>
              <p class="air-muted small mb-0">
                {{ formatDate(booking.flight.date) }} · {{ booking.flight.depart }}–{{ booking.flight.arrive }}
              </p>
            </div>
            <div class="text-end">
              <div class="fw-bold text-primary">₹{{ booking.flight.price.toLocaleString("en-IN") }}</div>
              <button class="btn btn-sm btn-outline-danger mt-2" @click="cancel(booking.bookingId)">
                Cancel
              </button>
            </div>
          </div>
          <div class="air-muted small">
            Passenger: {{ booking.passenger.fullName }} · Seat: {{ booking.passenger.seatPreference }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useBookingStore } from "@/data/flights.js";

const bookingStore = useBookingStore();

function cancel(bookingId) {
  bookingStore.cancelBooking(bookingId);
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
</script>
