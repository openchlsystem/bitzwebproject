<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Our Vision</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Empowering businesses through innovative technology solutions and digital transformation.
          </p>
        </div>
        <div class="relative">
          <div class="bg-blue-600 rounded-lg p-8 h-64 flex items-center justify-center">
            <Lightbulb :size="96" class="text-white" />
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

    <!-- Mission Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Mission
          </div>
          <h2 class="text-3xl font-bold mb-4">Transforming Businesses Through Technology</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering innovative solutions that drive growth and efficiency
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target :size="32" class="text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">Our Goals</h3>
            <p class="text-gray-600">
              To be the leading technology partner for businesses seeking digital transformation
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users :size="32" class="text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">Our Values</h3>
            <p class="text-gray-600">Innovation, integrity, and excellence in everything we do</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe :size="32" class="text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">Our Impact</h3>
            <p class="text-gray-600">Creating lasting positive change in the businesses we serve</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 class="text-3xl font-bold mb-6">How We Work</h2>
          <p class="text-gray-600 mb-8">
            Our methodology combines technical expertise with a deep understanding of business needs
          </p>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div>
                <h4 class="font-semibold mb-2">Understanding</h4>
                <p class="text-gray-600">Deep dive into your business needs and challenges</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div>
                <h4 class="font-semibold mb-2">Strategy</h4>
                <p class="text-gray-600">Develop tailored solutions to address your specific needs</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div>
                <h4 class="font-semibold mb-2">Implementation</h4>
                <p class="text-gray-600">Execute solutions with precision and attention to detail</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                4
              </div>
              <div>
                <h4 class="font-semibold mb-2">Support</h4>
                <p class="text-gray-600">Provide ongoing support and optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-600 rounded-lg p-8 h-96 flex items-center justify-center">
          <div class="text-center text-white">
            <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p class="mb-6">Let's discuss how we can help you achieve your goals</p>
            <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Lightbulb, Target, Users, Globe } from 'lucide-vue-next'
</script>
