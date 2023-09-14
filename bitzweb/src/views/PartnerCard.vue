<template>
    <div class="partner-card" v-for="(partner, index) in PartnersData" :key="index">
        <img :src="partner.imageUrl" :alt="partner.title" />
        <p>{{ partner.title }}</p>
    </div>
</template>

<script>
import { PartnersData } from "@/utils/Partners";
export default {
    props: {
        partner: {
            type: Object,
            required: true,
        },
    },
    setup() {
        return {
            PartnersData,
        };
        
    }
};
</script>

<style scoped>
/* Add your partner card styles here */
.partner-card {
    text-align: center;
    margin: 10px;
}

.partner-card img {
    max-width: 100px;
    height: auto;
}
</style>
