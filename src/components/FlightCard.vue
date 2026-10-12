<template>
  <div class="air-surface air-surface--hover mb-4">
    <div class="row align-items-center g-3">
      <div class="col-12 col-md-3">
        <div class="d-flex align-items-center gap-2">
          <i
            class="bi bi-airplane-fill text-primary fs-5"
          ></i>
          <div>
            <div class="fw-bold fs-5">
              {{ flight.airline }}
            </div>
            <div class="air-muted small">
              {{ flight.aircraft }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <div
          class="d-flex align-items-center justify-content-between"
        >
          <div class="text-center">
            <div class="fw-bold fs-5">
              {{ flight.depart }}
            </div>
            <div class="air-muted small">
              {{ flight.fromCode }}
            </div>
          </div>
          <div
            class="flex-grow-1 px-3 text-center"
          >
            <div class="air-muted small fw-semibold fs-6">
              {{ flight.duration }}
            </div>
            <div class="route-line">
              <span class="route-dot">
              </span>
              <img src="../assets/img/location-img.png" alt="location" class="location-icon">
            </div>
            <div class="air-muted small">
              {{
                flight.stops === 0
                  ? "Non-stop"
                  : `${flight.stops} stop`
              }}
            </div>
          </div>
          <div class="text-center">
            <div class="fw-bold fs-5">
              {{ flight.arrive }}
            </div>
            <div class="air-muted small">
              {{ flight.toCode }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div class="fw-bold fs-5 text-primary">
          ₹{{ totalPrice.toLocaleString("en-IN") }}
        </div>
        <div class="air-muted small">
         Adult {{ adult }} , {{ child }} Child
        </div>

      </div>

<div class="col-12 col-md-2 text-md-end">
  <router-link
    class="btn air-btn-primary w-100 w-md-auto"
    :to="{
      name: 'flight-details',
      params: {
        id: flight.id
      },
      query: {
        departDate: $route.query.departDate || $route.query.date || flight.date,
        returnDate: $route.query.returnDate || '',
        tripType: $route.query.tripType || 'oneway',
        adult: adult,
        child: child
      }
    }"
  >
    View Details
  </router-link>
</div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  flight: {
    type: Object,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  adult: {
    type: Number,
    required: true,
  },

  child: {
    type: Number,
    required: true,
  },
});
</script>


<style scoped>
.route-line {
  height: 2px;
  background-color: var(--air-border);
  position: relative;
  margin: 10px 0;
}

.route-dot
{
  position: absolute;
  right: 0;
  top: -2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--air-primary);
  transition: opacity 0.25s ease;
}
.location-icon
{
  position: absolute;
  top: -25px;
  right: -10px;
  width: 28px;
  height: 28px;
  object-fit: contain;
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.25s ease,
              transform 0.25s ease;
  pointer-events: none;
}
.air-surface:hover .route-dot{
  opacity: 0;
}
.air-surface:hover .location-icon
{
  opacity: 1;
  transform: scale(1);
}
</style>