<template>
  <div class="footer-container">
    <div class="footer-row">
      <div class="footer-partners">
        <h3>Our Partners</h3>
        <partner-card></partner-card>
      </div>
    </div>
    <div class="footer-row">
      <div class="footer-content">

        <h5>About Bitz</h5>
        <img src="img/brand/logo-whitxe.png" class="marginbot15" alt="">
        <p>
          Based in Nairobi Kenya and Hargeisa Somaliland, we provide call center infrastructure services and custom
          software development services for our clients around the world.
        </p>
        <div class="social-icons">

          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-google"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>

        </div>



      </div>
      <div class="footer-content">

        <h5>Quick Links</h5>
        <ul class="list-icons link-list">
          <li><i class="fa fa-angle-double-right"></i> <a href="company/">Company</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="services/">Services</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="products-services">Product &amp; Solutions</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="#">Help center</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="contacts/">Contact Us</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="#">Privacy Policy</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="#">Site map</a></li>
        </ul>

      </div>
      <div class="footer-content">
        <h5>Developer Resources</h5>
        <ul class="list-icons link-list">
          <li><i class="fa fa-angle-double-right"></i> <a href="company/">Documentaion</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="services/">Integretion</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="products-services">Product &amp; Solutions</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="#">Help center</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="contacts/">Contact Us</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="#">Privacy Policy</a></li>
          <li><i class="fa fa-angle-double-right"></i> <a href="#">Site map</a></li>
        </ul>
      </div>

      <div class="footer-content">
        <h3>Subscribe to our newsletter</h3>
        <form @submit.prevent="handleSubmit">
          <input type="email" placeholder="Enter your email">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-row">{{ footerText }}</div>
  </div>
</template>

<script>
import PartnerCard from "@/views/PartnerCard.vue";
import { socialMediaLinks } from "@/utils/ContactData.js";

export default {
  components: {
    PartnerCard,
  },
  data() {
    return {
      socialMediaLinks,
    };
  },
  setup() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const footerText = `© ${year} BITZ IT Consulting. All rights reserved.`;

    return {
      footerText,


    }
  }
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
