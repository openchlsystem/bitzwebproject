<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <!-- Slides -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="../assets/callcenter.png"
          alt="Slide 1"
        />
        <div
          class="carousel-caption d-flex flex-column justify-content-center align-items-center"
        >
          <h5 class="animated fadeInDown">" Welcome to BItz-Itc "</h5>
          <p class="animated fadeInUp">We Are The Best Consulting Agency</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="assets/images/bg_2.jpg" alt="Slide 2" />
        <div
          class="carousel-caption d-flex flex-column justify-content-center align-items-center"
        >
          <h5 class="animated fadeInDown">
            Today's Talent, Tomorrow's Success
          </h5>
          <p class="animated fadeInUp">We Help to Grow Your Business</p>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a
      class="carousel-control-prev"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { onMounted } from "vue";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

export default {
  name: "HomeView",
  mounted() {
    onMounted(() => {
      console.log(bootstrap);
    });
  },
};
</script>

<style>
.carousel-item {
  position: relative;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  z-index: 1;
  width: 100%;
}

.carousel-caption h5 {
  font-size: 50px;
  animation-duration: 3s;
  animation-delay: 0.5s;
}

.carousel-caption p {
  font-size: 50px;
  animation-duration: 1s;
  animation-delay: 1s;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.animated {
  opacity: 0;
}

.animated.fadeInDown {
  animation-name: fadeInDown;
}
.animated.fadeInUp {
  animation-name: fadeInUp;
}
</style>
