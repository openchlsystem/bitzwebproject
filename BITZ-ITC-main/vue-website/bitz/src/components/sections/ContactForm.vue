<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="mb-8">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
              Contact Us
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Let's Start a Conversation
            </h2>
            <p class="text-gray-600">
              Fill out the form and we'll get back to you within 24 hours
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  placeholder="John"
                  :class="inputClasses"
                />
                <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
                  {{ errors.firstName }}
                </p>
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  placeholder="Doe"
                  :class="inputClasses"
                />
                <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                  {{ errors.lastName }}
                </p>
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="john@example.com"
                :class="inputClasses"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                {{ errors.email }}
              </p>
            </div>

            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                placeholder="Your Company"
                :class="inputClasses"
              />
            </div>

            <!-- Reason for connecting -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Reason for connecting
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center">
                  <input
                    v-model="form.reason"
                    type="radio"
                    value="enquiry"
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span class="ml-2 text-sm text-gray-700">Enquiry</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="form.reason"
                    type="radio"
                    value="partnership"
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span class="ml-2 text-sm text-gray-700">Partnership</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="form.reason"
                    type="radio"
                    value="services"
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span class="ml-2 text-sm text-gray-700">Services Seeking</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="form.reason"
                    type="radio"
                    value="consultancy"
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span class="ml-2 text-sm text-gray-700">Consultancy</span>
                </label>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your project..."
                :class="inputClasses"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <Button
              type="submit"
              variant="primary"
              size="lg"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              full-width
              icon="Send"
            >
              {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
            </Button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-center">
              <CheckCircle :size="20" class="text-green-500 mr-2 flex-shrink-0" />
              <p class="text-green-700 font-medium">Message sent successfully!</p>
            </div>
            <p class="text-green-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Info Card -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <MapPin :size="20" class="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-medium text-gray-900">Address</p>
                  <p class="text-gray-600 text-sm">{{ contactInfo.address }}</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <Phone :size="20" class="text-primary-500 flex-shrink-0" />
                <div>
                  <p class="font-medium text-gray-900">Phone</p>
                  <a :href="`tel:${contactInfo.phone}`" class="text-primary-600 hover:text-primary-700 text-sm">
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <Mail :size="20" class="text-primary-500 flex-shrink-0" />
                <div>
                  <p class="font-medium text-gray-900">Email</p>
                  <a :href="'mailto:info@bitz-itc.com'" class="text-primary-600 hover:text-primary-700 text-sm">
                    info@bitz-itc.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Email Banner -->
            <div class="mt-8 text-center">
              <div class="bg-blue-100 text-blue-900 rounded-[30px] px-6 py-4 font-semibold text-lg inline-block">
                Email us at <a href="mailto:info@bitz-itc.com" class="underline hover:text-blue-700">info@bitz-itc.com</a>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-700">Monday - Friday</span>
                <span class="font-medium text-gray-900">{{ contactInfo.businessHours.weekdays }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-700">Saturday</span>
                <span class="font-medium text-gray-900">{{ contactInfo.businessHours.saturday }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-700">Sunday</span>
                <span class="font-medium text-gray-900">{{ contactInfo.businessHours.sunday }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-vue-next'
import Button from '@/components/common/Button.vue'
import { useSiteStore } from '@/stores/siteStore'

const siteStore = useSiteStore()
const { siteConfig } = siteStore

const contactInfo = computed(() => siteConfig.contact)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  reason: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const inputClasses = computed(() => 
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300'
)

const validateForm = () => {
  errors.value = {}
  
  if (!form.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }
  
  if (!form.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }
  
  if (!form.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>