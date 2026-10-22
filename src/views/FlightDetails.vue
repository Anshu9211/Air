
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
              <p>. Great prices</p>
              <p>. Seamless experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="container">
      <div class="search">
        <router-link
          class="search-but"
          :to="{ name: 'flights', query: route.query }"
        >
          <i class="bi bi-arrow-left"></i> Back to Search
        </router-link>
      </div>

      <div v-if="!flight" class="row">
        <div class="col-lg-12">
          <div class="uddan-data shadow not-found">
            <i class="bi bi-exclamation-circle fs-2 d-block mb-2"></i>
            <p class="mb-3">We couldn't find that flight.</p>
            <router-link
              class="Book-Now not-found-btn"
              :to="{ name: 'flights', query: route.query }"
            >
              Browse flights
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="row">
        <div class="col-lg-12">
          <div class="uddan-data shadow">

            <!-- Airline and date -->
            <div class="uddan-Airlines">
              <div class="my-class">
                <div class="uddan-logo">
                  <div class="logo-data">
                    <img
                      v-if="airlineLogo"
                      :src="airlineLogo"
                      :alt="flight.airline"
                      class="img-fluid"
                      width="135px"
                      height="135px"
                    />

                    <i
                      v-else
                      class="bi bi-airplane-fill airline-fallback-icon"
                    ></i>

                    <div class="travel-date">
                      <h5>
                        <i class="bi bi-calendar3-week"></i>
                        {{ formattedDate }}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Route details -->
            <div class="box-card">
              <div class="time-data">

                <div class="Delhi-data">
                  <h5>
                    <span>
                      {{ flight.from }} ({{ flight.fromCode }})
                    </span>
                  </h5>

                  <p class="mb-2 mt-4">
                    {{ airportName(flight.from) }}
                  </p>

                  <h2>{{ flight.depart }}</h2>

                  <p class="mb-1">
                    <i class="bi bi-geo-alt-fill"></i>
                    {{ flight.from }}
                  </p>

                  <div class="icon-box">
                    <i class="bi bi-dot"></i>
                    <span>------------------</span>
                  </div>
                </div>

                <div class="text-center">
                  <div class="Non-stop mt-3">
                    <p class="mb-2">{{ flight.duration }}</p>
                    <span>{{ stopsLabel }}</span>

                    <div class="icon-box-center">
                      <i class="bi bi-airplane-fill"></i>
                    </div>
                  </div>
                </div>

                <div class="Mumbai-data">
                  <h5 class="mb-2">
                    <span>
                      {{ flight.to }} ({{ flight.toCode }})
                    </span>
                  </h5>

                  <p class="mt-4 mb-2">
                    {{ airportName(flight.to) }}
                  </p>

                  <h2>{{ flight.arrive }}</h2>

                  <p class="mb-1">
                    <i class="bi bi-geo-alt-fill"></i>
                    {{ flight.to }}
                  </p>

                  <div class="icon-box2">
                    <i class="bi bi-dot"></i>
                    <span>------------------</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Flight information -->
            <div class="row">
              <div class="col-lg-12">
                <div class="card-data-2">
                  <div class="details">

                    <div class="box-code pt-3">
                      <div class="card-details-icon">
                        <i class="bi bi-ticket-perforated"></i>
                      </div>
                      <div class="flaght-no">
                        <p class="m-0">Flight No.</p>
                        <h5>{{ flight.id }}</h5>
                      </div>
                    </div>

                    <div class="box-code pt-3">
                      <div class="card-details-icon">
                        <i class="bi bi-airplane-engines"></i>
                      </div>
                      <div class="flaght-no">
                        <p class="m-0">Aircraft</p>
                        <h5>{{ flight.aircraft }}</h5>
                      </div>
                    </div>

                    <div class="box-code pt-3">
                      <div class="card-details-icon">
                        <i class="bi bi-geo-alt"></i>
                      </div>
                      <div class="flaght-no">
                        <p class="m-0">Stops</p>
                        <h6>{{ stopsLabel }}</h6>
                      </div>
                    </div>

                    <div class="box-code pt-3">
                      <div class="card-details-icon">
                        <i class="bi bi-clock-history"></i>
                      </div>
                      <div class="flaght-no">
                        <p class="m-0">Time</p>
                        <h5>{{ flight.duration }}</h5>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <!-- Fare summary -->
            <div class="row">
              <div class="col-lg-12">
                <div class="total-box">

                  <div class="total-price">
                    <div class="price-icon">
                      <i class="bi bi-wallet2"></i>
                    </div>

                    <div class="adult-child text-center">
                      <h6>
                        <i class="bi bi-currency-rupee"></i>
                        {{ adultFare.toLocaleString("en-IN") }}
                        <span>Adult × {{ adult }}</span>
                      </h6>

                      <h6>
                        <i class="bi bi-plus-lg"></i>
                      </h6>

                      <h6 v-if="child > 0">
                        <i class="bi bi-currency-rupee"></i>
                        {{ childFare.toLocaleString("en-IN") }}
                        <span>Child × {{ child }}</span>
                      </h6>
                    </div>

                    <div class="box-price">
                      <div>
                        <p class="m-0 text-center">Total Fare</p>
                        <h3>
                          <i class="bi bi-currency-rupee"></i>
                          {{ totalFare.toLocaleString("en-IN") }}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div class="but-book">
                    <router-link
                      class="Book-Now"
                      :to="{
                        name: 'booking',
                        params: { id: flight.id },
                        query: {
                          ...route.query,
                          departDate: selectedDate,
                          adult: adult,
                          child: child,
                          totalPrice: totalFare
                        }
                      }"
                    >
                      Book Now
                      <i class="bi bi-arrow-right"></i>
                    </router-link>
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
import { useRoute } from "vue-router";

import { getFlightById } from "../data/flights.js";
import indigoLogo from "../assets/img/IndiGo_logo_2x.avif";
import airIndiaLogo from "../assets/img/air-india-logo.svg";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const route = useRoute();

const flight = computed(() => getFlightById(props.id));

const selectedDate = computed(() => {
  return (
    route.query.departDate ||
    route.query.date ||
    flight.value?.date ||
    ""
  );
});

const formattedDate = computed(() => {
  if (!selectedDate.value) return "";

  const [year, month, day] = String(selectedDate.value)
    .split("-")
    .map(Number);

  const date = new Date(year, month - 1, day);

  if (Number.isNaN(date.getTime())) {
    return String(selectedDate.value);
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
});

const adult = computed(() => {
  const value = Number(route.query.adult);
  return Number.isFinite(value) && value >= 1
    ? Math.floor(value)
    : 1;
});

const child = computed(() => {
  const value = Number(route.query.child);
  return Number.isFinite(value) && value >= 0
    ? Math.floor(value)
    : 0;
});

const adultFare = computed(() => flight.value?.price || 0);

const childFare = computed(() =>
  Math.round(adultFare.value * 0.5)
);

const totalFare = computed(() =>
  adultFare.value * adult.value +
  childFare.value * child.value
);

const stopsLabel = computed(() => {
  if (!flight.value) return "";

  return flight.value.stops === 0
    ? "Non-stop"
    : `${flight.value.stops} stop${
        flight.value.stops > 1 ? "s" : ""
      }`;
});

const airlineLogos = {
  IndiGo: indigoLogo,
  "Air India": airIndiaLogo,
};

const airlineLogo = computed(() =>
  airlineLogos[flight.value?.airline] || null
);

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
.home-data {
  background-image: url(../assets/img/background.png);
  background-position: center;
  background-size: cover;
}

.flight-data {
  text-align: end;
}

.flight-data h6 {
  color: #000;
  font-size: 18px;
}

.flight-data .Great-prics h1 {
  font-size: 45px;
  color: #000;
  font-weight: 600;
}

.flight-data .bottom-data {
  display: flex;
  justify-content: end;
  gap: 35px;
}

.flight-data .bottom-data p {
  font-size: 18px;
  color: #000;
}

.search {
  margin-bottom: 30px;
}

.search .search-but {
  border: 1px solid #205ed23e;
  padding: 5px 15px;
  border-radius: 50px;
  color: #205ED2;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  transition: 0.4s ease;
}

.search .search-but:hover {
  background-color: #205ED2;
  color: white;
}

.uddan-data {
  margin-bottom: 30px;
  border-radius: 20px;
}

.uddan-data.not-found {
  padding: 60px 20px;
  text-align: center;
  color: #6c757d;
}

.uddan-data.not-found i {
  color: #205ED2;
}

.uddan-data .uddan-Airlines {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 20px;
  border-bottom: 2px solid #c5d1dc4f;
}

.uddan-logo .airline-fallback-icon {
  font-size: 40px;
  color: #205ED2;
}

.uddan-logo .logo-data {
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: center;
}

.logo-data .travel-date h5 {
  border-left: 1px solid #000;
  padding-left: 20px;
  font-size: 18px;
}

.time-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 15px;
}

.time-data .Delhi-data,
.time-data .Mumbai-data {
  position: relative;
}

.time-data .Delhi-data h5 span,
.time-data .Mumbai-data h5 span {
  padding: 5px 15px;
  border-radius: 25px;
  border: 1px solid #5caeff;
  box-shadow: 0 0 20px #5caeff;
}

.time-data .Delhi-data p i,
.time-data .Mumbai-data p i {
  color: #205ED2;
  font-size: 22px;
}

.icon-box {
  position: absolute;
  top: 0;
  left: 260px;
  font-size: 35px;
  color: #205ED2;
}

.icon-box span {
  position: absolute;
  top: -4px;
  width: 255px;
  left: 20px;
  color: #205ed268;
}

.icon-box2 {
  position: absolute;
  top: 0;
  right: 350px;
  font-size: 35px;
  color: #205ED2;
}

.icon-box2 span {
  position: absolute;
  top: -4px;
  width: 295px;
  right: -25px;
  color: #205ed268;
}

.box-card {
  border-radius: 15px;
  margin: 20px 30px 30px;
}

.box-code {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 30px;
  width: 230px;
  background-color: white;
  border-radius: 25px;
}

.card-data-2 .details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 35px;
  background-color: #E9F3FD;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
}

.box-code .card-details-icon {
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: #205ED2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E9F3FD;
  border-radius: 30px;
}

.box-code .flaght-no h6 {
  font-size: 19px;
  color: #2ac62a;
}

.but-book {
  margin: 0 30px;
  margin-bottom: 15px;
  margin-top: 20px;
}

.but-book .Book-Now {
  width: 100%;
  padding: 10px 50px;
  text-align: center;
  border-radius: 25px;
  color: #205ED2;
  background-color: white;
  border: none;
  display: block;
  text-decoration: none;
  transition: 0.4s ease;
  font-size: 18px;
  font-weight: 600;
}

.but-book .Book-Now:hover {
  background-color: #205ED2;
  color: white;
}

.not-found-btn {
  display: inline-block;
  width: auto;
  padding: 10px 30px;
}

.Non-stop {
  position: relative;
}

.Non-stop span {
  background-color: rgb(105, 222, 105);
  color: white;
  padding: 3px 12px;
  border-radius: 15px;
  font-weight: 500;
}

.Non-stop p {
  font-weight: 600;
}

.icon-box-center {
  position: absolute;
  top: -58px;
  transform: rotate(90deg);
  font-size: 30px;
  align-items: center;
  left: 30px;
  color: #205ED2;
}

.total-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: calc(100% - 60px);
  margin: 0 30px 28px;
  padding: 5px 15px;
  background: whitesmoke;
  border: 1px solid #dce5f0;
  border-radius: 14px;
  box-shadow: 0 5px 20px rgba(15, 39, 71, 0.07);
  box-sizing: border-box;
  transition: box-shadow 0.25s ease;
}

.total-box:hover {
  box-shadow: 0 8px 25px rgba(15, 39, 71, 0.12);
}

.total-box .total-price {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  min-width: 0;
}

.total-box .price-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  color: #fff;
  background: #142d4e;
  border-radius: 11px;
  font-size: 23px;
}

.total-box .adult-child {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background: transparent;
  border: none;
  color: #142d4e;
}

.total-box .adult-child h6 {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  color: #142d4e;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
}

.total-box .adult-child h6 i {
  color: #315f95;
  font-size: 15px;
}

.total-box .adult-child h6 span {
  display: inline;
  margin-left: 3px;
  color: #718096;
  font-size: 13px;
  font-weight: 500;
}

.total-box .total-price .box-price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 135px;
  padding: 11px 18px;
  background: #eaf1fa;
  border: 1px solid #d2e0f0;
  border-radius: 10px;
  color: #142d4e;
  text-align: center;
  white-space: nowrap;
}

.total-box .total-price .box-price p {
  margin: 0 0 5px !important;
  color: #536b87;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.total-box .total-price .box-price h3 {
  margin: 0;
  color: #142d4e;
  font-size: 25px;
  font-weight: 800;
  line-height: 1.3;
}

.total-box .but-book {
  flex-shrink: 0;
  margin: 6px 4px;
}

.total-box .but-book .Book-Now {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  color: #fff;
  background: #142d4e;
  border: 1px solid #142d4e;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(20, 45, 78, 0.15);
  transition: all 0.25s ease;
}

.total-box .but-book .Book-Now:hover {
  color: #fff;
  background: #234c78;
  border-color: #234c78;
  box-shadow: 0 6px 16px rgba(20, 45, 78, 0.22);
  transform: translateY(-2px);
}

.total-box .but-book .Book-Now i {
  font-size: 16px;
  transition: transform 0.25s ease;
}

.total-box .but-book .Book-Now:hover i {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .flight-data .Great-prics h1 {
    font-size: 30px;
  }

  .flight-data .bottom-data {
    flex-wrap: wrap;
    gap: 10px;
  }

  .time-data {
    flex-wrap: wrap;
    gap: 25px;
    padding: 20px 10px;
  }

  .icon-box,
  .icon-box2 {
    display: none;
  }

  .box-card {
    margin: 15px 10px;
  }

  .card-data-2 .details {
    flex-wrap: wrap;
    gap: 12px;
    padding: 15px;
    margin: 10px;
  }

  .box-code {
    width: 100%;
    justify-content: flex-start;
    gap: 15px;
  }

  .total-box {
    width: calc(100% - 20px);
    margin: 0 10px 20px;
    padding: 15px;
    flex-direction: column;
    align-items: stretch;
  }

  .total-box .total-price {
    flex-wrap: wrap;
    gap: 12px;
  }

  .total-box .adult-child {
    flex-wrap: wrap;
    gap: 8px;
  }

  .total-box .adult-child h6 {
    font-size: 14px;
  }

  .total-box .total-price .box-price {
    flex: 1;
    min-width: 110px;
  }

  .total-box .but-book {
    margin: 10px 0 0;
  }

  .total-box .but-book .Book-Now {
    width: 100%;
  }
}
</style>
