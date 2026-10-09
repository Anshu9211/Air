<template>
  <div>
    <Navbar />
    <div class="banner-top">
      <div class="banner-cont">
        <div class="hero-1">
          <video
            class="background-video"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
          >
            <source
              src="../assets/video/Video Project.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div class="booking-main-cont">
          <div class="book-btn-cont">
            <button
              class="booking-btn"
              id="booking-page"
              :class="{ active: activeTab === 'booking' }"
              @click="activeTab = 'booking'"
            >
              <i class="bi bi-airplane"></i>
              <h5>Book a flight</h5>
            </button>
            <button
              class="status-btn"
              id="status-page"
              :class="{ active: activeTab === 'status' }"
              @click="activeTab = 'status'"
            >
              <i class="bi bi-airplane"></i>
              <h5>Flight Status</h5>
            </button>
          </div>

          <div class="book-data-btm">
            <template v-if="activeTab === 'booking'">
              <div class="travel-details">
                <label class="pe-2 me-4"style="display: none;">
                  <input
                    type="radio"
                    id="return"
                    name="trip-type"
                    value="return"
                    v-model="tripType"
                  
                  />
                  Round Trip
                </label>
                <label>
                  <input
                    type="radio"
                    id="one-way"
                    name="trip-type"
                    value="one-way"
                    v-model="tripType"
                  />
                  One way
                </label>
              </div>

              <div class="booking-info">
                <div class="book-travel-data">
                  <label>
                    <input
                      type="text"
                      placeholder="From"
                      id="departure"
                      v-model.trim="searchForm.from"
                    />
                  </label>
                </div>

                <div class="reverse-btn-cont">
                  <button type="button" id="reverse-data" @click="reverseLocations">
                    <i class="bi bi-arrow-left-right"></i>
                  </button>
                </div>

                <div class="book-travel-data">
                  <label>
                    <input
                      type="text"
                      placeholder="To"
                      id="arrival"
                      v-model.trim="searchForm.to"
                    />
                  </label>
                </div>
                <div class="book-travel-date date-picker-wrapper">
                  <button
                    type="button"
                    class="date-input-btn"
                    @click="toggleDepartureCalendar"
                  >
                    <i class="bi bi-calendar3"></i>
                    <span>
                      {{
                        searchForm.departDate
                          ? formatDMY(searchForm.departDate)
                          : "Departure Date"
                      }}
                    </span>
                  </button>

                  <div v-if="showDepartureCalendar" class="calendar-popup">
                    <v-date-picker
                      v-model="departureDate"
                      color="primary"
                      :min="minDeparture"
                      :allowed-dates="isDepartureAllowed"
                      hide-header
                      @update:model-value="selectDepartureDate"
                    />
                  </div>
                </div>
                <div
                  class="book-travel-date date-picker-wrapper calendar-right"
                >
                  <button
                    type="button"
                    class="date-input-btn"
                    @click="toggleReturnCalendar"
                  >
                    <i class="bi bi-calendar3"></i>
                    <span>
                      {{
                        searchForm.returnDate
                          ? formatDMY(searchForm.returnDate)
                          : "Return Date"
                      }}
                    </span>
                  </button>
                  <div v-if="showReturnCalendar" class="calendar-popup">
                    <v-date-picker
                      v-model="returnDate"
                      color="purple"
                      :min="minReturn"
                      :allowed-dates="isReturnAllowed"
                      hide-header
                      @update:model-value="selectReturnDate"
                    />
                  </div>
                </div>
              </div>
              <div class="passen">
                <button type="button" @click="showPassengers = !showPassengers">
                  <i class="bi bi-people-fill"></i>
                  Passenger
                </button>
                <div v-if="showPassengers" class="passenger-dropdown">
                  <label>Adult</label>
                  <select v-model="adult">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <label>Child</label>
                  <select v-model="child">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>

              <div class="find-btn-cont">
                <button type="button" class="find-btn" id="find-btn" @click="handleSearch">
                  <i class="bi bi-search"></i>
                  Search Flights
                </button>
              </div>
            </template>

            <template v-else>
              <div class="booking-get">
                <div class="tabbbbb">
                  <h5>Track Your Journey</h5>
                </div>
                <div class="booking-info status-info mt-3">
                  <div class="book-travel-data">
                    <label>
                      <input
                        type="text"
                        placeholder="Flight Status"
                        v-model.trim="statusForm.flightNumber"
                      />
                    </label>
                  </div>
                  <div class="book-travel-date">
                    <label>
                      <input type="date" v-model="statusForm.date" :min="todayStr" />
                    </label>
                   
                  </div>
                </div>

                <div class="find-btn-cont">
                  <button type="button" class="find-btn" @click="handleStatusSearch">
                    <i class="bi bi-search"></i>
                    Check Status
                  </button>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="banner-logo">
          <img src="../assets/img/1.png" alt="logo" />
        </div>
      </div>
    </div>

    <section class="city-section">
      <div class="city-grid">
        <!-- Atlanta -->
        <article class="city-card city-card--large atlanta">
          <div class="city-overlay"></div>
          <div class="city-content">
            <h2>Atlanta</h2>
            <div class="city-details">
              <span>21 Dec 2026 - 18 Jan 2027</span>
              <span>Economy from INR <strong>79617</strong></span>
            </div>
          </div>
        </article>
        <!-- San Francisco -->
        <article class="city-card san-francisco">
          <div class="city-overlay"></div>
          <div class="city-content">
            <h2>San Francisco</h2>
            <div class="city-details">
              <span>26 Oct 2026 - 03 Nov 2026</span>
              <span>Economy from INR <strong>105524</strong></span>
            </div>
          </div>
        </article>
        <!-- Washington -->
        <article class="city-card washington">
          <div class="city-overlay"></div>
          <div class="city-content">
            <h2>Washington</h2>
            <div class="city-details">
              <span>29 Sep 2026 - 05 Oct 2026</span>
              <span>Economy from INR <strong>90296</strong></span>
            </div>
          </div>
        </article>
        <!-- Boston -->
        <article class="city-card boston">
          <div class="city-overlay"></div>
          <div class="city-content">
            <h2>Boston</h2>
            <div class="city-details">
              <span>07 Oct 2026 - 12 Oct 2026</span>
              <span>Economy from INR <strong>82155</strong></span>
            </div>
          </div>
        </article>
        <!-- Chicago -->
        <article class="city-card chicago">
          <div class="city-overlay"></div>
          <div class="city-content">
            <h2>Chicago</h2>
            <div class="city-details">
              <span>06 Oct 2026 - 19 Oct 2026</span>
              <span>Economy from INR <strong>80475</strong></span>
            </div>
          </div>
        </article>
        <!-- Dallas -->
        <article class="city-card city-card--large dallas">
          <div class="city-overlay"></div>
          <div class="city-content">
            <h2>Dallas</h2>
            <div class="city-details">
              <span>17 Feb 2027 - 21 Feb 2027</span>
              <span>Economy from INR <strong>94028</strong></span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  computed,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
} from "vue";

import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { VDatePicker } from "vuetify/components";

let router = useRouter();
let tripType = ref("return");
let activeTab = ref("booking");
let showPassengers = ref(false);
let adult = ref("1");
let child = ref("0");
let searchForm = reactive({
  from: "",
  to: "",
  departDate: "",
  returnDate: "",
});
let statusForm = reactive({
  flightNumber: "",
  date: "",
});
function reverseLocations() {
  [searchForm.from, searchForm.to] = [
    searchForm.to,
    searchForm.from,
  ];
}
function toISO(date) {
  let d = new Date(date);
  let yyyy = d.getFullYear();
  let mm = String(d.getMonth() + 1).padStart(2, "0");
  let dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
function parseISO(value) {
  if (!value) return null;
  let [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function startOfDay(date) {
  let d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
let todayStr = computed(() => toISO(new Date()));
function formatDate(date) {
  if (!date) return "";
  let d = new Date(date);
  if (Number.isNaN(d.getTime())) {
    return date;
  }
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function formatDMY(date) {
  if (!date) return "";
  let [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}
let showDepartureCalendar = ref(false);
let showReturnCalendar = ref(false);
let departureDate = ref(null);
let returnDate = ref(null);
let minDeparture = computed(() => {
  return startOfDay(new Date());
});

function isDepartureAllowed(date) {
  return startOfDay(date) >= minDeparture.value;
}
let minReturn = computed(() => {
  if (!searchForm.departDate) {
    return startOfDay(new Date());
  }
  let departure = parseISO(searchForm.departDate);
  departure.setDate(departure.getDate() + 1);
  return startOfDay(departure);
});
function isReturnAllowed(date) {
  return startOfDay(date) >= minReturn.value;
}
function toggleDepartureCalendar() {
  showDepartureCalendar.value =
    !showDepartureCalendar.value;
  showReturnCalendar.value = false;
}
function toggleReturnCalendar() {
  showReturnCalendar.value =
    !showReturnCalendar.value;
  showDepartureCalendar.value = false;
}
function selectDepartureDate(date) {
  if (!date) return;
  if (!isDepartureAllowed(date)) {
    return;
  }
  searchForm.departDate = toISO(date);
  departureDate.value = new Date(date);
  showDepartureCalendar.value = false;
  if (
    searchForm.returnDate &&
    searchForm.returnDate <= searchForm.departDate
  ) {
    searchForm.returnDate = "";
    returnDate.value = null;
  }
}
function selectReturnDate(date) {
  if (!date) return;
  if (!isReturnAllowed(date)) {
    return;
  }
  searchForm.returnDate = toISO(date);
  returnDate.value = new Date(date);
  showReturnCalendar.value = false;
}

watch(tripType, (value) => {
  if (value === "one-way") {
    searchForm.returnDate = "";
    returnDate.value = null;
    showReturnCalendar.value = false;
  }
});
function handleOutsideClick(event) {
  if (!event.target.closest(".date-picker-wrapper")) {
    showDepartureCalendar.value = false;
    showReturnCalendar.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});

function handleSearch() {
  if (!searchForm.from.trim()) {
    alert("Please enter departure city.");
    return;
  }

  if (!searchForm.to.trim()) {
    alert("Please enter arrival city.");
    return;
  }

  if (
    searchForm.from.trim().toLowerCase() ===
    searchForm.to.trim().toLowerCase()
  ) {
    alert("Source and destination cannot be the same.");
    return;
  }

  if (!searchForm.departDate) {
    alert("Please select departure date.");
    return;
  }

  if (searchForm.departDate < todayStr.value) {
    alert("Departure date cannot be in the past.");
    return;
  }
  if (
    tripType.value === "return" &&
    !searchForm.returnDate
  ) {
    alert("Please select return date.");
    return;
  }
  if (
    tripType.value === "return" &&
    searchForm.returnDate <= searchForm.departDate
  ) {
    alert("Return date must be after departure date.");
    return;
  }
  router.push({
    name: "flights",
    query: {
      from: searchForm.from.trim(),
      to: searchForm.to.trim(),
      departDate: searchForm.departDate,
      returnDate:
        tripType.value === "return"
          ? searchForm.returnDate
          : "",
      tripType: tripType.value,
      adult: adult.value,
      child: child.value,
    },
  });
}
function handleStatusSearch() {
  let query = {};
  if (statusForm.flightNumber.trim()) {
    query.flightNumber = statusForm.flightNumber.trim();
  }
  if (statusForm.date) {
    query.date = statusForm.date;
  }
  router.push({
    name: "flight-status",
    query,
  });
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap");

$background: #f4f5fa;
$text-white: #ffffff;
$primary-purple: rgb(119, 75, 119);
$primary-purple-hover: rgba(128, 0, 128, 0.589);
$button-bg: #ffd3aca1;
$card-radius: 19px;
$grid-gap: 24px;
$overlay-start: rgba(0, 0, 0, 0);
$overlay-middle: rgba(8, 11, 22, 0.18);
$overlay-end: rgba(8, 11, 22, 0.88);

html {
  scroll-behavior: smooth;
}
body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: $background;
}

.date-picker-wrapper {
  position: relative;
}

.date-input-btn {
  width: 100%;
  height: 44px;
  padding: 7px 10px;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  color: #111;
  text-align: left;
  white-space: nowrap;

  i {
    font-size: 16px;
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.35);
  }
}

.date-picker-wrapper.is-disabled {
  opacity: 0.6;
}

.calendar-popup {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 9999;
  width: 328px;
  max-width: calc(100vw - 24px);
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: calendarIn 0.18s ease;

  :deep(.v-date-picker) {
    width: 100%;
    min-width: 0;
    box-shadow: none;
    border-radius: 0;
    font-family: "Encode Sans Semi Expanded", sans-serif;
  }

  :deep(.v-date-picker-month) {
    padding: 0 8px 8px;
    width: 100%;
  }

  :deep(.v-date-picker-month__day) {
    height: 40px;
    width: 40px;
  }

  :deep(.v-date-picker-month__day .v-btn) {
    font-size: 13px;
  }
  :deep(.v-date-picker-month__day--disabled),
  :deep(.v-date-picker-month__day .v-btn--disabled) {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
  :deep(.v-date-picker-month__day--selected .v-btn) {
    background-color: $primary-purple !important;
    color: #fff !important;
  }
  :deep(.v-date-picker-month__day--today .v-btn) {
    border: 1px solid $primary-purple;
  }
  :deep(.v-date-picker-controls) {
    padding: 8px 12px;
  }
}

.calendar-right .calendar-popup {
  left: auto;
  right: 0;
}

@keyframes calendarIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.passen {
  position: relative;
  margin-top: 12px;

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background-color: $button-bg;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;

     &:hover {
              background-color: $primary-purple-hover;
              color: white;
            }
  }
  .passenger-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 9998;
    min-width: 200px;
    padding: 14px;
    display: flex;
    gap: 10px 14px;
    align-items: center;
    background: rgba(100, 28, 100, 0.433);
    border-radius: 12px;
    select {
      padding: 5px 15px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      font-family: inherit;
    }
  }
  .passenger-dropdown label {
  font-size: 16px;
  font-weight: 500;
}
}
.banner-top {
  .banner-cont {
    position: relative;
    .hero-1 {
      position: relative;
      width: 100%;
      height: 700px;
      overflow: hidden;
      .background-video {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 58.36vw;
        min-width: 100%;
        min-height: 200px;
        transform: translate(-50%, -50%);
        border: 0;
        pointer-events: none;
        object-fit: cover;
      }
    }
    .booking-main-cont {
      position: absolute;
      bottom: -29.6%;
      left: 50%;
      transform: translateX(-50%);
      width: min(1160px, 92vw);
      font-family: "Encode Sans Semi Expanded", sans-serif;
      z-index: 10;
      .book-btn-cont {
        display: flex;
        align-items: flex-start;
        .booking-btn,
        .status-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 54px;
          padding: 15px 40px;
          border: none;
          background-color: white;
          color: #000;
          cursor: pointer;
          transition:
            background-color 0.4s ease,
            color 0.4s ease;
          h5 {
            margin: 0;
            font-size: 15px;
            font-weight: 450;
          }
          i {
            font-size: 17px;
          }
        }
        .booking-btn {
          border-top-left-radius: 13px;
          border-right: 1px solid rgba(221, 160, 221, 0.589);
        }
        .status-btn {
          border-top-right-radius: 13px;
        }
        .booking-btn.active,
        .status-btn.active {
          background-color: $primary-purple;
          color: white;
        }
        .booking-btn:hover,
        .status-btn:hover {
          background-color: $primary-purple;
          color: white;
        }
      }
      .book-data-btm {
        width: 100%;
        min-height: 185px;
        box-sizing: border-box;
        padding: 30px;
        background-color: white;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
        border-top-right-radius: 13px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        .travel-details {
          display: flex;
          align-items: center;
          height: 25px;
          label {
            display: inline-flex;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            input {
              margin-right: 6px;
              transform: scale(1.3);
              accent-color: $primary-purple;
            }
          }
        }
        .booking-info {
          width: 100%;
          height: 58px;
          min-height: 58px;
          box-sizing: border-box;
          border: 1px solid black;
          border-radius: 8px;
          background-color: white;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          padding: 5px;
          .book-travel-data {
            flex: 1 1 auto;
            min-width: 0;
            height: 100%;
            display: flex;
            align-items: center;

            label {
              width: 100%;
            }

            input {
              width: 100%;
              height: 44px;
              box-sizing: border-box;
              padding: 7px 15px;
              border: none;
              outline: none;
              background: transparent;
              font-family: inherit;
              font-size: 14px;
              color: #111;

              &::placeholder {
                color: rgba(0, 0, 0, 0.55);
              }
            }
          }

          .reverse-btn-cont {
            flex: 0 0 34px;
            display: flex;
            align-items: center;
            justify-content: center;

            button {
              width: 32px;
              height: 32px;
              padding: 0;
              border-radius: 50%;
              border: 1px solid rgba(0, 0, 0, 0.568);
              outline: none;
              background-color: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition:
                background-color 0.2s ease,
                transform 0.2s ease;

              i {
                font-size: 14px;
              }

              &:hover {
                background-color: rgba(221, 160, 221, 0.671);
                transform: rotate(180deg);
              }
            }
          }

          .book-travel-date {
            flex: 0 0 230px;
            min-width: 230px;
            height: 100%;
            display: flex;
            align-items: center;

            label {
              width: 100%;
            }
            label input {
              width: 100%;
              min-width: 0;
              height: 44px;
              box-sizing: border-box;
              padding: 7px 5px;
              border: none;
              outline: none;
              background-color: transparent;
              font-family: inherit;
              font-size: 14px;
              cursor: pointer;
            }
          }
        }

        .booking-get {
          width: 100%;
          margin: 0;
          padding: 0;
          background-color: transparent;
          border: none;
          display: block;

          .status-info {
            width: 100%;
            height: 58px;
            min-height: 58px;
            margin-top: 10px !important;
            box-sizing: border-box;
            display: flex;
            align-items: center;

            .book-travel-data {
              flex: 1 1 auto;
              min-width: 0;
            }

            .book-travel-date {
              flex: 0 0 200px;
            }
          }
        }

        .find-btn-cont {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;

          .find-btn {
            height: 42px;
            min-width: 230px;
            width: auto;
            padding: 10px 20px;
            margin-top: 15px;
            border-radius: 12px;
            border: none;
            outline: none;
            background-color: $button-bg;
            color: black;
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition:
              background-color 0.5s ease,
              color 0.5s ease,
              transform 0.3s ease;

            &:hover {
              background-color: $primary-purple-hover;
              color: white;
              transform: translateY(-2px);
            }
          }
        }
      }
    }

    .banner-logo {
      position: absolute;
      top: 31%;
      left: 50%;
      transform: translateX(-50%);

      img {
        width: 400px;
        height: 200px;
        opacity: 0.7;
      }
    }
  }
}

/* =========================================================
   CITY SECTION
   ========================================================= */
.city-section {
  width: 100%;
  padding: 270px 0 70px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.894), rgba(255, 255, 255, 0.894)),
    url("../assets/img/bg-2.jpeg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  .city-grid {
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 343px 343px;
    gap: $grid-gap;
  }

  .city-card {
    position: relative;
    overflow: hidden;
    min-width: 0;
    border-radius: $card-radius;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    isolation: isolate;
    cursor: pointer;
    transition:
      transform 0.35s ease,
      box-shadow 0.35s ease;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -2;
      background: inherit;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.6s ease;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);

      &::before {
        transform: scale(1.05);
      }
    }
  }

  .atlanta {
    grid-column: 1 / span 2;
    grid-row: 1;
    background-image: url("../assets/img/g-1.avif");
  }
  .san-francisco {
    grid-column: 3;
    grid-row: 1;
    background-image: url("../assets/img/g-2.avif");
  }
  .washington {
    grid-column: 4;
    grid-row: 1;
    background-image: url("../assets/img/g-3.avif");
  }
  .boston {
    grid-column: 1;
    grid-row: 2;
    background-image: url("../assets/img/r-2-1.avif");
  }
  .chicago {
    grid-column: 2;
    grid-row: 2;
    background-image: url("../assets/img/r-2-2.avif");
  }
  .dallas {
    grid-column: 3 / span 2;
    grid-row: 2;
    background-image: url("../assets/img/r-2-3.avif");
  }

  .city-overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    transition:
      background 0.4s ease,
      background-color 0.4s ease,
      backdrop-filter 0.4s ease;
  }

  .city-card:hover .city-overlay {
    background: linear-gradient(
      to bottom,
      $overlay-start 25%,
      $overlay-middle 52%,
      $overlay-end 100%
    );
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
  }

  .city-content {
    position: absolute;
    left: 27px;
    right: 27px;
    bottom: 25px;
    z-index: 2;
    color: $text-white;
  }

  .city-content h2 {
    margin: 0 0 95px;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    transition: margin 0.4s ease;
  }

  .city-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    white-space: nowrap;
    position: relative;
    top: 72px;
    transition: top 0.4s ease;
  }

  .city-card:hover .city-details {
    top: 0;
  }

  .city-details span:last-child {
    text-align: left;
  }

  .city-details strong {
    font-size: 16px;
    font-weight: 400;
  }
}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media (max-width: 1300px) {
  .banner-top {
    .booking-main-cont {
      width: 92vw;

      .booking-info .book-travel-date {
        flex: 0 0 210px;
        min-width: 210px;
      }
      .booking-info .book-travel-data input {
        font-size: 13px;
      }
    }
  }

  .city-section {
    .city-grid {
      width: calc(100% - 30px);
      grid-template-rows: 300px 300px;
      gap: 18px;
    }
    .city-content {
      left: 22px;
      right: 22px;
      bottom: 22px;
    }
    .city-content h2 {
      font-size: 22px;
    }
    .city-details {
      font-size: 12px;
      gap: 4px;
    }
    .city-details strong {
      font-size: 14px;
    }
  }
}

@media (max-width: 900px) {
  .banner-top {
    .hero-1 {
      height: 65vh;
    }
    .booking-main-cont {
      bottom: -8%;
      width: 94vw;

      .book-data-btm {
        padding: 22px;
      }
      .booking-info {
        .book-travel-data input {
          font-size: 13px;
        }
        .book-travel-date {
          flex: 0 0 170px;
          min-width: 170px;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .calendar-popup,
  .calendar-right .calendar-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
    width: 340px;
    max-width: calc(100vw - 24px);
    animation: none;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.45), 0 10px 35px rgba(0, 0, 0, 0.3);
  }

  .banner-top {
    .hero-1 {
      height: 70vh;
    }
    .booking-main-cont {
      position: absolute;
      bottom: -15%;
      width: calc(100% - 24px);

      .book-btn-cont {
        .booking-btn,
        .status-btn {
          flex: 1;
          padding: 13px 15px;

          h5 {
            font-size: 13px;
          }
        }
      }

      .book-data-btm {
        padding: 18px;
        min-height: auto;
      }

      .travel-details {
        label {
          font-size: 14px;
        }
      }

      .booking-info {
        height: auto;
        min-height: 58px;
        flex-wrap: wrap;
        padding: 6px;

        .book-travel-data {
          flex: 1 1 calc(50% - 20px);
          min-width: 150px;
        }
        .book-travel-date {
          flex: 1 1 calc(50% - 10px);
          min-width: 140px;
        }
        .reverse-btn-cont {
          flex: 0 0 34px;
        }
      }

      .booking-get {
        .status-info {
          height: auto;
          min-height: 58px;
          flex-wrap: wrap;

          .book-travel-data {
            flex: 1 1 60%;
          }
          .book-travel-date {
            flex: 1 1 40%;
          }
        }
      }

      .find-btn-cont {
        .find-btn {
          width: 100%;
          min-width: 0;
        }
      }
    }
  }

  .city-section {
    padding: 220px 0 50px;

    .city-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      gap: 16px;
    }
    .atlanta,
    .dallas {
      grid-column: span 2;
    }
    .san-francisco,
    .washington,
    .boston,
    .chicago {
      grid-column: span 1;
    }
    .city-card {
      min-height: 280px;
    }
    .city-details {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      white-space: normal;
    }
    .city-details span:last-child {
      text-align: left;
    }
  }
}

@media (max-width: 480px) {
  .banner-top {
    .hero-1 {
      height: 72vh;
    }
    .booking-main-cont {
      bottom: -20%;
      width: calc(100% - 16px);

      .book-btn-cont {
        .booking-btn,
        .status-btn {
          height: 48px;
          padding: 10px 8px;
          gap: 6px;

          h5 {
            font-size: 11px;
          }
          i {
            font-size: 14px;
          }
        }
      }

      .book-data-btm {
        padding: 15px;
      }

      .travel-details {
        height: auto;
        margin-bottom: 5px;

        label {
          font-size: 13px;
        }
      }

      .booking-info {
        .book-travel-data,
        .book-travel-date {
          flex: 1 1 100%;
          min-width: 100%;
        }
        .reverse-btn-cont {
          display: none;
        }
      }

      .booking-get {
        .status-info {
          .book-travel-data,
          .book-travel-date {
            flex: 1 1 100%;
            min-width: 100%;
          }
        }
      }

      .find-btn-cont {
        .find-btn {
          height: 40px;
          font-size: 13px;
        }
      }
    }
  }

  .city-section {
    padding: 250px 0 16px;

    .city-grid {
      width: calc(100% - 24px);
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .atlanta,
    .dallas,
    .san-francisco,
    .washington,
    .boston,
    .chicago {
      grid-column: 1;
      grid-row: auto;
    }
    .city-card {
      min-height: 270px;
      border-radius: 16px;
    }
    .city-content {
      left: 18px;
      right: 18px;
      bottom: 18px;
    }
    .city-content h2 {
      font-size: 22px;
    }
    .city-details {
      font-size: 11px;
    }
    .city-details strong {
      font-size: 13px;
    }
  }
}
</style>