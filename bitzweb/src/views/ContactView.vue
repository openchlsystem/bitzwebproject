<template>
  <div class="coming-soon">
    <div class="contact-form">

      <div class="social-media-icons">
        <!-- Bootstrap icons for social media -->
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-twitter"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-linkedin"></i></a>
        <a href="#"><i class="bi bi-chat"></i></a>
        <a href="#" @click="openModal" type="button"><i class="bi bi-whatsapp"></i></a>
      </div>

      <!-- Contact us input form -->
      <form @submit.prevent="sendEmail">
        <label>
          Your Name
          <input type="text" placeholder="Your Names" v-model="name">
        </label>

        <label>
          Your Email
          <input type="email" placeholder="Your Email" v-model="email_from">
        </label>

        <label>
          Subject
          <input type="text" placeholder="Subject" v-model="subject">
        </label>

        <label>
          Your Message
          <textarea placeholder="Your Message" v-model="message"></textarea>
        </label>

        <label>
          Reason for Contacting
          <select v-model="reason_for_contacting">
            <option disabled value="">Please select a reason</option>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Company Name (Optional)
          <input type="text" placeholder="Company Name (Optional)" v-model="company_name">
        </label>

        <label>
          Job Title (Optional)
          <input type="text" placeholder="Job Title (Optional)" v-model="job_title">
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="email-us">
      <p>Or email us at <a href="mailto:info@bitz-itc.com">info@bitz-itc.com</a></p>
    </div>

    <Modal :showModal="showModal" @close="closeModal">
      <template v-slot:header>
        <h5>{{ modalHeader }}</h5>
      </template>
      <template v-slot:content>
        <WhatsappChat />
      </template>
      <template v-slot:footer>
        <button @click="closeModal" class="custom-footer">Custom Close</button>
      </template>
    </Modal>
  </div>
</template>


<script>
// import Modal from '@/components/Modal.vue';
// import WhatsappChat from '@/views/social/WhatsappChat.vue';

import { ref, reactive } from 'vue';


export default {
  name: 'ComingSoon',
  components: {
    // Modal,
    // WhatsappChat,
  },

  setup() {
    const showModal = ref(false);
    const modalHeader = ref('Whatsapp Chat');
    const formData = reactive({

      name: '',
      email_from: '',
      subject: '',
      message: '',
      reason_for_contacting: '',
      company_name: '',
      job_title: '',

    });


    const closeModal = () => {
      showModal.value = false;
    };

    const openModal = () => {
      showModal.value = true;
      console.log('openModal');
    };

    const sendEmail = () => {
      console.log(formData);
    };



    return {

      showModal,
      modalHeader,
      closeModal,
      openModal,
      formData,
      sendEmail,

    }
  }
}
</script>

<style></style>
