<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container">
        <h1 class="h4 fw-bold mb-3">Search Flights</h1>

        <form class="air-surface p-3 p-md-4 mb-4" @submit.prevent="runSearch">
          <div class="row g-3 align-items-end">
            <div class="col-12 col-md-3">
              <label class="form-label">From</label>
              <input v-model.trim="filters.from" type="text" class="form-control" placeholder="e.g. Delhi" />
            </div>
            <div class="col-12 col-md-3">
              <label class="form-label">To</label>
              <input v-model.trim="filters.to" type="text" class="form-control" placeholder="e.g. Mumbai" />
            </div>
            <div class="col-12 col-md-3">
              <label class="form-label">Date</label>
              <input v-model="filters.date" type="date" class="form-control" />
            </div>
            <div class="col-12 col-md-3">
              <button type="submit" class="btn air-btn-primary w-100">
                <i class="bi bi-search me-1"></i> Search
              </button>
            </div>
          </div>
        </form>

        <SearchingFlight v-if="loading" message="Searching flights…" />

        <template v-else>
          <p class="air-muted mb-3">{{ results.length }} flight(s) found</p>

          <FlightCard v-for="flight in results" :key="flight.id" :flight="flight" />

          <div v-if="results.length === 0" class="air-surface p-5 text-center">
            <i class="bi bi-emoji-frown fs-2 air-muted d-block mb-2"></i>
            <p class="air-muted mb-3">No flights match your search.</p>
            <button class="btn btn-outline-secondary" @click="resetFilters">Reset filters</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import FlightCard from "@/components/FlightCard.vue";
import SearchingFlight from "@/components/SearchingFlight.vue";
import { flights, searchFlights } from "@/data/flights.js";

const filters = reactive({ from: "", to: "", date: "" });
const results = ref([...flights]);
const loading = ref(false);

function runSearch() {
  loading.value = true;
  // Simulate a search round-trip so the loading state is visible.
  setTimeout(() => {
    results.value = searchFlights(filters);
    loading.value = false;
  }, 600);
}

function resetFilters() {
  filters.from = "";
  filters.to = "";
  filters.date = "";
  results.value = [...flights];
}

onMounted(() => {
  results.value = [...flights];
});
</script>
