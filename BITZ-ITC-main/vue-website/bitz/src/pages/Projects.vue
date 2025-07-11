<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
            Our Projects
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Explore Our Projects</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Discover the impact of our work through our featured projects.
          </p>
        </div>
        <div class="relative">
          <div class="bg-blue-600 rounded-lg p-8 h-64 flex items-center justify-center">
            <div class="text-6xl">📊</div>
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

    <!-- Projects Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- OPENCHIS Project -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-900 p-4">
              <div class="w-full h-full bg-gray-800 rounded flex items-center justify-center">
                <span class="text-gray-400">OPENCHIS Dashboard</span>
              </div>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-2">
                Child Protection
              </div>
              <h3 class="text-xl font-semibold mb-2">OPENCHIS - A Child Helpline System</h3>
              <p class="text-gray-600 mb-4">
                OPENCHIS is a comprehensive child helpline system that provides a safe and confidential environment
                for children.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>

          <!-- Legal Case Management -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-2">
                Legal
              </div>
              <h3 class="text-xl font-semibold mb-2">Case Management - Legal</h3>
              <p class="text-gray-600 mb-4">
                The Case Management System is designed to streamline the process of managing legal cases by providing
                a centralized platform for case management and case-related data.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>

          <!-- CRM for SACCOS -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium mb-2">
                CRM, Finance
              </div>
              <h3 class="text-xl font-semibold mb-2">CRM for SACCOS</h3>
              <p class="text-gray-600 mb-4">
                CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle
                of Sacco operations.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>

          <!-- Document Management -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium mb-2">
                Document Management
              </div>
              <h3 class="text-xl font-semibold mb-2">Electronic Document Management System (EDMS)</h3>
              <p class="text-gray-600 mb-4">
                The EDMS is designed to enhance document storage, retrieval, and security by providing an efficient
                platform for managing digital documents.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>

          <!-- Contract Management -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <div class="p-6">
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium mb-2">
                Contract Management
              </div>
              <h3 class="text-xl font-semibold mb-2">Contract Management System</h3>
              <p class="text-gray-600 mb-4">
                A comprehensive platform for managing contracts from creation through execution, compliance, renewal,
                and closeout, ensuring compliance and optimizing performance.
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
</script>
