<template>
    <div class="solutions">
        <ul>
            <li v-for="benefit in solutions" :key="benefit">
                <div class="description">

                    <div class="card">

                    <h3>{{ benefit.title }}</h3>

                    <p>{{ benefit.description }}</p>

                    <!-- <button >{{ benefit.CTAText }}</button> -->

                    </div>


                </div>

                <div class="image-container">

                    <img :src="benefit.imageUrl" alt="Hero Image" />

                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { Solutions } from '../utils/Solutions.js'

export default {
    props: {
        list: Array,
    },
    setup() {
        const content = reactive({
            title: "Digitize Your Business With DISI GROUP",
            description: "We unlock efficiency and boost business potential with expert document management. Unleash your focus!",
            ctaText: "Learn more",
            imageUrl: 'https://picsum.photos/1600/1600',

        })
        return {
            content,
            solutions: Solutions

        }
    }
};
</script>

<style scoped>
.benefits {
    /* Styles for the benefits section */
}
</style>
