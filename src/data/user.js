import { defineStore } from "pinia";

const STORAGE_KEY = "air_current_user";

// Mock user directory — stands in for a real auth backend.
const mockUsers = [
  {
    id: 1,
    name: "Aditya Sharma",
    email: "aditya@air.com",
    password: "password123",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@air.com",
    password: "flyhigh",
    phone: "+91 91234 56789",
  },
];

export const demoCredentials = { email: "aditya@air.com", password: "password123" };

function loadStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: loadStoredUser(),
  }),

  getters: {
    isAuthenticated: (state) => !!state.currentUser,
  },

  actions: {
    login(email, password) {
      const match = mockUsers.find(
        (u) =>
          u.email.toLowerCase() === String(email).toLowerCase().trim() &&
          u.password === password
      );

      if (!match) {
        return { success: false, message: "Invalid email or password." };
      }

      const { password: _omit, ...safeUser } = match;
      this.currentUser = safeUser;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser));
      return { success: true };
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem(STORAGE_KEY);
    },

    updateProfile(updates) {
      if (!this.currentUser) return;
      this.currentUser = { ...this.currentUser, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentUser));
    },
  },
});
