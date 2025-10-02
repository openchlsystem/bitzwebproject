<template>
  <!-- <div class="menu-section">
    <nav class="navbar">
      <div class="logo">
        <a href="/"><img src="@/assets/logo.png" alt="Logo" /></a>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </div>

      <div class="menu" :class="{ active: menubar }">
        <div class="dropdown">
          <router-link to="/">Home</router-link>
        </div>

        <div @mouseover="showDropdown" @mouseout="hideDropdown">
          <div class="dropdown">
            <router-link to="/products">Products</router-link>
            <div class="dropdown-content">
              <ul class="product-menu">
                <li
                  v-for="product in productsData"
                  :key="product.id"
                  @click="this.$router.push(`/products/${product.id}`)"
                >
                  <h4>{{ product.menu_name }}</h4>
                  <span>{{ product.menu_description }}</span>
                  <p>{{ product.title }}</p>
                  <p>{{ product.description }}</p>
                  <p>{{ product.Modules }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <router-link to="/developers">Developers</router-link>
        </div>

        <div class="dropdown">
          <router-link to="/contact">Support</router-link>
        </div>
        <div class="dropdwon">
          <router-link to="/about">company</router-link>
        </div>

        <div class="dropdown">

          <router-link to="/contact">Get in Touch</router-link>
        </div>
      </div>
    </nav>
  </div> -->

  <!--  Old Menu -->
  <div class="menu-section">
    <div class="logo">
      <a href="/"><img src="@/assets/logo1.png" alt="Logo" /></a>
    </div>

    <nav class="navbar">
      <div class="dropdown">
        <router-link to="/">Home</router-link>
      </div>

      <!-- <div class="dropdown">
        <router-link to="/products">Products</router-link>
        <div class="dropdown-content">
          <ul class="product-menu">
            <li
              v-for="product in productsData"
              :key="product.id"
              @click="this.$router.push(`/products/${product.id}`)"
            >
              <h4>{{ product.menu_name }}</h4>
              <span>{{ product.menu_description }}</span>
              <p>{{ product.title }}</p>
              <p>{{ product.description }}</p>
              <p>{{ product.Modules }}</p>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="dropdown">
        <router-link to="/developers">Developers</router-link>
      </div>

      <div class="dropdown">
        <router-link to="/contact">Support</router-link>
      </div>

    </nav>
    <nav>
      <button class="contact-button" @click="$router.push('/contact')">Get in Touch</button>
    </nav>
  </div>

  <div class="mobile-menu-section">
    <div class="menu-top">
      <div >
        <a href="/"><img src="@/assets/logo1.png" alt="Logo" /></a>
      </div>
      <button class="mobile-menu-toggle" @click="toggleMobileMenu">☰</button>
    </div>

    <nav class="mobile-menu" :class="{ active: isMobileMenuOpen }">
      <div class="dropdown">
        <router-link to="/">Home</router-link>
      </div>

      <div class="dropdown">
        <router-link to="/products">Products</router-link>
        <div class="dropdown-content">
          <ul class="product-menu">
            <li
              v-for="product in productsData"
              :key="product.id"
              @click="navigateToProduct(product.id)"
            >npm
              <h4>{{ product.menu_name }}</h4>
              <span>{{ product.menu_description }}</span>
              <p>{{ product.title }}</p>
              <p>{{ product.description }}</p>
              <p>{{ product.Modules }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown">
        <router-link to="/developers">Developers</router-link>
      </div>

      <div class="dropdown">
        <router-link to="/contact">Support</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { SolutionsData } from "@/utils/SolutionsData";
import { productsData } from "@/utils/ProductData";
import { ref } from "vue";

export default {
  data() {
    return {
      isDropdownVisible: false,
      menubar: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    toggleMenu() {
      this.menubar = !this.menubar;
    },
    closeMenu() {
      this.menubar = false;
    },
  },
  setup() {
    const isMobileMenuOpen = ref(false);

    function toggleMobileMenu() {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }

    function navigateToProduct(productId) {
      this.$router.push(`/products/${productId}`);
    }

    return {
      SolutionsData,
      productsData,
      isMobileMenuOpen,
      toggleMobileMenu,
      navigateToProduct,
    };
  },
};
</script>

<style lang="scss" scoped></style>
