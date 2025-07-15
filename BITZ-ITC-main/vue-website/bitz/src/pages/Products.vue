<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-600 text-white">
      <div class="container-custom">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              Our Products
            </div>
            <h1 class="hero-title">Innovative Software Solutions</h1>
            <p class="hero-description">
              Discover our comprehensive suite of software products designed to transform businesses and improve lives across East Africa. From child protection systems to legal case management, we deliver solutions that make a real difference.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">{{ products.length }}+</div>
                <div class="stat-label">Products</div>
              </div>
              <div class="stat">
                <div class="stat-number">4</div>
                <div class="stat-label">Countries</div>
              </div>
              <div class="stat">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Users Served</div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="visual-card liquid-glass">
              <div class="visual-icon">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Navigation & Details -->
    <section class="products-section">
      <div class="products-container">
        <div class="text-center mb-12">
          <div class="badge badge-primary">What We Offer</div>
          <h2 class="section-title">Our Product Portfolio</h2>
          <p class="section-description">Comprehensive software solutions designed for real-world impact</p>
        </div>

        <div class="products-layout">
          <!-- Product Navigation -->
          <div class="product-navigation">
            <div class="nav-cards">
              <button
                v-for="product in products"
                :key="product.id"
                @click="selectedProduct = product"
                :class="['nav-card', { active: selectedProduct.id === product.id }]"
              >
                <div class="nav-card-header">
                  <h3 class="nav-card-title">{{ product.menu_name }}</h3>
                  <div class="nav-card-badge">{{ getProductCategory(product.menu_name) }}</div>
                </div>
                <p class="nav-card-description">{{ product.menu_description }}</p>
              </button>
            </div>
          </div>

          <!-- Product Details -->
          <div class="product-details">
            <div class="product-card">
              <div class="product-info">
                <div class="product-header">
                  <div class="product-category-badge">
                    {{ getProductCategory(selectedProduct.menu_name) }}
                  </div>
                  <h2 class="product-title">{{ selectedProduct.title }}</h2>
                  <p class="product-description">{{ selectedProduct.description }}</p>
                </div>

                <div class="product-modules">
                  <h3 class="modules-title">Key Modules & Features:</h3>
                  <div class="modules-tags">
                    <span v-for="module in selectedProduct.Modules.split(',')" :key="module" class="module-tag">
                      {{ module.trim() }}
                    </span>
                  </div>
                </div>

                <div class="product-actions">
                  <router-link to="/contact" class="btn btn-primary">
                    Reach Out
                  </router-link>
                </div>
              </div>

              <div class="product-image">
                <img :src="selectedProduct.imageUrl || '/src/assets/placeholders/dashboard.jpg'" :alt="selectedProduct.title" />
                <div class="image-overlay">
                  <button class="overlay-btn" @click="openImageModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Features -->
        <div class="features-section">
          <h3 class="features-title">Detailed Features & Capabilities</h3>
          <div class="features-grid">
            <div v-for="(feature, index) in selectedProduct.features" :key="index" class="feature-card">
              <div class="feature-image">
                <img :src="feature.imageUrl || '/src/assets/placeholders/feature.jpg'" :alt="feature.Feature" />
                <div class="feature-overlay">
                  <div class="feature-module-badge">{{ feature.Module }}</div>
                </div>
              </div>
              <div class="feature-content">
                <h4 class="feature-name">{{ feature.Feature }}</h4>
                <p class="feature-description">{{ feature.Description }}</p>
                <button class="feature-learn-more" @click="openFeatureModal(feature)">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Products -->
    <section class="why-choose-section">
      <div class="why-choose-container">
        <div class="text-center mb-12">
          <div class="badge badge-primary">Why Choose Us</div>
          <h2 class="section-title">Built for Real-World Impact</h2>
          <p class="section-description">Our products are designed with deep understanding of local needs and global standards</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🛡️</div>
            <h3 class="benefit-title">Security First</h3>
            <p class="benefit-description">Enterprise-grade security with data protection compliance for sensitive information handling.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🌍</div>
            <h3 class="benefit-title">Local Expertise</h3>
            <p class="benefit-description">Built by East African developers who understand local challenges and requirements.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">📱</div>
            <h3 class="benefit-title">Mobile Ready</h3>
            <p class="benefit-description">Responsive design ensuring accessibility across all devices and platforms.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔧</div>
            <h3 class="benefit-title">24/7 Support</h3>
            <p class="benefit-description">Round-the-clock technical support and maintenance for uninterrupted operations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your Operations?</h2>
          <p class="cta-description">Let's discuss how our products can address your specific needs and drive your success</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary">
              Get Started Today
            </router-link>
            <router-link to="/our-team" class="btn btn-secondary">
              Meet Our Team
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Detail Modal -->
    <div v-if="selectedFeature" class="modal-overlay" @click="closeFeatureModal">
      <div class="feature-modal" @click.stop>
        <button class="modal-close" @click="closeFeatureModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-badge">{{ selectedFeature.Module }}</div>
            <h3 class="modal-title">{{ selectedFeature.Feature }}</h3>
          </div>
          <div class="modal-body">
            <img :src="selectedFeature.imageUrl || '/src/assets/placeholders/feature.jpg'" :alt="selectedFeature.Feature" class="modal-image" />
            <p class="modal-description">{{ selectedFeature.Description }}</p>
            <div class="modal-actions">
              <router-link to="/contact" class="btn btn-primary" @click="closeFeatureModal">
                Reach Out
              </router-link>
              <button class="btn btn-outline" @click="closeFeatureModal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Demo Request Modal -->
    <div v-if="showDemo" class="modal-overlay" @click="closeDemoModal">
      <div class="demo-modal" @click.stop>
        <button class="modal-close" @click="closeDemoModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Request Product Demo</h3>
            <p class="modal-subtitle">{{ selectedProduct.title }}</p>
          </div>
          <div class="modal-body">
            <p class="demo-description">
              Get a personalized demonstration of {{ selectedProduct.title }} and see how it can transform your operations.
            </p>
            <div class="demo-benefits">
              <div class="demo-benefit">
                <span class="benefit-check">✓</span>
                <span>Live product walkthrough</span>
              </div>
              <div class="demo-benefit">
                <span class="benefit-check">✓</span>
                <span>Customized to your needs</span>
              </div>
              <div class="demo-benefit">
                <span class="benefit-check">✓</span>
                <span>Q&A with our experts</span>
              </div>
            </div>
            <div class="modal-actions">
              <router-link to="/contact" class="btn btn-primary" @click="closeDemoModal">
                Reach Out
              </router-link>
              <button class="btn btn-outline" @click="closeDemoModal">
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productsData } from '@/utils/ProductData.js'

export default {
  name: 'Products',
  data() {
    return {
      products: productsData,
      selectedProduct: productsData[0],
      selectedFeature: null,
      showDemo: false
    }
  },
  methods: {
    getProductCategory(productName) {
      const categories = {
        'OPENCHS': 'Child Protection',
        'Case Management - Legal': 'Legal Solutions',
        'Sacco Case Management': 'Financial Services'
      }
      return categories[productName] || 'Software Solution'
    },
    
    showProductDemo() {
      this.showDemo = true
      document.body.style.overflow = 'hidden'
    },
    
    closeDemoModal() {
      this.showDemo = false
      document.body.style.overflow = 'auto'
    },
    
    openFeatureModal(feature) {
      this.selectedFeature = feature
      document.body.style.overflow = 'hidden'
    },
    
    closeFeatureModal() {
      this.selectedFeature = null
      document.body.style.overflow = 'auto'
    },
    
    openImageModal() {
      // Could implement image gallery modal here
      console.log('Opening image modal for:', this.selectedProduct.title)
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: #000;
  color: white;
  padding: 6rem 0 3rem;
  margin-top: 0;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  background: rgba(255,255,255,0.15);
  border-radius: 30px;
  padding: 3rem;
  height: 16rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1.5px solid rgba(255,255,255,0.25);
}

.visual-icon {
  font-size: 6rem;
}

/* Products Section */
.products-section {
  padding: 4rem 0;
}

.products-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #111827;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.text-center {
  text-align: center;
}

.mb-12 {
  margin-bottom: 3rem;
}

.products-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.product-navigation {
  display: flex;
  flex-direction: column;
}

.nav-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-card:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-card.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.nav-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.nav-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.nav-card-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

.nav-card.active .nav-card-badge {
  background: rgba(255, 255, 255, 0.3);
}

.nav-card:not(.active) .nav-card-badge {
  background: #f3f4f6;
  color: #6b7280;
}

.nav-card-description {
  font-size: 0.875rem;
  opacity: 0.8;
  margin: 0;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.product-info {
  padding: 2rem;
}

.product-header {
  margin-bottom: 2rem;
}

.product-category-badge {
  background: #f0f9ff;
  color: #0369a1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.product-description {
  color: #6b7280;
  line-height: 1.6;
}

.product-modules {
  margin-bottom: 2rem;
}

.modules-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.modules-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.module-tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

.product-actions {
  display: flex;
  gap: 1rem;
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
  color: #1F1E5C;
  border-color: #1F1E5C;
}

.btn-outline:hover {
  background: #1F1E5C;
  color: white;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: white;
  color: #0f172a;
  transform: translateY(-2px);
}

.product-image {
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-image:hover .image-overlay {
  opacity: 1;
}

.product-image:hover img {
  transform: scale(1.05);
}

.overlay-btn {
  background: white;
  color: #111827;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.overlay-btn:hover {
  transform: scale(1.05);
}

/* Features Section */
.features-section {
  margin-top: 4rem;
}

.features-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #111827;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.feature-image {
  height: 10rem;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.feature-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-image img {
  transform: scale(1.1);
}

.feature-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.feature-module-badge {
  background: #1e293b;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

.feature-content {
  padding: 1.5rem;
}

.feature-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
}

.feature-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.feature-learn-more {
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.feature-learn-more:hover {
  color: #2563eb;
  background: #f0f9ff;
}

/* Why Choose Section */
.why-choose-section {
  padding: 4rem 0;
  background: #f9fafb;
}

.why-choose-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.benefit-description {
  color: #6b7280;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: #0f172a;
  color: white;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cta-content {
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.feature-modal,
.demo-modal {
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
  border-radius: 50%;
  background: #f3f4f6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}

.modal-close:hover {
  background: #e5e7eb;
  transform: scale(1.1);
}

.modal-content {
  padding: 2rem;
}

.modal-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-badge {
  background: #f0f9ff;
  color: #0369a1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #111827;
}

.modal-subtitle {
  color: #6b7280;
  font-size: 1rem;
}

.modal-body {
  margin-bottom: 2rem;
}

.modal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
}

.modal-description,
.demo-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.demo-benefits {
  margin-bottom: 2rem;
}

.demo-benefit {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.benefit-check {
  color: #10b981;
  font-weight: bold;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .products-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .product-card {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-stats {
    justify-content: center;
    gap: 1rem;
  }
  
  .features-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .product-actions {
    flex-direction: column;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .nav-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>