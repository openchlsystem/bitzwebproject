<template>
  <div class="home" :class="{ 'dark-mode': isDark }">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">BITZ-ITC</h1>
            <p class="hero-description">
              Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa, with a strong presence in Kenya, Uganda, Tanzania, and Lesotho. We specialize in comprehensive technology solutions, software development, IT infrastructure, and digital transformation solutions, delivering impactful results for government agencies and international organizations, including UNICEF and the World Bank.
            </p>
          </div>
                    
          <div class="hero-visual">
            <div class="countries-showcase">
              <h3 class="showcase-title">Our Regional Presence</h3>
              <div class="countries-carousel">
                <button class="nav-arrow left" @click="previousCountry" aria-label="Previous country">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                
                <div class="carousel-content">
                  <transition name="slide" mode="out-in">
                    <div :key="currentCountry" class="country-slide">
                      <div class="flag-container">
                        <div class="flag">
                          {{ countries[currentCountry].flag }}
                        </div>
                      </div>
                      <div class="country-info">
                        <h4 class="country-name">{{ countries[currentCountry].name }}</h4>
                        <p class="country-description">{{ countries[currentCountry].description }}</p>
                      </div>
                    </div>
                  </transition>
                </div>
                
                <button class="nav-arrow right" @click="nextCountry" aria-label="Next country">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
              
              <div class="country-indicators">
                <button 
                  v-for="(country, index) in countries"
                  :key="index"
                  class="indicator"
                  :class="{ active: currentCountry === index }"
                  @click="currentCountry = index"
                  :aria-label="`Go to ${country.name}`"
                >
                  <span class="indicator-flag">{{ country.flag }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        
    <!-- Services Section -->
    <section class="section">
      <div class="container">
        <div class="text-center">
          <div class="badge badge-primary">Our Services</div>
          <h2 class="section-title">Comprehensive Technology Solutions</h2>
          <p class="section-description">Delivering innovative solutions that drive growth and efficiency</p>
        </div>
        <div class="grid grid-cols-3 services-grid">
          <div v-for="service in services" :key="service.id" class="service-card card">
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <button class="read-more-btn" @click="showServiceDetails(service)">Learn more →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Transformational Support Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center">
          <div class="badge badge-primary">Our Approach</div>
          <h2 class="section-title">Transformational Support to Technology Solutions</h2>
          <p class="section-description">Comprehensive support throughout your digital transformation journey</p>
        </div>
        <div class="approach-buttons">
          <button 
            v-for="approach in approaches"
            :key="approach"
            class="btn btn-outline"
            :class="{ active: activeApproach === approach }"
            @click="activeApproach = approach"
          >
            {{ approach }}
          </button>
        </div>
      </div>
    </section>

    <!-- Cloud Infrastructure Section -->
    <section class="section">
      <div class="container">
        <div class="cloud-section">
          <div class="cloud-content">
            <div class="badge badge-primary">Our Approach</div>
            <h2 class="cloud-title">Cloud Infrastructure Solutions</h2>
            <p class="cloud-description">
              Our cloud infrastructure solutions provide secure, scalable, and reliable environments for your
              applications and data.
            </p>
            <div class="cloud-features">
              <div v-for="feature in cloudFeatures" :key="feature" class="feature-item">
                <div class="feature-dot"></div>
                <span>{{ feature }}</span>
              </div>
            </div>
            <button class="btn btn-secondary">Learn More</button>
          </div>
                    
          <div class="cloud-visual">
            <div class="cloud-card">
              <div class="cloud-icon">💾</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Software Products Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center">
          <div class="badge badge-primary">Our Products</div>
          <h2 class="section-title">Explore Our Software Products</h2>
          <p class="section-description">Innovative software solutions designed to meet your business needs</p>
        </div>
        <div class="grid grid-cols-3 products-grid">
          <div v-for="product in products" :key="product.id" class="product-card card">
            <div class="product-icon">
              <div class="icon-container" :style="{ backgroundColor: product.iconBg, color: product.iconColor }">
                {{ product.icon }}
              </div>
            </div>
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-features">
              <span v-for="feature in product.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>
            <button class="read-more-btn" @click="showProductDetails(product)">Learn more →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section">
      <div class="container">
        <div class="text-center">
          <div class="badge badge-primary">Our Work</div>
          <h2 class="section-title">Explore Our Projects</h2>
          <p class="section-description">Discover how we've helped businesses achieve their technology goals</p>
        </div>
        <div class="grid grid-cols-2 projects-grid">
          <div v-for="project in featuredProjects" :key="project.id" class="project-card">
            <div class="project-image" :class="project.imageClass || 'bg-gray-200'">
              <div v-if="project.imageClass === 'bg-gray-900'" class="project-image-inner">
                <span class="project-image-text">{{ project.imageText || 'Project Image' }}</span>
              </div>
              <span v-else class="project-image-text">{{ project.imageText || 'Project Image' }}</span>
            </div>
            <div class="project-content">
              <div class="project-category" :class="getCategoryClass(project.category)">
                {{ project.category }}
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <button class="read-more-btn" @click="handleProjectReadMore(project)">
                Read more →
              </button>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <button class="btn btn-secondary" @click="$emit('navigate', 'Projects')">View All Projects</button>
        </div>
      </div>
    </section>

    <!-- Client Success Section -->
    <section class="section bg-slate-800 text-white">
      <div class="container">
        <div class="text-center">
          <div class="badge bg-blue-600 text-white">Client Success</div>
          <h2 class="section-title text-white">Discover the impact of our services on client businesses</h2>
        </div>
        <div class="grid grid-cols-3 success-grid">
          <div class="success-stat">
            <div class="stat-number">75%</div>
            <p class="stat-description">Average operational efficiency improvement</p>
          </div>
          <div class="success-stat">
            <div class="stat-number">100%</div>
            <p class="stat-description">Client satisfaction rate</p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-icon">👥</div>
              <div>
                <h4 class="testimonial-title">Client Testimonial</h4>
                <p class="testimonial-source">UNICEF Kenya</p>
              </div>
            </div>
            <p class="testimonial-text">
              "BITZ has been instrumental in our digital transformation. Their team's expertise and dedication
              exceeded our expectations."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section">
      <div class="container">
        <div class="contact-section">
          <div class="contact-info">
            <h2 class="contact-title">Contact Us</h2>
            <p class="contact-description">
              Have questions or ready to start your next project? Get in touch with our team.
            </p>
                        
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>Prime Cantors, Mombasa Road, Kenya, next to Nice and Lovely (Dongokundu Building)</p>
                </div>
              </div>
                            
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>0700552788</p>
                </div>
              </div>
                            
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>newtonkyan2428@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
                    
          <div class="contact-form-container card">
            <h3>Send us a message</h3>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <input v-model="form.firstName" type="text" placeholder="First Name" required>
                <input v-model="form.lastName" type="text" placeholder="Last Name" required>
              </div>
              <input v-model="form.email" type="email" placeholder="Email" required>
              <input v-model="form.company" type="text" placeholder="Your Company">
                            
              <div class="checkbox-group">
                <p>Reason for connecting</p>
                <label><input v-model="form.reasons" type="checkbox" value="enquiry"> Enquiry</label>
                <label><input v-model="form.reasons" type="checkbox" value="services"> Services Seeking</label>
                <label><input v-model="form.reasons" type="checkbox" value="partnership"> Partnership</label>
                <label><input v-model="form.reasons" type="checkbox" value="consultancy"> Consultancy</label>
              </div>
                            
              <textarea v-model="form.message" placeholder="Tell us about your project..." rows="4" required></textarea>
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message →' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useDarkMode } from '@/composables/useDarkMode'

export default {
  name: 'Home',
  emits: ['navigate'],
  setup() {
    const { isDark } = useDarkMode()
    return { isDark }
  },
  data() {
    return {
      currentCountry: 0,
      countries: [
        {
          name: 'Kenya',
          flag: '🇰🇪',
          flagClass: 'flag-kenya',
          description: 'Our headquarters and primary operations center since 2007'
        },
        {
          name: 'Uganda',
          flag: '🇺🇬',
          flagClass: 'flag-uganda', 
          description: 'Expanding digital transformation across Uganda\'s growing tech sector'
        },
        {
          name: 'Tanzania',
          flag: '🇹🇿',
          flagClass: 'flag-tanzania',
          description: 'Supporting Tanzania\'s digital infrastructure development'
        },
        {
          name: 'Lesotho',
          flag: '🇱🇸',
          flagClass: 'flag-lesotho',
          description: 'Bringing innovative technology solutions to Lesotho\'s emerging market'
        }
      ],
      autoCountryInterval: null,
      activeApproach: 'Cloud Solutions',
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        reasons: [],
        message: ''
      },
      approaches: ['Cloud Solutions', 'Data Analytics', 'AI & Automation'],
      cloudFeatures: [
        'Scalable cloud architecture design',
        'Migration services to cloud platforms',
        '24/7 monitoring and support'
      ],
      services: [
        {
          id: 1,
          icon: '🧠',
          title: 'AI & Machine Learning',
          description: 'Advanced AI solutions and machine learning models for intelligent automation and insights.'
        },
        {
          id: 2,
          icon: '💾',
          title: 'Full-Stack Development',
          description: 'Expert frontend and backend development services for scalable web applications.'
        },
        {
          id: 3,
          icon: '🌐',
          title: 'Digital Solutions',
          description: 'Comprehensive digital services including cloud, mobile and web development solutions.'
        }
      ],
      products: [
        {
          id: 1,
          name: 'OPENCHIS',
          description: 'A comprehensive child helpline system providing safe and confidential environment for children to report issues and seek help.',
          icon: '🛡️',
          iconBg: '#dbeafe',
          iconColor: '#1d4ed8',
          features: ['Child Protection', 'Case Management', 'Reporting System', '24/7 Support'],
          category: 'Child Protection',
          status: 'Active'
        },
        {
          id: 2,
          name: 'CRM for SACCOS',
          description: 'Complete customer relationship management platform designed specifically for SACCO operations and member management.',
          icon: '🏦',
          iconBg: '#dcfce7',
          iconColor: '#15803d',
          features: ['Member Management', 'Loan Processing', 'Financial Reports', 'Mobile Banking'],
          category: 'Financial Services',
          status: 'Active'
        },
        {
          id: 3,
          name: 'EDMS',
          description: 'Electronic Document Management System for efficient storage, retrieval, and security of digital documents.',
          icon: '📄',
          iconBg: '#fef3c7',
          iconColor: '#d97706',
          features: ['Document Storage', 'Version Control', 'Access Control', 'Search & Retrieval'],
          category: 'Document Management',
          status: 'Active'
        }
      ],
      featuredProjects: [
        {
          id: 1,
          title: 'OPENCHIS - A Child Helpline System',
          category: 'Child Protection',
          description: 'OPENCHIS is a comprehensive child helpline system that provides a safe and confidential environment for children.',
          imageText: 'OPENCHS Dashboard',
          imageClass: 'bg-gray-900'
        },
        {
          id: 2,
          title: 'Digital Transformation for Manufacturing Company',
          category: 'Manufacturing',
          description: 'Comprehensive digital transformation project that improved operational efficiency by 40% and reduced operational costs.',
          imageText: 'Manufacturing Dashboard'
        }
      ]
    }
  },
  methods: {
    nextCountry() {
      this.currentCountry = (this.currentCountry + 1) % this.countries.length
    },
    previousCountry() {
      this.currentCountry = this.currentCountry === 0 ? this.countries.length - 1 : this.currentCountry - 1
    },
    startAutoCountry() {
      this.autoCountryInterval = setInterval(() => {
        this.nextCountry()
      }, 4000)
    },
    stopAutoCountry() {
      if (this.autoCountryInterval) {
        clearInterval(this.autoCountryInterval)
        this.autoCountryInterval = null
      }
    },
    getCategoryClass(category) {
      const categoryClasses = {
        'Child Protection': 'bg-blue-100 text-blue-700',
        'Legal': 'bg-green-100 text-green-700',
        'Manufacturing': 'bg-purple-100 text-purple-700',
        'CRM, Finance': 'bg-orange-100 text-orange-700',
        'Document Management': 'bg-red-100 text-red-700',
        'Contract Management': 'bg-indigo-100 text-indigo-700'
      }
      return categoryClasses[category] || 'bg-gray-100 text-gray-700'
    },
    submitForm() {
      this.isSubmitting = true
      setTimeout(() => {
        console.log('Form submitted:', this.form)
        alert('Message sent successfully!')
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          reasons: [],
          message: ''
        }
        this.isSubmitting = false
      }, 1000)
    },
    showServiceDetails(service) {
      alert(`Learn more about: ${service.title}\n\n${service.description}`)
    },
    showProductDetails(product) {
      alert(`${product.name}\n\n${product.description}\n\nFeatures:\n${product.features.join('\n• ')}`)
    },
    handleProjectReadMore(project) {
      console.log('Read more about project:', project)
    }
  },
  mounted() {
    this.startAutoCountry()
  },
  beforeUnmount() {
    this.stopAutoCountry()
  }
}
</script>

<style scoped>
/* CSS Custom Properties for Theme */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
  --card-bg: #ffffff;
  --input-bg: #ffffff;
}

.dark-mode {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --border-color: #475569;
  --card-bg: #1e293b;
  --input-bg: #334155;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  padding: 4rem 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.bg-gray-50 {
  background-color: var(--bg-secondary) !important;
}

.bg-slate-800 {
  background-color: #1e293b;
}

.hero {
  background: #1e293b;
  color: white;
  padding: 8rem 0 4rem;
  margin-top: 4rem;
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

.hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.visual-card {
  position: relative;
  background: #3b82f6;
  border-radius: 30px;
  padding: 2rem;
  height: 16rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.nav-arrow.left {
  left: 1rem;
}

.nav-arrow.right {
  right: 1rem;
}

.visual-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

.slide-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

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

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.project-card {
  background: var(--card-bg);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.dark-mode .project-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.dark-mode .project-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.project-image {
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-tertiary);
}

.bg-gray-900 {
  background-color: #111827;
  padding: 1rem;
}

.bg-gray-200 {
  background-color: var(--bg-tertiary);
}

.project-image-inner {
  color: #9ca3af;
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image-text {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.bg-gray-900 .project-image-text {
  color: #9ca3af;
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.bg-blue-100 {
  background-color: #dbeafe;
}

.text-blue-700 {
  color: #1d4ed8;
}

.bg-green-100 {
  background-color: #dcfce7;
}

.text-green-700 {
  color: #15803d;
}

.bg-purple-100 {
  background-color: #f3e8ff;
}

.text-purple-700 {
  color: #7c3aed;
}

.bg-orange-100 {
  background-color: #fed7aa;
}

.text-orange-700 {
  color: #c2410c;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.text-red-700 {
  color: #dc2626;
}

.bg-indigo-100 {
  background-color: #e0e7ff;
}

.text-indigo-700 {
  color: #4338ca;
}

.bg-gray-100 {
  background-color: var(--bg-tertiary);
}

.text-gray-700 {
  color: var(--text-secondary);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: var(--text-primary);
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-primary {
  background: #dbeafe;
  color: #1d4ed8;
}

.text-center {
  text-align: center;
}

.text-white {
  color: white;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.card {
  background: var(--card-bg);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.dark-mode .card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.dark-mode .card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #1e293b;
  color: white;
  border-color: #1e293b;
}

.btn-secondary:hover {
  background: #334155;
  border-color: #334155;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-secondary);
}

.btn-outline:hover {
  background: var(--bg-tertiary);
  border-color: var(--text-muted);
}

.btn-outline.active {
  background: #1e293b;
  color: white;
  border-color: #1e293b;
}

.services-grid {
  margin-top: 3rem;
}

.service-card {
  text-align: center;
  padding: 2rem;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.service-description {
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more-btn {
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
}

.read-more-btn:hover {
  color: #2563eb;
  background: #f0f9ff;
}

.approach-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cloud-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.cloud-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
  color: var(--text-primary);
}

.cloud-description {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.cloud-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
}

.feature-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #3b82f6;
  border-radius: 50%;
}

.cloud-visual {
  display: flex;
  justify-content: center;
}

.cloud-card {
  background: #3b82f6;
  border-radius: 30px;
  padding: 3rem;
  height: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cloud-icon {
  font-size: 6rem;
  color: white;
}

.products-grid {
  margin-top: 3rem;
}

.product-card {
  text-align: center;
  padding: 2rem;
}

.product-icon {
  margin-bottom: 1.5rem;
}

.icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.product-description {
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.projects-grid {
  margin-top: 3rem;
}

.mt-8 {
  margin-top: 2rem;
}

.success-grid {
  margin-top: 3rem;
}

.success-stat {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.stat-description {
  color: #cbd5e1;
}

.testimonial-card {
  background: #334155;
  padding: 1.5rem;
  border-radius: 30px;
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.testimonial-icon {
  font-size: 2rem;
  color: #3b82f6;
}

.testimonial-title {
  font-weight: 600;
  color: white;
}

.testimonial-source {
  font-size: 0.875rem;
  color: #94a3b8;
}

.testimonial-text {
  font-size: 0.875rem;
  color: #cbd5e1;
  line-height: 1.5;
}

.contact-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-description {
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.25rem;
  color: #3b82f6;
}

.contact-item h4 {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.contact-item p {
  color: var(--text-muted);
}

.contact-form-container {
  padding: 2rem;
}

.contact-form-container h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--input-bg);
  color: var(--text-primary);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox-group p {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  cursor: pointer;
}

@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .cloud-section,
  .contact-section,
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .approach-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .visual-card {
    height: 12rem;
  }
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
  background: #3b82f6;
  border-radius: 30px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  min-height: 200px;
  display: flex;
  align-items: center;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
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
}

.flag-container {
  margin-bottom: 1.5rem;
}

.flag {
  font-size: 5rem;
  display: inline-block;
  transition: all 0.3s ease;
  animation: flagFloat 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.flag:hover {
  transform: scale(1.1);
}

.country-info {
  color: white;
}

.country-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
}

.country-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  max-width: 300px;
  margin: 0 auto;
}

.country-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.country-indicators .indicator {
  width: auto;
  height: auto;
  padding: 0.5rem;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.country-indicators .indicator:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.country-indicators .indicator.active {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.indicator-flag {
  font-size: 1.5rem;
  display: block;
}

@keyframes flagFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .countries-carousel {
    padding: 1.5rem;
    min-height: 180px;
  }
  
  .carousel-content {
    padding: 0 2rem;
  }
  
  .flag {
    font-size: 4rem;
  }
  
  .country-name {
    font-size: 1.25rem;
  }
  
  .country-description {
    font-size: 0.875rem;
  }
  
  .indicator-flag {
    font-size: 1.25rem;
  }
  
  .nav-arrow {
    width: 1.8rem;
    height: 1.8rem;
  }
  
  .nav-arrow.left {
    left: 0.5rem;
  }
  
  .nav-arrow.right {
    right: 0.5rem;
  }
}
</style>
