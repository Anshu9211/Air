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
    <!-- <div class="air-page">
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
    </div> -->
    <div class="container-fluid">
      <div class="container">
        <div class="row">
           <div class="col-12 booking-main-cont">
              <div class="book-btn-cont">
                <button class="booking-btn" id="booking-page">
                  <i class="bi bi-airplane"></i>
                  <h5>Book a flight</h5>
                </button>
                <button class="status-btn" id="status-page">
                  <i class="bi bi-airplane"></i>
                  <h5>Flight Status</h5>
                </button>
              </div>
              
              <div class="book-data-btm">
                <div class="travel-details">
                  <label class="pe-2 me-4">
                    <input type="radio" id="return">
                    Return
                  </label>
                  <label>
                    <input type="radio" id="one-way">
                    One way
                  </label>
                </div>

                <div class="booking-info">
                  <div class="book-travel-data">
                    <label>
                      <input type="text" placeholder="From" id="departure">
                    </label>
                  </div>
                  <div class="reverse-btn-cont">
                    <button id="reverse-data">
                      <i class="bi bi-arrow-left-right"></i>
                    </button>
                  </div>
                  <div class="book-travel-data">
                    <label>
                      <input type="text" placeholder="To" id="arrival">
                    </label>
                  </div>
                  <div class="book-travel-date">
                    <label>
                      <input type="date" id="departure-date">
                    </label>
                  </div>
                  <div class="book-travel-date">
                    <label>
                      <input type="date" id="arrival-date">
                    </label>
                  </div>
                 
                </div>
                <div>
                  <button class="find-btn" id="find-btn"> 
                    Search Flights
                  </button>
                </div>
              </div>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

body,html
{
  padding: 0; 
  margin: 0;
  box-sizing: border-box;
  .hero 
  {
    background: linear-gradient(135deg, var(--air-primary-light), #ffffff);
  }
  
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
    .banner-top-cont h1
    {
      font-size: 60px;
      color: rgba(255, 255, 255, 0.603);
      span
      {
        color: rgb(221, 160, 221);
      }
    }
  }
.booking-main-cont
{
  // border: 1px solid black;
  // padding: 30px;
  // background-color: white;
   position: absolute;
    bottom: 14%;
    

  
  .book-data-btm
  {
    // border: 2px solid black;
    padding: 30px;
    // background-color: rgb(245, 156, 156);
    background-color: white;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    width: 1160px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.096); 
   
    // align-items: center;
    // justify-content: center;
     
    .travel-details
    {
      label
      {
        font-size: 18px;
        font-weight: 500;
        input 
        {
          scale: 1.4;
        }
      }
    }
    .booking-info
    {
      border: 1px solid black;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      margin-top: 20px;
      padding: 5px;
      border-radius: 8px;
      // width: 100%;
      // justify-content: center;
      .book-travel-data
      {
        input
        {
          width: 320px;
          padding: 7px 15px;
          border: none;
          outline: none;
        }
      }
      
      .reverse-btn-cont
      {
        button
        {
          padding: 3px 7px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.568);
          // border: none;
          outline: none;
          background-color: transparent;
          transition: 0.10s ease;
        }
        button:hover
        {
          background-color: rgba(221, 160, 221, 0.671);
        }
      }
      
      .book-travel-date
      {
        input
        {
          width: 200px;
          padding: 7px 5px;
          border: none;
          outline: none;
        }
      }
    }
    .find-btn
      {
        padding: 10px 20px;
        margin-top: 20px;
        width: 20%;
        border-radius: 12px;
        border: none;
        outline: none;
        
      }
  }
  .book-btn-cont
  {
    
    .booking-btn
    {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 13px;
      gap: 10px;
      border: none;
      padding: 8px 40px;
      border-right: 1px solid rgba(221, 160, 221, 0.589);
      h5
      {
        font-weight: 450;
      }
    }
  }
    .status-btn
    {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 13px;
      gap: 10px;
      border: none;
      padding: 8px 40px;
      h5
      {
        font-weight: 450;
      }
    }
}



</style>