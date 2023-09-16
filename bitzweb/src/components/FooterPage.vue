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
            <div col-md-4>
                <h3> Connect with Us</h3>
                <div col-md-4>
                <font-awesome-icon :icon="['fas','user-secret']"/>
                <font-awesome-icom  :icon="['fab','Twitter']"/>
                </div>
                
                </div>
                <div col-md-4>
       
                </div>



               <div col-md-4>
                <h3>Contact Us</h3>
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
  