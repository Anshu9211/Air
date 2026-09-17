<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container" style="max-width: 720px;">
        <div v-if="!flight" class="air-surface p-5 text-center">
          <i class="bi bi-exclamation-circle fs-2 air-muted d-block mb-2"></i>
          <p class="air-muted mb-3">We couldn't find that flight.</p>
          <router-link class="btn air-btn-primary" :to="{ name: 'flights' }">Browse flights</router-link>
        </div>

        <template v-else-if="!confirmed">
          <router-link :to="{ name: 'flight-details', params: { id: flight.id } }" class="air-muted d-inline-flex align-items-center gap-1 mb-3">
            <i class="bi bi-arrow-left"></i> Back to flight
          </router-link>

          <div class="air-surface p-3 mb-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <div class="fw-semibold">{{ flight.airline }} · {{ flight.id }}</div>
              <div class="air-muted small">{{ flight.from }} → {{ flight.to }} · {{ flight.depart }}–{{ flight.arrive }}</div>
            </div>
            <div class="fw-bold text-primary fs-5">₹{{ flight.price.toLocaleString("en-IN") }}</div>
          </div>

          <BookingForm :submitting="submitting" @submit="handleConfirm" />
        </template>

        <div v-else class="air-surface p-5 text-center">
          <i class="bi bi-check-circle-fill text-success display-5 mb-3 d-block"></i>
          <h2 class="h4 fw-bold mb-1">Booking Confirmed!</h2>
          <p class="air-muted mb-1">Reference: <strong>{{ lastBookingId }}</strong></p>
          <p class="air-muted mb-4">A confirmation has been sent to your email.</p>
          <div class="d-flex gap-2 justify-content-center flex-wrap">
            <router-link class="btn air-btn-primary" :to="{ name: 'my-bookings' }">View My Bookings</router-link>
            <router-link class="btn btn-outline-secondary" :to="{ name: 'flights' }">Book Another Flight</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import BookingForm from "../components/BookingForm.vue";
import { getFlightById, useBookingStore } from "../data/flights.js";
import { useUserStore } from "../data/user.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const bookingStore = useBookingStore();
const userStore = useUserStore();

const flight = computed(() => getFlightById(props.id));
const submitting = ref(false);
const confirmed = ref(false);
const lastBookingId = ref("");

function handleConfirm(passenger) {
  submitting.value = true;

  setTimeout(() => {
    const bookingId = `BK${Date.now().toString().slice(-8)}`;

    bookingStore.addBooking({
      bookingId,
      flightId: flight.value.id,
      flight: flight.value,
      passenger,
      bookedBy: userStore.currentUser?.email,
      bookedAt: new Date().toISOString(),
    });

    lastBookingId.value = bookingId;
    submitting.value = false;
    confirmed.value = true;
  }, 700);
}
</script>
