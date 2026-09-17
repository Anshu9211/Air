
<template>
  <div class="login-page">
    <div class="login-box">
      <h1>Login</h1>
      <p>Enter your ID and Password</p>
      <form @submit.prevent="handleLogin">
  
        <div class="form-group">
          <label>Email</label>
          <input
            type="text"
            v-model="id"
            placeholder="Enter your username"
          />
        </div>
     
        <div class="form-group">
          <label>Password</label>

          <input
            type="password"
            v-model="password"
            placeholder="Enter your Password"
          />
        </div>
        <p v-if="error" class="error">
          {{ error }}
        </p>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let id = ref("");
let password = ref("");
let error = ref("");

let users = [
  {
    id: "anshulgarg1999@gmail.com",
    password: "Anshul123"
  },
  {
    id: "xyz123@gmail.com",
    password: "Xyz123"
  }
];

let handleLogin = () => {
  error.value = "";
  let validUser = users.find(
    (user) =>
      user.id === id.value &&
      user.password === password.value
  );
  if (validUser) {
    console.log("Login Successful");
    router.push("/dashboard");
  } else {
    error.value = "Invalid ID or Password";
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f172a, #0284c7);
}

.login-box {
  width: 400px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

h1 {
  text-align: center;
  margin-bottom: 8px;
  color: #0f172a;
}

.login-box p {
  text-align: center;
  color: #64748b;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #334155;
}

input {
  width: 100%;
  height: 48px;
  padding: 0 14px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
}

input:focus {
  border-color: #0284c7;
}

button {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;
  background: #0284c7;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #0369a1;
}

.error {
  color: #dc2626 !important;
  font-size: 14px;
  margin: 10px 0 !important;
}
</style>



