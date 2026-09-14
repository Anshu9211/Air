<template>
  <div class="text-center py-5">
    <div class="searching-icon mb-3">
      <i class="bi bi-airplane-fill fs-1 text-primary"></i>
    </div>
    <h5 class="fw-semibold mb-1">{{ message }}</h5>
    <p class="air-muted mb-4">Hang tight, we're finding the best options for you.</p>

    <div class="mx-auto" style="max-width: 640px;">
      <div v-for="n in 3" :key="n" class="air-surface p-3 mb-3">
        <div class="placeholder-glow d-flex align-items-center gap-3">
          <span class="placeholder col-2 rounded" style="height: 20px;"></span>
          <span class="placeholder col-3 rounded" style="height: 20px;"></span>
          <span class="placeholder col-2 rounded ms-auto" style="height: 20px;"></span>
          <span class="placeholder col-2 rounded" style="height: 32px;"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "Searching flights…",
  },
});
</script>

<style scoped>
.searching-icon {
  animation: float 1.4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(8deg);
  }
}
</style>
