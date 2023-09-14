<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Our Partners</h3>
                    <div class="partner-cards">
                        <partner-card v-for="(partner, index) in partners" :key="index" :partner="partner"></partner-card>
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
        </div>
    </footer>
</template>

<script>
import PartnerCard from '@/views/PartnerCard.vue'; // Assuming you have a PartnerCard component

export default {
    components: {
        PartnerCard,
    },
    data() {
        return {
            partners: [
                { name: 'Partner 1', logo: 'partner1.png' },
                { name: 'Partner 2', logo: 'partner2.png' },
                // Add more partners as needed
            ],
            socialMediaLinks: [
                { url: 'https://example.com/facebook', iconClass: 'fab fa-facebook' },
                { url: 'https://example.com/twitter', iconClass: 'fab fa-twitter' },
                // Add more social media links as needed
            ],
            contactEmail: 'info@example.com',
            contactPhone: '+1234567890',
            // Add more contact details as needed
        };
    },
};
</script>

<style scoped>

</style>
