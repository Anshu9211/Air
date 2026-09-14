<template>
  <div>
    <Navbar />

    <div class="air-page">
      <div class="container" style="max-width: 640px;">
        <h1 class="h4 fw-bold mb-4">Profile</h1>

        <div class="air-surface p-4 p-md-5">
          <div class="text-center mb-4">
            <i class="bi bi-person-circle display-4 text-primary"></i>
            <h2 class="h5 fw-semibold mt-2 mb-0">{{ userStore.currentUser?.name }}</h2>
            <p class="air-muted small">{{ userStore.currentUser?.email }}</p>
          </div>

          <form @submit.prevent="saveChanges">
            <div class="mb-3">
              <label class="form-label">Full name</label>
              <input v-model.trim="form.name" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input :value="userStore.currentUser?.email" type="email" class="form-control" disabled />
              <div class="form-text">Email cannot be changed.</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Phone</label>
              <input v-model.trim="form.phone" type="tel" class="form-control" required />
            </div>

            <div v-if="saved" class="alert alert-success py-2">Profile updated successfully.</div>

            <button type="submit" class="btn air-btn-primary w-100">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useUserStore } from "@/data/user.js";

const userStore = useUserStore();
const saved = ref(false);

const form = reactive({
  name: userStore.currentUser?.name || "",
  phone: userStore.currentUser?.phone || "",
});

function saveChanges() {
  userStore.updateProfile({ name: form.name, phone: form.phone });
  saved.value = true;
  setTimeout(() => (saved.value = false), 2500);
}
</script>
