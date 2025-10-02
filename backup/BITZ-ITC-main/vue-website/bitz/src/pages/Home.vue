<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero bg-blue-600 text-white">
      <div class="container-custom">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">{{ content.hero.title }}</h1>
            <p class="hero-description">
              {{ content.hero.description }}
            </p>
          </div>
          <div class="hero-visual">
            <div class="countries-showcase">
              <h3 class="showcase-title">{{ content.hero.countriesShowcase.title }}</h3>
              <div class="countries-carousel liquid-glass">
                <button class="nav-arrow left" @click="previousCountry" aria-label="Previous country">
                  <ChevronLeft :size="20" />
                </button>
                <div class="carousel-content">
                  <transition name="slide" mode="out-in">
                    <div :key="currentCountry" class="country-slide">
                      <div class="country-flag">{{ countries[currentCountry].flag }}</div>
                      <div class="country-info">
                        <h4 class="country-name">{{ countries[currentCountry].name }}</h4>
                        <p class="country-description">{{ countries[currentCountry].description }}</p>
                        <div class="country-stats">
                          <div class="stat">
                            <span class="stat-number">{{ countries[currentCountry].projects }}</span>
                            <span class="stat-label">Projects</span>
                          </div>
                          <div class="stat">
                            <span class="stat-number">{{ countries[currentCountry].years }}</span>
                            <span class="stat-label">Years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <button class="nav-arrow right" @click="nextCountry" aria-label="Next country">
                  <ChevronRight :size="20" />
                </button>
              </div>
              <div class="country-indicators">
                <button 
                  v-for="(country, index) in countries"
                  :key="index"
                  class="indicator"
                  :class="{ active: currentCountry === index }"
                  @click="currentCountry = index"
                  :aria-label="`Go to ${country.name}`">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section (new, below hero) -->
    <section class="section bg-white text-gray-800">
      <div class="container-custom flex flex-col md:flex-row items-center justify-center gap-10">
        <div class="about-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl p-10 max-w-2xl w-full flex-1">
          <h2 class="text-3xl font-bold mb-4 text-blue-700">{{ content.about.title }}</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ content.about.description }}
          </p>
        </div>
        <div class="hidden md:block flex-1">
          <img src="/src/assets/Bitz.png" alt="BITZ Logo" class="w-64 mx-auto drop-shadow-2xl rounded-2xl" />
        </div>
      </div>
    </section>

    <!-- Our Services Section (updated) -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="badge badge-primary">{{ content.services.sectionDescription }}</div>
          <h2 class="section-title">{{ content.services.sectionTitle }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, idx) in services" :key="service.id" class="flip-card">
            <div :class="['flip-card-inner', { 'flipped': flippedCard === idx }]">
              <!-- Front Side -->
              <div class="flip-card-front card p-8 text-left flex flex-col justify-between h-full">
                <div>
                  <component :is="service.iconComponent" :size="36" class="mb-4 text-blue-600" />
                  <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
                  <p class="mb-2">{{ service.description }}</p>
                </div>
                <button class="read-more-btn mt-4" @click="flipCard(idx)">Read More</button>
              </div>
              <!-- Back Side -->
              <div class="flip-card-back card p-8 text-left flex flex-col justify-between h-full bg-blue-600 text-white">
                <div>
                  <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
                  <ul class="list-disc ml-5 mb-4">
                    <li v-for="offering in service.offerings" :key="offering">{{ offering }}</li>
                  </ul>
                </div>
                <button class="read-more-btn mt-4 text-white" @click="flipCard(null)">Back</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Why Choose Us -->
        <div class="mt-16 text-center">
          <h3 class="text-2xl font-bold mb-4">{{ content.services.whyChooseUs.title }}</h3>
          <ul class="list-none flex flex-col md:flex-row justify-center gap-8 text-lg">
            <li v-for="point in content.services.whyChooseUs.points" :key="point">✅ {{ point }}</li>
          </ul>
          <div class="mt-8">
            <a :href="content.services.whyChooseUs.ctaLink" class="btn btn-primary">{{ content.services.whyChooseUs.ctaText }}</a>
          </div>
        </div>
        <!--
        Design & Layout Tips:
        - Add AI/tech-related icons (e.g., brain chip, rocket, gears) for visual appeal.
        - Include a "Success Stories" section with brief client examples.
        - Use action-oriented CTA buttons like "Transform Your Product" or "Ask About AI Integration".
        -->
      </div>
    </section>

    <!-- Featured Product Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center">
          <div class="badge badge-primary">{{ content.featuredProduct.sectionTitle }}</div>
          <h2 class="section-title">{{ content.featuredProduct.heading }}</h2>
          <p class="section-description">{{ content.featuredProduct.description }}</p>
        </div>
        <div class="featured-product">
          <div class="featured-product-image">
            <img 
              src="@/assets/display_photos/dashboard.jpg"
              alt="OPENCHS Dashboard Interface"
              class="product-screenshot"
            />
            <div class="product-overlay">
              <div class="product-stats">
                <div v-for="stat in content.featuredProduct.product.stats" :key="stat.label" class="stat-item">
                  <span class="stat-value">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="featured-product-content">
            <div class="product-badge">
              <Shield :size="20" class="text-blue-600" />
              <span class="badge-text">{{ content.featuredProduct.product.badge.text }}</span>
            </div>
            <h3 class="featured-title">{{ content.featuredProduct.product.title }}</h3>
            <p class="featured-description">
              {{ content.featuredProduct.product.description }}
            </p>
            <div class="key-features">
              <h4 class="features-title">{{ content.featuredProduct.product.keyFeatures.title }}</h4>
              <div class="features-list">
                <div v-for="feature in content.featuredProduct.product.keyFeatures.features" :key="feature.title" class="feature-highlight">
                  <div class="feature-icon">
                    <component :is="feature.icon === 'Phone' ? Phone : feature.icon === 'Lock' ? Lock : BarChart3" :size="24" class="text-blue-600" />
                  </div>
                  <div class="feature-content">
                    <h5>{{ feature.title }}</h5>
                    <p>{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured-actions">
              <router-link :to="content.featuredProduct.product.actions.primary.link" class="btn btn-primary">
                {{ content.featuredProduct.product.actions.primary.text }}
                <ArrowRight :size="16" class="ml-2" />
              </router-link>
              <button class="btn btn-outline" @click="showProductModal(featuredProduct)">
                {{ content.featuredProduct.product.actions.secondary.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Project Section -->
    <section class="section">
      <div class="container-custom">
        <div class="text-center">
          <div class="badge badge-primary">{{ content.featuredProject.sectionTitle }}</div>
          <h2 class="section-title">{{ content.featuredProject.heading }}</h2>
          <p class="section-description">{{ content.featuredProject.description }}</p>
        </div>
        <div class="featured-project">
          <div class="featured-project-content">
            <div class="project-badge">
              <Factory :size="20" class="text-orange-600" />
              <span class="badge-text">{{ content.featuredProject.project.badge.text }}</span>
            </div>
            <h3 class="featured-title">{{ content.featuredProject.project.title }}</h3>
            <p class="featured-description">
              {{ content.featuredProject.project.description }}
            </p>
            <div class="project-highlights">
              <h4 class="highlights-title">{{ content.featuredProject.project.highlights.title }}</h4>
              <div class="highlights-grid">
                <div v-for="metric in content.featuredProject.project.highlights.metrics" :key="metric.label" class="highlight-item">
                  <div class="highlight-number">{{ metric.value }}</div>
                  <div class="highlight-label">{{ metric.label}}</div>
                </div>
              </div>
            </div>
            <div class="project-technologies">
              <h4 class="tech-title">{{ content.featuredProject.project.technologies.title }}</h4>
              <div class="tech-tags">
                <span v-for="tag in content.featuredProject.project.technologies.tags" :key="tag" class="tech-tag">{{ tag }}</span>
              </div>
            </div>
            <div class="featured-actions">
              <router-link :to="content.featuredProject.project.actions.primary.link" class="btn btn-primary">
                {{ content.featuredProject.project.actions.primary.text }}
                <ArrowRight :size="16" class="ml-2" />
              </router-link>
              <button class="btn btn-outline" @click="showProjectModal(featuredProjectData)">
                {{ content.featuredProject.project.actions.secondary.text }}
              </button>
            </div>
          </div>
          <div class="featured-project-image">
            <img 
              src="@/assets/display_photos/team.jpg"
              alt="Manufacturing Dashboard"
              class="project-screenshot"
            />
            <div class="project-overlay">
              <div class="overlay-content">
                <h5>{{ content.featuredProject.project.overlay.title }}</h5>
                <p>{{ content.featuredProject.project.overlay.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section bg-white text-black">
      <div class="container-custom">
        <div class="text-center">
          <h2 class="section-title text-black mb-4">{{ content.contact.title }}</h2>
          <p class="section-description text-gray-600 mb-8">
            {{ content.contact.description }}
          </p>
          <div class="flex justify-center space-x-4">
            <template v-for="action in content.contact.actions" :key="action.text">
              <router-link v-if="action.type === 'primary'" :to="action.link" class="btn btn-primary">
                {{ action.text }}
                <ArrowRight :size="16" class="ml-2" />
              </router-link>
              <router-link v-else :to="action.link" class="btn btn-outline">
                {{ action.text }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Modal -->
    <div v-if="selectedProduct" class="modal-overlay" @click="closeProductModal">
      <div class="product-modal" @click.stop>
        <button class="modal-close" @click="closeProductModal">
          <X :size="24" />
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-icon">
              <Shield :size="32" class="text-blue-600" />
            </div>
            <div class="modal-product-info">
              <h3>{{ selectedProduct.name }}</h3>
              <p>{{ selectedProduct.category }}</p>
              <span class="status-badge active">{{ selectedProduct.status }}</span>
            </div>
          </div>
          <div class="modal-body">
            <p>{{ selectedProduct.description }}</p>
            <div class="modal-features">
              <h4>Key Features</h4>
              <div class="features-grid">
                <span v-for="feature in selectedProduct.features" :key="feature" class="feature-badge">
                  {{ feature }}
                </span>
              </div>
            </div>
            <div class="modal-actions">
              <router-link to="/products" class="btn btn-primary" @click="closeProductModal">
                {{ content.featuredProduct.product.actions.primary.text }}
              </router-link>
              <button class="btn btn-outline" @click="closeProductModal">{{ content.modalContents.genericActions.primary.text }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeProjectModal">
      <div class="project-modal" @click.stop>
        <button class="modal-close" @click="closeProjectModal">
          <X :size="24" />
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-icon">
              <Factory :size="32" class="text-orange-600" />
            </div>
            <div class="modal-project-info">
              <h3>{{ selectedProject.title }}</h3>
              <p>{{ selectedProject.category }}</p>
            </div>
          </div>
          <div class="modal-body">
            <p>{{ selectedProject.description }}</p>
            <div class="project-details">
              <h4>Project Highlights</h4>
              <ul class="project-list">
                <li v-for="highlight in content.featuredProject.modalData.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
            <div class="modal-actions">
              <router-link :to="content.featuredProject.project.actions.primary.link" class="btn btn-primary" @click="closeProjectModal">
                {{ content.featuredProject.project.actions.primary.text }}
              </router-link>
              <button class="btn btn-outline" @click="closeProjectModal">{{ content.modalContents.genericActions.primary.text }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Modal -->
    <div v-if="selectedService" class="modal-overlay" @click="closeServiceModal">
      <div class="service-modal" @click.stop>
        <button class="modal-close" @click="closeServiceModal">
          <X :size="24" />
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-icon">
              <component :is="selectedService.iconComponent" :size="32" class="text-blue-600" />
            </div>
            <div class="modal-service-info">
              <h3>{{ selectedService.title }}</h3>
              <p>{{ content.modalContents.serviceModal.defaultCategory }}</p>
            </div>
          </div>
          <div class="modal-body">
            <p>{{ selectedService.description }}</p>
            <div class="service-details">
              <h4>What We Offer</h4>
              <ul class="service-list">
                <li v-for="offering in selectedService.offerings" :key="offering">{{ offering }}</li>
              </ul>
            </div>
            <div class="modal-actions">
              <router-link :to="content.modalContents.serviceModal.actions.primary.link" class="btn btn-primary" @click="closeServiceModal">
                {{ content.modalContents.serviceModal.actions.primary.text }}
              </router-link>
              <button class="btn btn-outline" @click="closeServiceModal">{{ content.modalContents.serviceModal.actions.secondary.text }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Brain, 
  Database, 
  Globe, 
  Shield, 
  Phone, 
  Lock, 
  BarChart3, 
  Factory,
  X
} from 'lucide-vue-next'
import { homeContent } from '@/data/HomeContent.js'

// Reactive data
const currentCountry = ref(0)
const selectedProduct = ref(null)
const selectedProject = ref(null)
const selectedService = ref(null)
const flippedCard = ref(null) // New state for flip card

// Content from JSON
const content = homeContent
const countries = content.hero.countriesShowcase.countries
const services = content.services.services.map(service => ({
  ...service,
  iconComponent: service.iconComponent === 'Brain' ? Brain : 
                 service.iconComponent === 'Database' ? Database : Globe
}))
const featuredProduct = content.featuredProduct.modalData
const featuredProjectData = content.featuredProject.modalData

// Methods
const nextCountry = () => {
  currentCountry.value = (currentCountry.value + 1) % countries.length
}

const previousCountry = () => {
  currentCountry.value = currentCountry.value === 0 ? countries.length - 1 : currentCountry.value - 1
}

const showProductModal = (product) => {
  selectedProduct.value = product
  document.body.style.overflow = 'hidden'
}

const closeProductModal = () => {
  selectedProduct.value = null
  document.body.style.overflow = 'auto'
}

const showProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const showServiceDetails = (service) => {
  selectedService.value = service
  document.body.style.overflow = 'hidden'
}

const closeServiceModal = () => {
  selectedService.value = null
  document.body.style.overflow = 'auto'
}

const flipCard = (index) => {
  if (flippedCard.value === index) {
    flippedCard.value = null
  } else {
    flippedCard.value = index
  }
}

const scrollToServices = () => {
  const servicesSection = document.querySelector('.services-grid')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Auto-rotate countries every 5 seconds
  setInterval(() => {
    nextCountry()
  }, 5000)
})
</script>

<style scoped>
/* Base Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  padding: 4rem 0;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

/* Hero Section */
.hero {
  background: #000;
  color: white;
  padding: 6rem 0 3rem;
  margin-top: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.7;
}

.countries-showcase {
  width: 100%;
  max-width: 500px;
}

.showcase-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.countries-carousel {
  position: relative;
  background: rgba(1, 7, 60, 0.15);
  border: 1.5px solid rgba(255,255,255,0.25);
  border-radius: 30px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  min-height: 280px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  backdrop-filter: blur(10px);
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-arrow.left {
  left: 1rem;
}

.nav-arrow.right {
  right: 1rem;
}

.carousel-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
}

.country-slide {
  text-align: center;
  width: 100%;
  color: white;
}

.country-flag {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.country-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.country-description {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  color: #e2e8f0;
}

.country-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #60a5fa;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.8;
  color: #cbd5e1;
}

.country-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #60a5fa;
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Common Elements */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-primary {
  background: #e0e7ff;
  color: #1F1E5C;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #010813;
}

.section-description {
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.text-center {
  text-align: center;
}

.card {
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  padding: 2rem;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn-primary {
  background: #1F1E5C;
  color: white;
  border-color: #1F1E5C;
}

.btn-primary:hover {
  background: #1F1E5C;
  border-color: #1F1E5C;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid #e5e7eb;
  color: #1F1E5C;
}

.btn-outline:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  color: #1F1E5C;
}

.btn-white {
  background: white;
  color: #3b82f6;
  border-color: white;
}

.btn-white:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.btn-outline-white {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline-white:hover {
  background: white;
  color: #3b82f6;
}

/* Services Section */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  text-align: center;
  cursor: pointer;
}

.service-icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
}

.service-description {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.read-more-btn {
  background: none;
  border: none;
  color: #1F1E5C;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
}

.read-more-btn:hover {
  color: #1F1E5C;
  background: #f0f9ff;
  opacity: 0.8;
}

/* Featured Product Section */
.featured-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}

.featured-product-image {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.product-screenshot {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.product-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  color: white;
}

.product-stats {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
}

.product-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e0e7ff;
  color: #1F1E5C;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.featured-description {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.key-features {
  margin-bottom: 2rem;
}

.features-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-highlight {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background: #f0f9ff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.feature-content p {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
}

.featured-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Featured Project Section */
.featured-project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}

.project-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fef3c7;
  color: #d97706;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-highlights {
  margin-bottom: 2rem;
}

.highlights-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.highlight-item {
  text-align: center;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
}

.highlight-number {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.highlight-label {
  font-size: 0.875rem;
  color: #64748b;
}

.project-technologies {
  margin-bottom: 2rem;
}

.tech-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #1e293b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.featured-project-image {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-screenshot {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-project-image:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  padding: 2rem;
}

.overlay-content h5 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-content p {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.product-modal,
.project-modal,
.service-modal {
  background: white;
  border-radius: 30px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #e2e8f0;
  transform: scale(1.1);
}

.modal-content {
  padding: 2.5rem;
}

.modal-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-icon {
  width: 4rem;
  height: 4rem;
  background: #f0f9ff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-product-info h3,
.modal-project-info h3,
.modal-service-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.modal-product-info p,
.modal-project-info p,
.modal-service-info p {
  color: #1F1E5C;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.active {
  background: #dcfce7;
  color: #15803d;
}

.modal-body p {
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #64748b;
}

.modal-features h4,
.project-details h4,
.service-details h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.feature-badge {
  background: #e0e7ff;
  color: #1F1E5C;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-list,
.service-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.project-list li,
.service-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
  position: relative;
  padding-left: 1.5rem;
}

.project-list li:before,
.service-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

/* Flip Card Styles for What We Offer */
.flip-card {
  perspective: 1200px;
  min-height: 340px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1);
  transform-style: preserve-3d;
}
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.flip-card-front {
  z-index: 2;
  background: white;
}
.flip-card-back {
  transform: rotateY(180deg);
  background: #1F1E5C;
  color: white;
  z-index: 3;
}

/* About Us Card Enhancements */
.about-card {
  box-shadow: 0 8px 32px rgba(59,130,246,0.10), 0 1.5px 8px rgba(59,130,246,0.08);
  border: 1.5px solid #dbeafe;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content,
  .featured-product,
  .featured-project {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-project .featured-project-content {
    order: 1;
  }

  .featured-project .featured-project-image {
    order: 2;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .featured-actions {
    flex-direction: column;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .featured-title {
    font-size: 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .countries-carousel {
    min-height: 250px;
    padding: 1.5rem;
  }

  .carousel-content {
    padding: 0 2rem;
  }

  .country-stats {
    gap: 1rem;
  }
}
</style>
