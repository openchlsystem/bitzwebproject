<template>
  <nav class="navbar">
    <div class="logo">

      <a href="/"><img src="@/assets/logo.png" alt="Logo"></a>
    </div>
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





      <!--- </div>
    <div class="dropdown">
     <router-link to="/solutions">Solutions</router-link>
      <div class="dropdown-content">
        <router-link to="/solutions/item1">Item 1</router-link>
        <router-link to="/solutions/item2">Item 2</router-link>
        <router-link to="/solutions/item3">Item 3</router-link>
      </div>-->
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

<script>
import { SolutionsData } from '@/utils/SolutionsData';
import { productsData } from '@/utils/ProductData';

export default {
  setup() {
    return { SolutionsData, productsData };
  },

}
</script>

<style lang="scss" scoped></style>