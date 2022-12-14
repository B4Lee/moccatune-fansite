<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar />

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="3000"> <img src="../assets/images/moccatune-pilu-single.png"
              class="d-block w-100" alt="..."> </div>
          <div class="carousel-item" data-interval="3000"> <img src="../assets/images/moccatune-janji-jari-kelingking.png"
              class="d-block w-100" alt="..."> </div>
          <div class="carousel-item" data-interval="3000"> <img src="../assets/images/moccatune-diam-diam-aku-suka-2nd-anniversary-edition-single-release.jpg"
              class="d-block w-100" alt="..."> </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev"> <span
            class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a
          class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next"> <span
            class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
      </div>
      <br>
      <h1 class="text-center">Moccatune</h1>
      <p class="text-center"><strong>Latest Realease</strong></p>
      <div class="row">
        <div class="col-lg-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4Ryti7SK2uY"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WH_33zEENNw"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tMfMzG96ot8"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>

  </main>
</template>
