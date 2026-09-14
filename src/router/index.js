import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/data/user.js";

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Flights from "@/views/Flights.vue";
import FlightDetails from "@/views/FlightDetails.vue";
import Booking from "@/views/Booking.vue";
import MyBooking from "@/views/MyBooking.vue";
import Profile from "@/views/Profile.vue";

// The root path always renders the Login page — the site's entry point.
const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { title: "Login" },
  },
  {
    // Alias so /login also works and never 404s.
    path: "/login",
    redirect: { name: "login" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { title: "Dashboard", requiresAuth: true },
  },
  {
    path: "/flights",
    name: "flights",
    component: Flights,
    meta: { title: "Search Flights", requiresAuth: true },
  },
  {
    path: "/flights/:id",
    name: "flight-details",
    component: FlightDetails,
    meta: { title: "Flight Details", requiresAuth: true },
    props: true,
  },
  {
    path: "/booking/:id",
    name: "booking",
    component: Booking,
    meta: { title: "Book Flight", requiresAuth: true },
    props: true,
  },
  {
    path: "/my-bookings",
    name: "my-bookings",
    component: MyBooking,
    meta: { title: "My Bookings", requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { title: "Profile", requiresAuth: true },
  },
  {
    // Catch-all: any unknown path always falls back to the login page.
    path: "/:pathMatch(.*)*",
    redirect: { name: "login" },
  },
];

const router = createRouter({
  // Respect the configured Vite `base` (/airline-project/) so deep links
  // and page refreshes resolve correctly wherever the app is deployed.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Route guard: protected pages require a logged-in user.
// Unauthenticated visits to any protected path always land back on Login,
// which keeps the login page as the guaranteed first thing a fresh
// visitor sees.
router.beforeEach((to) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return { name: "login", query: { redirect: to.fullPath } };
  }

  document.title = to.meta.title ? `Air | ${to.meta.title}` : "Air";
  return true;
});

export default router;
