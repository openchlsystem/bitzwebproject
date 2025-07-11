<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East
            Africa, with a strong presence in Kenya, Uganda, and Tanzania. We specialize in comprehensive technology
            solutions, software development, IT infrastructure, and digital transformation solutions, delivering
            impactful results for government agencies and international organizations, including UNICEF and the World
            Bank.
          </p>
        </div>
        <div class="relative">
          <div class="bg-blue-600 rounded-lg p-8 h-64 flex items-center justify-center">
            <div class="text-6xl">⚡</div>
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

    <!-- Services Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 class="text-3xl font-bold mb-4">Comprehensive Technology Solutions</h2>
          <p class="text-gray-600">Delivering innovative solutions that drive growth and efficiency</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-8 bg-white rounded-xl shadow-sm">
            <div class="w-12 h-12 mx-auto mb-4 text-blue-600">
              <Brain :size="48" />
            </div>
            <h3 class="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <p class="text-gray-600 mb-4">
              Advanced AI solutions and machine learning models for intelligent automation and insights.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700">
              Learn more →
            </button>
          </div>

          <div class="text-center p-8 bg-white rounded-xl shadow-sm">
            <div class="w-12 h-12 mx-auto mb-4 text-blue-600">
              <Database :size="48" />
            </div>
            <h3 class="text-xl font-semibold mb-4">Full-Stack Development</h3>
            <p class="text-gray-600 mb-4">
              Expert frontend and backend development services for scalable web applications.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700">
              Learn more →
            </button>
          </div>

          <div class="text-center p-8 bg-white rounded-xl shadow-sm">
            <div class="w-12 h-12 mx-auto mb-4 text-blue-600">
              <Globe :size="48" />
            </div>
            <h3 class="text-xl font-semibold mb-4">Digital Solutions</h3>
            <p class="text-gray-600 mb-4">
              Comprehensive digital services including cloud, mobile and web development solutions.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Transformational Support Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 class="text-3xl font-bold">Transformational Support to Technology Solutions</h2>
          <p class="text-gray-600 mt-4">Comprehensive support throughout your digital transformation journey</p>
        </div>

        <div class="flex justify-center space-x-8 mb-8">
          <button class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cloud Solutions</button>
          <button class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Data Analytics</button>
          <button class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">AI & Automation</button>
        </div>
      </div>
    </section>

    <!-- Cloud Infrastructure Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 class="text-3xl font-bold mb-6">Cloud Infrastructure Solutions</h2>
          <p class="text-gray-600 mb-6">
            Our cloud infrastructure solutions provide secure, scalable, and reliable environments for your
            applications and data.
          </p>

          <div class="space-y-4 mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Scalable cloud architecture design</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Migration services to cloud platforms</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>24/7 monitoring and support</span>
            </div>
          </div>

          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
        <div class="bg-blue-600 rounded-lg p-8 h-80 flex items-center justify-center">
          <Database :size="96" class="text-white" />
        </div>
      </div>
    </section>

    <!-- Software Products Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 class="text-3xl font-bold">Explore Our Software Products</h2>
          <p class="text-gray-600 mt-4">Innovative software solutions designed to meet your business needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="text-center p-6 bg-white rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database :size="32" class="text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Product Name {{ i }}</h3>
            <p class="text-gray-600 mb-4">Brief description of the product and its benefits.</p>
            <button class="text-blue-600 font-medium hover:text-blue-700">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 class="text-3xl font-bold">Explore Our Projects</h2>
          <p class="text-gray-600 mt-4">Discover how we've helped businesses achieve their technology goals</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-2">
                Child Protection
              </div>
              <h3 class="text-xl font-semibold mb-2">Transforming Child Protection with OpenCHS</h3>
              <p class="text-gray-600 mb-4">
                Leading project to implement a comprehensive child protection system that enhanced service delivery
                and improved outcomes for vulnerable children.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-2">
                Manufacturing
              </div>
              <h3 class="text-xl font-semibold mb-2">Digital Transformation for Manufacturing Company</h3>
              <p class="text-gray-600 mb-4">
                Comprehensive digital transformation project that improved operational efficiency by 40% and reduced
                operational costs.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            View All Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Client Success Section -->
    <section class="py-16 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
            Client Success
          </div>
          <h2 class="text-3xl font-bold">Discover the impact of our services on client businesses</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-400 mb-2">75%</div>
            <p class="text-gray-300">Average operational efficiency improvement</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <p class="text-gray-300">Client satisfaction rate</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-800 p-6 rounded-lg">
              <div class="flex items-center mb-4">
                <Users :size="32" class="text-blue-400 mr-3" />
                <div>
                  <h4 class="font-semibold">Client Testimonial</h4>
                  <p class="text-sm text-gray-400">UNICEF Kenya</p>
                </div>
              </div>
              <p class="text-sm text-gray-300">
                "BITZ has been instrumental in our digital transformation. Their team's expertise and dedication
                exceeded our expectations."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <ContactForm />
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Brain, Database, Globe, Users } from 'lucide-vue-next'
import ContactForm from '@/components/sections/ContactForm.vue'
</script>
