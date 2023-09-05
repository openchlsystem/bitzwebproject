<template>
  <div class="Hero-section">

    <div class="row">
      <div class="column">

        <h3>OpenCHS: Child Helpline - Your Trusted Support </h3>
        <h2>Providing Help, Hope, and Safety for Children in Need.</h2>
        <p>Welcome to the Child Helpline, a dedicated platform committed to the well-being and protection of children. Our
          mission is to offer immediate support and assistance to children facing difficult situations.</p>

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



  </div>
</template>

<script>
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
