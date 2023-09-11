<template>
    <h3>Our Solutions{{ selectedProductID }}</h3>
    {{ selectedProductFeatures }}
    {{ productFeatures }}

    <div class="benefits-section">




        <ul>

            <li  v-for="solution in selectedProductFeatures" :key="solution.title">

                <div class="row">
                    <div class="col">
                        <img :src="solution.imageUrl" alt="">


                    </div>
                    <div>
                        <h3>{{ solution.Feature }}</h3>
                        <p>{{ solution.Description }}</p>
                    </div>

                </div>



            </li>
        </ul>
    </div>
</template>

<script>
import { productFeatures}  from "@/utils/ProductData";
import  {ProductData} from "@/utils/ProductData";
import { ref, computed } from "vue";


export default {
    

    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {

        const selectedProductID = ref('');


      


        return {
            ProductData,
            productFeatures,
            // selectedProductFeatures,
            selectedProductID: computed(() => {
              return props.id;
            }),
            selectedProductFeatures: computed(() => {

                let selectProduct = []
                for (let i = 0; i < productFeatures.length; i++) {

                     
                    

                    let productfeature = productFeatures[i]
                    
                    console.log(Number(productfeature.Product_id))
                    
                }
                    
                
                selectProduct.push(productFeatures.find((productfeatures)=> productfeatures.Product_id === selectedProductID.value));
              
              console.log(selectProduct);
              return selectProduct.value;
            }),

        }
    }
}
</script>

<style lang="scss" scoped></style>
