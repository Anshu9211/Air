import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Flights from '../views/Flights.vue'
import FlightDetails from '../views/FlightDetails.vue'
import Booking from '../views/Booking.vue'
import MyBooking from '../views/MyBooking.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/flights', name: 'Flights', component: Flights, meta: { requiresAuth: true } },
  { path: '/flights/:id', name: 'FlightDetails', component: FlightDetails, meta: { requiresAuth: true } },
  { path: '/booking', name: 'Booking', component: Booking, meta: { requiresAuth: true } },
  { path: '/my-bookings', name: 'MyBooking', component: MyBooking, meta: { requiresAuth: true } },
  { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && localStorage.getItem('airline_logged_in') !== 'true') {
    return { name: 'Login' }
  }
})

export default router
