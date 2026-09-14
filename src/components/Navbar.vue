<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
    <div class="container">
      <router-link class="navbar-brand fw-bold d-flex align-items-center gap-2" :to="{ name: 'dashboard' }">
        <i class="bi bi-airplane-engines-fill text-primary"></i>
        <span>Air</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#airNavbar"
        aria-controls="airNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="airNavbar">
        <ul class="navbar-nav mx-lg-auto gap-lg-2">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'dashboard' }" active-class="active fw-semibold text-primary">
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'flights' }" active-class="active fw-semibold text-primary">
              Flights
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'my-bookings' }" active-class="active fw-semibold text-primary">
              My Bookings
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-lg-3 align-items-lg-center gap-2">
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center gap-2" :to="{ name: 'profile' }" active-class="fw-semibold text-primary">
              <i class="bi bi-person-circle fs-5"></i>
              <span>{{ userStore.currentUser?.name?.split(" ")[0] || "Profile" }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-secondary btn-sm" @click="handleLogout">
              <i class="bi bi-box-arrow-right me-1"></i>Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/data/user.js";

const router = useRouter();
const userStore = useUserStore();

function handleLogout() {
  userStore.logout();
  router.push({ name: "login" });
}
</script>

<style scoped>
.navbar-brand span {
  font-size: 1.25rem;
  color: var(--air-primary);
}

.nav-link {
  color: var(--air-text);
}

.nav-link:hover {
  color: var(--air-primary);
}
</style>
