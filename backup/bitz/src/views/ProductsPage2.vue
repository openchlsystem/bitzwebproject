<template>
  <section class="py-16 px-6 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Our Products
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="product in productsData"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { productsData } from "@/utils/ProductData.js";
import ProductCard from "@/views/ProductCard.vue";
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
