<template>
  <div>
    <!-- <Navbar /> -->

    <div class="air-page">
      <div class="img-cont">
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
      <div class="container-fluid air-page-data py-5">
        <div class="container ">
          <div class="top-flight-data d-flex align-items-center justify-space-between px-2 mb-3">
          <h1 class="h4 fw-bold  " style="color: black;">Flight details</h1>
            <p class="air-muted mb-0 btn-clip">
              {{ results.length }} Flight's found
            </p>
          </div>
          <!-- Loading -->
          <SearchingFlight
            v-if="loading"
            message="Searching flights…"
          />
          <template v-else>
          
            <FlightCard
              v-for="flight in results"
              :key="flight.id"
              :flight="flight"
              :total-price="getTotalPrice(flight.price)"
              :adult="adult"
              :child="child"
            />
          </template>

        </div>
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


let route = useRoute();
let filters = reactive({
  from: "",
  to: "",
  date: "",
});

let results = ref([...flights]);
let loading = ref(false);
let searchTimer = null;
let adult = computed(() => {
  return Number(route.query.adult || 1);
});
let child = computed(() => {
  return Number(route.query.child || 0);
});
function getTotalPrice(price) {
  let adultFare = price * adult.value;

  let childFare = price * child.value * 0.5;

  return Math.round(adultFare + childFare);
}

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
onMounted(() => {
  let {
    from,
    to,
    departDate,
    date,
  } = route.query;

  filters.from = from || "";
  filters.to = to || "";
  filters.date = departDate || date || "";

  runSearch({
    immediate: true,
  });
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
.air-page-data
{
  background: linear-gradient(#8686ac58),url(../assets/img/bg-3.jpeg);
  background-position: top;
  background-size: cover;
  
}

.top-flight-data  .btn-clip{
  background-color: #fec5b0c4;
  padding: 7px 25px;
  border-radius: 35px;
  border: 1px solid #172C42;
  color: #172C42;
  font-weight: bold;
  font-size: 17px;
}
</style>