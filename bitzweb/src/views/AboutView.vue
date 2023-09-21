<template>
  <h1>Our Clients</h1>
  <div class="card" v-for="partners in PartnersData" :key="partners.id">
    <div class="row">
      <div class="col-md-4">
        <a href="{{partners.Link}}" target="_blank" rel="noopener noreferrer">
          <img :src="partners.logo" alt="" />
        </a>
      </div>
      <div class="col-md-8">
        <h3>{{ partners.title }}</h3>
        <p>{{ partners.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { PartnersData } from "@/utils/Partners";

export default {
  setup() {
    return {
      PartnersData,
    };
  },
};
</script>
<style>
.partner__container {
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.partner_profile {
  background: white;
  border-radius: 50px;
  padding: 1.5em 1.75em;
  margin: 2 em auto;
  max-width: 330px;
  box-shadow: 0px 3px 136px 0px rgba(88, 87, 119, 0.21);
}
</style>
