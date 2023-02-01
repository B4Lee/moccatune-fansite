<script setup>
import Navbar from '../components/Navbar.vue'

</script>

<template>
    <Navbar />
    <div class="jumbotron">
      <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel"> 
        <!--
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
        </ol>
-->
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active"> <img class="d-block mx-auto img-fluid" src="../assets/images/kemal-satrianda.webp" alt="First slide"> </div>
          <div class="carousel-item"> <img class="d-block mx-auto img-fluid" src="../assets/images/adam-raditya.webp" alt="Second slide"> </div>
          <div class="carousel-item"> <img class="d-block mx-auto img-fluid" src="../assets/images/nadia-calista.webp" alt="Third slide"> </div>
          <div class="carousel-item"> <img class="d-block mx-auto img-fluid" src="../assets/images/anindita-putri.webp" alt="Third slide"> </div>
          <div class="carousel-item"> <img class="d-block mx-auto img-fluid" src="../assets/images/ibrahim-oktavian.webp" alt="Third slide"> </div>
          <div class="carousel-item"> <img class="d-block mx-auto img-fluid" src="../assets/images/wahyu-dirgantara.webp" alt="Third slide"> </div>
          <div class="carousel-item"> <img class="d-block mx-auto img-fluid" src="../assets/images/diana-puspitasari.webp" alt="Third slide"> </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
</script>
