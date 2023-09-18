<template>
     <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Our Partners</h3>
          <partner-card></partner-card>
        </div>
      </div>
      <div class="container footer-bottom">
        <div class="row">
    <div class="col-md-6 mr-md-4"> 
        <h3>Connect with Us</h3>
        <font-awesome-icon class="custom-icons" :icon="['fab','facebook']"/>
        <font-awesome-icon :icon="['fab','instagram']"/>
        <font-awesome-icon :icon="['fab','twitter']"/> 
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
        
    </div>
    
    <div class="col-md-6"> 
        <h3>Contact Us</h3>
        <p> Trio Center, Near Garden city</p>
        <p>www.bitz-itc.com </p>

        <!-- Add your contact information here -->
    </div>
</div>
       
     
                </div>
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                        © 2020 Copyright:
                <a class="text-white" href="#">Bitzweb.</a>
  

    <!-- Add more contact details as needed -->
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
  font-size: 24px; /* Adjust the size as needed */
}

.icon:hover {
  color: inherit; /** Add styles for spacing and other styling as needed */
}

  </style>
  