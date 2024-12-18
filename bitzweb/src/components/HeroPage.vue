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
        <img :src="imageUrl" alt="" v-if="$route.path != '/contact'" />
        <ContactView v-if="$route.path === '/contact'" />
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import ContactView from "@/views/ContactView.vue";

export default {
  name: "HeroPage",

  components: {
    ContactView,
  },

  setup() {
    const route = useRoute();
    const title = ref("");
    const description = ref("");
    const buttonText = ref("");
    const imageUrl = ref("");
    const attribution = ref("");
    const showContact = ref(false);

    // Access the path of the current route
    console.log(route.matched.path);

    const updateShowContact = () => {
      showContact.value = true;
    };

    watch(() => {
      console.log("Current Path:", route.path);

      const routesData = {
        "/": {
          title: "CUSTOM SOFTWARE TO REACH YOUR VISION",
          description: "Build custom software solutions for your business. We offer a variety of custom software solutions for businesses of all sizes.",
          buttonText: "Free Consultation",
          imageUrl: require("../assets/images/Giphy/BITZ_IT-Header.gif"),
          attribution: "",
        },
        "/openchs": {
          title: "116 Child Helpline Partner",
          description: "Our Child Helping System: A comprehensive solution with a strong focus on Telephony Integration (including the 116 hotline), Social Media, and SMS Integration for accessible support channels. Backed by efficient Case Management and Reporting capabilities, our system offers personalized care and detailed reporting to make a positive impact on children's lives.",
          buttonText: "Learn About OPENCHS",
          imageUrl: require("../assets/images/stock/home.jpg"),
          attribution: "",
        },
        "/developers": {
          title: "Developer Resources",
          description: "Join the community of developers and get access to our developer resources.",
          buttonText: "Open Source Community",
          imageUrl: require("../assets/images/svg/developers.png"),
          attribution: "",
        },
        "/pricing": {
          title: "Pricing",
          description: "Our commitment is to ensure that our exceptional products not only meet the highest standards of quality but also remain accessible to everyone. At Bitz IT Consulting Ltd, we firmly believe in offering pocket-friendly prices without compromising on excellence. We strive to empower our customers with affordability, making the joy of owning our top-notch products a reality for all.",
          buttonText: " Click Here for Pricing",
          imageUrl: require("../assets/images/stock/pricing.png"),
          attribution: "",
        },
        "/about": {
          title: "About Us",
          description: "Bitz IT Consulting Ltd was founded in 2007 in Nairobi Kenya and has since expanded by setting up an office in Hargeisa Somaliland and Kampala ,Uganda that serves the Eastern Africa region.",
          buttonText: "What we do",
          imageUrl: require("../assets/images/stock/About.jpg"),
          attribution: "",
        },
        "/contact": {
          title: "Contact Us",
          description: "info@bitz-itc.com",
          buttonText: "Contact Us",
          imageUrl: require("../assets/images/svg/support.png"),
          attribution: "",
        },
        "/demo": {
          title: "Request for A Demo",
          description: "Welcome to our demo page! Request for a demo to witness our company's innovation and excellence. Immerse yourself in cutting-edge solutions that revolutionize industries, offering intuitive user interfaces, seamless integrations, and unparalleled functionalities. Experience the potential of our solutions and envision how they can transform your Organization landscape.",
          buttonText: "Click Here to Request for Demo",
          imageUrl: require("../assets/images/stock/DemoImage1.jpg"),
          attribution: "",
        },
        "/products": {
          title: "Custom Web Products for Your Business",
          description: "We offer a wide range of web products that are designed to meet the specific needs of businesses of all sizes.",
          buttonText: "Learn More ",
          imageUrl: require("../assets/images/stock/8354902_3847762.jpeg"),
          attribution: "",
        },
        "/products/1": {
          title: "OpenCHS THE CHILD HELPLINE SYSTEM.",
          description: "Safe, Reliable, and Affordable Child Helpline System. We power East Africa's 116",
          buttonText: "Join Our Open Source Comunity",
          imageUrl: require("../assets/images/stock/SaccoAvailability.jpg"),
          attribution: "",
        },
        "/products/2": {
          title: " Case Management for Law Firms",
          description: "Our Legal Case Management Solution is a comprehensive and intuitive platform designed to revolutionize the way law firms and legal departments handle cases. From case inception to resolution, our solution streamlines every aspect of the legal process, enhancing efficiency, collaboration, and success.",
          buttonText: "Get a Quote ",
          imageUrl: require("../assets/images/svg/Legal.png"),
          attribution: "",
        },
        "/products/3": {
          title: "Sacco Contact Center & CRM",
          description: "Sacco Contact .",
          buttonText: "Get a Quote ",
          imageUrl: require("../assets/images/stock/SaccoCaseManagement.jpg"),
          attribution: "",
        },
        "/crmfeatures": {
          title: "Sacco CRM Made Simple: Connect, Streamline, Grow.",
          description: "Simplify your Saccos operations with our easy - to - use CRM.It helps you connect better with members, streamline your tasks, and boost your growth effortlessly.Enjoy smoother Sacco management with us.",
          buttonText: "Request for Demo ",
          imageUrl: require("../assets/images/stock/7140739_3515462.jpeg"),
          attribution: "",
        },
        "/careers": {
          title: "Join Our Dynamic Team: Your Career, Your Potential, Your Future.",
          description: "Welcome to our career page, where we invite you to join our dynamic team. Here, we recognize that your career is not just a job—its an opportunity to unlock your full potential and shape your future.We are looking for talented individuals who are ready to bring their unique skills, passion, and creativity to our team. With us, you will find a supportive environment, exciting challenges, and the chance to make a real impact.Join us and be part of a team that is dedicated to your success and growth.",
          buttonText: "Apply Now",
          imageUrl: require("../assets/images/stock/developer1.svg"),
          attribution: "",
        },
      };

      if (routesData[route.path]) {
        title.value = routesData[route.path].title;
        description.value = routesData[route.path].description;
        buttonText.value = routesData[route.path].buttonText;
        imageUrl.value = routesData[route.path].imageUrl;
        attribution.value = routesData[route.path].attribution;
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

      showContact,
      updateShowContact,

    };
  },
  methods: {
    navigateRoute: function () {
      //const careerSection =
      if (this.$route.path === "/developers") {
        this.$router.push("/careers");
      }
      if (this.$route.path === '/contact') {
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
