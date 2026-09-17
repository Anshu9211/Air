<template>
 <div><h1>navbar page</h1></div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../data/user.js";

const router = useRouter();
const userStore = useUserStore();


</script>

<style scoped>

</style>
