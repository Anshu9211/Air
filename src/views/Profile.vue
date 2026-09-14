<template>
  <div class="container"><div class="page-head"><div><p class="eyebrow">ACCOUNT</p><h1>My Profile</h1></div></div><div class="card profile"><div class="avatar">A</div><div><h2>{{ user.name }}</h2><p>{{ user.email }}</p><p>{{ user.phone }}</p></div></div></div>
</template>
<script setup>
import { user } from '../data/user'
</script>
