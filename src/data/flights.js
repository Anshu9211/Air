
import { defineStore } from "pinia";

export let flights = [
  // Delhi -> Mumbai
  {
    id: "AI-101",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-10-26",
    depart: "06:15 AM",
    arrive: "08:25 AM",
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
    depart: "09:40 PM",
    arrive: "11:35 PM",
    duration: "1h 55m",
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
    depart: "02:20 PM",
    arrive: "04:35 PM",
    duration: "2h 15m",
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
    depart: "07:30 AM",
    arrive: "09:40 AM",
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
    depart: "06:15 PM",
    arrive: "08:25 PM",
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
    depart: "01:20 PM",
    arrive: "04:10 PM",
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
    depart: "10:15 AM",
    arrive: "01:00 PM",
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
    depart: "06:40 PM",
    arrive: "09:25 PM",
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
    depart: "04:10 PM",
    arrive: "06:55 PM",
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
    depart: "07:15 AM",
    arrive: "08:35 AM",
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
    depart: "11:30 AM",
    arrive: "12:45 PM",
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
    depart: "02:10 PM",
    arrive: "03:25 PM",
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
    depart: "08:30 AM",
    arrive: "11:15 AM",
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
    depart: "03:20 PM",
    arrive: "06:05 PM",
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
    depart: "12:30 PM",
    arrive: "03:15 PM",
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
    depart: "09:20 AM",
    arrive: "10:55 AM",
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
    depart: "05:30 PM",
    arrive: "07:10 PM",
    duration: "1h 40m",
    stops: 0,
    aircraft: "Airbus A320",
    price: 3799,
  },

  // Delhi -> Kolkata
  {
    id: "AI-302-CCU",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Kolkata",
    toCode: "CCU",
    date: "2026-10-26",
    depart: "04:00 PM",
    arrive: "06:20 PM",
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
    depart: "07:30 PM",
    arrive: "09:50 PM",
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
    depart: "10:05 AM",
    arrive: "12:35 PM",
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
    depart: "02:00 PM",
    arrive: "04:30 PM",
    duration: "2h 30m",
    stops: 1,
    aircraft: "Airbus A320",
    price: 4250,
  },
]



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

