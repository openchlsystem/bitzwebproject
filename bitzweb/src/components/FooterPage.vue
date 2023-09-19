<template>
  <div class="footer-container ">
    <div class="footer-row">
      <div class="footer-partners">

        <h3>Our Partners</h3>
        <partner-card></partner-card>

      </div>
    </div>
    <div class="footer-row">

      <div class="footer-content">
        <h3>About US</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="social-media">
         <a class="footer-icon" href="#" ><font-awesome-icon :icon="['fab', 'facebook']" /></a>
          <a class="footer-icon" href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a class="footer-icon" href="#"> <font-awesome-icon :icon="['fab', 'twitter']" /></a> 

        </div>



      </div>
      <div class="footer-content">
        <h3>Quick Links</h3>
        <a href="a">Home</a>
        <a href="a">About</a>
        <a href="a">Contact</a>


      </div>
      <div class="footer-content">
        <h3>Support</h3>

      </div>
    </div>
    <div class="footer-row">

      @copyright{{new Date().getFullYear()}} 

    </div>


  </div>
</template>
   

<script>
import PartnerCard from '@/views/PartnerCard.vue';
import { socialMediaLinks } from '@/utils/ContactData.js';



export default {
  components: {
    PartnerCard,


  },
  data() {
    return {
      socialMediaLinks,
    };
  },
};
</script>
  
<style scoped>
.icon {
  font-size: 24px;
  /* Adjust the size as needed */
}

.icon:hover {
  color: inherit;
  /** Add styles for spacing and other styling as needed */
}
</style>
  