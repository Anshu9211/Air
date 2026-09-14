<template>
  <form class="air-surface p-4" @submit.prevent="handleSubmit">
    <h5 class="fw-semibold mb-3">Passenger Details</h5>

    <div class="row g-3">
      <div class="col-12 col-md-6">
        <label class="form-label">Full name</label>
        <input v-model.trim="form.fullName" type="text" class="form-control" placeholder="As per ID" required />
      </div>

      <div class="col-12 col-md-3">
        <label class="form-label">Age</label>
        <input v-model.number="form.age" type="number" min="1" max="120" class="form-control" required />
      </div>

      <div class="col-12 col-md-3">
        <label class="form-label">Gender</label>
        <select v-model="form.gender" class="form-select" required>
          <option value="" disabled>Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="col-12 col-md-6">
        <label class="form-label">Email</label>
        <input v-model.trim="form.email" type="email" class="form-control" placeholder="you@example.com" required />
      </div>

      <div class="col-12 col-md-6">
        <label class="form-label">Phone</label>
        <input v-model.trim="form.phone" type="tel" class="form-control" placeholder="+91 90000 00000" required />
      </div>

      <div class="col-12">
        <label class="form-label">Seat preference</label>
        <div class="d-flex flex-wrap gap-3">
          <div class="form-check" v-for="opt in seatOptions" :key="opt">
            <input
              :id="`seat-${opt}`"
              v-model="form.seatPreference"
              class="form-check-input"
              type="radio"
              :value="opt"
              name="seatPreference"
            />
            <label class="form-check-label" :for="`seat-${opt}`">{{ opt }}</label>
          </div>
        </div>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger mt-3 mb-0 py-2">{{ error }}</div>

    <button type="submit" class="btn air-btn-primary w-100 mt-4" :disabled="submitting">
      <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
      {{ submitting ? "Confirming…" : "Confirm Booking" }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";

const emit = defineEmits(["submit"]);

defineProps({
  submitting: {
    type: Boolean,
    default: false,
  },
});

const seatOptions = ["Window", "Middle", "Aisle"];

const form = reactive({
  fullName: "",
  age: null,
  gender: "",
  email: "",
  phone: "",
  seatPreference: "Window",
});

const error = ref("");

function handleSubmit() {
  error.value = "";

  if (!form.fullName || !form.age || !form.gender || !form.email || !form.phone) {
    error.value = "Please fill in all passenger details.";
    return;
  }

  emit("submit", { ...form });
}
</script>
