<template>
  <div>
    <!-- <Navbar /> -->

    <div class="air-page">
      <div class="img-cont mb-5">
        <div class="bg-img-cont">
          <img src="../assets/img/1.png" alt="1" width="147px" height="75px">
        </div>
        <div class="img-data">
          <h1 class="text-center">
            Travel safely
            <br>
            <span class="in-sp"> 
              With
            </span>
            <br>
            <span class="in-sp-two">
             Udaan Airlines
            </span>
          </h1>
        </div>
        
      </div>
      <div class="container">
        <h1 class="h4 fw-bold mb-3 " style="color: black;">Flight details</h1>

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
import { reactive, ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/Navbar.vue";
import FlightCard from "../components/FlightCard.vue";
import SearchingFlight from "../components/SearchingFlight.vue";
import { flights, searchFlights } from "../data/flights.js";

const route = useRoute();
const filters = reactive({ from: "", to: "", date: "" });
const results = ref([...flights]);
const loading = ref(false);

let searchTimer = null;

// Debounced by default so typing doesn't refilter on every single
// keystroke; pass { immediate: true } (submit button, reset, initial
// load) to skip the wait.
function runSearch({ immediate = false } = {}) {
  loading.value = true;
  clearTimeout(searchTimer);

  searchTimer = setTimeout(() => {
    results.value = searchFlights(filters);
    loading.value = false;
  }, immediate ? 0 : 350);
}

function resetFilters() {
  filters.from = "";
  filters.to = "";
  filters.date = "";
  runSearch({ immediate: true });
}

// Auto-update results the moment From / To / Date changes — no need
// to press Search.
watch(
  () => [filters.from, filters.to, filters.date],
  () => runSearch(),
);

onMounted(() => {
  // Prefill from the Dashboard search widget (?from=&to=&date=) if present.
  const { from, to, date } = route.query;
  filters.from = from || "";
  filters.to = to || "";
  filters.date = date || "";
  runSearch({ immediate: true });
});

onBeforeUnmount(() => clearTimeout(searchTimer));
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Edu+QLD+Hand:wght@400..700&display=swap');
.img-cont
{
  background: url(../assets/img/new-banner.png) ;
  background-size: cover ;
  background-position: center;
  width: 100%;
  height: 600px;
  position: relative;
  .bg-img-cont
  {
    position: absolute;
    bottom: -3px;
    right: 1%;
    transform: translateX(-50%);
    // img
    // {
    //   opacity: 0.5;
    // }
  }
  .img-data
  {
    position: absolute;
    top: 20%;
    left: 28%;
    h1
    {
      font-family: "Oswald", sans-serif;
      font-size: 70px;
      color: #172C42;
      .in-sp
      {
        font-family: "Edu QLD Hand", cursive;
        color: #8faac0;
        
      }
      
      .in-sp-two
      {
        color: #5298D2;
      }
    }
  }
}
</style>