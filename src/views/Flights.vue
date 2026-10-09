<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container">

        <h1 class="h4 fw-bold mb-3">Search Flights</h1>

        <!-- Search Form -->
        <form
          class="air-surface p-3 p-md-4 mb-4"
          @submit.prevent="runSearch({ immediate: true })"
        >
          <div class="row g-3 align-items-end">

            <!-- From -->
            <div class="col-12 col-md-3">
              <label class="form-label">From</label>

              <input
                v-model.trim="filters.from"
                type="text"
                class="form-control"
                placeholder="e.g. Delhi"
              />
            </div>

            <!-- To -->
            <div class="col-12 col-md-3">
              <label class="form-label">To</label>

              <input
                v-model.trim="filters.to"
                type="text"
                class="form-control"
                placeholder="e.g. Mumbai"
              />
            </div>

            <!-- Date -->
            <div class="col-12 col-md-3">
              <label class="form-label">Date</label>

              <input
                v-model="filters.date"
                type="date"
                class="form-control"
              />
            </div>

            <!-- Search Button -->
            <div class="col-12 col-md-3">
              <button
                type="submit"
                class="btn air-btn-primary w-100"
              >
                <i class="bi bi-search me-1"></i>
                Search
              </button>
            </div>

          </div>
        </form>

        <!-- Loading -->
        <SearchingFlight
          v-if="loading"
          message="Searching flights…"
        />

        <!-- Results -->
        <template v-else>

          <p class="air-muted mb-3">
            {{ results.length }} flight(s) found
          </p>

          <!-- Flight Cards -->
          <FlightCard
            v-for="flight in results"
            :key="flight.id"
            :flight="flight"
            :total-price="getTotalPrice(flight.price)"
            :adult="adult"
            :child="child"
          />

          <!-- No Results -->
          <div
            v-if="results.length === 0"
            class="air-surface p-5 text-center"
          >
            <i
              class="bi bi-emoji-frown fs-2 air-muted d-block mb-2"
            ></i>

            <p class="air-muted mb-3">
              No flights match your search.
            </p>

            <button
              class="btn btn-outline-secondary"
              @click="resetFilters"
            >
              Reset filters
            </button>
          </div>

        </template>

      </div>
    </div>
  </div>
</template>


<script setup>
import {
  reactive,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
} from "vue";

import { useRoute } from "vue-router";

import Navbar from "../components/Navbar.vue";
import FlightCard from "../components/FlightCard.vue";
import SearchingFlight from "../components/SearchingFlight.vue";

import {
  flights,
  searchFlights,
} from "../data/flights.js";


const route = useRoute();


// ------------------------------------
// Search Filters
// ------------------------------------

const filters = reactive({
  from: "",
  to: "",
  date: "",
});


// ------------------------------------
// Flight Results
// ------------------------------------

const results = ref([...flights]);

const loading = ref(false);

let searchTimer = null;


// ------------------------------------
// Passenger Data
// Dashboard se query ke through aayega
// ------------------------------------

const adult = computed(() => {
  return Number(route.query.adult || 1);
});

const child = computed(() => {
  return Number(route.query.child || 0);
});


// ------------------------------------
// Calculate Total Price
// Adult = 100%
// Child = 50%
// ------------------------------------

function getTotalPrice(price) {
  const adultFare = price * adult.value;

  const childFare = price * child.value * 0.5;

  return Math.round(adultFare + childFare);
}


// ------------------------------------
// Search Flights
// ------------------------------------

function runSearch({ immediate = false } = {}) {
  loading.value = true;

  clearTimeout(searchTimer);

  searchTimer = setTimeout(
    () => {
      results.value = searchFlights(filters);

      loading.value = false;
    },
    immediate ? 0 : 350
  );
}


// ------------------------------------
// Reset Filters
// ------------------------------------

function resetFilters() {
  filters.from = "";
  filters.to = "";
  filters.date = "";

  runSearch({
    immediate: true,
  });
}


// ------------------------------------
// Watch Search Filters
// ------------------------------------

watch(
  () => [
    filters.from,
    filters.to,
    filters.date,
  ],
  () => {
    runSearch();
  }
);


// ------------------------------------
// Get Dashboard Search Data
// ------------------------------------

onMounted(() => {
  const {
    from,
    to,
    departDate,
    date,
  } = route.query;


  filters.from = from || "";

  filters.to = to || "";

  // Dashboard se departDate aa raha hai
  // old route ke liye date bhi support rahega
  filters.date = departDate || date || "";


  runSearch({
    immediate: true,
  });
});


// ------------------------------------
// Clear Timer
// ------------------------------------

onBeforeUnmount(() => {
  clearTimeout(searchTimer);
});
</script>