<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero
      title="About Us"
      :subtitle="siteConfig.description"
      badge="Welcome to BITZ"
      hero-icon="Code"
      :primary-action="{ text: 'Get Started', icon: 'ArrowRight' }"
      :secondary-action="{ text: 'Learn More', icon: 'Info' }"
      @primary-action="scrollToContact"
      @secondary-action="scrollToServices"
    />

    <!-- Services Overview -->
    <section class="section-padding bg-white" id="services">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver innovative solutions that drive growth and efficiency
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- AI & Machine Learning -->
          <div class="text-center p-8 bg-gray-50 rounded-xl card-hover">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
            <p class="text-gray-600 mb-6">Advanced AI solutions and machine learning models for intelligent automation and insights.</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Learn more →
            </a>
          </div>

          <!-- Full-Stack Development -->
          <div class="text-center p-8 bg-gray-50 rounded-xl card-hover">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Full-Stack Development</h3>
            <p class="text-gray-600 mb-6">Expert frontend and backend development services for comprehensive web solutions.</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Learn more →
            </a>
          </div>

          <!-- Digital Solutions -->
          <div class="text-center p-8 bg-gray-50 rounded-xl card-hover">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Digital Solutions</h3>
            <p class="text-gray-600 mb-6">Comprehensive digital services including social media and AI development for enhanced digital presence.</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Transformational Support Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformational Support to Technology Solutions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach ensures successful technology implementation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Cloud Solutions</h3>
            <p class="text-gray-600 text-sm">Scalable cloud architecture design, migration services to cloud platforms, and reliable environments for your applications.</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Analytics</h3>
            <p class="text-gray-600 text-sm">Advanced data analytics and business intelligence solutions for informed decision making.</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">AI & Automation</h3>
            <p class="text-gray-600 text-sm">Intelligent automation solutions powered by artificial intelligence and machine learning.</p>
          </div>
        </div>

        <!-- Cloud Infrastructure Solutions -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Solutions
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Cloud Infrastructure Solutions</h3>
            <p class="text-gray-600 mb-6">
              Our cloud infrastructure solutions provide secure, scalable, and reliable environments for your applications.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-3">
                <CheckCircle :size="20" class="text-green-500 flex-shrink-0" />
                <span class="text-gray-700">Scalable cloud architecture design</span>
              </li>
              <li class="flex items-center space-x-3">
                <CheckCircle :size="20" class="text-green-500 flex-shrink-0" />
                <span class="text-gray-700">Migration services to cloud platforms</span>
              </li>
              <li class="flex items-center space-x-3">
                <CheckCircle :size="20" class="text-green-500 flex-shrink-0" />
                <span class="text-gray-700">Ongoing maintenance and support</span>
              </li>
            </ul>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
          <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8">
            <div class="flex items-center justify-center h-64">
              <Database :size="120" class="text-white opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Software Products -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Software Products
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative software solutions designed to streamline your business operations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="product in softwareProducts" :key="product.id" class="text-center p-8 bg-gray-50 rounded-xl card-hover">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="product.icon" :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ product.name }}</h3>
            <p class="text-gray-600 mb-6">{{ product.description }}</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview -->
    <ProjectsSection
      :projects="featuredProjects"
      :max-display="2"
      @view-all="$router.push('/projects')"
    />

    <!-- Client Testimonials -->
    <section class="section-padding bg-navy-950 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            Client Success
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Discover the impact of our services on client businesses
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">75%</div>
            <p class="text-gray-300">Average operational efficiency improvement</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">100%</div>
            <p class="text-gray-300">Client satisfaction rate</p>
          </div>
        </div>

        <div class="mt-16 bg-white/5 rounded-xl p-8">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <User :size="24" class="text-white" />
              </div>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-2">Client Testimonial</h4>
              <p class="text-gray-300 mb-4">
                "BITZ has been instrumental in transforming our business operations. Their expertise and dedication have exceeded our expectations, and we've seen a significant improvement in our operational efficiency."
              </p>
              <div class="text-sm text-gray-400">
                <span class="font-medium">John Doe</span> - CEO, Tech Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <ContactForm id="contact" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Brain, Code, Globe, Database, CheckCircle, User, Package, Settings, Shield } from 'lucide-vue-next'
import Hero from '@/components/sections/Hero.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactForm from '@/components/sections/ContactForm.vue'
import Button from '@/components/common/Button.vue'
import { useSiteStore } from '@/stores/siteStore'

const siteStore = useSiteStore()
const { siteConfig, projects } = siteStore

const featuredProjects = computed(() => projects.slice(0, 2))

const softwareProducts = [
  {
    id: 1,
    name: 'Product Name 1',
    description: 'Brief description of the product and its benefits',
    icon: Package
  },
  {
    id: 2,
    name: 'Product Name 2',
    description: 'Brief description of the product and its benefits',
    icon: Settings
  },
  {
    id: 3,
    name: 'Product Name 3',
    description: 'Brief description of the product and its benefits',
    icon: Shield
  }
]

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>