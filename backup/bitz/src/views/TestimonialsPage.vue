<template>
    <!-- <div class="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonial-cards">
            <card v-for="testimonial in list" :key="testimonial.name">
                <p class="position">{{ testimonial.position }}</p>
                <p>{{ testimonial.author }}</p>
                <p>{{ testimonial.content }}</p>
                            <p>{{ testimonial.author }}</p>
                <span>- {{ testimonial.name }}, {{ testimonial.company }}</span>
            </card>
        </div>
    </div> -->
    <PartnerCard />
</template>

<script>
    import { testimonialsData } from '@/utils/Testimonials.js'
    import PartnerCard from '@/views/PartnerCard.vue'
    export default {

        components: {
            PartnerCard
        },



        setup() {
            return {
                list: testimonialsData
            }
        },



    };
</script>

<style scoped></style>
