<template>
  <header class="bg-white dark:bg-navy-900 shadow-md sticky top-0 z-50">
    <nav class="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
      <router-link to="/" class="flex items-center gap-2 font-bold text-2xl md:text-xl text-navy dark:text-white">
        <img src="/Bitz logo.png" alt="Bitz ITC Logo" class="h-10 md:h-8 w-auto" />
        <span class="hidden md:inline">bitz</span>
      </router-link>
      <ul class="flex gap-6 md:gap-8 text-base md:text-lg font-medium">
        <li><router-link to="/" class="hover:text-navy dark:hover:text-white">Home</router-link></li>
        <li><router-link to="/vision" class="hover:text-navy dark:hover:text-white">Our Vision</router-link></li>
        <li><router-link to="/services" class="hover:text-navy dark:hover:text-white">Services</router-link></li>
        <li><router-link to="/projects" class="hover:text-navy dark:hover:text-white">Projects</router-link></li>
        <li><router-link to="/team" class="hover:text-navy dark:hover:text-white">Our Team</router-link></li>
        <li><router-link to="/contact" class="hover:text-navy dark:hover:text-white">Contact</router-link></li>
      </ul>
      <!-- Theme toggle placeholder -->
      <button class="ml-4 p-2 rounded-full bg-gray-100 dark:bg-navy-800 text-navy dark:text-white shadow transition hover:bg-gray-200 dark:hover:bg-navy-700">
        <span class="material-icons">light_mode</span>
      </button>
    </nav>
  </header>
</template>

<script setup>
// No logic needed for static header
</script> 