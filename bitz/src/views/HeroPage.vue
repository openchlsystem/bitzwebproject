<template>
    <div class="hero">
        <div class="description">

            <h1>{{ content.title }}</h1>

            <p>{{ content.description }}</p>

            <button class="left-aligned-button" @click="$router.push('/contactus')">{{ content.ctaText }}</button>

        </div>

        <div class="image-container">

            <img :src="content.imageUrl" alt="Hero Image" />

        </div>


        <!-- <img src="https://picsum.photos/200/300" alt="Example Image" /> -->

    </div>
</template>

<script>
    import { reactive } from 'vue'
    // import axios from '@/utils/axios/axios.js';


    export default {
        // props: {
        //     content: Object,
        // },



        setup() {

            const imageUrl = require("@/assets/stock/africa_children.jpeg");
            const content = reactive({
                title: "Revolutionizing Child Protection with Smart Case Management",
                description: "OpenCHS equips child protection agencies with a powerful, all-in-one platform to manage cases more efficiently. From real-time reporting and automated workflows to multi-channel support, empower your teams to track, respond, and resolve cases faster. Strengthen collaboration, ensure compliance, and provide vulnerable children with the care they need, when they need it most.",
                ctaText: "Explore Our Solutions",
                imageUrl, // Ensure you assign the appropriate image URL here
            });





            // const content = ref([])

            // const getContent = async () => {
            //     try {
            //         const response = await axios.get("/homeview/");
            //         content.value = response.data;
            //     }
            //     catch (error) {
            //         console.error(error);
            //     }
            // }
            return {
                content,

                // getContent,



            }
        }
    };
</script>

<style scoped>
    .hero {
        /* Styles for the hero section */
    }
</style>
