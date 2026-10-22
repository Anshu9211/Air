<template>
  <main class="page-container">
    <div class="content-grid">

      <!-- BOOKING CONFIRMATION -->
      <section class="confirmation-card">

        <div class="success-icon">
          <i class="bi bi-check-lg"></i>
        </div>

        <h4>BOOKING SUCCESSFUL</h4>

        <p class="description">
          Your journey starts here. Get ready for a comfortable
          and memorable flying experience with Udaan Airlines.
        </p>
        <div class="customer-details">

          <div class="detail-row">
            <strong>Name:</strong>
            <span>{{ passenger.name || passenger.fullName || "—" }}</span>
            
          </div>
    <div class="jai" >
        <div class="">
          <div class="detail-row mb-2">
            <strong>Age:</strong>
            <span>{{ passenger.age ? passenger.age + " years" : "—" }}</span>
          </div>

          <div class="detail-row">
            <strong>Mobile No:</strong>
            <span>{{ passenger.phone || passenger.mobile || passenger.mobileNo || "—" }}</span>
          </div>
        </div>
        <div class="mb-2">
          <div class="detail-row mb-2">
            <strong>Gender:</strong>
            <span>{{ passenger.gender || "—" }}</span>
          </div>

          <div class="detail-row">
            <strong>Email:</strong>
            <span>{{ passenger.email || "—" }}</span>
          </div>
        </div>
          </div>
        </div>


        <section class="summary-card">
        <div class="route">
          <div class="arrival">
            <strong>FROM</strong>
            <h3>{{ flight.fromCode || flight.from || "—" }}</h3>
            <p>{{ flight.from || "—" }}</p>
          </div>

          <div class="route-line">
            <span></span>
            <i class="bi bi-airplane"></i>
            <span></span>
          </div>

          <div class="departure">
            <strong>TO</strong>
            <h3>{{ flight.toCode || flight.to || "—" }}</h3>
            <p>{{ flight.to || "—" }}</p>
          </div>

        </div>

        <div class="flight-info">
          <div class="first-col">
            <span>Flight</span>
            <strong>{{ flight.airline || flight.id || "—" }}</strong>
          </div>

          <div class="sec-col">
            <span>Date</span>
            <strong>{{ flight.date || "—" }}</strong>
          </div>

          <div class="first-col">
            <span>Departure</span>
            <strong>{{ flight.depart || "—" }}</strong>
          </div>

          <div class="sec-col">
            <span>Arrival</span>
            <strong>{{ flight.arrive || "—" }}</strong>
          </div>
        </div>

        <div class="summary-btm">

          <div class="summary-divider"></div>

          <div class="fare-heading">
            <h3>Fare summary</h3>
            <span>INR</span>
          </div>

          <div class="fare-row">
            <span>Adult ({{ adult }})</span>
            <strong>{{ money(baseFare * adult) }}</strong>
          </div>

          <div class="fare-row">
            <span>Child ({{ child }})</span>
            <strong>{{ money(baseFare * 0.5 * child) }}</strong>
          </div>

          <div class="summary-divider"></div>

          <div class="total-row">
            <span>Total amount</span>
            <strong>{{ money(totalPrice) }}</strong>
          </div>

        </div>

      </section>
      </section>

      <!-- FLIGHT SUMMARY -->
      

    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
let props = defineProps({
  booking: {
    type: Object,
    required: true
  }
});

let flight = computed(() =>
  props.booking.flight || {}
);
let passenger = computed(() =>
  props.booking.passenger?.passenger ||
  props.booking.passenger ||
  {}
);

let adult = computed(() =>
  Math.max(1, Number(props.booking.adult) || 1)
);

let child = computed(() =>
  Math.max(0, Number(props.booking.child) || 0)
);

let baseFare = computed(() =>
  Number(props.booking.baseFare ?? flight.value.price) || 0
);

let totalPrice = computed(() => {
  let savedTotal = Number(props.booking.totalPrice);
  return Number.isFinite(savedTotal) && savedTotal > 0
    ? savedTotal
    : baseFare.value * adult.value +
      baseFare.value * 0.5 * child.value;
});

function money(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(Number(amount) || 0);
}
console.log("Passenger details:", passenger.value);
</script>

<style scoped>
.jai{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  
}
.page-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  background: #f4f7fc;
}

.content-grid {
  width: 100%;
  max-width: 992px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.confirmation-card,
.summary-card {
  width: 100%;
  padding: 30px;
  background: #fff;
  border: 1px solid #e5ebf2;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(21, 48, 76, 0.035);
}

.confirmation-card {
  text-align: center;
}

.success-icon {
  width: 75px;
  height: 75px;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  color: #fff;
  background: #008000d4;
  border-radius: 50%;
}

.success-icon i {
  font-size: 38px;
}

.confirmation-card h4 {
  margin-bottom: 15px;
  color: #152541;
  font-weight: 800;
}

.description {
  max-width: 440px;
  margin: 0 auto 25px;
  color: #7b879b;
  font-size: 14px;
  line-height: 1.8;
}

.customer-details {
  display: grid;
  gap: 16px;
  margin: 25px 0;
  text-align: left;
  padding: 0px 10px 0px 10px;
}

.detail-row {
  display: grid;
  grid-template-columns: 125px minmax(0, 1fr);
  gap: 10px;
  overflow-wrap: anywhere;
  font-size: 14px;
}

.detail-row strong {
  color: #152541;
}

.detail-row span {
  color: #52627b;
}

.summary-card {
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 22px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.842), rgba(255, 255, 255, 0.658)),
    url("https://img.magnific.com/free-photo/abstract-blue-motion-wave-background_1017-46751.jpg?t=st=1792570770~exp=1792574370~hmac=da07ae6490114de8551a42610fc69ce8590c9c371c00e49ccaa5547ef86bab8d&w=1480");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.route {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
  /* padding: 20px 0; */
}

.route strong {
  display: block;
  color: #7890a7;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
}

.route h3 {
  margin: 7px 0;
  color: #152541;
  font-size: 23px;
  font-weight: 800;
}

.route p {
  color: #7b879b;
  font-size: 12px;
}

.arrival
{
  text-align: start;
  padding-left: 30px;
}
.departure {
  text-align: end;
  padding-right: 30px;
}

.route-line {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #205ed2;
}

.route-line i {
  font-size: 19px;
  transform: rotate(90deg);
}

.route-line span {
  width: 130px;
  border-top: 1px dashed #205ed2;
}

.flight-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 15px 0;
  /* border-top: 1px solid #e5ebf2; */
  /* border-bottom: 1px solid #e5ebf2; */
}

.flight-info div {
  display: grid;
  gap: 6px;
}
.flight-info .first-col
{
  text-align: start;
  padding-left: 30px;
}

.flight-info .sec-col
{
  text-align: end;
  padding-right: 30px;
}

.flight-info span {
  color: #7b879b;
  font-size: 14px;
}

.flight-info strong {
  color: #253550;
  font-size: 13px;
  overflow-wrap: anywhere;
}

.summary-btm {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0px 30px 0px 30px;
}

.summary-divider {
  width: 100%;
  border-top: 1px solid #e5ebf2;
}

.fare-heading,
.fare-row,
.total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.fare-heading h3 {
  margin: 0;
  font-size: 23px;
  font-weight: 800;
}

.fare-heading span {
  color: #7b879b;
  font-size: 12px;
  font-weight: 700;
}

.fare-row span,
.total-row span {
  color: #52627b;
  font-size: 14px;
  font-weight: 600;
}

.fare-row strong {
  color: #253550;
  font-size: 14px;
  font-weight: 700;
}

.total-row strong {
  color: #205ed2;
  font-size: 23px;
  font-weight: 800;
}

@media (max-width: 576px) {
  .page-container {
    padding: 25px 12px;
  }

  .content-grid {
    gap: 20px;
  }

  .confirmation-card,
  .summary-card {
    padding: 22px 18px;
  }

  .route h3 {
    font-size: 19px;
  }

  .total-row strong {
    font-size: 20px;
  }

  .detail-row {
    grid-template-columns: 100px minmax(0, 1fr);
    font-size: 12px;
  }
}
</style>