<template>
  <div>
    <Navbar />
    <div class="container-fluid banner-top ">
      <div class="container h-100 mx-auto banner-top-cont">
        <div class="row d-flex align-items-center text-center h-100">
          <div class="col-6">
            <h1>
                Elevate Your <span>Journey</span>
                <br>
                with Premium Travel
            </h1>
          </div>
          <div class=" booking-main-cont">
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
                <div class="find-btn-cont">
                  <button class="find-btn" id="find-btn">
                    <i class="bi bi-search"></i> 
                    Search Flights
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>

    <div class="og-section">
    </div>

   

    
  <section class="city-section">

    <div class="city-grid">

      <!-- Atlanta -->
      <article
        class="city-card city-card--large atlanta"

      >
        <div class="city-overlay"></div>

        <div class="city-content">
          <h2>Atlanta</h2>

          <div class="city-details">
            <span>21 Dec 2026 - 18 Jan 2027</span>

            <span>
              Economy from INR <strong>79617</strong>
            </span>
          </div>
        </div>
      </article>


      <!-- San Francisco -->
      <article
        class="city-card san-francisco"
      
      >
        <div class="city-overlay"></div>

        <div class="city-content">
          <h2>San Francisco</h2>

          <div class="city-details">
            <span>26 Oct 2026 - 03 Nov 2026</span>

            <span>
              Economy from INR <strong>105524</strong>
            </span>
          </div>
        </div>
      </article>


      <!-- Washington -->
      <article
        class="city-card washington"
      
      >
        <div class="city-overlay"></div>

        <div class="city-content">
          <h2>Washington</h2>

          <div class="city-details">
            <span>29 Sep 2026 - 05 Oct 2026</span>

            <span>
              Economy from INR <strong>90296</strong>
            </span>
          </div>
        </div>
      </article>


      <!-- Boston -->
      <article
        class="city-card boston"
      
      >
        <div class="city-overlay"></div>

        <div class="city-content">
          <h2>Boston</h2>

          <div class="city-details">
            <span>07 Oct 2026 - 12 Oct 2026</span>

            <span>
              Economy from INR <strong>82155</strong>
            </span>
          </div>
        </div>
      </article>


      <!-- Chicago -->
      <article
        class="city-card chicago"
      
      >
        <div class="city-overlay"></div>

        <div class="city-content">
          <h2>Chicago</h2>

          <div class="city-details">
            <span>06 Oct 2026 - 19 Oct 2026</span>

            <span>
              Economy from INR <strong>80475</strong>
            </span>
          </div>
        </div>
      </article>


      <!-- Dallas -->
      <article
        class="city-card city-card--large dallas"
       
      >
        <div class="city-overlay"></div>

        <div class="city-content">
          <h2>Dallas</h2>

          <div class="city-details">
            <span>17 Feb 2027 - 21 Feb 2027</span>

            <span>
              Economy from INR <strong>94028</strong>
            </span>
          </div>
        </div>
      </article>

    </div>

  </section>
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
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
.booking-main-cont
{
  // border: 1px solid black;
  // padding: 30px;
  // background-color: white;
   position: absolute;
    bottom: -44%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Encode Sans Semi Expanded", sans-serif;
    max-width: 1160px;
    

  
  .book-data-btm
  {
    // border: 2px solid black;
    padding: 30px;
    // background-color: rgb(245, 156, 156);
    background-color: white;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    max-width: 1160px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.096);

   
    // align-items: center;
    // justify-content: center;
     
    .travel-details
    {
      display: inline-flex;
      align-items: flex-start;
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
          width: 300px;
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
    .find-btn-cont
    {
      display: inline-flex;
      align-items: center;

      .find-btn
      {
        padding: 10px 20px;
        margin-top: 20px;
        width: 20%;
        border-radius: 12px;
        border: none;
        outline: none;
        background-color: #ffd3aca1;
        color: black;
        font-weight: 500;
        transition: 0.5s ease;
      }
      .find-btn:hover
      {
        background-color: rgba(128, 0, 128, 0.589);
        color: white;
      }
    }
  }
  .book-btn-cont
  {
    display: flex;
    align-items: flex-start;
    .booking-btn
    {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 13px;
      gap: 10px;
      border: none;
      padding: 15px 40px;
      border-right: 1px solid rgba(221, 160, 221, 0.589);
      transition: 0.5s ease;
      h5
      {
        font-weight: 450;
       margin: 0;
      }
    }
    .booking-btn:hover
    {
      color: white;
      background-color: rgb(119, 75, 119);
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
      padding: 15px 40px;
      transition: 0.5s ease;
      h5
      {
        font-weight: 450;
        margin: 0;
      }
    }
    .status-btn:hover
    {
       color: white;
      background-color: rgb(119, 75, 119);
    }
}
}

.og-section
{
  height: 300px;
  width: 100%;
  background:linear-gradient(rgba(104, 73, 104, 0.158)), url(../assets/img/bg-tempo.jpg);
  background-size: cover;
}

.location-main
{
  .location-cont
  {
    
    // margin: auto;
      .l-main-top
      {
        
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-content: center;
        align-items: center;
        gap: 50px;
        margin: 0px 320px;
        .location.one
        {
  
          .l-b-img
          {
            width: 560px;
            height: 340px;
            position: relative;
            img
            {
              width: 560px;
              height: 340px;
              object-fit: cover;
              overflow: hidden; 
              box-shadow: inset
                          0px 0px 20px rgba(0, 0, 0, 0.788);
              
            }
            .l-b-data
            {
              position: absolute;
              bottom: 1%;
              left: 5%;
              z-index: 10;
              color: white;
              display: flex;
              align-items: last baseline;
              justify-content: space-between;
              gap: 140px;
            }
          }
          
        }
        .location
        {
          margin: auto;
          .l-s-img
          {
            width: 280px;
            height: 340px;
            img
            {
              width: 280px;
              height: 340px;
              object-fit: cover;
              overflow: hidden;
            }
          }
        }
      }
  }
}




// ========================================
// VARIABLES
// ========================================

$background: #f4f5fa;
$text-white: #ffffff;

$card-radius: 19px;
$grid-gap: 24px;

$overlay-start: rgba(0, 0, 0, 0);
$overlay-middle: rgba(8, 11, 22, 0.18);
$overlay-end: rgba(8, 11, 22, 0.88);


// ========================================
// RESET
// ========================================
 

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;

  font-family:
    Arial,
    Helvetica,
    sans-serif;

  background: $background;
}


// ========================================
// MAIN SECTION
// ========================================

.city-section {
  width: 100%;
  padding: 26px 0;
  background:linear-gradient(rgba(255, 255, 255, 0.541)), url(https://img.magnific.com/free-photo/strokes-gray-paint_23-2147763480.jpg?t=st=1790238345~exp=1790241945~hmac=9adac03790aa73b92ec58dd3238f52ebe7d2e944b40076faa7007ff140093d6b&w=2000);
  background-size: cover;
  background-position:center;
}


// ========================================
// GRID
// ========================================

.city-grid {
  width: min(1120px, calc(100% - 40px));

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  grid-template-rows: 343px 343px;

  gap: $grid-gap;
}


// ========================================
// CARD
// ========================================

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

  // Image zoom
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

  // Hover
  &:hover {
    transform: translateY(-4px);

    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scale(1.05);
    }
  }
}


// ========================================
// GRID POSITIONS
// ========================================

// Atlanta
.atlanta {
  grid-column: 1 / span 2;
  grid-row: 1;
  background-image: url('../assets/img/g-1.avif');
}

// San Francisco
.san-francisco {
  grid-column: 3;
  grid-row: 1;
  background-image: url('../assets/img/g-2.avif')
}

// Washington
.washington {
  grid-column: 4;
  grid-row: 1;
  background-image: url('../assets/img/g-3.avif');
}

// Boston
.boston {
  grid-column: 1;
  grid-row: 2;
  background-image: url('../assets/img/r-2-1.avif');
}

// Chicago
.chicago {
  grid-column: 2;
  grid-row: 2;
  background-image: url('../assets/img/r-2-2.avif');
}

// Dallas
.dallas {
  grid-column: 3 / span 2;
  grid-row: 2;
  background-image: url('../assets/img/r-2-3.avif');
}


// ========================================
// GRADIENT OVERLAY
// ========================================
.city-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
  backdrop-filter: blur(10px);
  pointer-events: none;
  transition: background 0.4s ease;
  transition: 0.4s ease;
}

// Hover on city card
.city-card:hover .city-overlay {
  background-color: transparent;
   backdrop-filter: blur(0);

  background: linear-gradient(
    to bottom,
    $overlay-start 25%,
    $overlay-middle 52%,
    $overlay-end 100%
  );
}
// ========================================
// CONTENT
// ========================================

.city-content {
  position: absolute;
  left: 27px;
  right: 27px;
  bottom: 25px;
  z-index: 2;
  color: $text-white;
 
}


// ========================================
// CITY NAME
// ========================================

.city-content h2 {
  // margin: 0 0 8px;

  font-size: 30px;
  font-weight: bold;
  margin-bottom: 95px;
  text-align: center;



}


// ========================================
// DETAILS
// ========================================

.city-details {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-betwee;
  // gap: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  white-space: nowrap;
  // background-color: red;
  position: relative;
  top: 70px;
  transition: 0.4s ease;
}
.city-card:hover .city-details{
  // position: absolute;
  top: 0;
}

.city-details span:last-child {
  text-align: right;
}

.city-details strong {
  font-weight: 400;

  font-size: 16px;
}


// ========================================
// TABLET
// ========================================

@media (max-width: 1000px) {

  .city-grid {
    width: calc(100% - 30px);

    grid-template-rows:
      300px
      300px;

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

    gap: 12px;
  }

  .city-details strong {
    font-size: 14px;
  }
}


// ========================================
// MOBILE / 2 COLUMN
// ========================================

@media (max-width: 700px) {

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


// ========================================
// SMALL MOBILE
// ========================================

@media (max-width: 480px) {

  .city-section {
    padding: 16px 0;
  }

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
</style>


 