<template v-show="">
  <div>
    <h3>Product Features</h3>
    <div class="product-features">

      <div class="left-panel-content">
        <ul>

          <li v-for="product in productsData" :key="product.id" @click="showProductDetails(product)">
            <div class=product-description>
              <div class="left-panel-content">
                <h4>{{ product.menu_name }}</h4>
                <p>{{ product.menu_description }}</p>
                <h5>{{ product.title }}</h5>
                <p>{{ product.description }}</p>
                <ul>
                  <li v-for="module in product.Modules.split(',')" :key="module">{{ module }}</li>
                </ul>

              </div>

              <div class="right-panel">
                <img :src="product.imageUrl" alt="Product Image" />

              </div>






            </div>
          </li>
        </ul>

      </div>
      <div class="right-panel">

        <ul>
          <li v-for="feature in productFeatures" :key="feature.Module">
            <img :src="feature.imageUrl" :alt="feature.Module" />
            <div>
              <h4>{{ feature.Module }}</h4>
              <p>{{ feature.Feature }}</p>
              <p>{{ feature.Description }}</p>
            </div>
          </li>
        </ul>

      </div>

    </div>
  </div>

</template>

<script>
  // import { productFeatures } from "@/utils/ProductData";
  import { productsData } from "@/utils/ProductData";
  import { ref } from "vue";
  // import ContactViewVue from "./ContactView.vue";

  export default {


    components: {
      // ContactViewVue,
    },
    setup() {
      const productFeatures = ref([])
      const showProductDetails = (product) => {
        console.log(product.features);
        productFeatures.value = product.features;
      };

      return {
        productsData,
        productFeatures,
        showProductDetails,

      };
    },
  };
</script>

<style scoped>

  .product-description {
    display: flex;
  }

  .product-features {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    margin: 10px;
    width: 100%;
  }

  .right-panel {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .right-panel ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .right-panel li {
    margin: 20px;
    width: calc(33.33% - 20px);
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .right-panel li:hover {
    transform: scale(1.1);
  }

  .right-panel img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .right-panel div {
    padding: 20px;
  }

  .right-panel h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .right-panel p {
    margin-bottom: 20px;
    color: #666;
  }

  @media (max-width: 768px) {
    .right-panel li {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 480px) {
    .right-panel li {
      width: 100%;
    }
  }

  .left-panel-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .left-panel-content ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .left-panel-content li {
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .left-panel-content li:hover {
    background-color: #f7f7f7;
  }

  .left-panel-content h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .left-panel-content h5 {
    font-weight: bold;
    margin-bottom: 10px;
    color: #666;
  }

  .left-panel-content p {
    margin-bottom: 20px;
    color: #666;
  }

  .left-panel-content img {
    width: 400px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 20px;
  }

  .left-panel-content ul ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .left-panel-content ul ul li {
    margin: 10px;
    padding: 10px;
    background-color: #f7f7f7;
    border-radius: 10px;
    font-size: 14px;
    color: #666;
  }

  .left-panel-content ul ul li:hover {
    background-color: #ddd;
  }
</style>
