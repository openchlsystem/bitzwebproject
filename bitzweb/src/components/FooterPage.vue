<template>

        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                 
                    <h3>Our Partners</h3>
                    <partner-card></partner-card>
                    </div>
                    </div>
                    
                
                <div class="footer-section">
                    <h3>Connect with Us</h3>
                    <div class="social-media-links">
                        <a v-for="(link, index) in socialMediaLinks" :key="index" :href="link.url" target="_blank"
                            rel="noopener noreferrer">
                            <i :class="link.iconClass"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: {{ contactEmail }}</p>
                    <p>Phone: {{ contactPhone }}</p>
                    <!-- Add more contact details as needed -->
                </div>
            </div>
      

</template>

<script>
import PartnerCard from '@/views/PartnerCard.vue'; // Assuming you have a PartnerCard component

export default {
    components: {
        PartnerCard,
    },
    data() {
        return {
          
            // Add more contact details as needed
        };
    },
};
</script>

<style scoped>

</style>
