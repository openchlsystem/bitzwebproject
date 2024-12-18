<template>
  <div class="benefits-section">
    <h2>Our Projects</h2>
    <ul>
      <li class="home" v-for="product in productsData" :key="product.title">
        <div class="col">
          <img :src="product.imageUrl" alt="" />
        </div>
        <div class="col caption">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <button @click="gotoProduct(product)">Learn More</button>
        </div>
      </li>
    </ul>
  </div>

  <div class="solutions-section">
    <h2>Services</h2>

    <div class="excerpt">

      <p>Our services include Project Management, IT Support, Training, and Quality Assurance to ensure the best
        experience for you.</p>
    </div>
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
  import { useRouter } from "vue-router";
  import { onMounted } from "vue";


  export default {

    setup() {

      const router = useRouter();


      const gotoProduct = (product) => {
        router.push(`/products/${product.id}`);
      }



      onMounted(() => {
        console.log("mounted");
      });
      return {
        SolutionsData,
        productsData,
        gotoProduct,

      };
    },
  };
</script>

<style lang="scss" scoped></style>
