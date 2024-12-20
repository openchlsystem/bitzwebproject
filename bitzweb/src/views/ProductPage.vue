<template>
  <div class="product-list">
    <h1>Product List</h1>
    <div v-for="product in products" :key="product.id" class="product">
      <div class="product-header">
        <h2>{{ product.menu_name }}</h2>
        <p>{{ product.menu_description }}</p>
        <img :src="product.imageUrl" :alt="product.menu_name" class="product-image" />
      </div>
      <div class="product-body">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <h4>Features:</h4>
        <div v-for="feature in product.features" :key="feature.Feature" class="feature">
          <h5>{{ feature.Module }}</h5>
          <p><strong>{{ feature.Feature }}:</strong> {{ feature.Description }}</p>
          <img :src="feature.imageUrl" :alt="feature.Feature" class="feature-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Import your products data here
  import { productsData } from "@/utils/ProductData";

  export default {
    name: "ProductList",
    data() {
      return {
        products: productsData,
      };
    },
  };
</script>

<style scoped>
  .product-list {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .product {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .product-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .product-image {
    width: 100px;
    height: auto;
    margin-left: 20px;
    border-radius: 5px;
  }

  .product-body h4 {
    margin-top: 15px;
    font-size: 18px;
  }

  .feature {
    border-top: 1px solid #eee;
    padding: 10px 0;
  }

  .feature-image {
    width: 80px;
    height: auto;
    margin-top: 10px;
    border-radius: 5px;
  }
</style>
