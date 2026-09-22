 <template>
  <div class="container-fluid home-nav ">
    <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="nav-img">
              <img src="../assets/img/Udaan Airlines.png" class="img-fluid">
            </div>
        </div>
          <div class="col-lg-7">
              <div class="navbar-text">
                <ul class="nav-ul ">
                  <li class="nav-li"><a href="#">HOME</a>
                    <div class="home-dropdown">
                      <ul class="ul-nav">
                        <li class="li-nav"><a href="#">UDAAN AIRLINES O1</a></li>
                        <li class="li-nav"><a href="#">UDAAN AIRLINES O2</a></li>
                        <li class="li-nav"><a href="#">UDAAN AIRLINES O3</a></li>
                        <li class="li-nav"><a href="#">UDAAN AIRLINES O4</a></li>
                        <li class="li-nav"><a href="#">UDAAN AIRLINES O5</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-li"><a href="#">FLIGHTS</a></li>
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
  <div class="container-fluid home-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="box-container">
            <div class="contant">
              <h2></h2>
            </div>
          </div>
        </div>
        <div class="col-lg-6">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../data/user.js";

const router = useRouter();
const userStore = useUserStore();


</script>

<style scoped>
.home-nav
{
  /* background:liner(#89C8F7,red); */
  background: linear-gradient(#89C8F7);
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
    font-weight: 500;

}
.navbar-text .nav-ul .nav-li a::before
{
  content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color:black ;
    width: 0;
    height: 3px;
    transition: 0.4s ease;
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
  padding: 20px 30px 20px 30px;

}
.home-dropdown .ul-nav .li-nav
{
  text-decoration: none;
  list-style-type: none;
}
.home-dropdown .ul-nav .li-nav a
{
  color: white;
}
 .nav-ul .ul-nav
 {
    position: absolute;
    line-height: 50px;
    width: 250px;
    top: 35px;
    left: 0;
    display: none;
    transition: 0.4s ease;
    border-radius: 15px;
    /* padding-top: 25px; */
    /* box-shadow: 5px 5px 0 white,
    inset 5px 5px 0 white; */
    background-color:#89C8F7 ;
    border: 1px solid #ffffff7c;
 }
 .nav-ul li:hover .ul-nav 
{
    
   display:block;
}
.nav-contant
{
    padding-top: 20px;
    padding-bottom: 20px;
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
.home-box
{
  background-image: url("../assets/img/background.png");
  background-position: center;
  background-size: cover;
  height: 500%;
}

</style>
