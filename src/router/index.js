import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../data/user.js";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Flights from "../views/Flights.vue";
import FlightDetails from "../views/FlightDetails.vue";
import Booking from "../views/Booking.vue";
import MyBooking from "../views/MyBooking.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { title: "Login" },
  },

  {
    path: "/login",
    redirect: { name: "login" },
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
      // requiresAuth: true,
    },
  },

  {
    path: "/flights",
    name: "flights",
    component: Flights,
    meta: {
      title: "Search Flights",
      // requiresAuth: true,
    },
  },

  {
    path: "/flights/:id",
    name: "flight-details",
    component: FlightDetails,
    props: true,
    meta: {
      title: "Flight Details",
      // requiresAuth: true,
    },
  },

  {
    path: "/booking/:id",
    name: "booking",
    component: Booking,
    props: true,
    meta: {
      title: "Book Flight",
      // requiresAuth: true,
    },
  },

  {
    path: "/my-bookings",
    name: "my-bookings",
    component: MyBooking,
    meta: {
      title: "My Bookings",
      // requiresAuth: true,
    },
  },

  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "Profile",
      // requiresAuth: true,
    },
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "login" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    };
  }
  document.title = to.meta.title
    ? `Air | ${to.meta.title}`
    : "Air";

  return true;
});
export default router;

