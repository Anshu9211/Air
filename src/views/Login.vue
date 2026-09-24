
<template>

  <div class="login-page">
   <div class="container-fluid">
      <div class="container">
         <div class="row ">
            <div class="col-lg-8">
               <div class="login-content">
                  <div class="content-img">
                      <img src="../assets/img/2.png" class="img-fluid">
                  </div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="login-group">
                     <div class="login-box">
                        <form @submit.prevent="handleLogin">
                           <div class="">
                            <div class="login-logo mx-auto">
                                <img src="../assets/img/Udaan Airlines.png" class="img-fluid">
                            </div>
                            <!-- <div class="content-box text-center">
                              <h3>Login</h3>
                              <p>Enter your Email and Password</p>
                            </div> -->
                           <div class="form-group-box">
                              <label>Email</label>
                                 <input
                                    type="text"
                                    v-model="id"
                                    placeholder="Enter your Email"/>
                           </div>
                  
                           <div class="form-group-box">
                              <label>Password</label>

                                 <input
                                    type="password"
                                    v-model="password"
                                    placeholder="Enter your Password"/>
                           </div>
                           <p v-if="error" class="error">
                                 {{ error }}
                              </p>
                              <button type="submit">
                                 Login
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
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
*
{
   padding: 0;
}
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(135deg, #0f172a, #0284c7); */
  background-image: url("../assets/img//background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: auto;
  
}
 

.login-content
{
  position: relative;
}
.login-content .content-img img 
{
  width: 550px;
  position: absolute;
  top: -30px;
  left: 50px;
  opacity: 0.6;
}



.login-group .login-box
{
   padding: 20px 50px 50px 50px;
   background-color: rgba(240, 248, 255, 0.293);
   border-radius: 15px;
  transition: 0.3s ease;
   /* box-shadow: 0 0 50px #e6ebf0; */
     border:1px solid #4e89d1;
     backdrop-filter: blur(1px);

  
   

}
/* .login-group .login-box:hover
{
 


} */
.login-logo{
  width: 150px;
  height: 100px;
  border-radius: 50%;
  /* background-color: #0230c7ad;    */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;
}

.login-logo img
{
  width: 200px;
  height: 60px;
}
 .form-group-box label
{
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #334155;
  font-size: 19px;
}

 .form-group-box input
 {
  width: 100%;
  height: 48px;
  padding: 0 14px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  
 }
 .form-group-box
 {
   margin-bottom: 30px;
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
  transition: 0.4s ease;
  box-shadow: 4px 4px 0 #0285c761,
  inset 5px 5px 0 #0285c735;
}

button:hover {
  background: #0369a1;
  transform: translateY(-4px);
}

.error {
  color: #dc2626 !important;
  font-size: 14px;
  margin: 10px 0 !important;
}





</style>



