<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Let's discuss how we can help transform your business
          </p>
        </div>
        <div class="relative">
          <div class="bg-blue-600 rounded-lg p-8 h-64 flex items-center justify-center">
            <MessageSquare :size="96" class="text-white" />
          </div>
          <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300">
            <ChevronLeft :size="24" />
          </button>
          <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300">
            <ChevronRight :size="24" />
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 class="text-3xl font-bold mb-4">Let's Start a Conversation</h2>
          <p class="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

          <div class="bg-white rounded-xl shadow-sm p-6">
            <form class="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Reason for connecting</label>
                <div class="space-y-3">
                  <div class="flex items-center space-x-2">
                    <input type="checkbox" id="enquiry" class="rounded" />
                    <label for="enquiry" class="text-sm">Enquiry</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input type="checkbox" id="services" class="rounded" />
                    <label for="services" class="text-sm">Services Seeking</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input type="checkbox" id="partnership" class="rounded" />
                    <label for="partnership" class="text-sm">Partnership</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input type="checkbox" id="consultancy" class="rounded" />
                    <label for="consultancy" class="text-sm">Consultancy</label>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

          <div class="space-y-6 mb-8">
            <div class="flex items-start space-x-4">
              <MapPin :size="20" class="text-blue-600 mt-1" />
              <div>
                <h4 class="font-semibold mb-1">Address</h4>
                <p class="text-gray-600">
                  Prime Cantors, Mombasa Road, Kenya, next to Nice and Lovely (Dongokundu Building)
                </p>
                <div class="flex items-center space-x-4 mt-2">
                  <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    📍 Google Maps
                  </button>
                  <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    🗺️ Waze
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <Phone :size="20" class="text-blue-600 mt-1" />
              <div>
                <h4 class="font-semibold mb-1">Phone</h4>
                <p class="text-gray-600">0700552788</p>
                <div class="flex items-center space-x-4 mt-2">
                  <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    📧 Email Us
                  </button>
                  <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    📞 Call Us
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <Mail :size="20" class="text-blue-600 mt-1" />
              <div>
                <h4 class="font-semibold mb-1">Email</h4>
                <p class="text-gray-600">newtonkyan2428@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-xl font-semibold mb-4">Business Hours</h4>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-blue-600">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
          Support
        </div>
        <h2 class="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
        <p class="text-gray-600 mb-8">Our support team is available to help you with any questions or concerns</p>

        <div class="flex justify-center space-x-4">
          <button class="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800">
            📞 Call Support
          </button>
          <button class="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50">
            💬 Live Chat
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight, MessageSquare, MapPin, Phone, Mail } from 'lucide-vue-next'
</script>
