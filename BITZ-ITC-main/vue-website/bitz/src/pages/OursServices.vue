<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Comprehensive technology solutions to transform your business
          </p>
        </div>
        <div class="relative">
          <div class="bg-blue-600 rounded-[30px] p-8 h-64 flex items-center justify-center">
            <div class="text-6xl">⚙️</div>
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

    <!-- Services Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-4 py-2 rounded-[30px] bg-slate-900 text-white text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2 class="text-3xl font-bold mb-4">Our Service Portfolio</h2>
          <p class="text-gray-600">End-to-end technology and solutions for your business needs</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-[30px] shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-100 rounded-[30px] flex items-center justify-center mb-6">
              <div class="text-2xl text-blue-600">🏗️</div>
            </div>
            <h3 class="text-xl font-semibold mb-4">Infrastructure Management</h3>
            <p class="text-gray-600 mb-6">
              Complete IT infrastructure setup, maintenance, and optimization for maximum performance and
              reliability.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700 px-4 py-2 rounded-[30px] hover:bg-blue-50 transition-all">
              Learn more →
            </button>
          </div>
          <div class="bg-white rounded-[30px] shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-100 rounded-[30px] flex items-center justify-center mb-6">
              <div class="text-2xl text-blue-600">💻</div>
            </div>
            <h3 class="text-xl font-semibold mb-4">Software Development</h3>
            <p class="text-gray-600 mb-6">
              Custom software solutions tailored to your specific business requirements and objectives.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700 px-4 py-2 rounded-[30px] hover:bg-blue-50 transition-all">
              Learn more →
            </button>
          </div>
          <div class="bg-white rounded-[30px] shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-100 rounded-[30px] flex items-center justify-center mb-6">
              <div class="text-2xl text-blue-600">🔒</div>
            </div>
            <h3 class="text-xl font-semibold mb-4">Cybersecurity</h3>
            <p class="text-gray-600 mb-6">
              Comprehensive security solutions to protect your digital assets and ensure business continuity.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700 px-4 py-2 rounded-[30px] hover:bg-blue-50 transition-all">
              Learn more →
            </button>
          </div>
          <div class="bg-white rounded-[30px] shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-100 rounded-[30px] flex items-center justify-center mb-6">
              <div class="text-2xl text-blue-600">☁️</div>
            </div>
            <h3 class="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p class="text-gray-600 mb-6">
              Scalable cloud infrastructure and migration services for enhanced flexibility and cost efficiency.
            </p>
            <button class="text-blue-600 font-medium hover:text-blue-700 px-4 py-2 rounded-[30px] hover:bg-blue-50 transition-all">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>
