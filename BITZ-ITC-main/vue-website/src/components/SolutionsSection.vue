<template>
  <section id="solutions" class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950 animate-fade-in">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">
            Innovative Tech Solutions
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Transformational Support to Technology Solutions
          </h2>
          <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px] mx-auto">
            Explore our cutting-edge solutions designed to transform your business operations
          </p>
        </div>
      </div>
      <div class="mt-12">
        <div class="flex justify-center mb-8">
          <div class="inline-flex rounded-full p-1 bg-gray-100 dark:bg-navy/20">
            <button :class="['rounded-full px-6 py-2 text-base font-semibold', tab === 'cloud' ? 'bg-white text-navy shadow' : '']" @click="tab = 'cloud'">Cloud Solutions</button>
            <button :class="['rounded-full px-6 py-2 text-base font-semibold', tab === 'data' ? 'bg-white text-navy shadow' : '']" @click="tab = 'data'">Data Analytics</button>
            <button :class="['rounded-full px-6 py-2 text-base font-semibold', tab === 'ai' ? 'bg-white text-navy shadow' : '']" @click="tab = 'ai'">AI & Automation</button>
          </div>
        </div>
        <div v-if="tab === 'cloud'" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h3 class="text-2xl md:text-3xl font-bold">Cloud Infrastructure Solutions</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400">
              Our cloud infrastructure solutions provide scalable, secure, and reliable environments for your applications and data.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Scalable cloud architecture design</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Migration services to cloud platforms</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Managed cloud services and support</span>
              </li>
            </ul>
            <button class="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-3 px-8 mt-4 font-semibold">Learn More</button>
          </div>
          <div class="flex justify-center">
            <div class="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
              <span class="material-icons text-white/80 text-6xl">storage</span>
            </div>
          </div>
        </div>
        <div v-if="tab === 'data'" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h3 class="text-2xl md:text-3xl font-bold">Data Analytics Solutions</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400">
              Unlock insights and drive business growth with our advanced data analytics services.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Business intelligence dashboards</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Predictive analytics and reporting</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Data visualization and insights</span>
              </li>
            </ul>
            <button class="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-3 px-8 mt-4 font-semibold">Learn More</button>
          </div>
          <div class="flex justify-center">
            <div class="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
              <span class="material-icons text-white/80 text-6xl">bar_chart</span>
            </div>
          </div>
        </div>
        <div v-if="tab === 'ai'" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h3 class="text-2xl md:text-3xl font-bold">AI & Automation Solutions</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400">
              Automate processes and enhance efficiency with our AI-driven solutions.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Custom AI model development</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Process automation tools</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-3">check_circle</span>
                <span class="text-lg">Intelligent virtual assistants</span>
              </li>
            </ul>
            <button class="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-3 px-8 mt-4 font-semibold">Learn More</button>
          </div>
          <div class="flex justify-center">
            <div class="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-lg flex items-center justify-center">
              <span class="material-icons text-white/80 text-6xl">smart_toy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref('cloud');
</script> 