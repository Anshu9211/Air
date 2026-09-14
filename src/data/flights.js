import { defineStore } from "pinia";

// Static mock flight inventory.
export const flights = [
  {
    id: "AI-101",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    date: "2026-09-20",
    depart: "06:00",
    arrive: "08:10",
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
    date: "2026-09-20",
    depart: "09:45",
    arrive: "11:55",
    duration: "2h 10m",
    stops: 0,
    aircraft: "Airbus A321neo",
    price: 3899,
  },
  {
    id: "UK-955",
    airline: "Vistara",
    from: "Delhi",
    fromCode: "DEL",
    to: "Bengaluru",
    toCode: "BLR",
    date: "2026-09-21",
    depart: "13:20",
    arrive: "16:10",
    duration: "2h 50m",
    stops: 0,
    aircraft: "Airbus A320neo",
    price: 5299,
  },
  {
    id: "SG-411",
    airline: "SpiceJet",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Goa",
    toCode: "GOI",
    date: "2026-09-22",
    depart: "07:15",
    arrive: "08:35",
    duration: "1h 20m",
    stops: 0,
    aircraft: "Boeing 737",
    price: 2799,
  },
  {
    id: "AI-687",
    airline: "Air India",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Delhi",
    toCode: "DEL",
    date: "2026-09-23",
    depart: "18:40",
    arrive: "21:25",
    duration: "2h 45m",
    stops: 0,
    aircraft: "Boeing 787",
    price: 6199,
  },
  {
    id: "6E-870",
    airline: "IndiGo",
    from: "Chennai",
    fromCode: "MAA",
    to: "Kolkata",
    toCode: "CCU",
    date: "2026-09-24",
    depart: "10:05",
    arrive: "12:35",
    duration: "2h 30m",
    stops: 1,
    aircraft: "Airbus A320",
    price: 4150,
  },
];

export function getFlightById(id) {
  return flights.find((f) => f.id === id) || null;
}

export function searchFlights({ from, to, date } = {}) {
  return flights.filter((f) => {
    const matchFrom = !from || f.from.toLowerCase().includes(from.toLowerCase());
    const matchTo = !to || f.to.toLowerCase().includes(to.toLowerCase());
    const matchDate = !date || f.date === date;
    return matchFrom && matchTo && matchDate;
  });
}

const STORAGE_KEY = "air_bookings";

function loadStoredBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export const useBookingStore = defineStore("booking", {
  state: () => ({
    bookings: loadStoredBookings(),
  }),

  actions: {
    addBooking(booking) {
      this.bookings.unshift(booking);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.bookings));
    },

    cancelBooking(bookingId) {
      this.bookings = this.bookings.filter((b) => b.bookingId !== bookingId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.bookings));
    },
  },
});
