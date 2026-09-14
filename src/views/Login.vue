<template>
  <section class="login-page">
    <div class="login-card">
        <h1>hii AAdi</h1>
    </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

</script>
