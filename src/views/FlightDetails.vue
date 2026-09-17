<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container" style="max-width: 820px;">
        <router-link :to="{ name: 'flights' }" class="air-muted d-inline-flex align-items-center gap-1 mb-3">
          <i class="bi bi-arrow-left"></i> Back to search
        </router-link>

        <div v-if="!flight" class="air-surface p-5 text-center">
          <i class="bi bi-exclamation-circle fs-2 air-muted d-block mb-2"></i>
          <p class="air-muted mb-3">We couldn't find that flight.</p>
          <router-link class="btn air-btn-primary" :to="{ name: 'flights' }">Browse flights</router-link>
        </div>

        <div v-else class="air-surface p-4 p-md-5">
          <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-4">
            <div>
              <span class="air-badge-soft mb-2 d-inline-block">{{ flight.airline }}</span>
              <h1 class="h4 fw-bold mb-0">{{ flight.from }} → {{ flight.to }}</h1>
              <p class="air-muted mb-0">{{ formattedDate }}</p>
            </div>
            <div class="text-end">
              <div class="fs-3 fw-bold text-primary">₹{{ flight.price.toLocaleString("en-IN") }}</div>
              <div class="air-muted small">per adult</div>
            </div>
          </div>

          <div class="row text-center g-3 mb-4">
            <div class="col-4">
              <div class="fw-bold fs-5">{{ flight.depart }}</div>
              <div class="air-muted small">{{ flight.fromCode }} · {{ flight.from }}</div>
            </div>
            <div class="col-4">
              <i class="bi bi-airplane-fill text-primary fs-4"></i>
              <div class="air-muted small">{{ flight.duration }}</div>
              <div class="air-muted small">{{ flight.stops === 0 ? "Non-stop" : `${flight.stops} stop` }}</div>
            </div>
            <div class="col-4">
              <div class="fw-bold fs-5">{{ flight.arrive }}</div>
              <div class="air-muted small">{{ flight.toCode }} · {{ flight.to }}</div>
            </div>
          </div>

          <hr />

          <div class="row g-3 mb-4">
            <div class="col-6 col-md-3">
              <div class="air-muted small">Flight No.</div>
              <div class="fw-semibold">{{ flight.id }}</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="air-muted small">Aircraft</div>
              <div class="fw-semibold">{{ flight.aircraft }}</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="air-muted small">Stops</div>
              <div class="fw-semibold">{{ flight.stops === 0 ? "Non-stop" : flight.stops }}</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="air-muted small">Class</div>
              <div class="fw-semibold">Economy</div>
            </div>
          </div>

          <router-link class="btn air-btn-primary w-100" :to="{ name: 'booking', params: { id: flight.id } }">
            Book Now
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Navbar from "../components/Navbar.vue";
import { getFlightById } from "../data/flights.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const flight = computed(() => getFlightById(props.id));

const formattedDate = computed(() => {
  if (!flight.value) return "";
  return new Date(flight.value.date).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});
</script>
