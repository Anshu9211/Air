
import { defineStore } from "pinia";

// ========================================
// FLIGHT DATA
// ========================================

export let flights = [

  {
    id: "AI-101",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-10-26",
    depart: "06:00 AM",
    arrive: "08:10 AM",
    duration: "2h 10m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 4599,
  },
  {
    id: "6E-233",
    airline: "IndiGo",
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-10-26",
    depart: "09:45 PM",
    arrive: "11:55 PM",
    duration: "1h 30m",
    stops: 0,
    aircraft: "Airbus A321neo",
    price: 3899,
  },
  {
    id: "UK-901",
    airline: "Vistara",
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-10-27",
    depart: "14:20 PM",
    arrive: "16:30 PM",
    duration: "2h 10m",
    stops: 0,
    aircraft: "Airbus A320neo",
    price: 5199,
  },

  // Mumbai -> Delhi
  {
    id: "6E-512",
    airline: "IndiGo",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-10-26",
    depart: "07:30",
    arrive: "09:40",
    duration: "2h 10m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 4299,
  },
  {
    id: "AI-302",
    airline: "Air India",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-10-27",
    depart: "18:15",
    arrive: "20:25",
    duration: "2h 10m",
    stops: 0,
    aircraft: "Airbus A321",
    price: 4499,
  },

  // Delhi -> Bengaluru
  {
    id: "UK-955",
    airline: "Vistara",
    from: "Delhi",
    fromCode: "DEL",
    to: "Bengaluru",
    toCode: "BLR",
    date: "2026-10-26",
    depart: "13:20",
    arrive: "16:10",
    duration: "2h 50m",
    stops: 0,
    aircraft: "Airbus A320neo",
    price: 5299,
  },
  {
    id: "6E-401",
    airline: "IndiGo",
    from: "Delhi",
    fromCode: "DEL",
    to: "Bengaluru",
    toCode: "BLR",
    date: "2026-10-27",
    depart: "10:15",
    arrive: "13:00",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Airbus A321neo",
    price: 4899,
  },

  // Bengaluru -> Delhi
  {
    id: "AI-687",
    airline: "Air India",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-10-26",
    depart: "18:40",
    arrive: "21:25",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Boeing 787",
    price: 6199,
  },
  {
    id: "6E-820",
    airline: "IndiGo",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-10-27",
    depart: "16:10",
    arrive: "18:55",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 5499,
  },

  // Mumbai -> Goa
  {
    id: "SG-411",
    airline: "SpiceJet",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Goa",
    toCode: "GOI",
    date: "2026-10-26",
    depart: "07:15",
    arrive: "08:35",
    duration: "1h 20m",
    stops: 0,
    aircraft: "Boeing 737",
    price: 2799,
  },
  {
    id: "6E-625",
    airline: "IndiGo",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Goa",
    toCode: "GOI",
    date: "2026-10-27",
    depart: "11:30",
    arrive: "12:45",
    duration: "1h 15m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 2999,
  },

  // Goa -> Mumbai
  {
    id: "6E-626",
    airline: "IndiGo",
    from: "Goa",
    fromCode: "GOI",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-10-26",
    depart: "14:10",
    arrive: "15:25",
    duration: "1h 15m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 2899,
  },

  // Delhi -> Goa
  {
    id: "AI-880",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Goa",
    toCode: "GOI",
    date: "2026-10-26",
    depart: "08:30",
    arrive: "11:15",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Airbus A321",
    price: 5799,
  },
  {
    id: "6E-501",
    airline: "IndiGo",
    from: "Delhi",
    fromCode: "DEL",
    to: "Goa",
    toCode: "GOI",
    date: "2026-10-27",
    depart: "15:20",
    arrive: "18:05",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 4999,
  },

  // Goa -> Delhi
  {
    id: "AI-881",
    airline: "Air India",
    from: "Goa",
    fromCode: "GOI",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-10-26",
    depart: "12:30",
    arrive: "15:15",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Airbus A321",
    price: 5599,
  },

  // Mumbai -> Bengaluru
  {
    id: "6E-530",
    airline: "IndiGo",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Bengaluru",
    toCode: "BLR",
    date: "2026-10-26",
    depart: "09:20",
    arrive: "10:55",
    duration: "1h 35m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 3599,
  },

  // Bengaluru -> Mumbai
  {
    id: "AI-650",
    airline: "Air India",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-10-26",
    depart: "17:30",
    arrive: "19:10",
    duration: "1h 40m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 3799,
  },

  // Delhi -> Kolkata
  {
    id: "AI-302",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Kolkata",
    toCode: "CCU",
    date: "2026-10-26",
    depart: "16:00",
    arrive: "18:20",
    duration: "2h 20m",
    stops: 0,
    aircraft: "Airbus A321",
    price: 4999,
  },

  // Kolkata -> Delhi
  {
    id: "6E-303",
    airline: "IndiGo",
    from: "Kolkata",
    fromCode: "CCU",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-10-26",
    depart: "19:30",
    arrive: "21:50",
    duration: "2h 20m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 4599,
  },

  // Chennai -> Kolkata
  {
    id: "6E-870",
    airline: "IndiGo",
    from: "Chennai",
    fromCode: "MAA",
    to: "Kolkata",
    toCode: "CCU",
    date: "2026-10-26",
    depart: "10:05",
    arrive: "12:35",
    duration: "2h 30m",
    stops: 1,
    aircraft: "Airbus A320",
    price: 4150,
  },

  // Kolkata -> Chennai
  {
    id: "6E-871",
    airline: "IndiGo",
    from: "Kolkata",
    fromCode: "CCU",
    to: "Chennai",
    toCode: "MAA",
    date: "2026-10-27",
    depart: "14:00",
    arrive: "16:30",
    duration: "2h 30m",
    stops: 1,
    aircraft: "Airbus A320",
    price: 4250,
  },
];

export function getFlightById(id) {
  return flights.find((f) => f.id === id) || null;
}
export function searchFlights({ from, to } = {}) {
  return flights.filter((f) => {
    let matchFrom =
      !from ||
      f.from.toLowerCase().trim() === from.toLowerCase().trim();

    let matchTo =
      !to ||
      f.to.toLowerCase().trim() === to.toLowerCase().trim();

    return matchFrom && matchTo;
  });
}
let STORAGE_KEY = "air_bookings";
function loadStoredBookings() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export let useBookingStore = defineStore("booking", {
  state: () => ({
    bookings: loadStoredBookings(),
  }),
  actions: {
    addBooking(booking) {
      this.bookings.unshift(booking);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(this.bookings)
      );
    },

    cancelBooking(bookingId) {
      this.bookings = this.bookings.filter(
        (b) => b.bookingId !== bookingId
      );

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(this.bookings)
      );
    },
  },
});

