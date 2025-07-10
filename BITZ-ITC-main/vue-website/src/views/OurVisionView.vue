<template>
  <div class="flex flex-col min-h-[100dvh]">
    <main class="flex-1">
      <!-- Vision Section -->
      <section class="w-full py-12 md:py-24 lg:py-32 bg-navy text-white dark:bg-dark-gradient">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Our Vision
              </h1>
              <p class="text-xl md:text-2xl text-gray-300">
                Empowering businesses through innovative technology solutions and digital transformation.
              </p>
            </div>
            <div class="flex justify-center">
              <!-- Carousel Placeholder -->
              <div class="w-full max-w-[500px]">
                <div v-if="carouselIndex === 0" class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
                  <Lightbulb :size="96" class="text-white/80" />
                </div>
                <div v-else-if="carouselIndex === 1" class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
                  <Target :size="96" class="text-white/80" />
                </div>
                <div v-else class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
                  <Users :size="96" class="text-white/80" />
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

      <!-- Mission Section -->
      <section class="w-full py-12 md:py-24 bg-white dark:bg-navy-900 animate-fade-in">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Our Mission</span>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Transforming Businesses Through Technology
              </h2>
              <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                We are committed to delivering innovative solutions that drive growth and efficiency
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div class="p-8 flex flex-col items-center text-center space-y-4">
                <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                  <Target :size="40" class="text-navy dark:text-white" />
                </div>
                <h3 class="text-2xl font-bold">Our Goals</h3>
                <p class="text-lg text-gray-500 dark:text-gray-400">
                  To be the leading technology partner for businesses seeking digital transformation
                </p>
              </div>
            </div>
            <div class="border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div class="p-8 flex flex-col items-center text-center space-y-4">
                <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                  <Users :size="40" class="text-navy dark:text-white" />
                </div>
                <h3 class="text-2xl font-bold">Our Values</h3>
                <p class="text-lg text-gray-500 dark:text-gray-400">
                  Innovation, integrity, and excellence in everything we do
                </p>
              </div>
            </div>
            <div class="border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div class="p-8 flex flex-col items-center text-center space-y-4">
                <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                  <Globe :size="40" class="text-navy dark:text-white" />
                </div>
                <h3 class="text-2xl font-bold">Our Impact</h3>
                <p class="text-lg text-gray-500 dark:text-gray-400">
                  Creating lasting positive change in the businesses we serve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Approach Section -->
      <section class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950 dark:bg-dark-gradient animate-fade-in">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-4">
              <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Our Approach</span>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">
                How We Work
              </h2>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Our methodology combines technical expertise with a deep understanding of business needs
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="p-2 rounded-full bg-navy/10">
                    <span class="text-navy font-bold">1</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Understanding</h3>
                    <p class="text-gray-500 dark:text-gray-400">Deep dive into your business needs and challenges</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="p-2 rounded-full bg-navy/10">
                    <span class="text-navy font-bold">2</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Strategy</h3>
                    <p class="text-gray-500 dark:text-gray-400">Develop tailored solutions to address your specific needs</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="p-2 rounded-full bg-navy/10">
                    <span class="text-navy font-bold">3</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Implementation</h3>
                    <p class="text-gray-500 dark:text-gray-400">Execute solutions with precision and attention to detail</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="p-2 rounded-full bg-navy/10">
                    <span class="text-navy font-bold">4</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg">Support</h3>
                    <p class="text-gray-500 dark:text-gray-400">Provide ongoing support and optimization</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative">
              <div class="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center space-y-4 p-8">
                    <h3 class="text-2xl font-bold">Ready to Transform Your Business?</h3>
                    <p class="text-lg text-gray-300">Let's discuss how we can help you achieve your goals</p>
                    <button class="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-8 flex items-center justify-center font-semibold">
                      Get Started
                      <ArrowRight :size="20" class="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Lightbulb, Target, Users, Globe, ArrowRight } from 'lucide-vue-next'

const carouselIndex = ref(0)
const carouselLength = 3

function prevCarousel() {
  carouselIndex.value = (carouselIndex.value - 1 + carouselLength) % carouselLength
}
function nextCarousel() {
  carouselIndex.value = (carouselIndex.value + 1) % carouselLength
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