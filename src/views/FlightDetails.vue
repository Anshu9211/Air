<!-- <template>
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
</template> -->
<template>
<div class="container-fluid home-data py-5 mb-5">
    <div class="container mb-2">
      <div class="row">
        <div class="col-lg-12">
          <div class="flight-data mb-3">
            <h6>FLIGHT DETAILS</h6>
            <div class="Great-prics mb-4">
              <h1>Your Journery, Our Priority</h1>
            </div>
            <div class="bottom-data">
              <p>Comfortable flights</p>
              <p>.  Great prices</p>
              <p>.  Seamless experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  <div class="container-fluid">
    <div class="container">
      <div class="search">
        <button class="search-but"><i class="bi bi-arrow-left"></i>  Back to Search</button>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="uddan-data shadow">
            <div class="uddan-Airlines">
              <div class="my-class">
                <div class="uddan-logo">
                  <div class=" d-flex">
                    <img src="../assets/img/logo-img" class="img-fluid">
                  </div>
                  <div class="box-flight-data">
                      <div class="flight-top-data">
                          <h3>Delhi (DEL)</h3>
                          <p> Sat, 27 Sep 2025</p>
                      </div>
                      <div class="pt-1 icon-right">
                        <i class="bi bi-arrow-right"></i>
                      </div>
                      <div class="flight-top-data">
                          <h3>Mumbai (BOM)</h3>
                      </div>
                  </div>
                </div>
              </div>
              <div class="date-price pt-1">
                  <p class="m-1">Total price</p>
                  <h2><i class="bi bi-currency-rupee"></i>8,499</h2>
                  <p class="m-1">Per adult</p>
              </div>
            </div>
            <div class="shadow box-card">
              <div class="time-data">
                <div class="Delhi-data">
                  <h2>08:45</h2>
                  <h6>DEL</h6>
                  <p>indira Gandhi <br> international Airport</p>
                  <p>Delhi</p>
                </div>
                <div class="">
                  
                  <div class="Non-stop">
                    <p class="m-0">2h 15m</p>
                    <span>Non stop</span>
                  </div>
                </div>
                <div class="Mumbai-data ">
                  <h2>11:00</h2>
                  <h6>BOM</h6>
                  <p>Chharrapati Shivaji <br> Maharaj international Airport</p>
                  <p>Mumbai</p>
                </div>
              </div>
              <div class="card-data">
                <div class="details">
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-airplane"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Flaght No.</p>
                      <h5>6E 215</h5>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-airplane"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Aircraft</p>
                      <h5>Airbus A320</h5>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-airplane"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Stops</p>
                      <h6>Non-stop</h6>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-airplane"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Class</p>
                      <h5>Economy</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
            <div class="card-data-2">
              <div class="details">
                  <div class="box-code pt-3 ">
                    <div class="card-details-icon">
                      <i class="bi bi-shield"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Safe & Secure <br> Booking</p>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details-icon">
                      <i class="bi bi-headset"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">24/7 <br> Customer Support</p>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details-icon">
                      <i class="bi bi-backpack3-fill"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Free <br> Cabin Baggage</p>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details-icon">
                      <i class="bi bi-patch-check"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Best Price <br> Guarantee</p>
                    </div>
                  </div>
                </div> 
            </div>
            </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="but-book">
                  <button class="Book-Now ">Book Now <i class="bi bi-arrow-right"></i></button>
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
<style scoped>
.home-data
{
  background-image: url(../assets/img/background-2.png);
  background-position: center;
  background-size: cover;
}
.flight-data h6
{
  color: white;
}
.flight-data .Great-prics h1
{
  font-size: 45px;
  color: white;
  font-weight: 600;
}
.flight-data .bottom-data
{
  display: flex;
  gap: 35px;
}
.flight-data .bottom-data p
{
  font-size: 18px;
  color: white;
}
.search
{
  margin-bottom: 30px;
}
.search .search-but
{
  border: 1px solid #205ed23e;
  padding: 5px 15px;
  border-radius: 50px;
  color: #205ED2;
  font-size: 15px;
  font-weight: 500;
}
.search .search-but i
{
  color: #205ED2;
  font-weight: 500;
}
.uddan-data
{
  margin-bottom: 30px;
  border-radius: 20px;
}
.uddan-data .uddan-Airlines
{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}
.uddan-data .uddan-Airlines .date-price
{
  background-color: #E9F3FD;
  width: 200px;
  border-radius: 12px;
  padding-left: 25px;
  border: 2px solid #c6d8eb23;
}
.uddan-data .uddan-Airlines .date-price h2
{
  color: #205ED2;
  font-size: 35px;
  font-weight: 700;
}
.my-class .box-flight-data
{
  display: flex;
  gap: 20px;
}
.my-class .box-flight-data .icon-right i
{
  font-size: 22px;
  font-weight: 500;
}
.my-class .box-flight-data .flight-top-data h3
{
  font-weight: 640;
}
.my-class .box-flight-data .flight-top-data p
{
  font-size: 17px;
  font-weight: 500;
  color: #8b8f93;
}
.time-data 
{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}
.box-card
{
  border-radius: 15px;
  margin: 30px;
  
}
.card-data .details 
{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #d6d9dc5e;
  padding: 0 15px 0 15px;

}
.box-code
{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 10px;
}
.box-code .card-details i
{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #91b6dcc3;
  width: 40px;
  height: 40px;
  color: #205ED2;
  font-size: 22px;
  border-radius: 50%;
  

}
.box-code .card-details i:nth-child(1)
{
  transform: rotate(45deg);
}
.card-data-2 .details 
{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  background-color: #E9F3FD;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;

}
.box-code
{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 10px;
}
.box-code .card-details-icon
{
  font-size: 30px;
  color: #205ED2;
}
.but-book
{
  margin: 0 30px;
  margin-bottom: 30px;
  margin-top: 20px;
}
.but-book .Book-Now
{
  width:100%;
  padding: 10px;
  text-align: center;
  border-radius: 12px;
  color: white;
  background-color: #205ED2;
  border: none;
}
</style>
