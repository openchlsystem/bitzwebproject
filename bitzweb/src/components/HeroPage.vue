<template>
  <div class="feature-hero-section">
    <div class="row">
      <div class="col">
        
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button v-if="buttonText" @click="navigateRoute">
          {{ buttonText }}
        </button>
      </div>
      <div class="col" style="text-align: center">
        <img :src="imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";

export default {
  name: "HeroPage",

  setup() {
    const route = useRoute();
    const title = ref("");
    const description = ref("");
    const buttonText = ref("");
    const imageUrl = ref("");
    const attribution = ref("");

    // Access the path of the current route
    console.log(route.matched.path);

    watch(() => {
      console.log("Current Path:", route.path);

      if (route.path === "/") {
        (title.value = "CUSTOM SOFTWARE TO REACH YOUR VISION"),
          (description.value =
            "Build custom software solutions for your business. We offer a variety of custom software solutions for businesses of all sizes."),
          (buttonText.value = "Free Consultation"),
          (imageUrl.value = require("../assets/images/Giphy/BITZ_IT-Header.gif")),
          (attribution.value = "");
      }
      if (route.path === "/openchs") {
        (title.value = "116 Child Helpline Partner"),
          (description.value =
            "Our Child Helping System: A comprehensive solution with a strong focus on Telephony Integration (including the 116 hotline), Social Media, and SMS Integration for accessible support channels. Backed by efficient Case Management and Reporting capabilities, our system offers personalized care and detailed reporting to make a positive impact on children's lives."),
          (buttonText.value = "Learn About OPENCHS"),
          (imageUrl.value = require("../assets/images/stock/home.jpg")),
          (attribution.value = "");
      }
      if (route.path === "/developers") {
        (title.value = "Developer Resources"),
          (description.value =
            "Join the community of developers and get access to our developer resources."),
          (buttonText.value = "Open Source Community"),
          (imageUrl.value = require("../assets/images/svg/developers.png")),
          (attribution.value = "");
      }
      if (route.path === "/pricing") {
        (title.value = "Pricing"),
          (description.value = "Our commitment is to ensure that our exceptional products not only meet the highest standards of quality but also remain accessible to everyone. At Bitz IT Consulting Ltd, we firmly believe in offering pocket-friendly prices without compromising on excellence. We strive to empower our customers with affordability, making the joy of owning our top-notch products a reality for all."),
          (buttonText.value = " Click Here for Pricing"),
          (imageUrl.value = require("../assets/images/stock/pricing.png")),
          (attribution.value = "");
      }

      if (route.path === "/about") {
        (title.value = "About Us"),
          (description.value =
            "Bitz IT Consulting Ltd was founded in 2007 in Nairobi Kenya and has since expanded by setting up an office in Hargeisa Somaliland and Kampala ,Uganda that serves the Eastern Africa region."),
          (buttonText.value = "What we do"),
          (imageUrl.value = require("../assets/images/stock/About.jpg")),
          (attribution.value = "");
      }
      if (route.path === "/contact") {
        (title.value = "Contact Us"), (description.value = "info@bitz-itc.com"),
        (buttonText.value = "Contact Us"),
        (imageUrl.value = require("../assets/images/svg/support.png"));
      }
      if (route.path === "/demo") {
        (title.value = "Request for A Demo"), (description.value = "Welcome to our demo page! Request for a demo to witness our company's innovation and excellence. Immerse yourself in cutting-edge solutions that revolutionize industries, offering intuitive user interfaces, seamless integrations, and unparalleled functionalities. Experience the potential of our solutions and envision how they can transform your Organization landscape."), (buttonText.value = "Click Here to Request for Demo"), (imageUrl.value = require("../assets/images/stock/DemoImage1.jpg"));
      }

      if (route.path === "/products") {
        (title.value =
          "Custom Web Products for Your Business"),
          (description.value =
            "We offer a wide range of web products that are designed to meet the specific needs of businesses of all sizes.");
        (buttonText.value = "Learn More "),
          (imageUrl.value = require("../assets/images/stock/8354902_3847762.jpeg"));
      }
      if (route.path === "/products/1") {
        (title.value = "OpenCHS THE CHILD HELPLINE SYSTEM."),
          (description.value =
            "Safe, Reliable, and Affordable Child Helpline System. We power East Africa's 116");
        (buttonText.value = "Join Our Open Source Comunity"),
          (imageUrl.value = require("../assets/images/stock/SaccoAvailability.jpg"));
      }
      if (route.path === "/products/2") {
        (title.value = " Case Management for Law Firms"),
          (description.value =
            "Our Legal Case Management Solution is a comprehensive and intuitive platform designed to revolutionize the way law firms and legal departments handle cases. From case inception to resolution, our solution streamlines every aspect of the legal process, enhancing efficiency, collaboration, and success.");
        (buttonText.value = "Get a Quote "),
          (imageUrl.value = require("../assets/images/svg/Legal.png"));
      }
      if (route.path === "/products/3") {
        (title.value = "Case Management for Saccos"),
          (description.value =
            "Manage cases efficiently and effectively with our Sacco Case Management Solution.");

        (buttonText.value = "Get a Quote "),
          (imageUrl.value = require("../assets/images/stock/SaccoCaseManagement.jpg"));
      }

      if (route.path === "/crmfeatures") {
        (title.value = "Sacco CRM Made Simple: Connect, Streamline, Grow."),
          (description.value =
            "Simplify your Saccos operations with our easy - to - use CRM.It helps you connect better with members, streamline your tasks, and boost your growth effortlessly.Enjoy smoother Sacco management with us.");
        (buttonText.value = "Request for Demo "),
          (imageUrl.value = require("../assets/images/stock/7140739_3515462.jpeg"));
      }
  

  



   
      if (route.path === "/careers") {
        (title.value =
          "Join Our Dynamic Team: Your Career, Your Potential, Your Future."),
          (description.value =
            "Welcome to our career page, where we invite you to join our dynamic team. Here, we recognize that your career is not just a job—its an opportunity to unlock your full potential and shape your future.We are looking for talented individuals who are ready to bring their unique skills, passion, and creativity to our team. With us, you will find a supportive environment, exciting challenges, and the chance to make a real impact.Join us and be part of a team that is dedicated to your success and growth."),
          (buttonText.value = "Apply Now"),
          (imageUrl.value = require("../assets/images/stock/developer1.svg"));
      }
    });

    onMounted(() => {
      console.log(route.path);
      if (route.path === "/services") {
        (title.value = "Our Services"), (description.value = "Our Services");
      }
      if (route.path === "/about") {
        (title.value = "About Us"), (description.value = "About Us");
      }
      if (route.path === "/contact") {
        (title.value = "Contact Us"), (description.value = "Contact Us");
      }
      if (route.path === "/softwareportfolio") {
        (title.value = "Software Portfolio"),
          (description.value = "Software Portfolio");
      }
    });
    return {
      title,
      description,
      buttonText,
      imageUrl,
    
    };
  },
  methods: {
    navigateRoute: function () {
      //const careerSection =
      if (this.$route.path === "/developers") {
        this.$router.push("/careers");
      }
      if (this.$route.path==='/contact'){
        this.$router.push("/contact");
      }
      if (this.$route.path === "/") {
        this.$router.push("/products/1");
      }
      if (this.$route.path === "/careers") {
        document
          .getElementById("careersview")
          .scrollIntoView({ behavior: "smooth", block: "end" });
      }
      if (this.$route.path === "/developers") {
        document
          .getElementById("development")
          .scrollIntoView({ behavior: "smooth", block: "end" });
        
      }
      if (this.$route.path === "/demo") {
        document
          .getElementById("demo")
          .scrollIntoView({ behavior: "smooth", block: "end" });
        
      }

      if (this.$route.path === "/products") {
        this.$router.push("/pricing")

        
      }

      if (this.$route.path === "/products/1") {
        this.$router.push("/pricing")

        
      }
      if (this.$route.path === "/products/2") {
        this.$router.push("/pricing")
        
      }
      if (this.$route.path === "/products/3") {
        this.$router.push("/pricing")
        
      }
      if (this.$route.path === "/pricing") {
        document
          .getElementById("pricing_content")
          .scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
