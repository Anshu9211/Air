<template>
 <div>
  <Navbar/>
   <div class="container-fluid mt-5">
    <div class="container ">
        <div class="row">
            <div class="col-lg-12">
                <div class="my-bookings">
                    <div class="contant">
                        <h3>My Bookings</h3>
                        <p>View and Manage your flights bookings</p>
                    </div>

                    <div v-if="bookings.length === 0" class="empty-bookings shadow text-center">
                        <i class="bi bi-airplane fs-1 mb-3 d-block"></i>
                        <h5 class="mb-2">No bookings yet</h5>
                        <p class="mb-3">You haven't booked any flights. Search and book a flight to see it here.</p>
                        <router-link class="View-Details" :to="{ name: 'flights' }">
                            <i class="bi bi-search"></i> Search Flights
                        </router-link>
                    </div>

                    <div
                        v-for="booking in bookings"
                        :key="booking.bookingId"
                        class="box-bookings shadow"
                    >
                        <div class="flights">
                            <div class="contant-input">
                                <div class="floghts-Name">
                                    <img
                                        v-if="getLogo(booking.flight?.airline)"
                                        :src="getLogo(booking.flight?.airline)"
                                        class="img-fluid"
                                    >
                                    <i v-else class="bi bi-airplane-fill airline-fallback-icon"></i>
                                    <p class="airline-name mb-0">{{ booking.flight?.airline }}</p>
                                </div>
                            </div>
                            <div class="data-box">
                                <div class="start-text">
                                    <div class="data text-center">
                                        <h5>{{ booking.flight?.fromCode }}</h5>
                                        <p>{{ booking.flight?.from }}</p>
                                        <p>{{ formatTime(booking.flight?.depart) }}</p>
                                    </div>
                                    <div class="red-box">
                                        <div class="icon">
                                            <i class="bi bi-airplane"></i>
                                        </div>
                                        <span class="d-block">....................................</span>
                                        <div class="icon-box">
                                            <i class="bi bi-geo-alt"></i>
                                        </div>
                                    </div>
                                    <div class="data text-center">
                                        <h5>{{ booking.flight?.toCode }}</h5>
                                        <p>{{ booking.flight?.to }}</p>
                                        <p>{{ formatTime(booking.flight?.arrive) }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="data-center">
                                <div class="box-icon">
                                    <i class="bi bi-calendar4-week"></i>
                                </div>
                                <div class="text-data">
                                    <p>Travel Date</p>
                                    <h6>{{ formatDate(booking.flight?.date).day }}</h6>
                                    <p>({{ formatDate(booking.flight?.date).weekday }})</p>
                                </div>
                            </div>
                            <div class="button">
                                <button
                                    class="View-Details mb-3"
                                    id="top-data"
                                    type="button"
                                    @click="viewDetails(booking)"
                                ><i class="bi bi-eye"></i>  View Details</button>
                                <div class="button2 ">
                                    <button
                                        class="Cancel"
                                        id="bottom-data"
                                        type="button"
                                        @click="cancelBooking(booking)"
                                    ><i class="bi bi-x-circle"></i>  Cancel Booking</button>
                                </div>
                            </div>
                        </div>
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
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useBookingStore } from "../data/flights.js";
import indigoLogo from "../assets/img/IndiGo_logo_2x.avif";
import airIndiaLogo from "../assets/img/air-india-logo.svg";

const router = useRouter();
const bookingStore = useBookingStore();

// Real bookings placed through the Booking flow, newest first (store already unshifts).
const bookings = computed(() => bookingStore.bookings);

const airlineLogos = {
  "IndiGo": indigoLogo,
  "Air India": airIndiaLogo,
};

function getLogo(airline) {
  return airlineLogos[airline] || null;
}

// "06:00" -> "06:00 AM"
function formatTime(time) {
  if (!time) return "--";
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(hour12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period}`;
}

// "2026-09-20" -> { day: "20 Sep 2026", weekday: "Sun" }
function formatDate(dateStr) {
  if (!dateStr) return { day: "--", weekday: "--" };
  const d = new Date(`${dateStr}T00:00:00`);
  return {
    day: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    weekday: d.toLocaleDateString("en-IN", { weekday: "short" }),
  };
}

function viewDetails(booking) {
  if (!booking.flightId) return;
  router.push({ name: "flight-details", params: { id: booking.flightId } });
}

function cancelBooking(booking) {
  const ok = window.confirm(`Cancel booking ${booking.bookingId}?`);
  if (ok) {
    bookingStore.cancelBooking(booking.bookingId);
  }
}
</script>
<style scoped>

.box-bookings
{
    border: 1px solid #76707022;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;

}
.box-bookings .flights 
{
    display: flex;
    align-items: center;
    justify-content: space-between;  
}
.contant-input img
{
    width: 100px;
}
.floghts-Name
{
    text-align: center;
}
.airline-fallback-icon
{
    font-size: 40px;
    color: rgba(0, 132, 255, 0.875);
    display: block;
}
.airline-name
{
    font-size: 12px;
    color: #6c757d;
}
.data-box .start-text
{
    display: flex;
    align-items: center;

    gap:50px;

}
.data-box .start-text .red-box
{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.data-box .start-text .icon 
{
    transform: rotate(90deg);
    
    
}
.data-box .start-text .red-box span
{
    padding-bottom: 10px;
}

.data-center
{
    display: flex;
    gap: 8px;
}
.button .View-Details
{
    background-color:rgba(0, 132, 255, 0.875);
    border: none;
    padding: 8px 32px;
    border-radius: 5px;
    color: white;
}
.button2 .Cancel
{
    border: 1px solid red;
    color: red;
    padding: 8px 20px;
    border-radius: 5px;
    background: transparent;
}
.empty-bookings
{
    border: 1px solid #76707022;
    border-radius: 12px;
    padding: 60px 20px;
    margin-bottom: 20px;
    color: #6c757d;
}
.empty-bookings i
{
    color: rgba(0, 132, 255, 0.875);
}
.empty-bookings .View-Details
{
    background-color:rgba(0, 132, 255, 0.875);
    border: none;
    padding: 8px 32px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    display: inline-block;
}

</style>
