<template>
  <div class="container-fluid home-nav">
    <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="nav-img">
              <img src="../assets/img/2.png" class="img-fluid">
            </div>
        </div>
          <div class="col-lg-7">
              <div class="navbar-text">
                <ul class="nav-ul ">
                  <li class="nav-li"><a href="#">HOME</a>
                  </li>
                  <li class="nav-li"><a href="#">FLIGHTS</a>
                  <div class="home-dropdown">
                      <ul class="ul-nav">
                        <li class="li-nav"><a href="#">AIR INDIA</a></li>
                        <li class="li-nav"><a href="#">INDIGO</a></li>
                        <li class="li-nav"><a href="#">VISTARA</a></li>
                        <li class="li-nav"><a href="#">SPICE JET</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-li"><a href="#">SERVICES</a></li>
                  <li class="nav-li"><a href="#">TEAM</a></li>
                  <li class="nav-li"><a href="#">CONTACT</a></li>
                </ul>
              </div>
          </div>
          <div class="col-lg-3">
            <div class="nav-icon">

            </div>
            <div class="nav-contant">
                <ul>
                    <li><a href="#">INR</a></li>
                    <li><a href="#">Support</a></li>
                    
                </ul>
            </div>
          </div>
        </div>  
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../data/user.js";
</script>

<style scoped>
.home-nav
{
  background: linear-gradient(
    140deg,
    rgba(71, 149, 212, 0.92),
    rgba(10, 30, 51, 0.96));
  
}
.navbar-text{
    padding-top: 20px;
    padding-bottom: 20px;
}
.navbar-text .nav-ul
{
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.navbar-text .nav-ul .nav-li 
{
  text-decoration: none;
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
  position: relative;

}
.navbar-text .nav-ul .nav-li a
{
    color: white;
    text-decoration: none;
    position: relative;
    transition: 0.5s ease;
    display: block;
    font-weight: 400;
    width: fit-content;

}
.navbar-text .nav-ul .nav-li a::before
{
  content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color: rgba(146, 223, 253, 0.726) ;
    width: 0;
    height: 3px;
    border-radius: 35px;
    transition: 0.4s ease;
    /* width: fit-content; */
}

.nav-ul .nav-li a:hover::before
{
    width: 100%;
}

.nav-button
{
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-img img
{
  width: 160px;
  height: 50px;
}

.home-dropdown .ul-nav
{
  /* padding: 20px 30px 20px 30px;  */
  padding: 20px;
  z-index: 3;

}
.home-dropdown .ul-nav .li-nav
{
  text-decoration: none;
  list-style-type: none;
  padding: 10px 20px;

}
.home-dropdown .ul-nav .li-nav a
{
  color: white;
  font-weight: 600;
}
 .nav-ul .ul-nav
 {
    position: absolute;
    /* line-height: 50px; */
    width: 200px;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    transition: 0.4s ease;
    border-radius: 15px;
    background-color:#1f2123ac ;
    border: 1px solid #ffffff7c;
    
 }
 .nav-ul li:hover .ul-nav 
{
    
   display:block;
}
.nav-contant
{
    padding-top: 20px;
    padding-bottom: 9px;
    font-weight: 400;
}
.nav-contant ul
{
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
}
.nav-contant ul li 
{
    list-style-type: none;
    color: white;
    font-weight: 500;
    font-size: 18px;

}

.flithis-box
{
  background-color: #8B827E;
}

</style>