<template>
  <div class="landing-page">



    <div class="section">

      <Hero v-if="heroContent" :content="heroContent" />
    </div>

    <div class="section">

      <Benefits v-if="benefitsList" :list="benefitsList" />
    </div>


    <div class="section">

      <OurAchievements />

    </div>


    <div class="section">

      <Testimonials v-if="testimonialsList" :list="testimonialsList" />
    </div>
    <div class="section">

      <LeadCapture v-if="leadCaptureForm" :buttonText="leadCaptureButtonText" />
    </div>






  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import Hero from '@/views/HeroPage.vue';
  import Benefits from '@/views/BenefitsPage.vue';
  import Testimonials from '@/views/TestimonialsPage.vue';
  import LeadCapture from '@/views/LeadCapturePage.vue';
  // import NavBar from '@/components/NavBar.vue';
  import OurAchievements from './OurAchievements.vue';
  import axiosInstance from '@/utils/axios/axios.js';

  export default {

    components: {
      Hero,
      Benefits,
      Testimonials,
      LeadCapture,
      // NavBar,
      OurAchievements,
    },
    setup() {
      //   const heroContent = ref({
      //     title: "Your Company Name",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      //     ctaText: "Learn more",
      //     imageUrl: require("../assets/images/HeroImage.png"),
      //   });

      const heroContent = ref([]);

      const getHeroContent = async () => {
        try {
          const response = await axiosInstance.get("homeview/");
          heroContent.value = response.data;
        }
        catch (error) {
          console.error(error);
        }
      }
      const benefitsList = ref({
        name: "Benefit 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
        {
          name: "Benefit 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name: "Benefit 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }


      );
      const testimonialsList = ref([{
        name: "Testimonial 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }, {
        name: "Testimonial 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Testimonial 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }, {
        name: "Testimonial 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      ]);
      const leadCaptureForm = ref("Lead Capture");
      const leadCaptureButtonText = ref("Submit");
      const year = ref(new Date().getFullYear());

      const setHeroContent = (content) => {
        heroContent.value = content;
      };

      const setBenefitsList = (list) => {
        benefitsList.value = list;
      };

      const setTestimonialsList = (list) => {
        testimonialsList.value = list;
      };

      const setLeadCaptureForm = (form, buttonText) => {
        leadCaptureForm.value = form;
        leadCaptureButtonText.value = buttonText;
      };

      onMounted(() => {
        getHeroContent();
      });

      return {
        heroContent,
        benefitsList,
        testimonialsList,
        leadCaptureForm,
        leadCaptureButtonText,
        year,
        setHeroContent,
        setBenefitsList,
        setTestimonialsList,
        setLeadCaptureForm,
        getHeroContent,
      };
    },
  };
</script>
