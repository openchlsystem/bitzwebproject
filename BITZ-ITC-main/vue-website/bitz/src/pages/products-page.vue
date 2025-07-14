<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Our Products</h1>
          <p class="text-lg text-gray-300 leading-relaxed">
            Innovative software solutions designed to transform your business operations
          </p>
        </div>
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-[30px] p-8 h-64 flex items-center justify-center">
            <div class="text-6xl">🚀</div>
          </div>
          <button 
            @click="previousHeroSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 w-10 h-10 rounded-[30px] bg-white/20 flex items-center justify-center transition-all hover:bg-white/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          <button 
            @click="nextHeroSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 w-10 h-10 rounded-[30px] bg-white/20 flex items-center justify-center transition-all hover:bg-white/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-4 py-2 rounded-[30px] bg-slate-900 text-white text-sm font-medium mb-4">
            What We Build
          </div>
          <h2 class="text-3xl font-bold mb-4">Our Product Portfolio</h2>
          <p class="text-gray-600">Cutting-edge software solutions tailored for your business success</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="product in productsData" 
            :key="product.id"
            @click="openProductModal(product)"
            class="bg-white rounded-[30px] shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer group border border-gray-100"
          >
            <div class="relative overflow-hidden rounded-[20px] mb-6">
              <img 
                :src="product.imageUrl" 
                :alt="product.menu_name"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[15px] flex items-center justify-center mr-4">
                <div class="text-white text-xl">💼</div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {{ product.menu_name }}
                </h3>
                <p class="text-sm text-gray-500">Software Solution</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6 line-clamp-3">
              {{ product.menu_description }}
            </p>
            
            <div class="flex items-center justify-between">
              <button class="text-blue-600 font-semibold hover:text-blue-700 px-4 py-2 rounded-[20px] hover:bg-blue-50 transition-all flex items-center">
                Learn more 
                <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Detail Modal -->
    <div 
      v-if="selectedProduct" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeProductModal"
    >
      <div 
        class="bg-white rounded-[30px] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="sticky top-0 bg-white rounded-t-[30px] border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">{{ selectedProduct.title }}</h2>
            <p class="text-gray-600">{{ selectedProduct.menu_description }}</p>
          </div>
          <button 
            @click="closeProductModal"
            class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- Product Image -->
          <div class="mb-8">
            <img 
              :src="selectedProduct.imageUrl" 
              :alt="selectedProduct.title"
              class="w-full h-64 object-cover rounded-[20px]"
            />
          </div>

          <!-- Product Description -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">About This Product</h3>
            <p class="text-gray-700 leading-relaxed">{{ selectedProduct.description }}</p>
          </div>

          <!-- Modules -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">Key Modules</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div 
                v-for="module in selectedProduct.Modules.split(',')" 
                :key="module"
                class="bg-blue-50 rounded-[15px] p-3 flex items-center"
              >
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-gray-800 font-medium">{{ module.trim() }}</span>
              </div>
            </div>
          </div>

          <!-- Features -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-6">Product Features</h3>
            <div class="space-y-6">
              <div 
                v-for="feature in selectedProduct.features" 
                :key="feature.Feature"
                class="bg-gray-50 rounded-[20px] p-6 hover:bg-gray-100 transition-colors"
              >
                <div class="flex items-start space-x-4">
                  <img 
                    :src="feature.imageUrl" 
                    :alt="feature.Feature"
                    class="w-16 h-16 object-cover rounded-[12px] flex-shrink-0"
                  />
                  <div class="flex-1">
                    <div class="flex items-center mb-2">
                      <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-3">
                        {{ feature.Module }}
                      </span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.Feature }}</h4>
                    <p class="text-gray-600">{{ feature.Description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Product data
const productsData = [
  {
    id: 1,
    menu_name: "OPENCHS",
    menu_description: "Comprehensive Child Helpline System",
    title: "OPENCHS - A Child Helpline System",
    description: "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children. It offers a range of services:",
    Modules: "24/7 Availability,Toll-Free Hotline,Multilingual Support, Anonymity and Confidentiality, Immediate Response, Analytics and Reporting, Crisis Intervention, Counselling and Emotional Support, Legal Guidance",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: [
      {
        Module: "Call Management",
        Feature: "Inbound and Outbound Call Handling",
        Description: "Ability to manage both incoming and outgoing calls efficiently.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Case Management",
        Feature: "Case Creation and Tracking",
        Description: "User-friendly interface for creating and managing cases, including detailed case information.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Quality Assurance",
        Feature: "Call and Case Evaluation",
        Description: "Tools for supervisors to evaluate the quality of calls and cases handled by agents.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Reporting and Analytics",
        Feature: "Customizable Reports",
        Description: "Create custom reports tailored to specific metrics and KPIs.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Dashboards",
        Feature: "Real-Time Dashboards",
        Description: "Real-time visual dashboards that provide a snapshot of call and case metrics.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "3rd Party Integrations",
        Feature: "CRM Integration",
        Description: "Integration with Customer Relationship Management (CRM) software to access customer data and history.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: 2,
    menu_name: "Case Management - Legal",
    menu_description: "Efficient Legal Case Workflow Management",
    title: "Case Management - Legal",
    description: "Case Management - Legal is a comprehensive legal case management solution that simplifies and automates the entire lifecycle of legal cases.",
    Modules: "Client and Case Information Management, Document Management, Calendar and Deadline Tracking, Workflow Automation, Time and Expense Tracking, Legal Research and Knowledge Management, Analytics and Reporting",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: [
      {
        Module: "Legal Case Management",
        Feature: "Authentication & Authorization",
        Description: "Users are required to log in to the system using their unique credentials. The system has robust authentication and authorization features to ensure that only authorized users have access to the system and that they can only perform actions that they are authorized to perform.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Legal Case Management",
        Feature: "Case Management & Profiling",
        Description: "The system allows users to create, manage, and view cases. Each case has a unique case number and is associated with a set of case-related data, such as the parties involved, the case status, and the court in which the case is being heard. The system also allows for the creation of case profiles that contain detailed information about the case and its history.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Legal Case Management",
        Feature: "Case Parties Profiling",
        Description: "The system allows for the creation of profiles for advocates and magistrates involved in the cases. These profiles contain information such as their contact details, qualifications, and case history.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Legal Case Management",
        Feature: "Court Profile",
        Description: "The system allows for the creation of profiles for courts involved in the cases. These profiles contain information such as the court's location, jurisdiction, and case history.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Legal Case Management",
        Feature: "Management Tracking of Files Movement",
        Description: "The system allows users to track the movement of case files within the court system. This feature provides real-time updates on the location of the case files and the status of the case.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Legal Case Management",
        Feature: "Administration of Legal Fees",
        Description: "The system allows for the administration of legal fees for cases. This feature facilitates the calculation of legal fees for each case and provides the ability to generate invoices for the fees.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Legal Case Management",
        Feature: "Reports",
        Description: "The system provides a set of predefined reports that can be generated based on user-specified criteria. The reports provide detailed information about cases, such as the status of cases, the number of cases pending, and the number of cases that have been closed. Additionally, the system allows users to create custom reports as well.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: 3,
    menu_name: "Sacco Case Management",
    menu_description: "Optimized Sacco Operations Management",
    title: "CRM for SACCOS",
    description: "CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations.",
    Modules: "Exceptional Membership Management, Multi-Channel Communication, Seamless Integration, Exceptional Member Engagement, 24/7 Accessibility, Training and Support",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: [
      {
        Module: "Sacco Case Management",
        Feature: "24/7 Availability",
        Description: "Ensure that members can reach the call center at any time, including outside regular business hours, to address urgent issues or inquiries.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Sacco Case Management",
        Feature: "Multichannel Access",
        Description: "This feature allows members to reach the call center through multiple channels, including voice, text, and chat.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
      {
        Module: "Sacco Case Management",
        Feature: "Seamless Integration",
        Description: "This feature allows the call center to seamlessly integrate with existing systems and workflows.",
        imageUrl: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

// Reactive data
const selectedProduct = ref(null)

// Methods
const openProductModal = (product) => {
  selectedProduct.value = product
  document.body.style.overflow = 'hidden'
}

const closeProductModal = () => {
  selectedProduct.value = null
  document.body.style.overflow = 'auto'
}

const previousHeroSlide = () => {
  // Add hero slide functionality if needed
  console.log('Previous slide')
}

const nextHeroSlide = () => {
  // Add hero slide functionality if needed
  console.log('Next slide')
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
