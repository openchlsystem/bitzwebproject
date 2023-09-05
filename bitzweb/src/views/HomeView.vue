<template>
  <div class="Hero-section">

    <div class="row">
      <div class="column">

        <h3>OpenCHS: Child Helpline - Your Trusted Support </h3>
        <h2>Providing Help, Hope, and Safety for Children in Need.</h2>
        <p>Welcome to the Child Helpline, a dedicated platform committed to the well-being and protection of children. Our
          mission is to offer immediate support and assistance to children facing difficult situations.</p>

<<<<<<< HEAD
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
=======
>>>>>>> fe1a0ef29436407643e4946059a44a036f9c1962
      </div>

    </div>
    <div class="c2a">
      <button>Get Started</button>

    </div>
    

    <h3>Our Solutions</h3>
    <div class="solutions">

      <ul>
        <li v-for="solution in SolutionsData" :key="solution.id">

          <h4>{{ solution.title }}</h4>
          <p>{{ solution.description }}</p>
        
        </li>
      </ul>

    </div>

<<<<<<< HEAD
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
=======


>>>>>>> fe1a0ef29436407643e4946059a44a036f9c1962
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import {SolutionsData} from "@/utils/SolutionsData";

export default {
  setup() {


    return {
      SolutionsData
    }
  }
}
</script>

<style lang="scss" scoped></style>
>>>>>>> fe1a0ef29436407643e4946059a44a036f9c1962
