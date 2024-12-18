<template>
  <div class="partner-section">
    <div class="partners-card" v-for="(partner, index) in PartnersData" :key="index" :href="partner.Link" target="_blank"
      rel="noopener noreferrer">


      <img :src="partner.logo" :alt="partner.title" />

    </div>
  </div>

  <!-- <div class="profile row">
        <div class="col-4">
        <img :src="partner.logo" :alt="partner.title" />
        </div>
        </div>
        <div class="col-8">
        <p>{{ partner.title }}</p>
        </div> -->
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
  },
};
</script>

<style scoped>
/* Add your partner card styles here */
/* #partners {
    -webkit-animation: linear-infinite;
    animation: linear-infinite;
    animation-direction: right linear-infinite;
    animation-duration: 18s;
    animation-delay: 2s;
    animation-name: run;
} */

@keyframes run {
  0% {
    left: 0;
  }

  50% {
    left: 100%;
  }

  100% {
    left: 0;
  }
}

.profile {
  max-width: 100px;
  height: auto;
  margin: 0 auto;
}
</style>
