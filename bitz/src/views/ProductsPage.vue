<template v-show="">
  <div v-show="selectedProductID > 0">
    <div class="product-features">
      <h3>Product Features</h3>
      <ul v-for="solution in productFeatures" :key="solution.Feature" >
        <li v-if="solution.Product_id == selectedProductID">
          <div class="row">
            <div class="col">
              <img :src="solution.imageUrl" alt="" />
            </div>
            <div class="caption">
              <h3>{{ solution.Feature }}</h3>
              <p>{{ solution.Description }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <ContactViewVue />
</template>

<script>
import { productFeatures } from "@/utils/ProductData";
import { productsData } from "@/utils/ProductData";
import { ref, computed } from "vue";
import ContactViewVue from "./ContactView.vue";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  components: {
    ContactViewVue,
  },
  setup(props) {
    const selectedProductID = ref("");

    return {
      productsData,
      productFeatures,
      // selectedProductFeatures,
      selectedProductID: computed(() => {
        return props.id;
      }),
      selectedProductFeatures: computed(() => {
        let selectProduct = [];
        for (let i = 0; i < productFeatures.length - 1; i++) {
          let productfeature = productFeatures[i];

          console.log(Number(productfeature.Product_id));
        }

        selectProduct.push(
          productFeatures.find(
            (productfeatures) =>
              productfeatures.Product_id === selectedProductID.value
          )
        );

        console.log(selectProduct);
        return selectProduct.value;
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
