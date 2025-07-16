<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-black text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Let's discuss how we can help transform your business
          </p>
        </div>
        <div class="relative">
          <div class="rounded-[30px] p-8 h-64 flex items-center justify-center" style="background:rgba(255,255,255,0.10);border:1.5px solid rgba(255,255,255,0.25);backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);">
            <MessageSquare :size="80" class="text-white" />
          </div>
          <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 w-10 h-10 rounded-[30px] bg-white/20 flex items-center justify-center transition-all hover:bg-white/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 w-10 h-10 rounded-[30px] bg-white/20 flex items-center justify-center transition-all hover:bg-white/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div class="inline-flex items-center px-4 py-2 rounded-[30px] bg-slate-900 text-white text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 class="text-3xl font-bold mb-4">Let's Start a Conversation</h2>
          <p class="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>
          <div class="bg-white rounded-[30px] shadow-lg p-8">
            <form class="space-y-6" @submit.prevent="submitForm">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">First Name</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    placeholder="John"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-[30px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    placeholder="Doe"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-[30px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[30px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Company</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Your Company"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[30px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Reason for connecting</label>
                <div class="space-y-3">
                  <div class="flex items-center space-x-2">
                    <input v-model="form.reasons" type="checkbox" id="enquiry" value="enquiry" class="rounded-[30px]" />
                    <label for="enquiry" class="text-sm">Enquiry</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input v-model="form.reasons" type="checkbox" id="services" value="services" class="rounded-[30px]" />
                    <label for="services" class="text-sm">Services Seeking</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input v-model="form.reasons" type="checkbox" id="partnership" value="partnership" class="rounded-[30px]" />
                    <label for="partnership" class="text-sm">Partnership</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input v-model="form.reasons" type="checkbox" id="consultancy" value="consultancy" class="rounded-[30px]" />
                    <label for="consultancy" class="text-sm">Consultancy</label>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  placeholder="Tell us about your project..."
                  rows="4"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[30px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-slate-900 text-white py-4 px-6 rounded-[30px] font-semibold hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message →' }}
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
          <div class="space-y-6 mb-8">
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-blue-100 rounded-[30px] flex items-center justify-center flex-shrink-0">
                <div class="text-blue-600">📍</div>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Address</h4>
                <p class="text-gray-600 mb-3">
                  Prime Cartons, Dongkung building next to Nice&Lovely along Mombasa Road
                </p>
                <div class="flex items-center space-x-4">
                  <a href="https://www.google.com/maps/place/Prime+Cartons,+Dongkung+building+next+to+Nice+%26+Lovely+along+Mombasa+Road" target="_blank" rel="noopener" class="px-4 py-2 border-2 border-gray-200 rounded-[30px] text-sm hover:bg-gray-50 flex items-center space-x-2 transition-all hover:-translate-y-1">
                    <span>📍</span>
                    <span>Google Maps</span>
                  </a>
                  <a href="https://waze.com/ul?ll=-1.334937,36.894684&navigate=yes" target="_blank" rel="noopener" class="px-4 py-2 border-2 border-gray-200 rounded-[30px] text-sm hover:bg-gray-50 flex items-center space-x-2 transition-all hover:-translate-y-1">
                    <span>🗺️</span>
                    <span>Waze</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Remove phone number section -->
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-blue-100 rounded-[30px] flex items-center justify-center flex-shrink-0">
                <div class="text-blue-600">📧</div>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Email</h4>
                <p class="text-gray-600">info@bitz-itc.com</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-[30px] shadow-lg p-6">
            <h4 class="text-xl font-semibold mb-4">Business Hours</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Monday - Friday</span>
                <span class="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-blue-600 font-medium">Saturday</span>
                <span class="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Sunday</span>
                <span class="text-gray-500">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-[30px] bg-slate-900 text-white text-sm font-medium mb-4">
          Support
        </div>
        <h2 class="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
        <div class="mb-8">
          <div class="bg-blue-100 text-blue-900 rounded-[30px] px-6 py-4 font-semibold text-lg inline-block">
            Email us at <a href="mailto:info@bitz-itc.com" class="underline hover:text-blue-700">info@bitz-itc.com</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MessageSquare } from 'lucide-vue-next'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  reasons: [],
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    reasons: [],
    message: ''
  }
  
  isSubmitting.value = false
  alert('Message sent successfully!')
}
</script>
