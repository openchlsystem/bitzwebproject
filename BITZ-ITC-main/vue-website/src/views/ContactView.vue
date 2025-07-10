<template>
  <div class="flex flex-col min-h-[100dvh]">
    <main class="flex-1">
      <!-- Contact Hero Section -->
      <section class="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Get in Touch
              </h1>
              <p class="text-xl md:text-2xl text-gray-300">
                Let's discuss how we can help transform your business
              </p>
            </div>
            <div class="flex justify-center">
              <!-- Carousel -->
              <div class="w-full max-w-[500px]">
                <div v-if="carouselIndex === 0" class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
                  <MessageSquare :size="96" class="text-white/80" />
                </div>
                <div v-else-if="carouselIndex === 1" class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
                  <Mail :size="96" class="text-white/80" />
                </div>
                <div v-else class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
                  <Phone :size="96" class="text-white/80" />
                </div>
                <div class="flex justify-between mt-4">
                  <button @click="prevCarousel" class="bg-white/20 hover:bg-white/30 text-white border-none rounded-full px-4 py-2">&#8592;</button>
                  <button @click="nextCarousel" class="bg-white/20 hover:bg-white/30 text-white border-none rounded-full px-4 py-2">&#8594;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form & Info Section -->
      <section class="w-full py-12 md:py-24 bg-white dark:bg-navy-900">
        <div class="container px-4 md:px-6">
          <div class="grid gap-8 lg:grid-cols-2">
            <!-- Contact Form -->
            <div class="space-y-8">
              <div class="space-y-4">
                <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Contact Us</span>
                <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">
                  Let's Start a Conversation
                </h2>
                <p class="text-lg text-gray-500 dark:text-gray-400">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>
              <form ref="form" @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="space-y-2">
                    <label for="firstName" class="text-sm font-medium">First Name</label>
                    <input id="firstName" name="firstName" type="text" v-model="formData.firstName" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy" placeholder="John" />
                  </div>
                  <div class="space-y-2">
                    <label for="lastName" class="text-sm font-medium">Last Name</label>
                    <input id="lastName" name="lastName" type="text" v-model="formData.lastName" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy" placeholder="Doe" />
                  </div>
                </div>
                <div class="space-y-2">
                  <label for="email" class="text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" v-model="formData.email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy" placeholder="john@example.com" />
                </div>
                <div class="space-y-2">
                  <label for="company" class="text-sm font-medium">Company</label>
                  <input id="company" name="company" type="text" v-model="formData.company" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy" placeholder="Your Company" />
                </div>
                <!-- Reason for Connecting Checkboxes -->
                <div class="space-y-2">
                  <label class="text-base font-medium">Reason for connecting</label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div class="flex items-center">
                      <input id="reason-enquiry" name="reason" type="checkbox" value="Enquiry" :checked="formData.reason.includes('Enquiry')" @change="handleCheckboxChange($event, 'Enquiry')" class="mr-2" />
                      <label for="reason-enquiry" class="text-base font-medium">Enquiry</label>
                    </div>
                    <div class="flex items-center">
                      <input id="reason-partnership" name="reason" type="checkbox" value="Partnership" :checked="formData.reason.includes('Partnership')" @change="handleCheckboxChange($event, 'Partnership')" class="mr-2" />
                      <label for="reason-partnership" class="text-base font-medium">Partnership</label>
                    </div>
                    <div class="flex items-center">
                      <input id="reason-services-seeking" name="reason" type="checkbox" value="Services Seeking" :checked="formData.reason.includes('Services Seeking')" @change="handleCheckboxChange($event, 'Services Seeking')" class="mr-2" />
                      <label for="reason-services-seeking" class="text-base font-medium">Services Seeking</label>
                    </div>
                    <div class="flex items-center">
                      <input id="reason-consultancy" name="reason" type="checkbox" value="Consultancy" :checked="formData.reason.includes('Consultancy')" @change="handleCheckboxChange($event, 'Consultancy')" class="mr-2" />
                      <label for="reason-consultancy" class="text-base font-medium">Consultancy</label>
                    </div>
                  </div>
                </div>
                <div class="space-y-2">
                  <label for="message" class="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" v-model="formData.message" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy min-h-[150px]" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" :disabled="isSubmitting" class="w-full bg-navy hover:bg-navy/90 text-white rounded-lg text-base py-6 flex items-center justify-center font-semibold">
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  <ArrowRight :size="20" class="ml-2" />
                </button>
              </form>
            </div>
            <!-- Contact Info -->
            <div class="space-y-8">
              <div class="border-0 shadow-lg rounded-3xl">
                <div class="p-8">
                  <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
                  <div class="space-y-6">
                    <div class="flex items-start gap-4">
                      <div class="p-2 rounded-full bg-navy/10">
                        <MapPin :size="24" class="text-navy" />
                      </div>
                      <div>
                        <h4 class="font-medium">Address</h4>
                        <p class="text-base text-gray-500 dark:text-gray-400">{{ address }}</p>
                        <div class="flex gap-2 mt-2">
                          <a :href="googleMapsUrl" target="_blank" class="inline-flex items-center px-3 py-1 bg-navy text-white rounded-full text-sm hover:bg-navy/90">
                            Google Maps <Globe :size="16" class="ml-1" />
                          </a>
                          <a :href="wazeUrl" target="_blank" class="inline-flex items-center px-3 py-1 bg-navy text-white rounded-full text-sm hover:bg-navy/90">
                            Waze <ChevronRight :size="16" class="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="p-2 rounded-full bg-navy/10">
                        <Phone :size="24" class="text-navy" />
                      </div>
                      <div>
                        <h4 class="font-medium">Phone</h4>
                        <p class="text-gray-500 dark:text-gray-400">{{ phoneNumber }}</p>
                        <div class="flex gap-2 mt-2">
                          <a :href="`tel:${phoneNumber}`" class="inline-flex items-center px-3 py-1 bg-navy text-white rounded-full text-sm hover:bg-navy/90">
                            Call <Phone :size="16" class="ml-1" />
                          </a>
                          <a :href="`mailto:${emailAddress}`" class="inline-flex items-center px-3 py-1 bg-navy text-white rounded-full text-sm hover:bg-navy/90">
                            Email <Mail :size="16" class="ml-1" />
                          </a>
                          <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" class="inline-flex items-center px-3 py-1 bg-navy text-white rounded-full text-sm hover:bg-navy/90">
                            WhatsApp <MessageSquare :size="16" class="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="p-2 rounded-full bg-navy/10">
                        <Mail :size="24" class="text-navy" />
                      </div>
                      <div>
                        <h4 class="font-medium">Email</h4>
                        <p class="text-gray-500 dark:text-gray-400">{{ emailAddress }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-0 shadow-lg rounded-3xl">
                <div class="p-8">
                  <h3 class="text-2xl font-bold mb-6">Business Hours</h3>
                  <div class="space-y-4">
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Monday - Friday</span>
                      <span class="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Saturday</span>
                      <span class="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 dark:text-gray-400">Sunday</span>
                      <span class="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Support Section -->
      <section class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Support</span>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">
                Need Immediate Assistance?
              </h2>
              <p class="text-lg text-gray-500 dark:text-gray-400 max-w-[900px]">
                Our support team is available to help you with any questions or concerns
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <button class="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 flex items-center justify-center font-semibold" @click="handleCallSupport">
                <Phone :size="20" class="mr-2" />
                Call Support
              </button>
              <button class="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-8 flex items-center justify-center font-semibold" @click="handleWhatsAppChat">
                <MessageSquare :size="20" class="mr-2" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useToast } from 'vue-toastification'
import emailjs from 'emailjs-com'
import { Lightbulb, Target, Users, Globe, ArrowRight, ChevronRight, Mail, MessageSquare, Headphones, MapPin, Phone } from 'lucide-vue-next'

const toast = useToast()

const carouselIndex = ref(0)
const carouselLength = 3
function prevCarousel() {
  carouselIndex.value = (carouselIndex.value - 1 + carouselLength) % carouselLength
}
function nextCarousel() {
  carouselIndex.value = (carouselIndex.value + 1) % carouselLength
}

const isSubmitting = ref(false)
const form = ref(null)
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
  reason: [],
})

const whatsappNumber = '254110952788'
const phoneNumber = '0110952788'
const emailAddress = 'newtonbryan12428@gmail.com'
const address = 'Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)'
const encodedAddress = encodeURIComponent(address)
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`

function handleWhatsAppChat() {
  window.open(`https://wa.me/${whatsappNumber}`, '_blank')
}
function handleCallSupport() {
  window.open(`tel:${phoneNumber}`)
}

function handleCheckboxChange(e, value) {
  if (e.target.checked) {
    if (!formData.reason.includes(value)) formData.reason.push(value)
  } else {
    const idx = formData.reason.indexOf(value)
    if (idx !== -1) formData.reason.splice(idx, 1)
  }
}

async function handleSubmit() {
  isSubmitting.value = true
  // Basic validation
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || formData.reason.length === 0) {
    toast.error('Please fill out all required fields and select a reason.')
    isSubmitting.value = false
    return
  }
  // EmailJS service details - REPLACE WITH YOUR ACTUAL IDs AND PUBLIC KEY
  const serviceId = 'service_fop0jwq'
  const templateId = 'template_ojykqwj'
  const publicKey = 'chyeh0dVMSnjhLRVq'
  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        reason: formData.reason.join(', '),
      },
      publicKey
    )
    toast.success('Message sent successfully!')
    formData.firstName = ''
    formData.lastName = ''
    formData.email = ''
    formData.company = ''
    formData.message = ''
    formData.reason = []
  } catch (error) {
    console.error('Error sending email:', error)
    toast.error('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.bg-navy {
  background-color: #000435;
}
.text-navy {
  color: #000435;
}
.dark-gradient {
  background: linear-gradient(135deg, #000435 0%, #000a6b 100%);
}
</style> 