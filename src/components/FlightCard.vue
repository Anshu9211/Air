<template>
  <div class="air-surface air-surface--hover p-3 p-md-4 mb-3">
    <div class="row align-items-center g-3">
      <div class="col-12 col-md-3">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-airplane-fill text-primary fs-5"></i>
          <div>
            <div class="fw-semibold">{{ flight.airline }}</div>
            <div class="air-muted small">{{ flight.aircraft }}</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-5">
        <div class="d-flex align-items-center justify-content-between">
          <div class="text-center">
            <div class="fw-bold fs-5">{{ flight.depart }}</div>
            <div class="air-muted small">{{ flight.fromCode }}</div>
          </div>
          <div class="flex-grow-1 px-3 text-center">
            <div class="air-muted small">{{ flight.duration }}</div>
            <div class="route-line"></div>
            <div class="air-muted small">
              {{ flight.stops === 0 ? "Non-stop" : `${flight.stops} stop` }}
            </div>
          </div>
          <div class="text-center">
            <div class="fw-bold fs-5">{{ flight.arrive }}</div>
            <div class="air-muted small">{{ flight.toCode }}</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-2">
        <div class="fw-bold fs-5 text-primary">₹{{ flight.price.toLocaleString("en-IN") }}</div>
        <div class="air-muted small">per adult</div>
      </div>

      <div class="col-12 col-md-2 text-md-end">
        <router-link
          class="btn air-btn-primary w-100 w-md-auto"
          :to="{ name: 'flight-details', params: { id: flight.id } }"
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
});
</script>

<style scoped>
.route-line {
  height: 1px;
  background-color: var(--air-border);
  position: relative;
  margin: 6px 0;
}

.route-line::after {
  content: "";
  position: absolute;
  right: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--air-primary);
}
</style>
