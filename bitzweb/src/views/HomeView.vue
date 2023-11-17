<template>
  <div class="benefits-section">
    <h2>Our Project Highlights</h2>
    <ul>
      <li class="home" v-for="product in productsData" :key="product.title">
        <div class="col">
          <img :src="product.imageUrl" alt="" />
        </div>
        <div class="col caption">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </li>
    </ul>
  </div>

  <div class="solutions-section">
    <h3>Our Solutions</h3>
    <ul>
      <li class="home" v-for="solution in SolutionsData" :key="solution.title">
        
          <img :src="solution.imageUrl" alt="" />
        

          <h3>{{ solution.title }}</h3>
          <p>{{ solution.description }}</p>

      </li>
    </ul>
  </div>
</template>

<script>
import { SolutionsData } from "@/utils/SolutionsData";
import { productsData } from "@/utils/ProductData";

export default {
  setup() {
    return {
      SolutionsData,
      productsData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
