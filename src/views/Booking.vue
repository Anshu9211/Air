<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container">

        <!-- Flight Not Found -->
        <div v-if="!flight" class="air-surface p-5 text-center">
          <i class="bi bi-exclamation-circle fs-2 air-muted d-block mb-2"></i>

          <p class="air-muted mb-3">
            We couldn't find that flight.
          </p>

          <router-link
            class="btn air-btn-primary"
            :to="{ name: 'flights' }"
          >
            Browse flights
          </router-link>
        </div>

        <!-- Booking Form -->
        <template v-else-if="!confirmed">

          <router-link
            :to="{
              name: 'flight-details',
              params: { id: flight.id }
            }"
            class="search-but d-inline-flex align-items-center gap-1 mb-3 mt-5 d-none"
          >
            <i class="bi bi-arrow-left"></i>
            Back to flight
          </router-link>

          <BookingForm
            :flight="flight"
            :base-fare="Number(flight.price) || 0"
            :submitting="submitting"
            @submit="handleConfirm"
          />

        </template>
        <BookingSuccess
          v-else-if="lastBooking"
          :booking="lastBooking"
        />

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import Navbar from "../components/Navbar.vue";
import BookingForm from "../components/BookingForm.vue";
import BookingSuccess from "../components/BookingSuccess.vue";

import {
  getFlightById,
  useBookingStore
} from "../data/flights.js";

import { useUserStore } from "../data/user.js";

let props = defineProps({
  id: {
    type: String,
    required: true
  }
});

let route = useRoute();
let bookingStore = useBookingStore();
let userStore = useUserStore();

let flight = computed(() => getFlightById(props.id));

let submitting = ref(false);
let confirmed = ref(false);
let lastBooking = ref(null);

function handleConfirm(passenger) {
  if (submitting.value || !flight.value) return;

  submitting.value = true;

  try {
    let adult = Math.max(
      1,
      Number(route.query.adult) || 1
    );

    let child = Math.max(
      0,
      Number(route.query.child) || 0
    );

    let baseFare = Number(flight.value.price) || 0;

    let calculatedTotal =
      baseFare * adult + baseFare * 0.5 * child;

    let totalPrice =
      Number(route.query.totalPrice) || calculatedTotal;

    let booking = {
      bookingId: `BK${Date.now().toString().slice(-8)}`,
      flightId: flight.value.id,
      flight: { ...flight.value },
      passenger: { ...passenger },

      adult,
      child,
      baseFare,
      totalPrice,

      bookedBy: userStore.currentUser?.email || "",
      bookedAt: new Date().toISOString()
    };

    bookingStore.addBooking(booking);

    lastBooking.value = booking;
    confirmed.value = true;

  } catch (error) {
    console.error("Booking failed:", error);
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.search-but {
  border: 1px solid #205ed23e;
  padding: 5px 15px;
  border-radius: 50px;
  color: #205ed2;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.4s ease;
}

.search-but:hover {
  background-color: #205ed2;
  color: white;
}
</style>