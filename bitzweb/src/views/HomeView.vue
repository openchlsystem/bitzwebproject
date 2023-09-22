<template>
  <h3>Our Solutions</h3>

  <div class="benefits-section">
    <ul>
      <li class="home" v-for="solution in SolutionsData" :key="solution.title">
        <div class="row">
          <div class="col">
            <img :src="solution.imageUrl" alt="" />
          </div>
          <div>
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { SolutionsData } from "@/utils/SolutionsData";

export default {
  setup() {
    return {
      SolutionsData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
