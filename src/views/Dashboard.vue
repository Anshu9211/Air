<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container">
        <div class="air-surface p-4 p-md-5 mb-4 hero">
          <h1 class="h3 fw-bold mb-1">Welcome back, {{ firstName }} 👋</h1>
          <p class="air-muted mb-4">Where are you flying to next?</p>
          <router-link class="btn air-btn-primary" :to="{ name: 'flights' }">
            <i class="bi bi-search me-1"></i> Search Flights
          </router-link>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-6 col-md-3">
            <div class="air-surface p-3 text-center">
              <div class="fs-4 fw-bold text-primary">{{ upcomingCount }}</div>
              <div class="air-muted small">Upcoming Trips</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="air-surface p-3 text-center">
              <div class="fs-4 fw-bold text-primary">{{ bookingStore.bookings.length }}</div>
              <div class="air-muted small">Total Bookings</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="air-surface p-3 text-center">
              <div class="fs-4 fw-bold text-primary">{{ flights.length }}</div>
              <div class="air-muted small">Flights Available</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="air-surface p-3 text-center">
              <div class="fs-4 fw-bold text-primary">6</div>
              <div class="air-muted small">Destinations</div>
            </div>
          </div>
        </div>

        <div class="row g-3">
          <div class="col-md-6">
            <router-link :to="{ name: 'flights' }" class="air-surface air-surface--hover d-block p-4 h-100">
              <i class="bi bi-search fs-3 text-primary mb-2 d-block"></i>
              <h6 class="fw-semibold">Search Flights</h6>
              <p class="air-muted small mb-0">Find and compare flights across routes.</p>
            </router-link>
          </div>
          <div class="col-md-6">
            <router-link :to="{ name: 'my-bookings' }" class="air-surface air-surface--hover d-block p-4 h-100">
              <i class="bi bi-ticket-perforated fs-3 text-primary mb-2 d-block"></i>
              <h6 class="fw-semibold">My Bookings</h6>
              <p class="air-muted small mb-0">View and manage your reservations.</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Navbar from "../components/Navbar.vue";
import { useUserStore } from "../data/user.js";
import { useBookingStore, flights } from "../data/flights.js";

const userStore = useUserStore();
const bookingStore = useBookingStore();

const firstName = computed(() => userStore.currentUser?.name?.split(" ")[0] || "Traveler");
const upcomingCount = computed(() => bookingStore.bookings.length);
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--air-primary-light), #ffffff);
}
</style>
