<template>
  <nav class="navbar">
    <div class="logo">

      <a href="/"><img src="@/assets/logo.png" alt="Logo"></a>
    </div>
    <div class="dropdown">
      <router-link to="/">Home</router-link>
    </div>
    <ul class="dropdown">
      <router-link to="/products">Product</router-link>
      <li class="dropdown-content" v-for="solution in SolutionsData" :key="solution.id">
        <h4>{{ solution.title }}</h4>
        <!-- <p>{{ solution.description }}</p> -->
      </li>
    </ul>
    <div class="dropdown">
      <router-link to="/solutions">Solutions</router-link>
      <div class="dropdown-content">
        <router-link to="/solutions/item1">Item 1</router-link>
        <router-link to="/solutions/item2">Item 2</router-link>
        <router-link to="/solutions/item3">Item 3</router-link>
      </div>
    </div>
    <div class="dropdown">
      <router-link to="/developers">Developers</router-link>
    </div>
    <div class="dropdown">
      <router-link to="/pricing">Pricing</router-link>
    </div>
    <div class="dropdown">
      <router-link to="/blog">Blog</router-link>
    </div>
    <div class="dropdown">
      <router-link to="/about">About</router-link>
    </div>

  </nav>
</template>
<router-view></router-view>

<script>
import { SolutionsData } from '@/utils/SolutionsData';

export default {
  setup() {
    return { SolutionsData };
  },

}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");


</style>

