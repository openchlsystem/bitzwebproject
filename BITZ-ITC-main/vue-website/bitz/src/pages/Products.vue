<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              Our Products
            </div>
            <h1 class="hero-title">Explore Our Products</h1>
            <p class="hero-description">
              Discover the impact of our work through our innovative software solutions.
            </p>
          </div>
          <div class="hero-visual">
            <div class="visual-card">
              <div class="visual-icon">📊</div>
            </div>
            <button class="nav-button left" aria-label="Previous product">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button class="nav-button right" aria-label="Next product">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
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
          <p class="section-description">Comprehensive software solutions for your business needs</p>
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
                <h3 class="nav-card-title">{{ product.menu_name }}</h3>
                <p class="nav-card-description">{{ product.menu_description }}</p>
              </button>
            </div>
          </div>

          <!-- Product Details -->
          <div class="product-details">
            <div class="product-card">
              <div class="product-info">
                <div class="product-header">
                  <h2 class="product-title">{{ selectedProduct.title }}</h2>
                  <p class="product-description">{{ selectedProduct.description }}</p>
                </div>

                <div class="product-modules">
                  <h3 class="modules-title">Key Modules:</h3>
                  <div class="modules-tags">
                    <span v-for="module in selectedProduct.Modules.split(',')" :key="module" class="module-tag">
                      {{ module.trim() }}
                    </span>
                  </div>
                </div>

                <button class="learn-more-btn">Learn More →</button>
              </div>

              <div class="product-image">
                <img :src="selectedProduct.imageUrl" :alt="selectedProduct.title" />
              </div>
            </div>
          </div>
        </div>

        <!-- Product Features -->
        <div class="features-section">
          <h3 class="features-title">Product Features</h3>
          <div class="features-grid">
            <div v-for="(feature, index) in selectedProduct.features" :key="index" class="feature-card">
              <div class="feature-image">
                <img :src="feature.imageUrl" :alt="feature.Feature" />
              </div>
              <div class="feature-content">
                <div class="feature-module">{{ feature.Module }}</div>
                <h4 class="feature-name">{{ feature.Feature }}</h4>
                <p class="feature-description">{{ feature.Description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions-section">
      <div class="solutions-container">
        <div class="text-center mb-12">
          <div class="badge badge-primary">Our Solutions</div>
          <h2 class="section-title">Comprehensive Solutions</h2>
          <p class="section-description">Detailed solutions that power our products</p>
        </div>

        <div class="solutions-grid">
          <div v-for="solution in solutions" :key="solution.id" class="solution-card">
            <div class="solution-image">
              <img :src="solution.imageUrl" :alt="solution.title" />
            </div>
            <div class="solution-content">
              <h3 class="solution-title">{{ solution.title }}</h3>
              <p class="solution-description">{{ solution.description }}</p>
              <button class="solution-cta">{{ solution.CTAText }} →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your Business?</h2>
          <p class="cta-description">Let's discuss how our products can help you achieve your goals</p>
          <div class="cta-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { productsData } from '@/utils/ProductData'
import { Solutions } from '@/utils/Solutions'

export default {
  name: 'Products',
  data() {
    return {
      products: productsData,
      solutions: Solutions,
      selectedProduct: productsData[0]
    }
  }
}
</script>

<style scoped>
.hero-section {
  background-color: #0f172a;
  color: white;
  padding: 5rem 0;
  margin-top: 4rem;
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
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-card {
  background-color: #2563eb;
  border-radius: 30px;
  padding: 2rem;
  height: 16rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-icon {
  font-size: 6rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.nav-button.left {
  left: 1rem;
}

.nav-button.right {
  right: 1rem;
}

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

.nav-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.nav-card-description {
  font-size: 0.875rem;
  opacity: 0.8;
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
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.learn-more-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.product-image {
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
}

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  height: 8rem;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.feature-content {
  padding: 1.5rem;
}

.feature-module {
  background: #e0e7ff;
  color: #4338ca;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.feature-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.feature-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}

.solutions-section {
  padding: 4rem 0;
  background: #f9fafb;
}

.solutions-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.solution-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.solution-image {
  height: 10rem;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.solution-content {
  padding: 1.5rem;
}

.solution-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.solution-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.solution-cta {
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
}

.solution-cta:hover {
  color: #2563eb;
  background: #f0f9ff;
}

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
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: white;
  color: #0f172a;
  transform: translateY(-2px);
}

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
}

@media (max-width: 768px) {
  .features-grid,
  .solutions-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
