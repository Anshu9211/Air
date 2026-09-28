
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
        <router-link class="search-but" :to="{ name: 'flights' }"><i class="bi bi-arrow-left"></i>  Back to Search</router-link>
      </div>

      <div v-if="!flight" class="row">
        <div class="col-lg-12">
          <div class="uddan-data shadow not-found">
            <i class="bi bi-exclamation-circle fs-2 d-block mb-2"></i>
            <p class="mb-3">We couldn't find that flight.</p>
            <router-link class="Book-Now not-found-btn" :to="{ name: 'flights' }">Browse flights</router-link>
          </div>
        </div>
      </div>

      <div v-else class="row">
        <div class="col-lg-12">
          <div class="uddan-data shadow">
            <div class="uddan-Airlines">
              <div class="my-class">
                <div class="uddan-logo">
                  <div class=" d-flex">
                    <img v-if="airlineLogo" :src="airlineLogo" class="img-fluid">
                    <i v-else class="bi bi-airplane-fill airline-fallback-icon"></i>
                  </div>
                  <div class="box-flight-data">
                      <div class="flight-top-data">
                          <h3>{{ flight.from }} ({{ flight.fromCode }})</h3>
                          <p>{{ formattedDate }}</p>
                      </div>
                      <div class="pt-1 icon-right">
                        <i class="bi bi-arrow-right"></i>
                      </div>
                      <div class="flight-top-data">
                          <h3>{{ flight.to }} ({{ flight.toCode }})</h3>
                      </div>
                  </div>
                </div>
              </div>
              <div class="date-price pt-1">
                  <p class="m-1">Total price</p>
                  <h2><i class="bi bi-currency-rupee"></i>{{ flight.price.toLocaleString("en-IN") }}</h2>
                  <p class="m-1">Per adult</p>
              </div>
            </div>
            <div class="shadow box-card">
              <div class="time-data">
                <div class="Delhi-data">
                  <h2>{{ flight.depart }}</h2>
                  <h6>{{ flight.fromCode }}</h6>
                  <p>{{ airportName(flight.from) }}</p>
                  <p>{{ flight.from }}</p>
                </div>
                <div class="">
                  
                  <div class="Non-stop">
                    <p class="m-0">{{ flight.duration }}</p>
                    <span>{{ stopsLabel }}</span>
                  </div>
                </div>
                <div class="Mumbai-data ">
                  <h2>{{ flight.arrive }}</h2>
                  <h6>{{ flight.toCode }}</h6>
                  <p>{{ airportName(flight.to) }}</p>
                  <p>{{ flight.to }}</p>
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
                      <h5>{{ flight.id }}</h5>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-airplane"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Aircraft</p>
                      <h5>{{ flight.aircraft }}</h5>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-airplane"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0">Stops</p>
                      <h6>{{ stopsLabel }}</h6>
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
                  <router-link class="Book-Now " :to="{ name: 'booking', params: { id: flight.id } }">Book Now <i class="bi bi-arrow-right"></i></router-link>
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
import { getFlightById } from "../data/flights.js";
import indigoLogo from "../assets/img/IndiGo_logo_2x.avif";
import airIndiaLogo from "../assets/img/air-india-logo.svg";

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

const stopsLabel = computed(() => {
  if (!flight.value) return "";
  return flight.value.stops === 0
    ? "Non-stop"
    : `${flight.value.stops} stop${flight.value.stops > 1 ? "s" : ""}`;
});

const airlineLogos = {
  "IndiGo": indigoLogo,
  "Air India": airIndiaLogo,
};

const airlineLogo = computed(() => airlineLogos[flight.value?.airline] || null);

const airportNames = {
  Delhi: "Indira Gandhi International Airport",
  Mumbai: "Chhatrapati Shivaji Maharaj International Airport",
  Bengaluru: "Kempegowda International Airport",
  Goa: "Goa International Airport",
  Chennai: "Chennai International Airport",
  Kolkata: "Netaji Subhas Chandra Bose International Airport",
};

function airportName(city) {
  return airportNames[city] || `${city} Airport`;
}
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
  display: inline-block;
  text-decoration: none;
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
.uddan-data.not-found
{
  padding: 60px 20px;
  text-align: center;
  color: #6c757d;
}
.uddan-data.not-found i
{
  color: #205ED2;
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
.uddan-logo .airline-fallback-icon
{
  font-size: 40px;
  color: #205ED2;
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
  display: block;
  text-decoration: none;
}
.not-found-btn
{
  display: inline-block;
  width: auto;
  padding: 10px 30px;
}
</style>
