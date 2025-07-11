<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero
      title="Get in Touch"
      subtitle="Let's discuss how we can help transform your business"
      badge="Contact Us"
      hero-icon="MessageSquare"
      :show-actions="false"
    />

    <!-- Contact Form Section -->
    <ContactForm />

    <!-- Support Section -->
    <section class="section-padding bg-navy-950 text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            Support
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our support team is available to help you with any questions or concerns
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-6">
          <Button
            variant="primary"
            size="lg"
            icon="Phone"
            @click="callSupport"
          >
            Call Support
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon="MessageCircle"
            @click="startLiveChat"
          >
            Live Chat
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/sections/Hero.vue'
import ContactForm from '@/components/sections/ContactForm.vue'
import Button from '@/components/common/Button.vue'
import { useSiteStore } from '@/stores/siteStore'

const siteStore = useSiteStore()
const siteConfig = siteStore.siteConfig

const callSupport = () => {
  window.open(`tel:${siteConfig.contact.phone}`, '_self')
}

const startLiveChat = () => {
  // Implement live chat functionality
  console.log('Starting live chat...')
}
</script>