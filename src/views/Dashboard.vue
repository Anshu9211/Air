<template>
  <div>
    <Navbar />
    <div class="container-fluid banner-top mb-5">
      <div class="container h-100 mx-auto banner-top-cont">
        <div class="row d-flex align-items-center text-center h-100">
          <div class="col-6">
            <h1>
                Elevate Your <span>Journey</span>
                <br>
                with Premium Travel
              </h1>
            </div>
            <div class="col-6">

            </div>
        </div>
      </div>
    </div>
    <div class="air-page">
      <div class="container">
        <div class="air-surface p-4 p-md-5 mb-4 hero">
          <h1 class="h3 fw-bold mb-1">Welcome back, {{ firstName }} 👋</h1>
          <p class="air-muted mb-4">Where are you flying to next?</p>
          <router-link class="btn air-btn-primary py-2 px-3 rounded-3" :to="{ name: 'flights' }">
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
*
{
  padding: 0; 
  margin: 0;
  box-sizing: border-box;
}
.hero {
  background: linear-gradient(135deg, var(--air-primary-light), #ffffff);
}
.banner-top
{
  background: url(../assets/img/Banner-img.avif);
  width: 100%;
  height: 500px;
  background-size: cover;
  font-family: "Bebas Neue", sans-serif;
  position: relative;
  background-position: center;
}
.banner-top .banner-top-cont
{
  /* margin: auto; */
  /* position:absolute;
  top:38%;
  left: 55%;
  transform: translateX(-50%); */
}
.banner-top .banner-top-cont h1
{
  font-size: 60px;
  color: rgba(255, 255, 255, 0.603);
}
.banner-top .banner-top-cont h1 span
{
  color: rgb(221, 160, 221);
}
.air-page
{
  margin: 0px 350px;
  min-height: 480px;
}

</style>