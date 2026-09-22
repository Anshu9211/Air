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