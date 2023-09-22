<template>
  <div class="menu-section">
    <div class="logo">
      <a href="/"><img src="@/assets/logo.png" alt="Logo" /></a>
    </div>

    <nav class="navbar">

      <div class="dropdown">
        <router-link to="/">Home</router-link>
      </div>

      <div class="dropdown">
        <router-link to="/products">Product</router-link>
        <div class="dropdown-content">
          <ul>
            <li v-for="product in productsData" :key="product.id" @click="this.$router.push(`/products/${product.id}`)">
              <p>{{ product.menu_name }}</p>
              <span>{{ product.menu_description }}</span>
            </li>
          </ul>
        </div>


      </div>
      <div class="dropdown">
        <router-link to="/developers">Developers</router-link>
      </div>
      <div class="dropdown">
        <router-link to="/pricing">Get Quote</router-link>
      </div>
      
      
    </nav>
    <nav>
      <div class="dropdown">
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="dropdwon">
        <router-link to="/about">company</router-link>
      </div>
      <div class="dropdown">
          <router-link to="/blog">Blog</router-link>
        </div>
    </nav>

  </div>
</template>

<script>
import { SolutionsData } from "@/utils/SolutionsData";
import { productsData } from "@/utils/ProductData";

export default {
  setup() {
    return { SolutionsData, productsData };
  },
};
</script>

<style lang="scss" scoped></style>
