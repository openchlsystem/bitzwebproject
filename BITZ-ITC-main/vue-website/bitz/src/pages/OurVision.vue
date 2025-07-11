<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero
      title="Our Vision"
      subtitle="Empowering businesses through innovative technology solutions and digital transformation"
      badge="Our Vision"
      hero-icon="Lightbulb"
      :show-actions="false"
    />

    <!-- Mission Statement -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
            Our Mission
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Businesses Through Technology
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering innovative solutions that drive growth and efficiency
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Our Goals -->
          <div class="text-center p-8 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Goals</h3>
            <p class="text-gray-600">
              To be the leading technology partner for businesses seeking digital transformation
            </p>
          </div>

          <!-- Our Values -->
          <div class="text-center p-8 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p class="text-gray-600">
              Innovation, integrity, and excellence in everything we do
            </p>
          </div>

          <!-- Our Impact -->
          <div class="text-center p-8 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
            <p class="text-gray-600">
              Creating lasting positive change in the businesses we serve
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p class="text-gray-600 mb-8">
              Our methodology combines technical expertise with a deep understanding of business needs
            </p>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Understanding</h4>
                  <p class="text-gray-600 text-sm">Deep dive into your business needs and challenges</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Strategy</h4>
                  <p class="text-gray-600 text-sm">Develop tailored solutions to address your specific needs</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Implementation</h4>
                  <p class="text-gray-600 text-sm">Execute solutions with precision and attention to detail</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Support</h4>
                  <p class="text-gray-600 text-sm">Provide ongoing support and optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8">
            <div class="text-center text-white">
              <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p class="mb-6 opacity-90">Let's discuss how we can help you achieve your goals</p>
              <Button variant="secondary" size="lg" @click="$router.push('/contact')">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Target, Users, Globe } from 'lucide-vue-next'
import Hero from '@/components/sections/Hero.vue'
import Button from '@/components/common/Button.vue'
</script>