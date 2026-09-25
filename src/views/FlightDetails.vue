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
                    <img src="../assets/img/logo-img.jpeg" class="img-fluid">
                  </div>
                  <div class="box-flight-data">
                      <div class="flight-top-data">
                          <h3>Delhi (DEL)</h3>
                          <p> Sat, 27 Sep 2025</p>
                      </div>
                      <div class="pt-1 icon-center">
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
                  <p class="mb-0">Delhi</p>
                  <div class="icon-lift">
                      <i class="bi bi-dot"></i>
                      <span>-------------------------</span>
                    </div>
                </div>
                <div class="No-Top">
                  <div class="icon-box">
                    <i class="bi bi-airplane-fill"></i>
                  </div>
                  <div class="Non-stop">
                    <p class="mb-2 ">2h 15m</p>
                    <span>Non stop</span>
                  </div>
                </div>
                <div class="Mumbai-data">
                  <h2>11:00</h2>
                  <h6>BOM</h6>
                  <p>Chharrapati Shivaji <br> Maharaj international Airport</p>
                  <p class="mb-0">Mumbai</p>
                  <div class="icon-right">
                      <i class="bi bi-dot"></i>
                      <span>----------------------</span>
                    </div>
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
                      <i class="bi bi-gender-neuter"></i>
                    </div>
                    <div class="flaght-no">
                      <p class="m-0 ps-2">Stops</p>
                      <h6>Non-stop</h6>
                    </div>
                  </div>
                  <div class="box-code pt-3 ">
                    <div class="card-details ">
                      <i class="bi bi-person-wheelchair"></i>
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
                  <button class="Book-Now " id="but-book">Book Now <i class="bi bi-arrow-right"></i></button>
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
<style lang="scss" scoped>
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
.my-class .uddan-logo img
{
  width: 150px;
  margin-bottom: 20px;
}
.my-class .box-flight-data .icon-center i
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
  padding: 30px 30px 0 30px;
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
  padding: 0 50px 0 50px;

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
  font-weight: 600;
  transition: 0.4s ease;
}
.but-book .Book-Now:hover
{
  transform: translateY(-4px);
  box-shadow: 0 0 px #205ED2;
}
.time-data .Delhi-data
{
  padding: 30px;
  position: relative;
}
.icon-lift i
{
  position: absolute;
  top: 8px;
  right: -60px;
  font-size: 45px;
  color: #205ED2;

}
.icon-lift span
{
  position: absolute;
  top: 17px;
  right: -345px;
  font-size: 30px;
  color: #205ed258;

}

.time-data .Mumbai-data
{
  padding: 20px;
  position: relative;
}
.icon-right i
{
  position: absolute;
  top: -1px;
  left:-100px;
  font-size: 45px;
  color: #205ED2;

}

.icon-right span
{
  position: absolute;
  top: 7px;
  left:-350px;
  font-size: 30px;
  color: #205ed261;
}
.No-Top
{
  position: relative;
  text-align: center;
}
.icon-box i
{
  position: absolute;
  top: -62px;
  right: 35px;
  font-size: 30px;
  transform: rotate(90deg);
  color: #205ED2;
  
}
.Non-stop p
{
  margin-bottom: 10px;
}
.Non-stop span
{
  background-color: rgb(115, 211, 115);
  padding: 4px 15px;
  border-radius: 25px;
  color: white;
}
.box-code .flaght-no h6
{
  background-color: rgb(115, 211, 115);
  padding: 5px 15px;
  border-radius: 25px;
  color: white;
}
</style>
