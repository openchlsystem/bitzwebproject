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
        (title.value = "OPENCHS - Your Trusted Child Helpline Partner"),
          (description.value =
            "We are dedicated to safeguarding children's well-being and providing a reliable helpline system for organizations and governments worldwide. Our technology-driven solutions ensure that children's voices are heard, and assistance is readily available when they need it most."),
          (buttonText.value = "Learn About OPENCHS"),
          (imageUrl.value = require("../assets/images/stock/Openchs.jpg")),
          (attribution.value = "");
      }
      if (route.path === "/developers") {
        (title.value = "Developers"),
          (description.value =
            "Developers in our  organization are professionals who play a critical role in designing, creating, and maintaining software applications and systems that drive the organization's digital presence and operations."),
          (buttonText.value = "Join Our Team"),
          (imageUrl.value = require("../assets/images/stock/Developers.jpg")),
          (attribution.value = "");
      }
      if (route.path === "/prices") {
        (title.value = "Pricing"),
          (description.value = "Pricing"),
          (buttonText.value = "Pricing"),
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
        (title.value = "Contact Us"), (description.value = "Contact Us");
      }

      if (route.path === "/products") {
        (title.value =
          "Empower Your Customer Engagement with Our Custom Web Product: ."),
          (description.value =
            "Manage your website content easily, Seamlessly Integrated with Core Banking and CRM.");
        (buttonText.value = "Request for Demo "),
          (imageUrl.value = require("../assets/images/stock/8354902_3847762.jpeg"));
      }
      if (route.path === "/products/1") {
        (title.value = "OpenCHS."),
          (description.value =
            "At our software company, we specialize in delivering bespoke software solutions designed to perfectly align with your unique requirements. Our dedicated team of experts works closely with you to understand your needs, ensuring that every aspect of the software we create is tailored to help your business thrive. With us, your vision becomes reality.");
        (buttonText.value = "Get a Quote "),
          (imageUrl.value = require("../assets/images/stock/SaccoAvailability.jpg"));
      }
      if (route.path === "/products/2") {
        (title.value = " Legal Case Management"),
          (description.value =
            "Our Legal Case Management Solution is a comprehensive and intuitive platform designed to revolutionize the way law firms and legal departments handle cases. From case inception to resolution, our solution streamlines every aspect of the legal process, enhancing efficiency, collaboration, and success.");
        (buttonText.value = "Get a Quote "),
          (imageUrl.value = require("../assets/images/stock/LegalCaseManagement.jpg"));
      }
      if (route.path === "/products/3") {
        (title.value = " Sacco  Management"),
          (description.value =
            "Our Sacco Management Solution is a comprehensive and modernized platform designed to revolutionize how Savings and Credit Cooperative Organizations (SACCOs) operate and serve their members. With a focus on empowering communities and enhancing financial prosperity, our solution provides SACCOs with the tools they need to efficiently manage operations, support member growth, and secure a brighter financial future for all.");

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
      if (route.path === "/softwareportfolio") {
        (title.value = "Core Banking System for SACCOS and Microfinance."),
          (description.value =
            "Efficiently Manage Operations, Elevate Member Services, and Drive Growth with Ease.");
        (buttonText.value = "Request for Demo "),
          (imageUrl.value = require("../assets/images/stock/35262247_8292064.jpeg"));
      }

      if (route.path === "/uiservices") {
        (title.value =
          "Crafting Seamless Customer Journeys: Elevating User Experiences through Tailored UI/UX Services."),
          (description.value =
            "At our UI/UX design studio, we are passionate about shaping exceptional user experiences that enhance the entire customer journey.Our tailored UI / UX services ensure your digital interfaces not only look stunning but also function intuitively, resulting in a seamless and delightful user journey from start to finish.Let us transform your design vision into a user - centric reality.");
        (buttonText.value = "Free Consultation "),
          (imageUrl.value = "https://picsum.photos/500/500");
      }

      if (route.path === "/niche") {
        (title.value =
          "Modern-Day Agile Project Management: Ideation to Execution with Our Expert Scrum Team."),
          (description.value =
            " With our expert Scrum team by your side, we will transform your ideas into reality, from ideation to execution.We specialize in dynamic and efficient project management, ensuring your software projects not only keep pace with todays demands but also thrive in a rapidly evolving landscape.");
        (buttonText.value = "Request for Demo "),
          (imageUrl.value = "https://picsum.photos/500/500");
      }

      if (route.path === "/digital") {
        (title.value =
          "Professional Digital Strategy: Automate, Raise Awareness, Engage, and Convert for Ultimate Success!"),
          (description.value =
            "At our professional digital marketing service, we specialize in crafting and executing digital strategies that drive results. Our expert team leverages automation to maximize efficiency and streamline your marketing efforts. We focus on raising brand awareness, engaging your target audience, and ultimately converting leads into loyal customers. Join us on a journey that redefines digital marketing and elevates your online presence to new heights.");
        (buttonText.value = "Free Consultation"),
          (imageUrl.value = require("../assets/images/stock/digital marketing.jpeg"));
      }
      if (route.path === "/webportfolio") {
        (title.value =
          "Elevate Your Online Presence: Craft, Engage, Convert, and Thrive with Our Web Design Mastery!"),
          (description.value =
            "Our expertise lies in crafting visually stunning and user-friendly websites that not only capture attention but also engage and convert visitors effectively. With a professional approach and a focus on digital strategy, we are here to help you automate your online success, raise awareness, and achieve your business goals."),
          (buttonText.value = "Get your Website today"),
          (imageUrl.value = "https://picsum.photos/500/500");
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
      attribution,
    };
  },
  methods: {
    navigateRoute: function () {
      //const careerSection =
      if (this.$route.path === "/developers") {
        this.$router.push("/careers");
      }
      if (this.$route.path === "/") {
        this.$router.push("/products/1");
      }
      if (this.$route.path === "/careers") {
        document
          .getElementById("careersview")
          .scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
